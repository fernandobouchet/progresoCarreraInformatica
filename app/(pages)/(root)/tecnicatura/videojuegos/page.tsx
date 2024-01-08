import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageVideojuegos = async () => {
  const fetchedData = await api.career.getById.query({ id: 6 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageVideojuegos;
