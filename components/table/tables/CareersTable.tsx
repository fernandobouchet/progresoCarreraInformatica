'use client';
import { CareerColumn } from '@/components/table/columns/CareerColumn';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { api } from '@/lib/trcp';

const CareersTable = () => {
  const { data: careers, isLoading, isError } = api.career.getAll.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || careers === undefined) return <h2>Error</h2>;

  return <DataTable columns={CareerColumn} data={careers} />;
};

export default CareersTable;
