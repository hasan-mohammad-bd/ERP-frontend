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
  LocationFormSchema,
  LocationFromValues,
  LocationColumn,
  OrganizationColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  useCreateLocationMutation,
  useUpdateLocationMutation,
} from "@/store/services/erp-main/api/location";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetOrganizationsQuery } from "@/store/services/erp-main/api/organization";

interface AddLocationFormProps {
  modalClose: () => void;
  data?: LocationColumn;
}

export function AddLocationForm({
  modalClose,
  data: previousData,
}: AddLocationFormProps) {
  const [createLocation, { isLoading }] = useCreateLocationMutation();
  const [updatedLocation, { isLoading: updateLoading }] =
    useUpdateLocationMutation();

    const { data, isLoading: organizationLoading } = useGetOrganizationsQuery();

  const organizationData = data?.data || [];

  const form = useForm<LocationFromValues>({
    resolver: zodResolver(LocationFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      sorting_index: previousData?.sorting_index || 0,
      organization_id: previousData?.organization?.id || 1,
    },
  });

  async function onSubmit(data: LocationFromValues) {
    try {
      if (previousData) {
        await updatedLocation({
          locationId: previousData.id,
          updatedLocation: data,
        });
        toast.success("Location updated successfully");
        modalClose();
      } else {
        await createLocation(data);
        toast.success("Location created successfully");
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
                    <Input placeholder="Enter location name" {...field} />
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
                      placeholder="Enter location sorting"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(previousData?.organization?.id)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)} // Convert organization.id to string
                            >
                              {organization.name}
                            </SelectItem>
                          )
                        )
                      )}
                    </SelectContent>
                  </Select>
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
