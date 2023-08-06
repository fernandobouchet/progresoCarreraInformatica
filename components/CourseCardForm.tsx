import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Props {
  course: {
    id: number;
    name: string;
  };
}
const CourseCardForm = ({ course }: Props) => {
  return (
    <DialogContent className="max-w-[calc(100dvw-1rem)] sm:max-w-[40rem] border-none rounded-2xl">
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
