import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const periodsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.period.findMany();
  }),
});
