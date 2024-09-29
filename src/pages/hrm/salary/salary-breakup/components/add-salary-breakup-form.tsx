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
  useCreateSalaryCategoriesMutation,
  useUpdateSalaryCategoriesMutation,
} from "@/store/services/hrm/api/salary-categories";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loading } from "@/components/common/loading";

// Match the form field names with your API schema
interface FormValues {
  id: number; // Make sure to manage id correctly based on your requirements
  name: string;
  short_code: string;
  type: "Allowance" | "Deduction";
  sorting_index: number;
  // note: string;
  // is_default: "0" | "1"; // Enforcing type to be strictly "0" or "1"
}

type UpdateFormValues = {
  id: number; // Make sure to manage id correctly based on your requirements
  name: string;
  short_code: string;
  type: "Allowance" | "Deduction";

  // note: string;
  is_default: string; // Enforcing type to be strictly "0" or "1"
  sorting_index: number;
};

// interface AddSalaryBreakUpProps {
//   modalClose: () => void;
//   data?: HolidayFormRows;
// }

interface FormValuesColumn {
  name: string;
  short_code: string;
  type: "Allowance" | "Deduction";
  sorting_index: number;
}

interface AddHolidayFormProps {
  modalClose: () => void;
  data?: UpdateFormValues;
}

export function AddSalaryBreakupForm({
  modalClose,
  data: previousData,
}: AddHolidayFormProps) {
  const [createSalaryCategory, { isLoading }] =
    useCreateSalaryCategoriesMutation();

  const [updateSalaryCategory, { isLoading: updateLoading }] =
    useUpdateSalaryCategoriesMutation();

  console.log(previousData);

  const form = useForm<FormValues>({
    defaultValues: {
      name: previousData?.name || "",
      short_code: previousData?.short_code || "",
      type: previousData?.type || "Allowance", // Default to "Allowance"
      sorting_index: previousData?.sorting_index,
      // note: "",
      // is_default: "0", // Default to "0" or "1" based on your UI logic
    },
  });

  const onSubmit = async (data: FormValuesColumn) => {
    try {
      if (previousData) {
        const payload = {
          name: data.name,
          short_code: data.short_code,
          type: data.type,
          sorting_index: data.sorting_index,
          // is_default: data.is_default === "1" ? 1 as 1 : 0 as 0, // Ensure it is typed as 0 or 1
        };
        await updateSalaryCategory({
          salaryCategoriesId: previousData.id,
          updatedSalaryCategories: payload,
        }).unwrap();
        toast.success("Salary breakup created successfully!");
        modalClose();
      } else {
        const payload = {
          name: data.name,
          short_code: data.short_code,
          type: data.type,
          // is_default: data.is_default === "1" ? 1 as 1 : 0 as 0, // Ensure it is typed as 0 or 1
        };
        await createSalaryCategory(payload).unwrap();
        toast.success("Salary breakup created successfully!");
        modalClose();
      }

      form.reset(); // Optionally reset form after successful submission
    } catch (error) {
      toast.error("Failed to create salary breakup.");
      console.error("Error creating salary breakup:", error);
    }
  };

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {/* Form Fields */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Breakup Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Salary Breakup Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="short_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Short Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Type Selection - Allowance or Deduction */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="flex flex-row gap-4"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Allowance" id="allowance" />
                        <label
                          htmlFor="allowance"
                          className="text-sm font-medium "
                        >
                          Allowance
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Deduction" id="deduction" />
                        <label
                          htmlFor="deduction"
                          className="text-sm font-medium "
                        >
                          Deduction
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

            <div className="text-right">
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
