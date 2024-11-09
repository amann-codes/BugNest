import { auth } from "@/lib/auth/auth";
import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";
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
