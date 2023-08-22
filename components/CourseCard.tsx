import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import CourseCardForm from '@/components/CourseCardForm';
import CourseStatusChip from '@/components/CourseStatusChip';

interface Props {
  course: Course;
  careerId: number;
}

const CourseCard = ({ course, careerId }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col justify-between h-28 w-full hover:bg-accent hover:text-foreground transition duration-200 p-3 rounded-2xl border-none cursor-pointer">
          <CardHeader className="p-0">
            <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
          </CardHeader>
          <CardFooter className="p-0 justify-end text-sm">
            <CourseStatusChip progress={course.progress} />
          </CardFooter>
        </Card>
      </DialogTrigger>
      <CourseCardForm course={course} careerId={careerId} />
    </Dialog>
  );
};

export default CourseCard;
