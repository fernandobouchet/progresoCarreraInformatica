import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { getCareer } from '@/lib/services/careers';

const PageInteligenciaArtificial = async () => {
  const { data } = await getCareer(5);

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en inteligencia artificial</h1>
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
export default PageInteligenciaArtificial;
