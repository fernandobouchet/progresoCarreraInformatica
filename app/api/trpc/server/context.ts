import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { inferAsyncReturnType } from '@trpc/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function createContextInner() {
  const session = await getServerSession(authOptions);

  return {
    prisma,
    session: session,
  };
}

export async function createContext(opts: FetchCreateContextFnOptions) {
  const contextInner = await createContextInner();

  return {
    ...contextInner,
    req: opts.req,
    res: opts.resHeaders,
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;
