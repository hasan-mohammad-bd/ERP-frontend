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
  EmployeeGradeFromValues,
  EmployeeGradeColumn,
  EmployeeGradeFormSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { useCreateEmployeeGradeMutation, useUpdateEmployeeGradeMutation } from "@/store/services/hrm/api/employee-grade";


interface AddSectionFormProps {
  modalClose: () => void;
  data?: EmployeeGradeColumn;
}

export function AddEmployeeGradeForm({
  modalClose,
  data: previousData,
}: AddSectionFormProps) {
  const [createEmployeeGrade, { isLoading }] = useCreateEmployeeGradeMutation();
  const [updateEmployeeGrade, { isLoading: updateLoading }] =
    useUpdateEmployeeGradeMutation();

  const form = useForm<EmployeeGradeFromValues>({
    resolver: zodResolver(EmployeeGradeFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      sorting_index: previousData?.sorting_index || 0,
      max_salary: previousData?.max_salary || 0,
      min_salary: previousData?.min_salary || 0,
    },
  });

  async function onSubmit(data: EmployeeGradeFromValues) {
    try {
      if (previousData) {
        await updateEmployeeGrade({
          employeeGradeId: previousData.id,
          updatedEmployeeGrade: data,
        });
        toast.success("Section updated successfully");
        modalClose();
      } else {
        await createEmployeeGrade(data);
        toast.success("Section created successfully");
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
                    <Input placeholder="Enter section name" {...field} />
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
                  <FormLabel>Sorting Index</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter section sorting index"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="min_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min Salary</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter section sorting index"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="max_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Salary</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter section sorting index"
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
