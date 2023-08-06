'use client';
import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/ui/PeriodsTab';
import { trpc } from '@/lib/trcp';

const PageRedesYOperaciones = () => {
  const { data } = trpc.career.getById.useQuery({ id: 4 });

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en redes y operaciones</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      {data && (
        <>
          <h2 className="subtitle">Cuatrimestre</h2>
          <PeriodsTab periods={data?.periods} />
        </>
      )}
    </main>
  );
};
export default PageRedesYOperaciones;
