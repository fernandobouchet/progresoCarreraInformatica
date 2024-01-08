import CareerData from '@/components/CareerData';
import { Divider } from '@/components/ui/divider';
import { api } from '@/trpc/server';

const PageInformatica = async () => {
  const data = await api.career.getById.query({ id: 2 });

  if (!data)
    return (
      <p className="text-md text-center">
        Hubo un error al obtener la información. Por favor intentelo nuevamente.
      </p>
    );

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Tecnicatura en informática</h1>
      <Divider />
      <CareerData careerData={data} />
    </main>
  );
};
export default PageInformatica;
