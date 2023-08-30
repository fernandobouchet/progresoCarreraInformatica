import { Icons } from '@/components/icons';
import CareerData from '@/components/CareerData';

const PageProgramacion = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Tecnicatura en programación</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareerData id={3} />
    </main>
  );
};
export default PageProgramacion;
