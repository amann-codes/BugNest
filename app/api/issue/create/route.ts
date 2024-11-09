// import prisma from "@/prisma/prisma";
// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@/lib/auth/auth";
// import { NextApiRequest } from "next";

// export const POST = async (req: NextRequest, request: NextApiRequest) => {
//   const session = await auth();
//   const userId = session?.user?.id;
//   const body = await req.json();
//   const projectId = request.query;
//   // this is not how you gonna get projectid dummy
//   //need to setup the page to get issues on the screen, so i think need to setup the pages in the app folder needs to change setup get issues a page in the dashboard to get projectId or the request the projectId on that route to so that we can sent that request on this end point as projectId
//   const project = JSON.stringify(projectId);         //    |
//   console.log(project);                              //    |
//   console.log(projectId);                            //    |
//   // const { title, description, priority } = body;  //    |
//   // const createIssue = await prisma.issue.create({ //    |
//   //   data: {                                       //    |
//   //     creator: {                                  //    |
//   //       connect: {                                //    |
//   //         id: userId,                             //    |
//   //       },                                        //    |
//   //     },                                          //    |
//   //     title,                                      //    |
//   //     description,                                //    |
//   //     priority,                                   //    |
//   //     status: "new",                              //    |
//   //     project: {                                  //    |
//   //       connect: {                                //    |
//   //         id:  <<---------------------------------------%
//   //       },
//   //     },
//   //   },
//   // });
//   // console.log("issues:::", createIssue);
//   // return NextResponse.json({ createIssue });
//   return NextResponse.json({ message: "/api/issue/create?status=checking" });
// };

// or just find some else solution

import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { NextApiRequest } from "next";

export const POST = async (req: NextRequest, request: NextApiRequest) => {
  const session = await auth();
  const userId = session?.user?.id;
  const body = await req.json();
  const { title, description, priority, projectId } = body;
  const createIssue = await prisma.issue.create({
    data: {
      creator: {
        connect: {
          id: userId,
        },
      },
      title,
      description,
      priority,
      status: "new",
      project: {
        connect: {
          id: projectId,
        },
      },
    },
  });
  console.log("issues:::", createIssue);
  return NextResponse.json({ createIssue });
  // return NextResponse.json({ message: "/api/issue/create?status=checking" });
};
