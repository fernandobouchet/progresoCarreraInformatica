import { Icons } from '@/components/icons';
import { UserColumn } from '@/components/table/columns/UserColumn';
import { DataTable } from '@/components/table/DataTable';
import { getUsers } from '@/lib/services/admin/users';

const AdminUsuariosPage = async () => {
  const { users } = await getUsers();

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Usuarios</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={UserColumn} data={users} />
    </main>
  );
};
export default AdminUsuariosPage;
