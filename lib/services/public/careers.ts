import fetcher from '@/lib/swr';
import useSWR from 'swr';

const useCareer = (id: number) => {
  const { data, error, isLoading } = useSWR<CareerFullData, Error>(
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
