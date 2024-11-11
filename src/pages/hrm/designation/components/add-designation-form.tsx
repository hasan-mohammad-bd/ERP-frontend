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
  DesignationColumn,
  DesignationFormSchema,
  DesignationFromValues,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import {
  useCreateDesignationMutation,
  useUpdateDesignationMutation,
} from "@/store/services/hrm/api/designation";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddDesignationFormProps {
  modalClose: () => void;
  data?: DesignationColumn;
}

export function AddDesignationForm({
  modalClose,
  data: previousData,
}: AddDesignationFormProps) {
  const [createDesignation, { isLoading }] = useCreateDesignationMutation();
  const [updateDesignation, { isLoading: updateLoading }] =
    useUpdateDesignationMutation();

  const form = useForm<DesignationFromValues>({
    resolver: zodResolver(DesignationFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      sorting_index: previousData?.sorting_index || 0,
    },
  });

  async function onSubmit(data: DesignationFromValues) {
    try {
      if (previousData) {
        await updateDesignation({
          designationId: previousData.id,
          updatedDesignation: data,
        }).unwrap();
        toast.success("Designation updated successfully");
        modalClose();
      } else {
        await createDesignation(data).unwrap();
        toast.success("Designation created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
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
                    <Input placeholder="Enter designation name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
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
            /> */}
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
