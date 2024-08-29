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
import {} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RoleFormSchema,
  RoleFormValues,
} from "@/lib/validators/web/user-role";
import {
  useCreateRoleMutation,
  useGetPermissionQuery,
  useUpdateRoleMutation,
} from "@/store/services/erp-main/api/user-role";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import { OrganizationDropdownColumn } from "@/lib/validators";
import { UsersRow } from "@/lib/validators/web/users";
// import { Switch } from "@/components/ui/switch";

interface AddUsersProps {
  modalClose: () => void;
  rowData?: UsersRow;
}

export function AddUsers({
  modalClose,
  rowData: previousData,
}: AddUsersProps) {
  const [createRole, { isLoading }] = useCreateRoleMutation();
  const { data: permissionsData } =
    useGetPermissionQuery();
  const [updateRole, { isLoading: updateLoading }] = useUpdateRoleMutation();
  const { data: organizations, isLoading: organizationLoading } =
    useGetOrganizationForDropDownQuery();
  const organizationData = organizations?.data || [];

console.log(permissionsData)
  const form = useForm<RoleFormValues>({
    resolver: zodResolver(RoleFormSchema),
    defaultValues: {
      name: previousData?.name || "",

      organization_id: previousData?.organization_id || null,
    },
  });

  async function onSubmit(data: RoleFormValues) {
    try {
      if (previousData) {
        await updateRole({
          roleId: previousData.id,
          updatedRole: data,
        });
        toast.success("Contact updated successfully");
        modalClose();
      } else {
        await createRole(data);
        toast.success("Contact created successfully");
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
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization_id
                        ? String(previousData.organization_id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Organization" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
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
