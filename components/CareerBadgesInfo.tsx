import { Chip } from '@/components/ui/chip';

interface Props {
  progress: CareerProgress;
}

const CareerBadgesInfo = ({ progress }: Props) => {
  return (
    <div className="flex w-full justify-center gap-1 lg:gap-8 text-center py-4">
      <Chip variant={'success'}>Aprobadas {progress.APROBADA.length}</Chip>
      <Chip variant={'default'}>Cursando {progress.CURSANDO.length}</Chip>
      <Chip variant={'caution'}>
        Regularizadas {progress.REGULARIZADA.length}
      </Chip>
      <Chip variant={'muted'}>Pendientes {progress.PENDIENTE.length}</Chip>
    </div>
  );
};

export default CareerBadgesInfo;
