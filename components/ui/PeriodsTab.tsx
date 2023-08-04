import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatPeriodOrder } from '@/lib/functions';

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
    <Tabs
      defaultValue={periods ? periods[0].id.toString() : '1'}
      className="w-full"
    >
      <TabsList className="flex w-full p-0 h-14 border-none bg-slate-200 dark:bg-neutral-800 rounded-full shadow-sm">
        {periods?.map((period) => (
          <TabsTrigger
            value={period.id.toString()}
            className="rounded-full h-full text-base w-full data-[state=active]:bg-sky-200 dark:data-[state=active]:bg-sky-800"
            key={period.id}
          >
            {formatPeriodOrder(period.order)}
          </TabsTrigger>
        ))}
      </TabsList>
      {periods?.map((period) =>
        period.courses.map((course) => (
          <TabsContent key={course.id} value={period.id.toString()}>
            <p>{course.name}</p>
          </TabsContent>
        ))
      )}
    </Tabs>
  );
};
export { PeriodsTab };
