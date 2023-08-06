'use client';
import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { trpc } from '@/lib/trcp';

const PageLicenciatura = () => {
  const { data } = trpc.career.getById.useQuery({ id: 1 });

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      {data && (
        <>
          <h2 className="subtitle">Año</h2>
          <PeriodsTab periods={data?.periods} />
        </>
      )}
    </main>
  );
};
export default PageLicenciatura;
