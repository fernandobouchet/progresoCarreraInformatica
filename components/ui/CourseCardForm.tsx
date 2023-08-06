import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './button';

interface Props {
  course: {
    id: number;
    name: string;
  };
}
const CourseCardForm = ({ course }: Props) => {
  return (
    <DialogContent className="max-w-[22rem] sm:max-w-[425px] border-none rounded-2xl">
      <DialogHeader>
        <DialogTitle>{course?.name}</DialogTitle>
        <DialogDescription>
          Modifica el estado y/o la calificación de la materia.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Button>Más información</Button>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default CourseCardForm;
