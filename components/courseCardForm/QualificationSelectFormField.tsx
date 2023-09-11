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
import { UseFormReturn } from 'react-hook-form/dist/types/form';

interface Props {
  course: Course;
  form: UseFormReturn<
    {
      qualification: number;
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
      name="status"
      render={({ field }) => (
        <FormItem className="max-w-fit">
          <FormLabel>Estado</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={
              course?.progress?.length
                ? course?.progress[0]?.status
                : 'PENDIENTE'
            }
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el estado actual de la asignatura" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="border-none">
              <SelectItem value="CURSANDO">Cursando</SelectItem>
              <SelectItem value="APROBADA">Aprobada</SelectItem>
              <SelectItem value="PENDIENTE">Pendiente</SelectItem>
              <SelectItem value="REGULARIZADA">Regularizada</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>Este es el estado de la asignatura.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QualificationSelectFormField;
