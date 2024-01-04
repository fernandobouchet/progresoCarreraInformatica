import { Skeleton } from '@/components/ui/skeleton';

const PeriodsTabSkeleton = () => {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <>
      <Skeleton className="w-full py-1 h-16 flex lg:max-w-2xl mt-4 mb-11"></Skeleton>
      <div className="flex flex-col h-full w-full">
        <Skeleton className="w-full h-14 border-none rounded-full" />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {skeletonArray.map((_, index) => (
            <Skeleton key={index} className="h-24 py-1 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeriodsTabSkeleton;
