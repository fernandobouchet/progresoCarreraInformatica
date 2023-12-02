'use client';

import { trpc } from '@/lib/trcp';
import LoadingBar from '@/components/ui/LoadingBar';
import CareerSelector from '@/components/settings/careerSelector';

const Ajustes = () => {
  const {
    data: selectedCareers,
    isLoading,
    isError,
  } = trpc.user.getUserCareers.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || selectedCareers === undefined || selectedCareers === null)
    return <h2>Error</h2>;

  return (
    <main className="cardsPageContainer items-start">
      <CareerSelector />
    </main>
  );
};
export default Ajustes;
