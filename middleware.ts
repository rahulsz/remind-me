import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Make this route public
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/", // Make sure the root ("/") is still protected
    "/(api|trpc)(.*)",
  ],
};
