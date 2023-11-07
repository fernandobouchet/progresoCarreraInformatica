import CareerData from '@/components/CareerData';
import Separator from '@/components/ui/separator';

const PageLicenciatura = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <Separator />
      <CareerData id={1} />
    </main>
  );
};
export default PageLicenciatura;
