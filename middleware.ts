import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/','/api/webhook/clerk', '/api/uploadthing'],
  ignoredRoutes: ['/api/webhook/clerk', '/api/uploadthing'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

