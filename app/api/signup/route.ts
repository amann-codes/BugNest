import prisma from "@/prisma/prisma";
import zod from "zod";
import { hash } from "bcryptjs";
export async function POST(req: Request) {
  try {
    const userSchema = zod.object({
      name: zod.string(),
      email: zod.string().email(),
      password: zod.string().min(6),
    });
    const body = await req.json();
    const { name, email, password } = userSchema.parse(body);
    console.log("bodyyyy", body);
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log("existing user data", existingUser);
    if (existingUser) {
      return Response.json({
        user: null,
        message: "user already exists on this email",
      });
    }
    const passhash = await hash(password, 10);
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password: passhash,
      },
    });
    console.log("result::", result);
    return Response.json({
      message: "user created successfully",
      result,
    });
  } catch (e) {
    console.log("errorsss:", e);
    return Response.json({ error: e });
  }
}
export async function GET() {
  const users = await prisma.user.findMany();
  const response = JSON.stringify(users);
  console.log(response);
  return Response.json(response);
}
