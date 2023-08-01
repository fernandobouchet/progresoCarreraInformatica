'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Career } from '@prisma/client';
import ColumnOptions from '@/components/ui/table/ColumnOptions';

export const CareerColumn: ColumnDef<Career>[] = [
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
