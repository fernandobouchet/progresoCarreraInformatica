'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CourseStatus } from '@prisma/client';
import { DialogClose } from '@radix-ui/react-dialog';
import { useToast } from '@/components/ui/use-toast';
import { trpc } from '@/lib/trcp';
import QualificationSelectFormField from './StatusSelectFormField';
import StatusSelectFormField from './QualificationSelectFormField';

type Props = {
  course: Course;
  careerId: number;
};

const FormSchema = z.object({
  status: z.nativeEnum(CourseStatus),
  qualification: z.coerce.number().min(0).max(10).nullable().optional(),
});

const CourseCardForm = ({ course, careerId }: Props) => {
  const utils = trpc.useContext();
  const { toast } = useToast();
  const currentStatus = course?.progress
    ? course?.progress[0]?.status
    : 'PENDIENTE';
  const currentQualification = course?.progress
    ? course?.progress[0]?.qualification
    : null;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status: currentStatus,
      qualification: currentQualification,
    },
  });

  const updateUserCourse = trpc.user.updateUserCourse.useMutation({
    onMutate: async (newProgressData) => {
      await utils.career.getById.cancel({ id: careerId });

      const previousCareerData = utils.career.getById.getData({ id: careerId });

      const progressData = {
        status: newProgressData.status,
        qualification:
          newProgressData.status === 'APROBADA'
            ? newProgressData.qualification
            : null,
      };

      // @ts-ignore
      utils.career.getById.setData({ id: careerId }, (oldData) => {
        if (!oldData) {
          return null;
        }

        const updatedPeriods = oldData.periods.map((cachedPeriod) => ({
          ...cachedPeriod,
          courses: cachedPeriod.courses.map((cachedCourse) =>
            cachedCourse.id === newProgressData.courseId
              ? { ...cachedCourse, progress: [progressData] }
              : cachedCourse
          ),
        }));

        return { ...oldData, periods: updatedPeriods };
      });

      return { previousCareerData };
    },
    onError: (err, _newProgressData, context) => {
      utils.career.getById.setData(
        { id: careerId },
        context?.previousCareerData
      );
      toast({
        variant: 'destructive',
        title: 'Falló en realizar la modificación!',
        description: `Hubo un error al intentar modificar la asignatura ${course.name}, por favor intente nuevamente.`,
      });
    },
    onSuccess: () => {
      toast({
        variant: 'default',
        title: 'Modificación realizada con éxito!',
        description: `Se modificó exitosamente la asignatura ${course.name}.`,
      });
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    updateUserCourse.mutate({ courseId: course.id, ...data });
  }

  return (
    <DialogContent
      onCloseAutoFocus={() => form.reset()}
      onInteractOutside={() => {
        form.reset();
      }}
      asChild={false}
      className="max-w-[calc(100dvw-1rem)] sm:max-w-[40rem] border-none rounded-2xl"
    >
      <DialogHeader>
        <DialogTitle>{course?.name}</DialogTitle>
        <DialogDescription>
          Modifica el estado y/o la calificación de la materia.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div className="flex justify-between">
              <QualificationSelectFormField course={course} form={form} />
              <StatusSelectFormField course={course} form={form} />
            </div>
            <DialogClose asChild>
              <Button
                disabled={
                  (form.watch('status') !== 'APROBADA' &&
                    form.watch('status') === currentStatus) ||
                  (form.watch('status') === 'PENDIENTE' &&
                    currentStatus === undefined) ||
                  (form.watch('status') === 'APROBADA' &&
                    (form.watch('qualification') === undefined ||
                      Number(form.watch('qualification')) ===
                        currentQualification))
                }
                type="submit"
              >
                Guardar
              </Button>
            </DialogClose>
          </form>
        </Form>
        <DialogFooter>
          <Button>Más información</Button>
        </DialogFooter>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default CourseCardForm;
