import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  useCreateSalarySetupMutation,
  useGetSalarySetupsQuery,
} from "@/store/services/hrm/api/salary-settings";
import { Loading } from "@/components/common/loading";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { AlertModal } from "@/components/common/alert-modal";
import EmployeeDetails from "./components/employee-details";

const allowanceSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  amount: z.string(),
  comment: z.string().optional().nullable(),
});

type SalaryCategoryRow = z.infer<typeof allowanceSchema>;
export type SalaryFormData = {
  allowance: SalaryCategoryRow[];
  deduction: SalaryCategoryRow[];
};

const SalarySetup = () => {
  const { employee_id } = useParams();
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<SalaryFormData | null>(
    null
  ); // Store form data temporarily
  const [createSalarySetup, { isLoading: isCreateSalarySetupLoading }] =
    useCreateSalarySetupMutation();
  const { data, isLoading } = useGetSalarySetupsQuery(employee_id);

  const salarySetupData = data || {
    employee_id: "",
    allowance: [],
    deduction: [],
    employee: {
      first_name: "",
      last_name: "",
      joining_date: "",
      employee_unique_id: "",
      account_number: "",
      department: {
        name: "",
      },
      designation: {
        name: "",
      },
    },
    summery: {
      total_allowance: 0,
      total_allowance_arrear: 0,
      total_deduction: 0,
      total_deduction_arrear: 0,
      total: 0,
    },
  };

  const form = useForm({
    resolver: zodResolver(
      z.object({
        allowance: z.array(allowanceSchema),
        deduction: z.array(allowanceSchema),
      })
    ),
    defaultValues: {
      allowance: salarySetupData.allowance.map((allowance) => ({
        id: allowance.salary_category?.id || 0,
        name: allowance.salary_category?.name || "",
        amount: allowance.amount || "0",
        comment: allowance.comment || "",
      })),
      deduction: salarySetupData.deduction.map((deduction) => ({
        id: deduction.salary_category?.id || 0,
        name: deduction.salary_category?.name || "",
        amount: deduction.amount || "0",
        comment: deduction.comment || "",
      })),
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        allowance: data.allowance.map((allowance) => ({
          id: allowance.salary_category?.id || 0,
          name: allowance.salary_category?.name || "",
          amount: allowance.amount || "0",
          comment: allowance.comment || "",
        })),
        deduction: data.deduction.map((deduction) => ({
          id: deduction.salary_category?.id || 0,
          name: deduction.salary_category?.name || "",
          amount: deduction.amount || "0",
          comment: deduction.comment || "",
        })),
      });
    }
  }, [data, form]);

  const { control, handleSubmit } = form;

  // Open modal and store form data when submitting
  const handleFormSubmit = (data: any) => {
    setSubmittedData(data);
    setAlertModalOpen(true);
  };

  // Confirm the update after modal confirmation
  const handleConfirmUpdate = async () => {
    try {
      if (submittedData) {
        const salaryCategories = [
          ...submittedData.allowance.map((salarySetup) => ({
            salary_category_id: salarySetup.id,
            amount: parseFloat(salarySetup.amount) || 0, // Ensure amount is a number
            comment: salarySetup.comment || "",
          })),
          ...submittedData.deduction.map((salarySetup) => ({
            salary_category_id: salarySetup.id,
            amount: parseFloat(salarySetup.amount) || 0,
            comment: salarySetup.comment || "",
          })),
        ];

        await createSalarySetup({
          employee_id: Number(employee_id),
          salary_categories: salaryCategories,
        }).unwrap();

        toast.success("Salary setup created successfully");
        setAlertModalOpen(false); // Close the modal after success
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading || isCreateSalarySetupLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col">
        <Form {...form}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <Heading
                  title="Salary Setup"
                  description="Manage job apply for you business"
                />
              </div>
              <Separator />

              <Card className="px-4 py-6">
                <EmployeeDetails data={salarySetupData} />
                <Table className="border">
                  <TableHeader className="border">
                    <TableRow className="border h-0">
                      {allowancesHeadings.map((heading, index) => (
                        <TableHead
                          key={index}
                          className="border py-2 h-0 text-center text-black bg-gray-100"
                        >
                          {heading}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border">
                    {salarySetupData.allowance.map((allowance, index) => {
                      return (
                        <TableRow className="border " key={index}>
                          <TableCell className="border py-[5px]">
                            {allowance.salary_category.id}
                          </TableCell>
                          <TableCell className="border py-[5px] w-1/3">
                            {allowance.salary_category.name}
                          </TableCell>
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`allowance.${index}.amount`} // Ensure this matches schema
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      {...field}
                                      className="text-right"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>

                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`allowance.${index}.comment`} // Ensure this matches schema
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input type="text" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow className="border bg-gray-100">
                      <TableCell className="font-bold border py-2"></TableCell>
                      <TableCell className="font-bold border py-2">
                        Sub Total
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.summery.total_allowance}
                      </TableCell>

                      <TableCell className="font-bold border py-2"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table className="border mt-6">
                  <TableHeader className="border">
                    <TableRow className="border h-0">
                      {deductionsHeadings.map((heading, index) => (
                        <TableHead
                          key={index}
                          className="border py-2 h-0 text-center text-black bg-gray-100"
                        >
                          {heading}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border">
                    {salarySetupData.deduction.map((deduction, index) => {
                      return (
                        <TableRow className="border " key={index}>
                          <TableCell className="border py-[5px]">
                            {deduction.salary_category.id}
                          </TableCell>
                          <TableCell className="border py-[5px] w-1/3">
                            {deduction.salary_category.name}
                          </TableCell>
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`deduction.${index}.amount`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      {...field}
                                      className="text-right"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>

                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`deduction.${index}.comment`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input type="text" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow className="border bg-gray-100">
                      <TableCell className="font-bold border py-2"></TableCell>
                      <TableCell className="font-bold border py-2">
                        Sub Total
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.summery.total_deduction}
                      </TableCell>

                      <TableCell className="font-bold border py-2"></TableCell>
                    </TableRow>

                    <TableRow className="border bg-gray-100">
                      <TableCell className="font-bold border py-2"></TableCell>
                      <TableCell className="font-bold border py-2">
                        Net Total
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.summery.total}
                      </TableCell>

                      <TableCell className="font-bold border py-2"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="flex justify-end mt-6">
                  <Button size={"lg"} className="">
                    Submit
                  </Button>
                </div>
              </Card>
            </div>
          </form>
        </Form>
        <AlertModal
          title="Are you sure you want to update this data?"
          description="This action can be change later"
          name={salarySetupData.employee_id}
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={handleConfirmUpdate} // Call the update function on confirm
          loading={isCreateSalarySetupLoading}
          type="default"
          alertMessage={`Salary structure will updated for this employee ${salarySetupData.employee.first_name} ${salarySetupData.employee.last_name}`}
        />
      </div>
    </>
  );
};

export default SalarySetup;

const allowancesHeadings = [
  "No",
  "Allowance",
  "Current Amount",
  // "Arrear Amount",
  // "Total",
  // "Rule Over",
  "Comments",
];

const deductionsHeadings = [
  "No",
  "Deduction",
  "Current Amount",
  // "Arrear Amount",
  // "Total",
  // "Rule Over",
  "Comments",
];
