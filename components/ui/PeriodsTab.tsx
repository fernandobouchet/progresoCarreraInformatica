import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatPeriodOrder } from '@/lib/functions';
import CourseCard from '../CourseCard';

interface Props {
  periods: {
    id: number;
    order: number;
    courses: {
      id: number;
      name: string;
    }[];
  }[];
}

const PeriodsTab = ({ periods }: Props) => {
  return (
    <Tabs defaultValue={'1'} className="w-full">
      <TabsList className="flex w-full p-0 h-14 border-none bg-slate-200 dark:bg-neutral-800 rounded-full shadow-sm">
        {periods?.map((period) => (
          <TabsTrigger
            value={period.order.toString()}
            className="rounded-full h-full text-base w-full data-[state=active]:bg-sky-200 dark:data-[state=active]:bg-sky-800"
            key={period.id}
          >
            {formatPeriodOrder(period.order)}
          </TabsTrigger>
        ))}
      </TabsList>
      {periods?.map((period) => (
        <TabsContent key={period.id} value={period.order.toString()}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {period.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
export { PeriodsTab };
