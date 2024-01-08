import CareerPageContent from '@/components/CareerPageContent';
import { api } from '@/trpc/server';

const PageLicenciatura = async () => {
  const fetchedData = await api.career.getById.query({ id: 1 });

  return <CareerPageContent data={fetchedData} />;
};

export default PageLicenciatura;
