import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow the root route ("/") to be accessible to both signed-in and signed-out users.
  publicRoutes: ["/"],
});
