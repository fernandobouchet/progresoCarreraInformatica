import { publicProcedure, router } from '@/app/api/trpc/server/trpc';

export const coursesRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.course.findMany();
  }),
});
