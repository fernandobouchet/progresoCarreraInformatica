import { DataTable } from '@/components/ui/table/DataTable';
import { CareerColumn } from '@/components/ui/table/columns/CareerColumn';
import prisma from '@/lib/prisma';

const AdminCarrerasPage = async () => {
  const careers = await prisma.career.findMany();

  return (
    <div>
      Carreras
      <DataTable columns={CareerColumn} data={careers} />
    </div>
  );
};

export default AdminCarrerasPage;
