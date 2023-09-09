import { publicProcedure, router } from '@/app/api/trpc/server/trpc';

export const usersRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
