import fetcher from '@/lib/swr';
import useSWR from 'swr';

type PeriodsResponse = {
  data: {
    periods: {
      id: number;
      order: number;
      careerID: number;
    }[];
    results: number;
  };
};

const usePeriods = () => {
  const { data, error, isLoading } = useSWR<PeriodsResponse, Error>(
    `/api/admin/periods`,
    fetcher
  );
  return {
    periods: data?.data?.periods,
    isLoading,
    isError: error,
  };
};

export { usePeriods };
