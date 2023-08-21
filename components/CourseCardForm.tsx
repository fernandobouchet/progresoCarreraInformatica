'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
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

type Props = {
  course: Course;
};

const FormSchema = z.object({
  status: z.nativeEnum(CourseStatus),
  qualification: z.coerce.number().min(0).max(10),
});

const CourseCardForm = ({ course }: Props) => {
  const { mutate } = useSWRConfig();

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
    mutate(
      (key) =>
        typeof key === 'string' && key.startsWith('/api/public/careers/'),
      course.progress.length
        ? updateUserCourse(course.id, data)
        : createUserCourse(course.id, data),
      {
        populateCache: (
          updatedUserCourse: UpdatedUserCourseResponse,
          cacheData: CareerFullData
        ) => {
          const updatedCacheData = updateCourseInCache(
            updatedUserCourse,
            cacheData,
            course.id
          );
          return updatedCacheData;
        },
        revalidate: false,
      }
    );
  }

  return (
    <DialogContent className="max-w-[calc(100dvw-1rem)] sm:max-w-[40rem] border-none rounded-2xl">
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
                        <SelectItem value="REGULARIZADA">
                          Regularizada
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Este es el estado de la asignatura.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem className="max-w-fit">
                    <FormLabel>Calificación</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        course?.progress?.length
                          ? course.progress[0].qualification.toString()
                          : '0'
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona la calificación de la asignatura" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-none">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                          <SelectItem key={value} value={value.toString()}>
                            {value.toString()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Esta es la calificación de la asignatura.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogClose asChild>
              <Button type="submit">Guardar</Button>
            </DialogClose>
          </form>
        </Form>
        <Button>Más información</Button>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default CourseCardForm;
