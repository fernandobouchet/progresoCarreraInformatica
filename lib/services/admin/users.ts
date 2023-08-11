import fetcher from '@/lib/swr';
import { Role } from '@prisma/client';
import useSWR from 'swr';

type UsersResponse = {
  data: {
    users: {
      id: string;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      image: string | null;
      role: Role;
      createdAt: Date;
      updatedAt: Date;
    }[];
    results: number;
  };
};

const useUsers = () => {
  const { data, error, isLoading } = useSWR<UsersResponse, Error>(
    `/api/admin/users`,
    fetcher
  );
  return {
    users: data?.data?.users,
    isLoading,
    isError: error,
  };
};

export { useUsers };
