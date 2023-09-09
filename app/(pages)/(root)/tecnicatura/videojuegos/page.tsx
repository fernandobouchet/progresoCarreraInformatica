import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';

const PageVideojuegos = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en videojuegos</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <h2 className="subtitle">Cuatrimestre</h2>
      <PeriodsTab id={6} />
    </main>
  );
};
export default PageVideojuegos;
