import { PeriodColumn } from '@/components/ui/table/columns/PeriodColumn';
import { DataTable } from '@/components/ui/table/DataTable';
import prisma from '@/lib/prisma';

const AdminPeriodosPage = async () => {
  const periods = await prisma.period.findMany();

  return (
    <div>
      Periodos
      <DataTable columns={PeriodColumn} data={periods} />
    </div>
  );
};
export default AdminPeriodosPage;
