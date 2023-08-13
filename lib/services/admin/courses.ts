import fetcher from '@/lib/swr';
import useSWR from 'swr';

type CoursesResponse = {
  data: {
    courses: {
      area: string;
      id: number;
      order: number;
      description: string;
      name: string;
      hasCorrelatives: boolean;
      hasEquivalents: boolean;
      hasOptatives: boolean;
      hsTotal: number;
      hsWeekly: number;
    }[];
    results: number;
  };
};

const useCourses = () => {
  const { data, error, isLoading } = useSWR<CoursesResponse, Error>(
    `/api/admin/courses`,
    fetcher
  );
  return {
    courses: data?.data?.courses,
    isLoading,
    isError: error,
  };
};

export { useCourses };
