'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Period } from '@prisma/client';
import ColumnOptions from '@/components/table/ColumnOptions';

export const PeriodColumn: ColumnDef<Period>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'order',
    header: 'Orden',
  },
  {
    accessorKey: 'careerID',
    header: 'Carrera',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original;
      return <ColumnOptions itemData={item} />;
    },
  },
];
