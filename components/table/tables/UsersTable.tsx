'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { UserColumn } from '../columns/UserColumn';
import { api } from '@/lib/trcp';

const UsersTable = () => {
  const { data: users, isLoading, isError } = api.user.getAll.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || users === undefined) return <h2>Error</h2>;

  return <DataTable columns={UserColumn} data={users} />;
};

export default UsersTable;
