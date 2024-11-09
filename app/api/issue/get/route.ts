import prisma from "@/prisma/prisma";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const projectId = searchParams.get("projectId");
  console.log(projectId);
  const issues = await prisma.issue.findMany({
    where: {
      //@ts-ignore
      projectId,
    },
  });
  console.log("issues:::", issues);
  return Response.json({ issues });
};
