import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';

const PageLicenciatura = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <h2 className="subtitle">Año</h2>
      <PeriodsTab id={1} />
    </main>
  );
};
export default PageLicenciatura;
