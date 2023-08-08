import { Icons } from '@/components/icons';
import { PeriodColumn } from '@/components/table/columns/PeriodColumn';
import { DataTable } from '@/components/table/DataTable';
import { getPeriods } from '@/lib/services/admin/periods';

const AdminPeriodosPage = async () => {
  const { periods } = await getPeriods();

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Periodos</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={PeriodColumn} data={periods} />
    </main>
  );
};
export default AdminPeriodosPage;
