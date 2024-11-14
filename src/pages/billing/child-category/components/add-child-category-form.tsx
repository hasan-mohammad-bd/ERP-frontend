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
import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import {
  CategoryFormValues,
  CategoryRow,
  SubCategoryFormValues,
  subCategorySchema,
} from "@/lib/validators/billing/category";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "@/store/services/billing/api/category";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import FileUploadSingle from "@/components/common/file-upload-single";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { toast } from "sonner";
import { serialize } from "object-to-formdata";
import { Loading } from "@/components/common/loading";
import SearchSelect from "@/components/common/search-select";

type AddCategoryProps = {
  modalClose: () => void;
  data?: CategoryRow;
};

export function AddChildCategoryForm({
  modalClose,
  data: previousData,
}: AddCategoryProps) {
  // Correct API call to get category data

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFormValues>();

  const [createCategory, { isLoading: createLoading }] =
    useCreateCategoryMutation();
  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const { data: categoryData } = useGetCategoryQuery(`type=main`);
  const { data: SubCategoryData, isLoading: isSubCategoryLoading } =
    useGetCategoryQuery(`type=sub&parent_id=${selectedCategory?.id}`, {
      skip: !selectedCategory?.id,
    });

  const categories = categoryData?.data || [];
  const subCategories = SubCategoryData?.data || [];

  const form = useForm<SubCategoryFormValues>({
    resolver: zodResolver(subCategorySchema),
    defaultValues: {
      name: "",
      description: "",
      status: 1,
      image: "",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        name: previousData.name || "",
        description: previousData.description || "",
        status: previousData.status,
        parent_id: previousData.parent_id
          ? String(previousData.parent_id)
          : undefined,
      });
    }
  }, [previousData, form]);

  async function onSubmit(data: CategoryFormValues) {
    try {
      // Validate the uploaded image if it exists
      if (uploadedImage) {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

        // Check if the file type is valid
        if (!validImageTypes.includes(uploadedImage.type)) {
          toast.error("The image must be a file of type: jpeg, png, jpg");
          return;
        }

        // Check if the file size is within the limit (2 MB in this case)
        if (uploadedImage.size > 2048 * 1024) {
          toast.error("The image must not exceed 2 MB in size");
          return;
        }
      }

      //Create formData to send to the API
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
          image: uploadedImage, // include previous image if none is uploaded
        },
        { indices: true }
      );

      if (previousData && previousData.id !== undefined) {
        // Use formData here for updating category
        await updateCategory({
          categoryId: previousData.id,
          updatedCategory: formData,
        }).unwrap();
        toast.success("Category updated successfully");
      } else {
        // Use formData here for creating a new category
        await createCategory(formData).unwrap();
        toast.success("Category created successfully");
      }

      modalClose();
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  }

  return (
    <>
      {createLoading || updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormLabel>Select Category</FormLabel>
                  <SearchSelect
                    items={categories || []}
                    labelKey="name"
                    valueKey="id"
                    value={selectedCategory}
                    placeholder="Select category"
                    onSelect={setSelectedCategory}
                    className="w-[300px]"
                    size={"default"}
                  />
                </div>
                <div>
                  <FormSearchSelect<CategoryFormValues>
                    loading={isSubCategoryLoading}
                    data={subCategories}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`parent_id`}
                    title={"Select Sub Category"}
                    className="w-[300px]"
                    disabled={
                      subCategories.length === 0 &&
                      !form.getValues("parent_id")?.toString()
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Child Category Name</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Enter Child Category Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Status */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "Active" ? 1 : 0)
                        }
                        value={field.value === 1 ? "Active" : "Inactive"}
                        defaultValue="Active"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={"Active"}>Active</SelectItem>
                          <SelectItem value={"Inactive"}>Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* File Upload */}
              <div className="space-y-2">
                <FormLabel>Upload Image</FormLabel>
                <FileUploadSingle
                  image={previousData?.image}
                  setUploadedFile={setUploadedImage} // Set the uploaded file
                />
              </div>
            </div>
            <div className="text-right">
              <Button variant="default" type="submit" className="w-fit mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
