'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { UserColumn } from '../columns/UserColumn';
import { trpc } from '@/lib/trcp';

const UsersTable = () => {
  const { data: users, isLoading, isError } = trpc.user.getAll.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || users === undefined) return <h2>Error</h2>;

  return <DataTable columns={UserColumn} data={users} />;
};

export default UsersTable;
