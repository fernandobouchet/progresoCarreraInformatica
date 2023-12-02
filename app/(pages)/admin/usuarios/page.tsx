import UsersTable from '@/components/table/tables/UsersTable';
import { Divider } from '@/components/ui/divider';

const AdminUsuariosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Usuarios</h1>
      <Divider />
      <UsersTable />
    </main>
  );
};
export default AdminUsuariosPage;
