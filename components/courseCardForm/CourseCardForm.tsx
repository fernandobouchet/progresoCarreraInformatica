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
import { useSWRConfig } from 'swr';
import { createUserCourse, updateUserCourse } from '@/lib/services/user/course';
import { updateCourseInCache } from '@/lib/functions';
import { CourseStatus } from '@prisma/client';
import { DialogClose } from '@radix-ui/react-dialog';
import { useCareer } from '@/lib/services/public/careers';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';
import QualificationSelectFormField from './QualificationSelectFormField';
import StatusSelectFormField from './StatusSelectFormField';

type Props = {
  course: Course;
  careerId: number;
};

const FormSchema = z.object({
  status: z.nativeEnum(CourseStatus),
  qualification: z.coerce.number().min(0).max(10),
});

const CourseCardForm = ({ course, careerId }: Props) => {
  const { mutate } = useSWRConfig();
  const { career } = useCareer(careerId);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status: course?.progress?.length
        ? course.progress[0].status
        : 'PENDIENTE',
      qualification: course?.progress?.length
        ? course.progress[0].qualification
        : 0,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (!career) return;
      mutate(
        (key: string) => key.startsWith('/api/public/careers/'),
        course.progress.length
          ? updateUserCourse(course.id, data)
          : createUserCourse(course.id, data),
        {
          optimisticData: () => {
            return updateCourseInCache(
              { data },
              { data: { career } },
              course.id
            );
          },
          rollbackOnError: true,
          populateCache: (
            data: UpdatedUserCourseResponse,
            cacheData: CareerFullData
          ) => {
            return updateCourseInCache(data, cacheData, course.id);
          },
          revalidate: false,
        }
      );
      toast({
        variant: 'default',
        title: 'Modificación realizada con éxito!',
        description: `Se modificó exitosamente la asignatura ${course.name}.`,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Falló en realizar la modificación!',
        description: `Hubo un error al intentar modificar la asignatura ${course.name}, por favor intente nuevamente.`,
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      });
    }
  }

  return (
    <DialogContent className="max-w-[calc(100dvw-1rem)] sm:max-w-[40rem] border-none rounded-2xl">
      <DialogHeader>
        <DialogTitle>{course?.name}</DialogTitle>
        <DialogDescription>
          Modifica el estado y/o la calificación de la asignatura.
        </DialogDescription>
      </DialogHeader>
      <div className="flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center w-full space-y-6"
          >
            <div className="flex gap-20">
              <StatusSelectFormField course={course} form={form} />
              <QualificationSelectFormField course={course} form={form} />
            </div>
            <div className="flex w-full">
              <DialogClose asChild>
                <Button className="ml-auto" disabled={!career} type="submit">
                  Guardar cambios
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};

export default CourseCardForm;
