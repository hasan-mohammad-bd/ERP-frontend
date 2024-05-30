import { zodResolver } from "@hookform/resolvers/zod";

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
  EmployeeColumn,
  EmployeeFormSchema,
  EmployeeFormValues,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";
// import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import { useUpdateEmployeeMutation } from "@/store/services/hrm/api/employee-list";

import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


interface AddAdditionalInfoFormProps {
  previousData?: EmployeeColumn;
}

export function AddAdditionalInfoForm({
  previousData,
}: AddAdditionalInfoFormProps) {
  // const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
  const [updateEmployee, { isLoading: updateLoading }] =
    useUpdateEmployeeMutation();

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(EmployeeFormSchema),
    defaultValues: {
      card_id: previousData?.card_id || null,
      machine_id: previousData?.machine_id || null,
      is_head_of_dept: previousData?.is_head_of_dept || 0,
      // reporting_to_id: previousData?.reporting_to_id || null,
      sorting_index: previousData?.sorting_index || 0,
      nid_number: previousData?.nid_number || null,
      fathers_name: previousData?.fathers_name || null,
      mothers_name: previousData?.mothers_name || null,
      payment_type: previousData?.payment_type || "Cash",
      account_number: previousData?.account_number || null,
      bank_name: previousData?.bank_name || null,
      bank_branch: previousData?.bank_branch || null,
      marital_status: previousData?.marital_status || "Married",
      birth_date: previousData?.birth_date || null,
      tin_number: previousData?.tin_number || null,

      // previous data
      employee_unique_id: previousData?.employee_unique_id || "",
      first_name: previousData?.first_name || "",
      last_name: previousData?.last_name || "",
      phone: previousData?.phone || "",
      corporate_phone: previousData?.corporate_phone || "",
      email: previousData?.email || "",
      joining_date: previousData?.joining_date || "",
      status: previousData?.status || "Active",
      location_id: previousData?.location_id || 1,
      organization_id: previousData?.organization_id || 1,
      work_place_id: previousData?.work_place_id || 1,
      department_id: previousData?.department_id || 1,
      section_id: previousData?.section_id || 1,
      designation_id: previousData?.designation_id || 1,
      schedule_id: previousData?.schedule_id || 1,
      employee_class_id: previousData?.employee_class_id || 1,
      employee_grade_id: previousData?.employee_grade_id || 1,
      employment_status_id: previousData?.employment_status_id || 1,
      password: null,
      gender_id: previousData?.gender_id || 1,
      religion_id: previousData?.religion_id || 1,
      blood_group_id: previousData?.blood_group_id || 1,
      role_id: previousData?.role_id || 1,
    },
  });

  console.log(previousData)

  async function onSubmit(data: EmployeeFormValues) {
    try {
      if (previousData) {
        await updateEmployee({
          employeeId: previousData.id,
          updatedEmployee: data,
        });

        toast.success("Employee updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <div className="h-[625px]">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="space-y-2 grid grid-cols-5 gap-3">
                <FormField
                  control={form.control}
                  name="sorting_index"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sorting</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter sorting index"
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
                  name="card_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Id</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Card Id"
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
                  name="machine_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Machine Id</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Machine Id"
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
                  name="is_head_of_dept"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Head Of Department</FormLabel>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value === 1}
                          onCheckedChange={(checked: boolean) =>
                            field.onChange(checked ? 1 : 0)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nid_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NID Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter NID Number"
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
                  name="fathers_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father's Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Father's Name"
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
                  name="mothers_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Mother's Name"
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
                  name="payment_type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value?.toString()}
                          className="flex items-center space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Bank" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Bank Payment
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Cash" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Cash Payment
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="account_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Account Number"
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
                  name="bank_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Bank Name"
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
                  name="bank_branch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank branch</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Bank branch"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/*                 <FormField
                  control={form.control}
                  name="nid_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NID Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter NID Number"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name="birth_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birth Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Enter Birth date"
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
                  name="tin_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TIN Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter TIN Number"
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
                  name="marital_status"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Marital Status</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value?.toString()}
                          className="flex items-center space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Married" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Married
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Unmarried" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Unmarried
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button variant="default" type="submit" className="w-full mt-4">
                  {previousData ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}
