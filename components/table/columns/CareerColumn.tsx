'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Career } from '@prisma/client';
import ColumnOptions from '@/components/table/ColumnOptions';

export const CareerColumn: ColumnDef<Career>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
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
