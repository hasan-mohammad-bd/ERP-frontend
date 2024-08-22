import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
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
import { Card, CardTitle } from "@/components/ui/card";
import { Delete, Plus, Trash2 } from "lucide-react";
import FileUpload from "@/components/common/file-uploader";
import { serialize } from "object-to-formdata";

interface AddOrganizationFormProps {
  data?: OrganizationColumn;
}

export function AddOrganizationForm({
  data: previousData,
}: AddOrganizationFormProps) {
  const [createOrganization, { isLoading }] = useCreateOrganizationMutation();
  const [updatedOrganization, { isLoading: updateLoading }] =
    useUpdateOrganizationMutation();
  const [uploadedLogo, setUploadedLogo] = useState<File[]>([]);
  const [uploadedBanner, setUploadedBanner] = useState<File[]>([]);

  const form = useForm<OrganizationFromValues>({
    resolver: zodResolver(OrganizationFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      title: previousData?.title || "",
      logo: previousData?.logo || null,
      banner: previousData?.banner || null,
      phone: previousData?.phone || [], // Start with an empty array
      email: previousData?.email || [], // Start with an empty array
      address: previousData?.address || [], // Start with an empty array
      website: previousData?.website || [], // Start with an empty array
      sorting_index: previousData?.sorting_index || 0,
    },
  });

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control: form.control,
    name: "phone",
  });

  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control: form.control,
    name: "email",
  });

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
  } = useFieldArray({
    control: form.control,
    name: "address",
  });

  const {
    fields: websiteFields,
    append: appendWebsite,
    remove: removeWebsite,
  } = useFieldArray({
    control: form.control,
    name: "website",
  });

  // Ensure at least one phone field is rendered
  useEffect(() => {
    if (phoneFields.length === 0) {
      appendPhone(""); // Add an empty phone field
    }
  }, [phoneFields, appendPhone]);

  // Ensure at least one email field is rendered
  useEffect(() => {
    if (emailFields.length === 0) {
      appendEmail(""); // Add an empty email field
    }
  }, [emailFields, appendEmail]);

  // Ensure at least one address field is rendered
  useEffect(() => {
    if (addressFields.length === 0) {
      appendAddress(""); // Add an empty address field
    }
  }, [addressFields, appendAddress]);

  // Ensure at least one website field is rendered
  useEffect(() => {
    if (websiteFields.length === 0) {
      appendWebsite(""); // Add an empty website field
    }
  }, [websiteFields, appendWebsite]);

  async function onSubmit(data: OrganizationFromValues) {
    try {
      /*       const formData = serialize(
        {
          ...data,
          logo: uploadedLogo,
        },
        { indices: true }
      ); */
      if (previousData) {
        await updatedOrganization({
          organizationId: previousData.id,
          updatedOrganization: data,
        });
        toast.success("Organization updated successfully");
        // modalClose();
      } else {
        await createOrganization(data);
        toast.success("Organization created successfully");
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
        <Card className="p-5">
          <CardTitle className="mb-5">Organization</CardTitle>{" "}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-fit space-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter Title"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*             <FormField
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
            /> */}
              {/* file logo  */}
              {/*                               <div className="space-y-2">
                    <FormLabel>Upload Files</FormLabel>
                    <FileUpload setUploadedFiles={setUploadedLogo} />
                  </div> */}

              {/* Dynamic Phone Fields */}
              {phoneFields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`phone.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{index === 0 && "Phone"}</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2 items-center">
                          <Input
                            placeholder={`Phone ${index + 1}`}
                            {...field}
                          />
                          <span onClick={() => removePhone(index)}>
                            <Trash2 size={16} className="text-red-500" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                onClick={() => appendPhone("")}
                variant="secondary"
                className="mt-2 space-x-2 border border-dashed border-gray-700 w-fit"
              >
                <Plus size={14} className="" /> <span>Add Phone</span>
              </Button>

              {/* Dynamic Email Fields */}
              {emailFields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`email.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{index === 0 && "Email"}</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2 items-center">
                          <Input
                            placeholder={`Email ${index + 1}`}
                            {...field}
                          />
                          <span onClick={() => removeEmail(index)}>
                            <Trash2 size={16} className="text-red-500" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                onClick={() => appendEmail("")}
                variant="secondary"
                className="mt-2 space-x-2 border border-dashed border-gray-700 w-fit"
              >
                <Plus size={14} className="" /> <span>Add Email</span>
              </Button>

              {/* Dynamic Address Fields */}
              {addressFields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`address.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{index === 0 && "Address"}</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2 items-center">
                          <Input
                            placeholder={`Address ${index + 1}`}
                            {...field}
                          />
                          <span onClick={() => removeAddress(index)}>
                            <Trash2 size={16} className="text-red-500" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                onClick={() => appendAddress("")}
                variant="secondary"
                className="border border-dashed border-gray-700 w-fit"
              >
                <Plus size={14} className="" /> <span>Add Address</span>
              </Button>

              {/* Dynamic Website Fields */}
              {websiteFields.map((field, index) => (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`website.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{index === 0 && "Website"}</FormLabel>
                      <FormControl>
                        <div className="flex space-x-2 items-center">
                          <Input
                            placeholder={`Website ${index + 1}`}
                            {...field}
                          />
                          <span
                            // type="button"
                            onClick={() => removeWebsite(index)}
                            // variant="destructive"
                          >
                            <Trash2 size={16} className="text-red-500" />
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                onClick={() => appendWebsite("")}
                variant="secondary"
                className="mt-2 space-x-2 border border-dashed border-gray-700 w-fit"
              >
                <Plus size={14} className="" /> <span>Add Website</span>
              </Button>

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
