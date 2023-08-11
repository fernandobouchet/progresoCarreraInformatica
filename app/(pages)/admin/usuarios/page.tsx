import { Icons } from '@/components/icons';
import UsersTable from '@/components/table/tables/UsersTable';

const AdminUsuariosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Usuarios</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <UsersTable />
    </main>
  );
};
export default AdminUsuariosPage;
