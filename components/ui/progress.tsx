import { Chip } from './chip';

interface Props {
  data: CareerProgress;
}

const Progress = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <Chip
            className="
                   text-xs
                   font-semibold
                   inline-block
                   py-1
                   px-2                  
                   rounded-full
                   text-info-foreground
                   bg-info
                   "
          >
            Progreso de la carrera
          </Chip>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-info-foreground">
            {((data.APROBADA.length * 100) / data.TOTAL).toFixed(0)}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-4 mb-4 text-xs flex rounded">
        <div
          style={{
            width: `${((data.APROBADA.length * 100) / data.TOTAL).toFixed(0)}%`,
          }}
          className={`
                shadow-none
                flex flex-col
                text-center whitespace-nowrap
                text-success-foreground
                justify-center
                bg-success
                font-semibold
                w-[${((data.APROBADA.length * 100) / data.TOTAL).toFixed(0)}%]
                `}
        >
          {((data.APROBADA.length * 100) / data.TOTAL).toFixed(0)}%
        </div>
        <div
          style={{
            width: `${((data.CURSANDO.length * 100) / data.TOTAL).toFixed(0)}%`,
          }}
          className={`
          shadow-none
          flex flex-col
          text-center whitespace-nowrap
          text-default-foreground
          justify-center
          font-semibold
          bg-default

          `}
        >
          {((data.CURSANDO.length * 100) / data.TOTAL).toFixed(0)}%
        </div>
        <div
          style={{
            width: `${((data.REGULARIZADA.length * 100) / data.TOTAL).toFixed(
              0
            )}%`,
          }}
          className={`
                   shadow-none
                   flex flex-col
                   text-center whitespace-nowrap
                   text-caution-foreground
                   justify-center
                   bg-caution
                   font-semibold

                   w-[${((data.REGULARIZADA.length * 100) / data.TOTAL).toFixed(
                     0
                   )}%]

                   `}
        >
          {((data.REGULARIZADA.length * 100) / data.TOTAL).toFixed(0)}%
        </div>
        <div
          style={{
            width: `${((data.PENDIENTE.length * 100) / data.TOTAL).toFixed(
              0
            )}%`,
          }}
          className={`
          shadow-none
          flex flex-col
          text-center whitespace-nowrap
          text-muted-foreground
          justify-center
          bg-muted
          font-semibold

          w-[${((data.PENDIENTE.length * 100) / data.TOTAL).toFixed(0)}%]
          `}
        >
          {((data.PENDIENTE.length * 100) / data.TOTAL).toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export { Progress };
