import { auth } from "@/lib/auth/auth";
import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import zod from "zod";
export async function POST(req: NextRequest) {
  try {
    //getting session data is problematic here cause its not session data idk what it is need to figure out that and then figure out how can i get the session data

    // const session = await auth(req, res);
    // // console.log("sessiosns:::", session);
    // const userId = session?.user?.id;
    // console.log(userId);
    const projectSchema = zod.object({
      title: zod.string().max(25),
    });
    const session = await auth();
    if (!session)
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    console.log(session);
    const userId = session.user?.id;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return NextResponse.json(
        { message: "You don't have access to create a project" },
        { status: 403 }
      );
    }
    const body = await req.json();
    const { title } = projectSchema.parse(body);
    const project = await prisma.project.create({
      data: {
        title,
        creator: {
          connect: {
            id: userId,
          },
        },
      },
    });
    if (!project) {
      return NextResponse.json(
        {
          message: "Couldn't create project",
        },
        { status: 422 }
      );
    }
    console.log(project);
    return NextResponse.json({ message: "project created", project });
    // const response = await prisma.user.findFirst({
    //   where: {
    //     id: userId, //was able to cross this because if the data on filter is undefined its still going to give the first thing it finds in the data
    //     //so need to read difference between findFirst and firstUnique and which one should be used in such use case
    //   },
    // });
    // console.log("user found:::", response);
    // const projectData = await prisma.project.create({
    //   data: {
    //     title: "project2",
    //     creator: {
    //       connect: {
    //         id: session?.user?.id,
    //       },
    //     },
    //   },
    // });
    // console.log("projectdata:::", projectData);
    // const { title, priority } = await req.body;
    // console.log(req.body);
    // console.log("title:::", title);
    // console.log("priority:::", priority);
    // if (response) {
    //   const proj = await prisma.project.create({
    //     data: {
    //       title: "sdf",
    //       creator: {
    //         connect: {
    //           id: userId,
    //         },
    //       },
    //     },
    //   });
    //   console.log(proj);
    //   return NextResponse.json({
    //     message: "Project created",
    //   });
    // }
    // return NextResponse.json(null);
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
export async function GET() {
  const session = await auth();
  if (!session)
    return NextResponse.json(
      { message: "user not found/sign in to create projects" },
      { status: 404 }
    );
  console.log(session);
  const userId = session.user?.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return NextResponse.json(
      { message: "You don't have access to create a project" },
      { status: 403 }
    );
  }
  const projects = await prisma.project.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      id: true,
      title: true,
    },
  });
  console.log("project:::", projects);
  if (!projects) return NextResponse.json(null);
  return Response.json({ projects });
}
