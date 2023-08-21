import { publicProcedure, router } from '@/app/api/trpc/server/trpc';
import { CourseStatus } from '@prisma/client';
import { z } from 'zod';

export const usersRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  updateUserCourse: publicProcedure
    .input(
      z.object({
        courseId: z.number(),
        status: z.nativeEnum(CourseStatus),
        qualification: z.number(),
      })
    )
    .mutation(async ({ input: { courseId, status, qualification }, ctx }) => {
      const userId = ctx.session?.user.id;
      if (!userId) return;
      const existingCourse = await ctx.prisma.userCourse.findUnique({
        where: {
          courseId_userId: {
            userId,
            courseId,
          },
        },
      });
      if (existingCourse === null) {
        await ctx.prisma.userCourse.create({
          data: { userId, courseId, status, qualification },
        });
        return { courseId, status, qualification };
      } else {
        await ctx.prisma.userCourse.update({
          where: {
            courseId_userId: {
              userId,
              courseId,
            },
          },
          data: { userId, courseId, status, qualification },
        });
        return { courseId, status, qualification };
      }
    }),
});
