'use client';
import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/ui/PeriodsTab';
import { trpc } from '@/lib/trcp';

const PageInteligenciaArtificial = () => {
  const { data } = trpc.career.getById.useQuery({ id: 5 });

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en inteligencia artificial</h1>
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
export default PageInteligenciaArtificial;
