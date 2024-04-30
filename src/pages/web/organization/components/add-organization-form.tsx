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

  OrganizationColumn,
  OrganizationFromValues,
  OrganizationFormSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  useCreateOrganizationMutation,
  useUpdateOrganizationMutation,
} from "@/store/services/erp-main/api/organization";

interface AddOrganizationFormProps {
  modalClose: () => void;
  data?: OrganizationColumn;
}

export function AddOrganizationForm({
  modalClose,
  data: previousData,
}: AddOrganizationFormProps) {
  const [createOrganization, { isLoading }] = useCreateOrganizationMutation();
  const [updatedOrganization, { isLoading: updateLoading }] =
    useUpdateOrganizationMutation();

  const form = useForm<OrganizationFromValues>({
    resolver: zodResolver(OrganizationFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      sorting_index: previousData?.sorting_index || 0,
    },
  });

  async function onSubmit(data: OrganizationFromValues) {
    try {
      if (previousData) {
        await updatedOrganization({
          organizationId: previousData.id,
          updatedOrganization: data,
        });
        toast.success("Organization updated successfully");
        modalClose();
      } else {
        await createOrganization(data);
        toast.success("Organization created successfully");
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
                    <Input placeholder="Enter organization name" {...field} />
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
                      placeholder="Enter organization sorting"
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
