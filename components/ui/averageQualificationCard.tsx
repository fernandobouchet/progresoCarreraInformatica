import { getCareerAverageQualification } from '@/lib/functions';
import { Chip } from './chip';

interface Props {
  courses: Course[];
}
const AverageQualificationCard = ({ courses }: Props) => {
  const average = getCareerAverageQualification(courses);

  return (
    <div className="flex items-center gap-1">
      <span className="text-xs">Promedio:</span>
      <Chip variant="info" className="rounded-full py-[0.05rem] px-[0.30rem]">
        {average}
      </Chip>
    </div>
  );
};
export default AverageQualificationCard;
