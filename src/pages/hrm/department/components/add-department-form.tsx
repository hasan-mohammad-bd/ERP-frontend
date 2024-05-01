import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  DepartmentFromValues,
  DepartmentColumn,
  DepartmentFormSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
} from "@/store/services/hrm/api/department";

interface AddDepartmentFormProps {
  modalClose: () => void;
  data?: DepartmentColumn;
}

export function AddDepartmentForm({
  modalClose,
  data: previousData,
}: AddDepartmentFormProps) {
  const [createDepartment, { isLoading }] = useCreateDepartmentMutation();
  const [updateDepartment, { isLoading: updateLoading }] =
    useUpdateDepartmentMutation();

  const form = useForm<DepartmentFromValues>({
    resolver: zodResolver(DepartmentFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      sorting_index: previousData?.sorting_index || 0,
    },
  });

  async function onSubmit(data: DepartmentFromValues) {
    try {
      if (previousData) {
        await updateDepartment({
          departmentId: previousData.id,
          updatedDepartment: data,
        });
        toast.success("Department updated successfully");
        modalClose();
      } else {
        await createDepartment(data);
        toast.success("Department created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter department name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sorting_index"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sorting</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter department sorting"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
