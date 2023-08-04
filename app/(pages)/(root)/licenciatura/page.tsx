import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/ui/PeriodsTab';
import { getCareer } from '@/lib/services/careers';

const PageLicenciatura = async () => {
  const { data } = await getCareer(1);

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <h2>Año</h2>
      <PeriodsTab periods={data?.career?.periods} />
    </main>
  );
};
export default PageLicenciatura;
