import { Chip } from '@/components/ui/chip';
import { capitalizeFirstLetter } from '@/lib/functions';
import { CourseStatus } from '@prisma/client';

type Props = {
  progress?:
    | {
        status: keyof typeof CourseStatus;
        qualification: number | null;
      }[];
};

const CourseStatusChip = ({ progress }: Props) => {
  const normalizedStatus = progress?.length
    ? capitalizeFirstLetter(progress[0]?.status)
    : 'Pendiente';

  return (
    <Chip
      variant={
        normalizedStatus === 'Cursando'
          ? 'default'
          : normalizedStatus === 'Regularizada'
          ? 'caution'
          : normalizedStatus === 'Aprobada'
          ? 'success'
          : 'muted'
      }
    >
      {normalizedStatus}
    </Chip>
  );
};

export default CourseStatusChip;
