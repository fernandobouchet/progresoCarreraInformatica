'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { addUserCareer, useUserCareer } from '@/lib/services/user/career';

const items = [
  {
    id: 1,
    label: 'Licenciatura',
  },
  {
    id: 2,
    label: 'Tecnicatura en informática',
  },
  {
    id: 3,
    label: 'Tecnicatura en programación',
  },
  {
    id: 4,
    label: 'Tecnicatura en redes y operaciones',
  },
  {
    id: 5,
    label: 'Tecnicatura en inteligencia artificial',
  },
  {
    id: 6,
    label: 'Tecnicatura en videojuegos',
  },
] as const;

const displayFormSchema = z.object({
  items: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

type DisplayFormValues = z.infer<typeof displayFormSchema>;

const DisplayOptions = () => {
  const { career, isLoading, isError, mutate } = useUserCareer();

  const newData = career?.userCareers.map((c: any) => c.career.id);
  console.log(newData);
  console.log(career, isLoading, isError);
  // This can come from your database or API.

  const defaultValues: Partial<DisplayFormValues> = career
    ? { items: newData }
    : {
        items: [1, 2, 3, 4, 5, 6],
      };

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  });

  async function onSubmit(data: DisplayFormValues) {
    await addUserCareer(data.items);
    mutate({ ...data.items });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            defaultChecked
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Actualizar cambios</Button>
      </form>
    </Form>
  );
};

export default DisplayOptions;
