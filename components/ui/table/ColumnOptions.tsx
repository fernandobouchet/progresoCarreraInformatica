import { Icons } from '@/components/icons';
import { Button } from '../button';
import { Career, Course, Period, User } from '@prisma/client';

interface Props {
  itemData: User | Career | Course | Period;
}

const ColumnOptions = (item: Props) => {
  const { itemData } = item;
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        title="Copiar ID"
        size="icon"
        onClick={() => navigator.clipboard.writeText(itemData.id.toString())}
      >
        <Icons.copy className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        title="Editar"
        size="icon"
        onClick={() => console.log(itemData)}
      >
        <Icons.fileEdit className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ColumnOptions;
