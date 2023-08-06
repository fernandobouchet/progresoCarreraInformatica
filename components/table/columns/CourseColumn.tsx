'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Course } from '@prisma/client';
import ColumnOptions from '@/components/table/ColumnOptions';

export const CourseColumn: ColumnDef<Course>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Asignatura',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original;
      return <ColumnOptions itemData={item} />;
    },
  },
];
