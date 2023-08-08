import { Icons } from '@/components/icons';
import { DataTable } from '@/components/table/DataTable';
import { CareerColumn } from '@/components/table/columns/CareerColumn';
import { getCareers } from '@/lib/services/admin/careers';

const AdminCarrerasPage = async () => {
  const { careers } = await getCareers();

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Carreras</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={CareerColumn} data={careers} />
    </main>
  );
};

export default AdminCarrerasPage;
