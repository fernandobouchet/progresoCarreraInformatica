import { z } from 'zod';

const userCareerSchema = z.array(z.number().int().positive());

export default userCareerSchema;
