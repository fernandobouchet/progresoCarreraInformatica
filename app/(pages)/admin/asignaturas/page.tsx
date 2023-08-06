import { Icons } from '@/components/icons';
import { DataTable } from '@/components/table/DataTable';
import { CourseColumn } from '@/components/table/columns/CourseColumn';
import prisma from '@/lib/prisma';

const AdminAsignaturasPage = async () => {
  const courses = await prisma.course.findMany();

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
