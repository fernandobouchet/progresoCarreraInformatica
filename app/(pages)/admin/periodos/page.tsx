import PeriodsTable from '@/components/table/tables/PeriodsTable';
import { Divider } from '@/components/ui/divider';

const AdminPeriodosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Periodos</h1>
      <Divider />

      <PeriodsTable />
    </main>
  );
};
export default AdminPeriodosPage;
