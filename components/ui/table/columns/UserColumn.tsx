'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@prisma/client';
import ColumnOptions from '@/components/ui/table/ColumnOptions';

export const UserColumn: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => {
      const item = row.original;
      const abreviatedId = `${item.id.slice(0, 4)}..`;
      return abreviatedId;
    },
  },
  {
    accessorKey: 'name',
    header: 'Usuario',
  },
  {
    accessorKey: 'role',
    header: 'Rol',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original;
      return <ColumnOptions itemData={item} />;
    },
  },
];
