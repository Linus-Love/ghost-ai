import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const isPublicRoute = (req: Request) => {
  const url = new URL(req.url);
  return url.pathname.startsWith("/sign-in") || url.pathname.startsWith("/sign-up");
};

export default clerkMiddleware(async (auth, req) => {
  // If the route is public, allow access
  if (isPublicRoute(req)) {
    return;
  }

  // Protect all other routes
  const authObj = await auth();
  if (!authObj.userId) {
    // Redirect to sign-in if not authenticated
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static files (by extension)
     * - favicon.ico
     */
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};