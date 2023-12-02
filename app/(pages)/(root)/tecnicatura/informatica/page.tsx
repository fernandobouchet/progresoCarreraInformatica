import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';

const PageInformatica = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en informática</h1>
      <Divider />
      <CareerData id={2} />
    </main>
  );
};
export default PageInformatica;
