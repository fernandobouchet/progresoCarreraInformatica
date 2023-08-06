import { Icons } from '@/components/icons';
import { DataTable } from '@/components/ui/table/DataTable';
import { CareerColumn } from '@/components/ui/table/columns/CareerColumn';
import prisma from '@/lib/prisma';

const AdminCarrerasPage = async () => {
  const careers = await prisma.career.findMany();

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
