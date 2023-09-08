import { router } from '@/app/api/trpc/server/trpc';

export const appRouter = router({});

export type AppRouter = typeof appRouter;
