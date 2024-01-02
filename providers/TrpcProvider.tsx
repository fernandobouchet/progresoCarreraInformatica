'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client';
import { ReactNode, useState } from 'react';
import { getUrl, transformer } from '@/trpc/shared';

import { api } from '@/lib/trcp';

export default function TrpcProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string;
}) {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    api.createClient({
      transformer,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === 'development' ||
            (op.direction === 'down' && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: getUrl(),
          headers() {
            return {
              cookie: cookies,
              'x-trpc-source': 'react',
            };
          },
        }),
      ],
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
}
