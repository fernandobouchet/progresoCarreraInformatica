import { UserColumn } from '@/components/ui/table/columns/UserColumn';
import { DataTable } from '@/components/ui/table/DataTable';
import prisma from '@/lib/prisma';

const AdminUsuariosPage = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      Usuarios
      <DataTable columns={UserColumn} data={users} />
    </div>
  );
};
export default AdminUsuariosPage;
