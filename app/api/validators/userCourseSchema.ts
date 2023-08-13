import { CourseStatus } from '@prisma/client';
import { z } from 'zod';

const userCourseSchema = z.object({
  courseId: z.number().int().positive(),
  qualification: z.number().int().positive().min(0).max(10),
  status: z.nativeEnum(CourseStatus),
});

export default userCourseSchema;
