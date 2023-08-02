import { Icons } from '@/components/icons';
import { PeriodColumn } from '@/components/ui/table/columns/PeriodColumn';
import { DataTable } from '@/components/ui/table/DataTable';
import prisma from '@/lib/prisma';

const AdminPeriodosPage = async () => {
  const periods = await prisma.period.findMany();

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Periodos</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={PeriodColumn} data={periods} />
    </main>
  );
};
export default AdminPeriodosPage;
