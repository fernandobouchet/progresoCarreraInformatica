import { Skeleton } from '@/components/ui/skeleton';

const PeriodsTabSkeleton = () => {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <Skeleton className="w-full p-0 h-14 border-none rounded-full" />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {skeletonArray.map((_, index) => (
            <Skeleton key={index} className="h-28 w-full p-3 rounded-2xl" />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeriodsTabSkeleton;
