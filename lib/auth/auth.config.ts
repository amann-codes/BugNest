import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
const prisma = new PrismaClient();
export const authOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.userId = user.id || token.sub;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;
