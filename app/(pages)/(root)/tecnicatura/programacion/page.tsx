import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { getCareer } from '@/lib/services/public/careers';

const PageProgramacion = async () => {
  const { data } = await getCareer(3);

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Tecnicatura en programación</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      {data?.career?.periods?.length >= 1 && (
        <>
          <h2 className="subtitle">Cuatrimestre</h2>
          <PeriodsTab periods={data?.career?.periods} />
        </>
      )}
    </main>
  );
};
export default PageProgramacion;
