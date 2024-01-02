import { createTRPCRouter } from '@/server/api/trpc';
import { careersRouter } from './routers/career';
import { coursesRouter } from './routers/courses';
import { periodsRouter } from './routers/periods';
import { usersRouter } from './routers/users';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  career: careersRouter,
  course: coursesRouter,
  period: periodsRouter,
  user: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
