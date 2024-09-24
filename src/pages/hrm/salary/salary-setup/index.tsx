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
// import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import EmployeeDetails from "./components/employee-details";
import salarySetupData from "./components/salary-setup-data";

const allowanceSchema = z.object({
  no: z.number().min(1),
  name: z.string(),
  currentAmount: z.string(),
  // arrearAmount: z.string(),
  // total: z.string(),
  // ruleOver: z.boolean(),
  comments: z.string().optional(),
});

const SalarySetup = () => {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        allowances: z.array(allowanceSchema),
        deductions: z.array(allowanceSchema),
      })
    ),
    defaultValues: {
      allowances: salarySetupData.allowances,
      deductions: salarySetupData.deductions,
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log(data); // Log the form data
  };

  return (
    <>
      <div className="flex flex-col">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <Heading
                  title="Salary Setup"
                  description="Manage job apply for you business"
                />
              </div>
              <Separator />

              <Card className="px-4 py-6">
                <EmployeeDetails employeeData={salarySetupData.employee} />
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
                    {salarySetupData.allowances.map((allowance, index) => {
                      return (
                        <TableRow className="border " key={index}>
                          <TableCell className="border py-[5px]">
                            {allowance.no}
                          </TableCell>
                          <TableCell className="border py-[5px] w-1/3">
                            {allowance.name}
                          </TableCell>
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`allowances.${index}.currentAmount`}
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
                          {/* <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`allowances.${index}.arrearAmount`}
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
                              name={`allowances.${index}.total`}
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
                              name={`allowances.${index}.ruleOver`}
                              render={() => (
                                // { field }
                                <FormItem>
                                  <Controller
                                    control={control}
                                    name={`allowances.${index}.ruleOver`}
                                    render={({
                                      field: { onChange, value },
                                    }) => (
                                      <Checkbox
                                        checked={value}
                                        onCheckedChange={(checked) =>
                                          onChange(checked)
                                        } // Update the form state
                                        aria-label="Select row"
                                        className="translate-y-[2px]"
                                      />
                                    )}
                                  />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell> */}
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`allowances.${index}.comments`}
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
                        {salarySetupData.totals.subTotal}
                      </TableCell>
                      {/* <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.totals.arrear}
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.totals.netTotal}
                      </TableCell>
                      <TableCell className="font-bold border py-2"></TableCell> */}

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
                    {salarySetupData.deductions.map((deduction, index) => {
                      return (
                        <TableRow className="border " key={index}>
                          <TableCell className="border py-[5px]">
                            {deduction.no}
                          </TableCell>
                          <TableCell className="border py-[5px] w-1/3">
                            {deduction.name}
                          </TableCell>
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`deductions.${index}.currentAmount`}
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
                          {/* <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`deductions.${index}.arrearAmount`}
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
                              name={`deductions.${index}.total`}
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
                              name={`deductions.${index}.ruleOver`}
                              render={() => (
                                // { field }
                                <FormItem>
                                  <Controller
                                    control={control}
                                    name={`deductions.${index}.ruleOver`}
                                    render={({
                                      field: { onChange, value },
                                    }) => (
                                      <Checkbox
                                        checked={value}
                                        onCheckedChange={(checked) =>
                                          onChange(checked)
                                        } // Update the form state
                                        aria-label="Select row"
                                        className="translate-y-[2px]"
                                      />
                                    )}
                                  />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell> */}
                          <TableCell className="border py-[5px]">
                            <FormField
                              control={control}
                              name={`deductions.${index}.comments`}
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
                        0
                      </TableCell>
                      {/* <TableCell className="font-bold border py-2 text-right">
                        0
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        0
                      </TableCell>
                      <TableCell className="font-bold border py-2"></TableCell> */}
                      <TableCell className="font-bold border py-2"></TableCell>
                    </TableRow>

                    <TableRow className="border bg-gray-100">
                      <TableCell className="font-bold border py-2"></TableCell>
                      <TableCell className="font-bold border py-2">
                        Net Total
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.totals.subTotal}
                      </TableCell>
                      {/* <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.totals.arrear}
                      </TableCell>
                      <TableCell className="font-bold border py-2 text-right">
                        {salarySetupData.totals.netTotal}
                      </TableCell>
                      <TableCell className="font-bold border py-2"></TableCell> */}
                      <TableCell className="font-bold border py-2"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Button size={"lg"} className="mt-6">
                  Submit
                </Button>
              </Card>
            </div>
          </form>
        </Form>
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
