import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { inferAsyncReturnType } from '@trpc/server';
import prisma from '@/lib/prisma';

export async function createContextInner() {
  return {
    prisma,
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
