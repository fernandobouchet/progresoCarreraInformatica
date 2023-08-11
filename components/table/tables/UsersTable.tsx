'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { useUsers } from '@/lib/services/admin/users';
import { UserColumn } from '../columns/UserColumn';

const UsersTable = () => {
  const { users, isLoading, isError } = useUsers();

  if (isLoading) return <LoadingBar />;

  if (isError || users === undefined) return <h2>Error</h2>;

  return <DataTable columns={UserColumn} data={users} />;
};

export default UsersTable;
