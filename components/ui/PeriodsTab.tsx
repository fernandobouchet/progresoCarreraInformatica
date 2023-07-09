import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Props {
  courses: {
    id: string;
    name: string;
    number: number;
    area: string | null;
    hsWeekly: number | null;
    hsTotal: number | null;
    hasCorrelatives: boolean;
    hasOptatives: boolean;
    hasEquivalents: boolean;
    periodsIDs: string[];
  }[];
}

const PeriodsTab = ({ courses }: Props) => {
  console.log(courses);
  return (
    <Tabs defaultValue="password" className="w-full">
      <TabsList className="flex w-full p-0 h-14 border-none bg-slate-200 dark:bg-neutral-800 rounded-full shadow-sm">
        <TabsTrigger
          value="password"
          className="rounded-full h-full text-base w-full data-[state=active]:bg-sky-200 dark:data-[state=active]:bg-sky-800"
        >
          1er
        </TabsTrigger>
      </TabsList>
      <TabsContent value="password">
        <h2>Content</h2>
      </TabsContent>
    </Tabs>
  );
};
export { PeriodsTab };
