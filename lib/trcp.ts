import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@/app/api/trpc/server/routers';

export const trpc = createTRPCReact<AppRouter>({});
