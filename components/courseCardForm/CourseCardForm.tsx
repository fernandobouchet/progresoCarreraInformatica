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
import { api } from '@/lib/trcp';
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
  const utils = api.useContext();
  const { toast } = useToast();
  const currentStatus = course?.progress?.length
    ? course?.progress[0]?.status
    : 'PENDIENTE';
  const currentQualification = course?.progress?.length
    ? course?.progress[0]?.qualification
    : null;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status: currentStatus,
      qualification: currentQualification,
    },
  });

  const currentSelectStatus = form.watch('status');
  const currentSelectQualification = form.watch('qualification');

  const updateUserCourse = api.user.updateUserCourse.useMutation({
    onMutate: async (newProgressData) => {
      await utils.career.getById.cancel({ id: careerId });

      const previousCareerData = utils.career.getById.getData({ id: careerId });

      const progressData = {
        status: newProgressData.status,
        qualification: newProgressData.qualification,
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
        title: 'Error en la modificación!',
        description: `Lamentablemente, se ha producido un error al intentar modificar la asignatura ${course.name}. Por favor, inténtelo de nuevo.`,
      });
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const submitedData = {
      courseId: course.id,
      status: data.status,
      qualification: data.status === 'APROBADA' ? data.qualification : null,
    };
    updateUserCourse.mutate({ ...submitedData });
  }

  return (
    <DialogContent
      onCloseAutoFocus={() =>
        form.reset({
          status: currentStatus,
          qualification: currentQualification,
        })
      }
      onInteractOutside={() => {
        form.reset({
          status: currentStatus,
          qualification: currentQualification,
        });
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
      <div className="flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center w-full space-y-6"
          >
            <div className="flex gap-20">
              <QualificationSelectFormField course={course} form={form} />
              <StatusSelectFormField course={course} form={form} />
            </div>
            <div className="flex w-full">
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  disabled={
                    (currentSelectStatus !== 'APROBADA' &&
                      currentSelectStatus === currentStatus) ||
                    (currentSelectStatus === 'PENDIENTE' &&
                      currentStatus === undefined) ||
                    (currentSelectStatus === 'APROBADA' &&
                      (currentSelectQualification === undefined ||
                        currentSelectQualification === null ||
                        currentSelectQualification === currentQualification))
                  }
                  type="submit"
                >
                  Guardar
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default CourseCardForm;
