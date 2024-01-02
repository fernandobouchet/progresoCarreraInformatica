import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const coursesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.course.findMany();
  }),
});
