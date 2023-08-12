'use client';
import { DataTable } from '@/components/table/DataTable';
import LoadingBar from '@/components/ui/LoadingBar';
import { useCourses } from '@/lib/services/admin/courses';
import { CourseColumn } from '../columns/CourseColumn';

const CoursesTable = () => {
  const { courses, isLoading, isError } = useCourses();

  if (isLoading) return <LoadingBar />;

  if (isError || courses === undefined) return <h2>Error</h2>;

  return <DataTable columns={CourseColumn} data={courses} />;
};

export default CoursesTable;