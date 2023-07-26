import { z } from 'zod';
import courseSchema from './courseSchema';

const periodSchema = z.object({
  order: z.number().int().positive(),
  careerID: z.number().int().positive(),
  //courses: z.array(courseSchema),
});

export default periodSchema;
