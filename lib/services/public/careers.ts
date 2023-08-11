import fetcher from '@/lib/swr';
import useSWR from 'swr';

type CareerResponse = {
  data: {
    career: {
      id: number;
      name: string;
      periods: {
        id: number;
        order: number;
        courses: { id: number; name: string }[];
      }[];
    };
  };
};

const useCareer = (id: number) => {
  const { data, error, isLoading } = useSWR<CareerResponse, Error>(
    `/api/public/careers/${id}`,
    fetcher
  );
  return {
    career: data?.data?.career,
    isLoading,
    isError: error,
  };
};

export { useCareer };
