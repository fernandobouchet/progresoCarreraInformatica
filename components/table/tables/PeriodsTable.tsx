'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { PeriodColumn } from '../columns/PeriodColumn';
import { trpc } from '@/lib/trcp';

const PeriodsTable = () => {
  const { data: periods, isLoading, isError } = trpc.period.getAll.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || periods === undefined) return <h2>Error</h2>;

  return <DataTable columns={PeriodColumn} data={periods} />;
};

export default PeriodsTable;
