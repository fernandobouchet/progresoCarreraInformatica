import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';

const PageProgramacion = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Tecnicatura en programación</h1>
      <Divider />
      <CareerData id={3} />
    </main>
  );
};
export default PageProgramacion;
