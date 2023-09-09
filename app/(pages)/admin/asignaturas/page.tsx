import { Icons } from '@/components/icons';
import CoursesTable from '@/components/table/tables/CoursesTable';

const AdminAsignaturasPage = () => {
  return (
    <main className="cardsPageContainer">
      <h1 className="title">Asignaturas</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <CoursesTable />
    </main>
  );
};

export default AdminAsignaturasPage;
