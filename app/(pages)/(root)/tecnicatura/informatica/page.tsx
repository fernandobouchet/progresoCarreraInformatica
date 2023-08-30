import { Icons } from '@/components/icons';
import CareerData from '@/components/CareerData';

const PageInformatica = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareerData id={2} />
    </main>
  );
};
export default PageInformatica;
