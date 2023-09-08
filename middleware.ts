import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes: ["/"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


// protects all routes including api/trpc routes
// can edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware