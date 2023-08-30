import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

interface Props {
  course: Course;
  form: UseFormReturn<
    {
      qualification?: number | null;
      status: 'CURSANDO' | 'PENDIENTE' | 'REGULARIZADA' | 'APROBADA';
    },
    any,
    undefined
  >;
}

const QualificationSelectFormField = ({ form, course }: Props) => {
  return (
    <FormField
      control={form.control}
      name="qualification"
      render={({ field }) => (
        <FormItem className="max-w-fit">
          <FormLabel>Calificación</FormLabel>
          <Select
            disabled={form.watch('status') !== 'APROBADA'}
            onValueChange={field.onChange}
            defaultValue={
              course?.progress
                ? course?.progress[0]?.qualification?.toString()
                : undefined
            }
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Aún sin calificar" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="border-none">
              <ScrollArea className="h-[200px] w-auto rounded-md pr-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value.toString()}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <FormDescription>Estatado de la asignatura.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QualificationSelectFormField;