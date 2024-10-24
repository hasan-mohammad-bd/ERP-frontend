import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, FieldValue } from "react-hook-form";
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

  OrganizationFromValues,
  OrganizationFormSchema,

} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import {
  useCreateOrganizationMutation,
  useGetOrganizationByIdQuery,
  useUpdateOrganizationMutation,
} from "@/store/services/erp-main/api/organization";
import { Card, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";

import { serialize } from "object-to-formdata";
import FileUploadSingle from "@/components/common/file-upload-single";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

// interface AddOrganizationFormProps {
//   data?: OrganizationColumn;
// }

export function AddOrganizationForm() {
  const [createOrganization, { isLoading }] = useCreateOrganizationMutation();
  const [updatedOrganization, { isLoading: updateLoading }] =
    useUpdateOrganizationMutation();

  const { id } = useParams();

  // console.log(id);
  const { data } = useGetOrganizationByIdQuery(`${id}`);
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);
  const [uploadedBanner, setUploadedBanner] = useState<File | null>(null);

  // console.log(getOrganizationById)
  const previousData = data;
  const navigate = useNavigate();

  console.log(previousData);

  const form = useForm<OrganizationFromValues>({
    resolver: zodResolver(OrganizationFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      title: previousData?.title || null,
      logo: previousData?.logo || null,
      banner: previousData?.banner || null,
      phone: previousData?.phone || [], // Start with an empty array
      email: previousData?.email || [], // Start with an empty array
      address: previousData?.address || [], // Start with an empty array
      website: previousData?.website || [], // Start with an empty array
      // sorting_index: previousData?.sorting_index || 0,
      g_map: previousData?.g_map || null,
    },
    
    
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData?.name ,
        title: previousData?.title || null,
        logo:
          typeof previousData?.logo === "string"
            ? null
            : previousData?.logo || null,
        banner:
          typeof previousData?.banner === "string"
            ? null
            : previousData?.banner || null,
        phone: previousData?.phone || null, // Start with an empty array
        email: previousData?.email || null, // Start with an empty array
        address: previousData?.address || null, // Start with an empty array
        website: previousData?.website || null, // Start with an empty array
        g_map: previousData?.g_map || null, // Start with an empty array
      });
    }
  }, [previousData, form]);

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control: form.control,
    name: "phone" as keyof FieldValue<OrganizationFromValues>,
  }) as {
    fields: { name: string }[];
    append: (value: string) => void;
    remove: (index: number) => void;
  };

  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control: form.control,
    name: "email" as keyof FieldValue<OrganizationFromValues>,
  });

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
  } = useFieldArray({
    control: form.control,
    name: "address" as keyof FieldValue<OrganizationFromValues>,
  });

  const {
    fields: websiteFields,
    append: appendWebsite,
    remove: removeWebsite,
  } = useFieldArray({
    control: form.control,
    name: "website" as keyof FieldValue<OrganizationFromValues>,
  });
  const {
    fields: gmapFields,
    append: appendGmap,
    remove: removeGmap,
  } = useFieldArray({
    control: form.control,
    name: "g_map" as keyof FieldValue<OrganizationFromValues>,
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
  useEffect(() => {
    if (gmapFields.length === 0) {
      appendGmap(""); // Add an empty website field
    }
  }, [gmapFields, appendGmap]);

  async function onSubmit(data: OrganizationFromValues) {
    try {
      const formDataForUpdate = serialize(
        {
          ...data,
          logo: uploadedLogo || null,
          banner: uploadedBanner || null,
          _method: "PUT",
        },
        { indices: true }
      );
      const formDataForCreate = serialize(
        {
          ...data,
          logo: uploadedLogo || null,
          banner: uploadedBanner || null,
          // _method: "PUT",
        },
        { indices: true }
      );
      if (previousData) {
        
        await updatedOrganization({
          organizationId: previousData.id,
          updatedOrganization: formDataForUpdate,
        }).unwrap();
        toast.success("Organization updated successfully");
        // modalClose();
        navigate("/web/organizations");
      } else {
        await createOrganization(formDataForCreate).unwrap();
        toast.success("Organization created successfully");
        // modalClose();
        navigate("/web/organizations");
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
        <Card className="p-5 w-1/2 mx-auto">
          <CardTitle className="mb-5">
            {previousData ? "Edit" : "Add"} Organization
          </CardTitle>{" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter organization name"
                          {...field}
                        />
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
                        <Input
                          placeholder="Enter Title"
                          value={field.value ?? ""}
                          {...Object.fromEntries(
                            Object.entries(field).filter(
                              ([key]) => key !== "value"
                            )
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <FormField
                control={form.control}
                name="g_map"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Map</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Google Map Link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <FormLabel>Logo File</FormLabel>
                  <FileUploadSingle
                    image={previousData?.logo}
                    setUploadedFile={setUploadedLogo}
                  />
                </div>
                <div className="space-y-2">
                  <FormLabel>Banner File</FormLabel>
                  <FileUploadSingle
                    image={previousData?.banner}
                    setUploadedFile={setUploadedBanner}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Dynamic Phone Fields */}
                <div>
                  {" "}
                  {phoneFields.map((field, index : number) => (
     
                    <FormField
                      key={field.name}
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
                </div>

                {/* Dynamic Email Fields */}
                <div>
                  {" "}
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
                </div>

                {/* Dynamic Address Fields */}
                <div>
                  {" "}
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
                </div>

                {/* Dynamic Website Fields */}
                <div>
                  {" "}
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
                </div>

                {/* Dynamic G_map Fields */}
                <div>
                  {" "}
                  {gmapFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`g_map.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{index === 0 && "Google map"}</FormLabel>
                          <FormControl>
                            <div className="flex space-x-2 items-center">
                              <Textarea
                                placeholder={`Google map ${index + 1}`}
                                {...field}
                              />
                              <span
                                // type="button"
                                onClick={() => removeGmap(index)}
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
                    onClick={() => appendGmap("")}
                    variant="secondary"
                    className="mt-2 space-x-2 border border-dashed border-gray-700 w-fit"
                  >
                    <Plus size={14} className="" /> <span>Add Google map</span>
                  </Button>
                </div>
              </div>

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
