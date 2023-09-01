import { authMiddleware } from "@clerk/nextjs";

// This example allows specific routes to be public while protecting others.
// Adjust the `matcher` array to define which routes should be protected.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware.
export default authMiddleware({});

export const config = {
  matcher: [
    // Allow the root ("/") to be public
    "/",
    // Allow public routes such as "/public-route-1" and "/public-route-2"
    "/public-route-1",
    "/public-route-2",
    // Protect routes starting with "/protected-route"
    "/protected-route(.*)",
    // Protect API and trpc routes
    "/(api|trpc)(.*)",
  ],
};
