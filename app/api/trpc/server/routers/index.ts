import { router } from '@/app/api/trpc/server/trpc';
import { careersRouter } from '@/app/api/trpc/server/routers/career';
import { coursesRouter } from './courses';
import { periodsRouter } from './periods';
import { usersRouter } from './users';

export const appRouter = router({
  career: careersRouter,
  course: coursesRouter,
  period: periodsRouter,
  user: usersRouter,
});

export type AppRouter = typeof appRouter;
