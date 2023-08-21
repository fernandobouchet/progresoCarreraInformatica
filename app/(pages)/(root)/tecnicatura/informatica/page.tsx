import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';

const PageInformatica = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <h2 className="subtitle">Cuatrimestre</h2>
      <PeriodsTab id={2} />
    </main>
  );
};
export default PageInformatica;
