import { Icons } from '@/components/icons';
import { DataTable } from '@/components/table/DataTable';
import { CourseColumn } from '@/components/table/columns/CourseColumn';
import { getCourses } from '@/lib/services/admin/courses';

const AdminAsignaturasPage = async () => {
  const { courses } = await getCourses();

  return (
    <main className="cardsPageContainer">
      <h1 className="title">Asignaturas</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={CourseColumn} data={courses} />
    </main>
  );
};

export default AdminAsignaturasPage;
