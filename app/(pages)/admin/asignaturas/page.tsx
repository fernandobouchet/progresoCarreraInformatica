import CoursesTable from '@/components/table/tables/CoursesTable';
import Separator from '@/components/ui/separator';

const AdminAsignaturasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Asignaturas</h1>
      <Separator />
      <CoursesTable />
    </main>
  );
};

export default AdminAsignaturasPage;
