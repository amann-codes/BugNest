import prisma from "@/prisma/prisma";
import zod from "zod";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  const FormSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6, {
      message: "password must be at least 6 character",
    }),
  });
  try {
    const body = await req.json();
    const { name, email, password } = body;
    const parsedInput = FormSchema.parse(body);
    const existingUser = await prisma.user.findFirst({
      where: {
        email: parsedInput.email,
      },
    });
    if (existingUser) {
      return Response.json({
        message: "user with this email id already exists",
      });
    }
    const passhash = await bcrypt.hash(parsedInput.password, 10);
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: passhash,
      },
    });
    if (!createUser) {
      console.log(createUser);
      return Response.json({
        message: "error occurred",
      });
    }
    return Response.json({
      message: "user created successfully",
    });
  } catch (e) {
    console.log(e);
  }
}
