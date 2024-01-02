import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';

export const careersRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.career.findMany();
  }),
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input: { id }, ctx }) => {
      const currentUserId = ctx.session?.user.id;
      return ctx.prisma.career.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          periods: {
            orderBy: { order: 'asc' },
            select: {
              id: true,
              order: true,
              courses: {
                orderBy: { order: 'asc' },
                select: {
                  id: true,
                  name: true,
                  progress:
                    currentUserId === undefined
                      ? false
                      : { where: { userId: currentUserId } },
                },
              },
            },
          },
        },
      });
    }),
});
