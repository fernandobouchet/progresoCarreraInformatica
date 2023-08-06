import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import CourseCardForm from './ui/CourseCardForm';

interface Props {
  course: {
    id: number;
    name: string;
  };
}

const CourseCard = ({ course }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col justify-between h-28 w-full hover:bg-accent transition duration-200 p-3 rounded-2xl border-none cursor-pointer">
          <CardHeader className="p-0">
            <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
          </CardHeader>
          <CardFooter className="p-0 justify-end text-sm">
            <span>Estado</span>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <CourseCardForm course={course} />
    </Dialog>
  );
};

export default CourseCard;
