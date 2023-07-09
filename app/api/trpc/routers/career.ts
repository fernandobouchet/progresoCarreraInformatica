import { publicProcedure, router } from '@/app/api/trpc/trpc';
import prisma from '@/lib/prisma';

export const careerRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return prisma.career.findMany();
  }),
});
