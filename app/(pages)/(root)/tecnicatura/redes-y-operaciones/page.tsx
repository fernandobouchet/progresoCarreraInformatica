import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageRedesYOperaciones = async () => {
  const fetchedData = await api.career.getById.query({ id: 4 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageRedesYOperaciones;
