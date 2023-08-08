import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';
import { getCareer } from '@/lib/services/public/careers';

const PageLicenciatura = async () => {
  const { data } = await getCareer(1);

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      {data?.career?.periods?.length >= 1 && (
        <>
          <h2 className="subtitle">Año</h2>
          <PeriodsTab periods={data?.career?.periods} />
        </>
      )}
    </main>
  );
};
export default PageLicenciatura;
