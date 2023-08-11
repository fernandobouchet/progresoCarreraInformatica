'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { usePeriods } from '@/lib/services/admin/periods';
import { PeriodColumn } from '../columns/PeriodColumn';

const PeriodsTable = () => {
  const { periods, isLoading, isError } = usePeriods();

  if (isLoading) return <LoadingBar />;

  if (isError || periods === undefined) return <h2>Error</h2>;

  return <DataTable columns={PeriodColumn} data={periods} />;
};

export default PeriodsTable;
