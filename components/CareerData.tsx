'use client';
import { PeriodsTab } from '@/components/PeriodsTab';
import { ProgressBar } from './ui/progressBar';
import { api } from '@/lib/trcp';
import { updateUserCareerCache } from '@/lib/functions';

const CareerData = ({ careerData }: { careerData: Career }) => {
  const {
    data: userCoursesProgress,
    isLoading,
    isError,
  } = api.user.getUserCourses.useQuery();

  if (isLoading) {
    return <h2>LOADING</h2>;
  }
  if (isError || !userCoursesProgress) {
    return <h2>ERROR</h2>;
  }

  const updatedCareerData = updateUserCareerCache(
    careerData,
    userCoursesProgress
  );

  return (
    <div className="flex flex-col items-center w-full">
      <ProgressBar career={updatedCareerData} />
      <h2 className="subtitle">
        {careerData.id === 1 ? 'Año' : 'Cuatrimestre'}
      </h2>
      <PeriodsTab career={updatedCareerData} />
    </div>
  );
};

export default CareerData;
