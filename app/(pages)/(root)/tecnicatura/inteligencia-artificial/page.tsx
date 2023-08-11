import { Icons } from '@/components/icons';
import { PeriodsTab } from '@/components/PeriodsTab';

const PageInteligenciaArtificial = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en inteligencia artificial</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <PeriodsTab id={5} />
    </main>
  );
};
export default PageInteligenciaArtificial;
