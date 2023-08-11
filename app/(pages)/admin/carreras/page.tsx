import { Icons } from '@/components/icons';
import CareersTable from '@/components/table/tables/CareersTable';

const AdminCarrerasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Carreras</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CareersTable />
    </main>
  );
};

export default AdminCarrerasPage;
