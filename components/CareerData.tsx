'use client';
import PeriodsTabSkeleton from '@/components/PeriodsTabSkeleton';
import { PeriodsTab } from '@/components/PeriodsTab';
import { trpc } from '@/lib/trcp';

const CareerData = ({ id }: { id: number }) => {
  const {
    data: career,
    isLoading,
    isError,
  } = trpc.career.getById.useQuery({ id: id });

  if (isLoading) return <PeriodsTabSkeleton />;

  if (isError || career === undefined) return <h2>Error</h2>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="subtitle">{id === 1 ? 'Año' : 'Cuatrimestre'}</h2>
      <PeriodsTab career={career} />
    </div>
  );
};

export default CareerData;
