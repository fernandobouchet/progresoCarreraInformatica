import * as z from 'zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import QualificationSelectFormField from '@/components/courseCardForm/StatusSelectFormField';
import StatusSelectFormField from '@/components/courseCardForm/QualificationSelectFormField';
import { DialogClose } from '@radix-ui/react-dialog';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/lib/trcp';
import { FormSchema } from './CourseCardForm';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  form: UseFormReturn<
    {
      status: keyof typeof CourseStatus;
      qualification: number | null;
    },
    any,
    undefined
  >;
  course: Course;
}

const CourseForm = ({ form, course }: Props) => {
  const utils = api.useUtils();
  const { toast } = useToast();

  const updateUserCourse = api.user.updateUserCourse.useMutation({
    onMutate: async (newProgressData) => {
      await utils.user.getUserCourses.cancel();

      const previousCareerData = utils.user.getUserCourses.getData();

      const progressData = {
        courseId: newProgressData.courseId,
        status: newProgressData.status,
        qualification: newProgressData.qualification,
      };

      // @ts-ignore
      utils.user.getUserCourses.setData(undefined, (oldData) => {
        if (!oldData) {
          return null;
        }

        const findedCourseIndex = oldData.findIndex(
          (course) => course.courseId === progressData.courseId
        );

        let updatedCourses = [...oldData];

        if (findedCourseIndex === -1) {
          // Course not found, add it to the array
          updatedCourses = [...updatedCourses, progressData];
        } else {
          // Course found, modify it in the array
          updatedCourses[findedCourseIndex] = {
            ...progressData,
          };
        }
        return updatedCourses;
      });
      return { previousCareerData };
    },
    onError: (err, _newProgressData, context) => {
      utils.user.getUserCourses.setData(undefined, context?.previousCareerData);
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

  const currentStatus = course?.progress?.length
    ? course?.progress[0]?.status
    : 'PENDIENTE';
  const currentQualification = course?.progress?.length
    ? course?.progress[0]?.qualification
    : null;

  const currentSelectStatus = form.watch('status');
  const currentSelectQualification = form.watch('qualification');

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center w-full space-y-6"
      >
        <div className="flex w-full justify-evenly">
          <QualificationSelectFormField course={course} form={form} />
          <StatusSelectFormField course={course} form={form} />
        </div>
        <div className="flex w-full">
          <DialogClose asChild>
            <Button
              variant="default"
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
              className="ml-auto"
            >
              Guardar
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};
export default CourseForm;
