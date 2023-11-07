import UsersTable from '@/components/table/tables/UsersTable';
import Separator from '@/components/ui/separator';

const AdminUsuariosPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Usuarios</h1>
      <Separator />
      <UsersTable />
    </main>
  );
};
export default AdminUsuariosPage;
