import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '@/server/api/trpc';
import { CourseStatus } from '@prisma/client';
import { z } from 'zod';

export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  updateUserCourse: protectedProcedure
    .input(
      z.object({
        courseId: z.number(),
        status: z.nativeEnum(CourseStatus),
        qualification: z.number().nullable().optional(),
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
  getUserCareers: protectedProcedure.query(({ ctx }) => {
    const userId = ctx.session?.user.id;
    if (!userId) return;

    return ctx.prisma.userCareer.findMany({
      where: {
        userId: userId,
      },
      select: { careerId: true },
    });
  }),
  updateUserCareers: protectedProcedure
    .input(
      z.object({
        careerIds: z.array(z.number()),
      })
    )
    .mutation(async ({ input: { careerIds }, ctx }) => {
      const userId = ctx.session?.user.id;
      if (!userId) return;

      const existingCareers = await ctx.prisma.userCareer.findMany({
        where: {
          userId,
        },
        select: {
          careerId: true,
        },
      });

      const newCareers = careerIds.filter(
        (careerId) => !existingCareers.some((ec) => ec.careerId === careerId)
      );

      const careersToDelete = existingCareers
        .filter((careerId) => !careerIds.some((ec) => ec === careerId.careerId))
        .map((c) => c.careerId);

      await ctx.prisma.$transaction(async (tx) => {
        await Promise.all(
          careersToDelete.map(async (careerId) => {
            await tx.userCareer.delete({
              where: {
                careerId_userId: {
                  careerId,
                  userId,
                },
              },
            });
          })
        );

        await Promise.all(
          newCareers.map(async (careerId) => {
            await tx.userCareer.create({
              data: { userId, careerId },
            });
          })
        );
      });

      return { careerIds };
    }),
});
