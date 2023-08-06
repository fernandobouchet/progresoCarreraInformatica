import { z } from 'zod';

const careerSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(255),
});

export default careerSchema;
