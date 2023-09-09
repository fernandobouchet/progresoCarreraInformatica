import { publicProcedure, router } from '@/app/api/trpc/server/trpc';

export const periodsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.period.findMany();
  }),
});
