'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { CourseColumn } from '../columns/CourseColumn';
import { api } from '@/lib/trcp';

const CoursesTable = () => {
  const { data: courses, isLoading, isError } = api.course.getAll.useQuery();

  if (isLoading) return <LoadingBar />;

  if (isError || courses === undefined) return <h2>Error</h2>;

  return <DataTable columns={CourseColumn} data={courses} />;
};

export default CoursesTable;
