'use client';

import { trpc } from '@/lib/trpc';

export default function Home() {
  let { data: careers, isLoading, isFetching } = trpc.career.getAll.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {careers?.map((career) => (
        <div
          key={career.id}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <h3>{career.name}</h3>
        </div>
      ))}
    </div>
  );
}
