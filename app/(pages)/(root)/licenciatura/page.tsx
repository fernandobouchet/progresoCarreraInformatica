import CareerData from '@/components/CareerData';
import { Icons } from '@/components/icons';

const PageLicenciatura = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Licenciatura en informática</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareerData id={1} />
    </main>
  );
};
export default PageLicenciatura;
