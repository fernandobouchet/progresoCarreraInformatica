import { router } from '@/app/api/trpc/trpc';
import { careerRouter } from '@/app/api/trpc/routers/career';

export const appRouter = router({
  career: careerRouter,
});

export type AppRouter = typeof appRouter;
