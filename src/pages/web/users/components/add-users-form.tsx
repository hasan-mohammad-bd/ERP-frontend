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


import { LocationColumn, OrganizationDropdownColumn } from "@/lib/validators";
import {
  UsersFormSchema,
  UsersFormValues,
  UsersRow,
} from "@/lib/validators/web/users";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "@/store/services/erp-main/api/users";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useGetRolesQuery } from "@/store/services/erp-main/api/user-role";
import { RoleRow } from "@/lib/validators/web/user-role";
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import FileUploadSingle from "@/components/common/file-upload-single";
import { serialize } from "object-to-formdata";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useGetOrganizationsQuery } from "@/store/services/erp-main/api/organization";

// import { Switch } from "@/components/ui/switch";

interface AddUsersProps {
  modalClose: () => void;
  rowData?: UsersRow;
}

export function AddUsers({ modalClose, rowData: previousData }: AddUsersProps) {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  const { data: organizations, isLoading: organizationLoading } =
  useGetOrganizationsQuery(`page=1&per_page=1000`);

  const { data: locations, isLoading: locationsLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const { data: roles, isLoading: rolesLoading } = useGetRolesQuery(
    "page=1&per_page=1000"
  );

  const organizationData = organizations?.data || [];
  const locationData = locations?.data || [];
  const roleData = roles?.data || [];

  const [isPasswordType, setIsPasswordType] = React.useState(true);
  const [isConfirmPasswordType, setIsConfirmPasswordType] =
    React.useState(true);

    const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const form = useForm<UsersFormValues>({
    resolver: zodResolver(UsersFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      email: previousData?.email || "",
      username: previousData?.username || "",
      organization_id: previousData?.organization_id || null,
      phone: previousData?.phone || null,
      location_id: previousData?.location_id || null,
      role_id: previousData?.role_id || null,
    },
  });

  console.log(previousData?.location_id)

  async function onSubmit(data: UsersFormValues) {
    try {
      const formDataForUpdate = serialize(
        {
          ...data,
          image: uploadedImage || null,
          // banner: uploadedBanner || null,
          _method: "PUT",
        },
        { indices: true }
      );
      const formDataForCreate = serialize(
        {
          ...data,
          image: uploadedImage || null,
          // _method: "PUT",
        },
        { indices: true }
      );
      if (previousData) {
        await updateUser({
          userId: previousData.id,
          updatedUser: formDataForUpdate,
        }).unwrap();
        toast.success("Contact updated successfully");
        modalClose();
      } else {
        await createUser(formDataForCreate).unwrap();
        toast.success("Contact created successfully");
        modalClose();
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
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
            <div className=" grid grid-cols-2 gap-4">
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Username"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Email"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Phone"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isPasswordType ? "password" : "text"}
                          placeholder="Enter Password"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span
                  className="cursor-pointer absolute top-9 translate-y-1/2 right-3"
                  onClick={() => setIsPasswordType((prev) => !prev)}
                >
                  {isPasswordType ? <Eye size={18} /> : <EyeClosedIcon />}
                </span>
              </div>
              <div className="relative">
                <FormField
                  control={form.control}
                  name="password_confirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isConfirmPasswordType ? "password" : "text"}
                          placeholder="Enter Password"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage>
                        {form.getValues("password") !== field.value && (
                          <p className="text-red-500">Password does not match</p>
                        )}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <span
                  className="cursor-pointer absolute top-9 translate-y-1/2 right-3"
                  onClick={() => setIsConfirmPasswordType((prev) => !prev)}
                >
                  {isConfirmPasswordType ? (
                    <Eye size={18} />
                  ) : (
                    <EyeClosedIcon />
                  )}
                </span>
              </div>


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
              <FormField
                control={form.control}
                name="location_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        previousData?.location_id
                          ? String(previousData.location_id)
                          : undefined
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locationsLoading ? (
                          <Loading />
                        ) : (
                          locationData?.map((location: LocationColumn) => (
                            <SelectItem
                              key={location.id}
                              value={String(location.id)}
                            >
                              {location.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        previousData?.role_id
                          ? String(previousData.role_id)
                          : undefined
                      }
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select User Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {rolesLoading ? (
                          <Loading />
                        ) : (
                          roleData?.map((role: RoleRow) => (
                            <SelectItem key={role.id} value={String(role.id)}>
                              {role.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <div className="space-y-2">
                  <FormLabel>Image</FormLabel>
                  <FileUploadSingle
                    image={previousData?.image}
                    setUploadedFile={setUploadedImage}
                  />
                </div>
                            
            </div>

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
