import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';

const PageVideojuegos = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en videojuegos</h1>
      <Divider />
      <CareerData id={6} />
    </main>
  );
};
export default PageVideojuegos;
