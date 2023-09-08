'use client';
import { useCareer } from '@/lib/services/public/careers';
import PeriodsTabSkeleton from '@/components/PeriodsTabSkeleton';
import { PeriodsTab } from '@/components/PeriodsTab';
import CareerBadgesInfo from './CareerBadgesInfo';
import { organizarMateriasPorProgreso } from '@/lib/functions';
import { Progress } from './ui/progress';

const CareerData = ({ id }: { id: number }) => {
  const { career, isLoading, isError } = useCareer(id);

  if (isLoading) return <PeriodsTabSkeleton />;

  if (isError || career === undefined) return <h2>Error</h2>;

  const careerProgress = organizarMateriasPorProgreso(career);

  return (
    <div className="flex flex-col items-center w-full">
      <Progress  data={careerProgress}/>
      <CareerBadgesInfo progress={careerProgress} />
      <h2 className="subtitle">{id === 1 ? 'Año' : 'Cuatrimestre'}</h2>
      <PeriodsTab career={career} />
    </div>
  );
};

export default CareerData;
