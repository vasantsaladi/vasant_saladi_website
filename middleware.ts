// Temporarily disabled Clerk middleware
export {};

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   // Routes that can be accessed while signed out
//   publicRoutes: ["/", "/sign-in", "/sign-up"],
// });

// export const config = {
//   // Protects all routes, including api/trpc.
//   // See https://clerk.com/docs/references/nextjs/auth-middleware
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
