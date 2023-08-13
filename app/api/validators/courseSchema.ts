import { z } from 'zod';

const courseSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(255),
  order: z.number().int().positive(),
  area: z.string().max(255).optional(),
  hsWeekly: z.number().int().optional(),
  hsTotal: z.number().int().optional(),
  hasCorrelatives: z.boolean().optional(),
  hasOptatives: z.boolean().optional(),
  hasEquivalents: z.boolean().optional(),
});

export default courseSchema;
