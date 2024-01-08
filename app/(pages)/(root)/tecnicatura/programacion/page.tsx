import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageProgramacion = async () => {
  const fetchedData = await api.career.getById.query({ id: 3 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageProgramacion;
