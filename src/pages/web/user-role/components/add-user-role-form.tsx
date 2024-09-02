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
import { RoleFormSchema, RoleFormValues } from "@/lib/validators/web/user-role";
import {
  useCreateRoleMutation,
  useGetPermissionQuery,
  useGetRoleByIdQuery,
  useUpdateRoleMutation,
} from "@/store/services/erp-main/api/user-role";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import { OrganizationDropdownColumn } from "@/lib/validators";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SECTION_TYPES from "@/constants/section-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PermissionItems from "./PermissionItems";
import { Card } from "@/components/ui/card";

// import { Switch } from "@/components/ui/switch";

export function AddUserRoleForm() {
  const { id } = useParams();
  const [createRole, { isLoading }] = useCreateRoleMutation();
  const { data: permissionsData } = useGetPermissionQuery();
  const [updateRole, { isLoading: updateLoading }] = useUpdateRoleMutation();
  const { data: organizations, isLoading: organizationLoading } =
    useGetOrganizationForDropDownQuery();
  const organizationData = organizations?.data || [];
  const { data: getRoleById } = useGetRoleByIdQuery(`${id}`);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const previousData = getRoleById?.data;

  const form = useForm<RoleFormValues>({
    resolver: zodResolver(RoleFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      permissions: [],
      organization_id: previousData?.organization_id || null,
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData.name || "",
        permissions: previousData.permissions || [],
        organization_id: previousData.organization_id || null,
      });
      setSelectedPermissions(previousData.permissions);
    }
  }, [previousData, form]);

  async function onSubmit(data: RoleFormValues) {
    const updatedData = {
      ...data,
      permissions: selectedPermissions,
    };
    try {
      if (previousData) {
        await updateRole({
          roleId: previousData.id,
          updatedRole: updatedData,
        });
        toast.success("Contact updated successfully");
        // modalClose();
      } else {
        await createRole(updatedData);
        toast.success("Contact created successfully");
        // modalClose();
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
        <Card className="w-1/2 mx-auto p-3">
          <h1 className="text-xl font-bold mb-5">{previousData ? "Edit" : "Add"} User Role</h1>
          {" "}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto space-y-3"
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
              <h3>Permissions</h3>

              <Tabs
                defaultValue={SECTION_TYPES[0].type}
                className="w-full mt-3"
              >
                <TabsList className="w-fit">
                  {SECTION_TYPES.map((item) => (
                    <TabsTrigger key={item.type} value={item.type}>
                      {item.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {SECTION_TYPES.map((item) => (
                  <TabsContent key={item.type} value={item.type}>
                    <PermissionItems
                      selectedPermissions={selectedPermissions}
                      setSelectedPermissions={setSelectedPermissions}
                      data={permissionsData}
                      permissionSection={item.type}
                    />
                    {/* <ChartOfAccountItem
  title={item.title}
  coaType={item.type}
  description={item.description}
  data={chartOfAccount}
/> */}
                  </TabsContent>
                ))}
              </Tabs>

              {/*             <FormField
  control={form.control}
  name="permissions"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Permissions</FormLabel>
      <FormControl>

          <MultiSelect
            options={permissionsData || []}
            value={field.value}
            onChange={field.onChange}
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
        </Card>
      )}
    </>
  );
}
