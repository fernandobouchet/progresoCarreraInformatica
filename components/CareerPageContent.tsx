import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';

interface Props {
  data: Career | null;
}

const CareerPageContent = ({ data }: Props) => {
  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">{data?.name}</h1>
      <Divider />
      {data ? (
        <>
          {data.periods.length <= 0 ? (
            <h2>Aún no hay información disponible.</h2>
          ) : (
            <CareerData careerData={data} />
          )}
        </>
      ) : (
        <p className="text-md text-center">
          Hubo un error al obtener la información. Por favor, inténtelo
          nuevamente.
        </p>
      )}
    </main>
  );
};
export default CareerPageContent;
