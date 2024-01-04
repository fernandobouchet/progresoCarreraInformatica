'use client';
import PeriodsTabSkeleton from '@/components/PeriodsTabSkeleton';
import { PeriodsTab } from '@/components/PeriodsTab';
import { api } from '@/lib/trcp';
import { ProgressBar } from './ui/progressBar';

const CareerData = ({ id }: { id: number }) => {
  const {
    data: career,
    isLoading,
    isError,
  } = api.career.getByIdByUser.useQuery({ id: id });

  if (!isLoading) return <PeriodsTabSkeleton />;

  if (isError || career === undefined || career === null) return <h2>Error</h2>;

  return (
    <div className="flex flex-col items-center w-full">
      <ProgressBar career={career} />
      <h2 className="subtitle">{id === 1 ? 'Año' : 'Cuatrimestre'}</h2>
      <PeriodsTab career={career} />
    </div>
  );
};

export default CareerData;
