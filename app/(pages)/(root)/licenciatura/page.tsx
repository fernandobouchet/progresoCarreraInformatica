'use client';
import { PeriodsTab } from '@/components/ui/PeriodsTab';
import { Icons } from '@/components/icons';
import { trpc } from '@/lib/trcp';

const PageLicenciatura = () => {
  const { data } = trpc.career.getById.useQuery({ id: 1 });

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <h2>Año</h2>
      {data && <PeriodsTab periods={data?.periods} />}
    </main>
  );
};
export default PageLicenciatura;
