'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Course } from '@prisma/client';
import ColumnOptions from '@/components/ui/table/ColumnOptions';

export const CourseColumn: ColumnDef<Course>[] = [
  {
    accessorKey: 'name',
    header: 'Carrera',
  },
  {
    header: 'Acciones',
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original;
      return <ColumnOptions itemData={item} />;
    },
  },
];
