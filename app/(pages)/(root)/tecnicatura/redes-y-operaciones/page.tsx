import { Icons } from '@/components/icons';
import CareerData from '@/components/CareerData';

const PageRedesYOperaciones = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en redes y operaciones</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareerData id={4} />
    </main>
  );
};
export default PageRedesYOperaciones;
