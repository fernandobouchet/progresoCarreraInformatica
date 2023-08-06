import { publicProcedure, router } from '@/app/api/trpc/server/trpc';
import { z } from 'zod';

export const careersRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.career.findMany();
  }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input: { id }, ctx }) => {
      return ctx.prisma.career.findUnique({
        where: { id },
        include: {
          periods: {
            select: {
              id: true,
              order: true,
              courses: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    }),
});