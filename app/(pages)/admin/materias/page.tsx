import { DataTable } from '@/components/ui/table/DataTable';
import { CourseColumn } from '@/components/ui/table/columns/CourseColumn';
import prisma from '@/lib/prisma';

const AdminMateriasPage = async () => {
  const courses = await prisma.course.findMany();

  return (
    <div>
      Materias
      <DataTable columns={CourseColumn} data={courses} />
    </div>
  );
};

export default AdminMateriasPage;
