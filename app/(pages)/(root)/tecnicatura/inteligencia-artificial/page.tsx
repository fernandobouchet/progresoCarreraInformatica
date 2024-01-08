import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageInteligenciaArtificial = async () => {
  const fetchedData = await api.career.getById.query({ id: 5 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageInteligenciaArtificial;
