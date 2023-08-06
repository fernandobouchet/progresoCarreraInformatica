import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Career, Course, Period, User } from '@prisma/client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
  itemData: User | Career | Course | Period;
}

const ColumnOptions = (item: Props) => {
  const { itemData } = item;
  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Icons.more className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-32 border-none rounded-2xl"
          align="end"
        >
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem
            className="rounded-2xl cursor-pointer"
            onClick={() =>
              navigator.clipboard.writeText(itemData.id.toString())
            }
          >
            <Icons.copy className="h-4 w-4 mr-2" />
            Copiar ID
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-2xl cursor-pointer"
            onClick={() => console.log(itemData)}
          >
            <Icons.fileEdit className="h-4 w-4 mr-2" />
            Editar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ColumnOptions;
