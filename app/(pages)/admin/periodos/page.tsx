import PeriodsTable from '@/components/table/tables/PeriodsTable';
import Separator from '@/components/ui/separator';

const AdminPeriodosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Periodos</h1>
      <Separator />

      <PeriodsTable />
    </main>
  );
};
export default AdminPeriodosPage;
