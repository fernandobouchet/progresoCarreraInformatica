import { PeriodsTab } from '@/components/ui/PeriodsTab';
import prisma from '@/lib/prisma';

const PageLicenciatura = async () => {
  const data = await prisma.period.findMany({
    include: {
      courses: true,
    },
  });

  return (
    <main className="flex flex-col items-center">
      <h2 className="text-2xl font-medium pb-4">Licenciatura en informática</h2>
      <PeriodsTab data={data} />
    </main>
  );
};
export default PageLicenciatura;
