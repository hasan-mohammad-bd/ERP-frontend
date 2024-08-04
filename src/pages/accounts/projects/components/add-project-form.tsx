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
import { Loading } from "@/components/common/loading";
import { Textarea } from "@/components/ui/textarea";
import {
  ProjectFromValues,
  ProjectRow,
  projectSchema,
} from "@/lib/validators/accounts/projects";
import {
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "@/store/services/accounts/api/project";
// import { Switch } from "@/components/ui/switch";

interface AddCostCategoryFormProps {
  modalClose: () => void;
  rowData?: ProjectRow;
}

export function AddProjectForm({
  modalClose,
  rowData: previousData,
}: AddCostCategoryFormProps) {
  const [createProjectCategory, { isLoading }] = useCreateProjectMutation();
  const [updateProjectCategory, { isLoading: updateLoading }] =
    useUpdateProjectMutation();

  const form = useForm<ProjectFromValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: previousData?.name || "",
      description: previousData?.description || "",
      sorting_index: previousData?.sorting_index || 0,
    },
  });

  async function onSubmit(data: ProjectFromValues) {
    try {
      if (previousData) {
        await updateProjectCategory({
          projectId: previousData.id,
          updatedProject: data,
        });
        toast.success("Project updated successfully");
        modalClose();
      } else {
        await createProjectCategory(data);
        toast.success("Project created successfully");
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
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your description here."
                      {...field}
                      value={field.value || ""}
                    />
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
                      placeholder="Enter Sorting Index"
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
