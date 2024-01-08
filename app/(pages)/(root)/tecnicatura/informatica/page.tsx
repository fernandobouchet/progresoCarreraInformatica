import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageInformatica = async () => {
  const fetchedData = await api.career.getById.query({ id: 2 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageInformatica;
