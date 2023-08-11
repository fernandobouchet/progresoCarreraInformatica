import fetcher from '@/lib/swr';
import useSWR from 'swr';

type CareersResponse = {
  data: {
    careers: {
      id: number;
      name: string;
    }[];
    results: number;
  };
};

const useCareers = () => {
  const { data, error, isLoading } = useSWR<CareersResponse, Error>(
    `/api/admin/careers`,
    fetcher
  );
  return {
    careers: data?.data?.careers,
    isLoading,
    isError: error,
  };
};

export { useCareers };
