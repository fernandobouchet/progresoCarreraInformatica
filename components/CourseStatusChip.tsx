import { Chip } from '@/components/ui/chip';
import { capitalizeFirstLetter } from '@/lib/functions';

type Props = {
  progress: {
    status: string;
    qualification: number;
  }[];
};

const CourseStatusChip = ({ progress }: Props) => {
  console.log(progress);
  const normalizedStatus =
    progress?.length >= 1
      ? capitalizeFirstLetter(progress[0].status)
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
