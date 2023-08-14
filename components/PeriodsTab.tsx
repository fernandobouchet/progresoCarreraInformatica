'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatPeriodOrder } from '@/lib/functions';
import CourseCard from '@/components/CourseCard';
import { trpc } from '@/lib/trcp';
import PeriodsTabSkeleton from './PeriodsTabSkeleton';

const PeriodsTab = ({ id }: { id: number }) => {
  const {
    data: career,
    isLoading,
    isError,
  } = trpc.career.getById.useQuery({ id: id });

  if (isLoading) return <PeriodsTabSkeleton />;

  if (isError || career === undefined) return <h2>Error</h2>;

  return (
    <Tabs defaultValue={'1'} className="w-full">
      <TabsList className="flex w-full p-0 h-14 border-none rounded-full shadow-sm bg-card">
        {career?.periods?.map((period) => (
          <TabsTrigger
            value={period.order.toString()}
            className="rounded-full h-full text-base w-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:hover:bg-accent/90 hover:bg-muted hover:text-foreground"
            key={period.id}
          >
            {formatPeriodOrder(period.order)}
          </TabsTrigger>
        ))}
      </TabsList>
      {career?.periods?.map((period) => (
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
