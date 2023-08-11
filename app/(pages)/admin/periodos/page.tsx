import { Icons } from '@/components/icons';
import PeriodsTable from '@/components/table/tables/PeriodsTable';

const AdminPeriodosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Periodos</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <PeriodsTable />
    </main>
  );
};
export default AdminPeriodosPage;
