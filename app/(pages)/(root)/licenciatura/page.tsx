import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';

const PageLicenciatura = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <Divider />
      <CareerData id={1} />
    </main>
  );
};
export default PageLicenciatura;
