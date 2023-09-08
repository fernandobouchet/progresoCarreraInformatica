import fetcher from '@/lib/swr';
import useSWR from 'swr';

const useUserCareer = () => {
  const { data, error, isLoading, mutate } = useSWR<any, Error>(
    `/api/user/careers`,
    fetcher
  );
  return {
    career: data?.data,
    isLoading,
    isError: error,
    mutate: mutate,
  };
};

const addUserCareer = async (ids: number[]) => {
  const response = await fetch(`/api/user/careers`, {
    method: 'POST',
    body: JSON.stringify({ courseIds: ids }),
  });
  return response.json();
};

export { useUserCareer, addUserCareer };
