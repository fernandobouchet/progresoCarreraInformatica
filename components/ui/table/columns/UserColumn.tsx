'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@prisma/client';
import ColumnOptions from '@/components/ui/table/ColumnOptions';

export const UserColumn: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Usuario',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Rol',
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
