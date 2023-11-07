import CareerData from '@/components/CareerData';
import Separator from '@/components/ui/separator';

const PageProgramacion = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Tecnicatura en programación</h1>
      <Separator />
      <CareerData id={3} />
    </main>
  );
};
export default PageProgramacion;
