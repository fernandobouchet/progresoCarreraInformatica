'use client';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import CourseCardForm from '@/components/courseCardForm/CourseCardForm';
import CourseStatusChip from '@/components/CourseStatusChip';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Drawer, DrawerTrigger } from './ui/drawer';

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger disabled asChild>
          <Card className="flex flex-col justify-between h-24 w-full hover:bg-accent hover:text-foreground transition duration-200 p-3 rounded-2xl border-none cursor-pointer">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-medium">
                {course.name}
              </CardTitle>
            </CardHeader>
            <CardFooter className="p-0 justify-end text-sm">
              <CourseStatusChip progress={course?.progress} />
            </CardFooter>
          </Card>
        </DialogTrigger>
        <CourseCardForm course={course} />
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger disabled asChild>
        <Card className="flex flex-col justify-between h-24 w-full hover:bg-accent hover:text-foreground transition duration-200 p-3 rounded-2xl border-none cursor-pointer">
          <CardHeader className="p-0">
            <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
          </CardHeader>
          <CardFooter className="p-0 justify-end text-sm">
            <CourseStatusChip progress={course?.progress} />
          </CardFooter>
        </Card>
      </DrawerTrigger>
      <CourseCardForm course={course} />
    </Drawer>
  );
};

export default CourseCard;
