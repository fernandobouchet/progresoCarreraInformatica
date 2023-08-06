'use client';
import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { trpc } from '@/lib/trcp';

const PageProgramacion = () => {
  const { data } = trpc.career.getById.useQuery({ id: 3 });

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Tecnicatura en programación</h1>
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
export default PageProgramacion;
