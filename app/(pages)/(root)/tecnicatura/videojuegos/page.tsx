import { Icons } from '@/components/icons';
import CareerData from '@/components/CareerData';

const PageVideojuegos = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en videojuegos</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareerData id={6} />
    </main>
  );
};
export default PageVideojuegos;
