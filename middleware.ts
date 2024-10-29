import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import {
  authPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./lib/routes";
import { authOptions } from "./lib/auth/auth.config";

const { auth } = NextAuth(authOptions);

export default auth(async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret:process.env.NEXTAUTH_SECRET });
    const isLoggedIn = !!token;
    const path = req.nextUrl.pathname;
    const isAuthApiRoute = path.startsWith(authPrefix);
    const isPublicRoute = publicRoutes.includes(path);
    const isApiRoute = authRoutes.includes(path);

    console.log({
      path,
      isLoggedIn,
      isApiRoute,
      isAuthApiRoute,
      isPublicRoute,
      timeStamp: new Date().toISOString(),
    });

    if (isAuthApiRoute) {
      return NextResponse.next();
    }

    if (isApiRoute) {
      if (isLoggedIn) {
        console.log(
          `Redirecting logged-in user from ${path} to ${DEFAULT_LOGIN_REDIRECT}`
        );
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
      }
      return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoute) {
      console.log(`Redirecting non-logged-in user from ${path} to signin`);
      const signInURL = new URL("/signin", req.url);
      signInURL.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(signInURL);
    }

    if (isLoggedIn && isPublicRoute && path !== DEFAULT_LOGIN_REDIRECT) {
      console.log(
        `Redirecting logged-in user from ${path} to ${DEFAULT_LOGIN_REDIRECT}`
      );
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }

    return NextResponse.next();
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
