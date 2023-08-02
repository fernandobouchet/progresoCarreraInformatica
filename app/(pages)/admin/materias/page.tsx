import { Icons } from '@/components/icons';
import { DataTable } from '@/components/ui/table/DataTable';
import { CourseColumn } from '@/components/ui/table/columns/CourseColumn';
import prisma from '@/lib/prisma';

const AdminMateriasPage = async () => {
  const courses = await prisma.course.findMany();

  return (
    <main className="cardsPageContainer">
      <h1 className="text-2xl lg:text-3xl">Materias</h1>
      <div className="py-4 lg:py-8">
        <Icons.line />
      </div>
      <DataTable columns={CourseColumn} data={courses} />
    </main>
  );
};

export default AdminMateriasPage;
