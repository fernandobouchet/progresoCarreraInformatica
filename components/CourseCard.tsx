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
        <div className="h-28 w-full bg-material-light-surface dark:bg-material-dark-surface text-material-light-on-surface dark:text-material-dark-on-surface hover:bg-sky-200 dark:hover:bg-sky-800 transition duration-300 p-3 rounded-2xl cursor-pointer">
          {course.name}
        </div>
      </DialogTrigger>
      <CourseCardForm course={course} />
    </Dialog>
  );
};

export default CourseCard;
