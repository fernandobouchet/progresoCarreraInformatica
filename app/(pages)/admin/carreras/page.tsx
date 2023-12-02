import CareersTable from '@/components/table/tables/CareersTable';
import { Divider } from '@/components/ui/divider';

const AdminCarrerasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Carreras</h1>
      <Divider />
      <CareersTable />
    </main>
  );
};

export default AdminCarrerasPage;
