import { z } from 'zod';

const userCareerSchema = z.object({
  careerId: z.number().int().positive(),
});

export default userCareerSchema;
