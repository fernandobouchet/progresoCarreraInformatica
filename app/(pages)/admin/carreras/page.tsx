import CareersTable from '@/components/table/tables/CareersTable';
import Separator from '@/components/ui/separator';

const AdminCarrerasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Carreras</h1>
      <Separator />
      <CareersTable />
    </main>
  );
};

export default AdminCarrerasPage;
