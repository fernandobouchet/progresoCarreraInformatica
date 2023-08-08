import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { getCareer } from '@/lib/services/public/careers';

const PageRedesYOperaciones = async () => {
  const { data } = await getCareer(4);

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en redes y operaciones</h1>
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
export default PageRedesYOperaciones;
