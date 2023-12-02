import CoursesTable from '@/components/table/tables/CoursesTable';
import { Divider } from '@/components/ui/divider';

const AdminAsignaturasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Asignaturas</h1>
      <Divider />
      <CoursesTable />
    </main>
  );
};

export default AdminAsignaturasPage;
