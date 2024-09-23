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
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const allowanceSchema = z.object({
  no: z.number().min(1),
  name: z.string(),
  currentAmount: z.string(),
  arrearAmount: z.string(),
  total: z.string(),
  ruleOver: z.boolean(),
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
                <div className="mb-3 flex justify-between">
                  <ul className="space-y-2.5">
                    <li>
                      <span className="font-bold">Name:</span>{" "}
                      {salarySetupData.employee.name}
                    </li>
                    <li>
                      <span className="font-bold">Designation:</span>{" "}
                      {salarySetupData.employee.designation}
                    </li>
                    <li>
                      <span className="font-bold">Department:</span>{" "}
                      {salarySetupData.employee.department}
                    </li>
                    <li>
                      <span className="font-bold">joining Date:</span>{" "}
                      {salarySetupData.employee.joiningDate}
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-right">
                    <li>
                      <span className="font-bold">Employee ID:</span>{" "}
                      {salarySetupData.employee.employeeId}
                    </li>
                    <li>
                      <span className="font-bold">Basic:</span>{" "}
                      {Number(salarySetupData.employee.basePay).toFixed(2)}
                    </li>
                    <li>
                      <span className="font-bold">Bank A/C:</span>{" "}
                      {salarySetupData.employee.bankAccount}
                    </li>
                    <li>
                      <span className="font-bold">Date:</span>{" "}
                      {salarySetupData.employee.date}
                    </li>
                  </ul>
                </div>
                <Table className="border border-black">
                  <TableHeader className="border border-black bg-primary">
                    <TableRow className="border border-black h-0 bg-primary hover:bg-primary hover:text-white">
                      {allowancesHeadings.map((heading, index) => (
                        <TableHead
                          key={index}
                          className="border border-black py-[5px] h-0 text-center text-white"
                        >
                          {heading}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border border-black">
                    {salarySetupData.allowances.map((allowance, index) => {
                      return (
                        <TableRow className="border border-black " key={index}>
                          <TableCell className="border border-black py-[5px]">
                            {allowance.no}
                          </TableCell>
                          <TableCell className="border border-black py-[5px]">
                            {allowance.name}
                          </TableCell>
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px]">
                            <FormField
                              control={control}
                              name={`allowances.${index}.ruleOver`}
                              render={
                                (
                                  // { field }
                                ) => (
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
                          </TableCell>
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                    <TableRow className="border border-black bg-gray-100">
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                      <TableCell className="font-bold border border-black py-[5px]">
                        Sub Total
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.subTotal}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.arrear}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.netTotal}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>

                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table className="border border-black mt-6">
                  <TableHeader className="border border-black ">
                    <TableRow className="border border-black h-0 bg-primary hover:bg-primary hover:text-white">
                      {deductionsHeadings.map((heading, index) => (
                        <TableHead
                          key={index}
                          className="border border-black py-[5px] h-0 text-center text-white"
                        >
                          {heading}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border border-black">
                    {salarySetupData.deductions.map((deduction, index) => {
                      return (
                        <TableRow className="border border-black " key={index}>
                          <TableCell className="border border-black py-[5px]">
                            {deduction.no}
                          </TableCell>
                          <TableCell className="border border-black py-[5px]">
                            {deduction.name}
                          </TableCell>
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                          <TableCell className="border border-black py-[5px]">
                            <FormField
                              control={control}
                              name={`deductions.${index}.ruleOver`}
                              render={(
                                // { field }
                              ) => (
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
                          </TableCell>
                          <TableCell className="border border-black py-[5px] max-w-[120px]">
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
                    <TableRow className="border border-black bg-gray-100">
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                      <TableCell className="font-bold border border-black py-[5px]">
                        Sub Total
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        0
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        0
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        0
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                    </TableRow>

                    <TableRow className="border border-black">
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                      <TableCell className="font-bold border border-black py-[5px]">
                        Net Total
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.subTotal}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.arrear}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px] text-right">
                        {salarySetupData.totals.netTotal}
                      </TableCell>
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
                      <TableCell className="font-bold border border-black py-[5px]"></TableCell>
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
  "Arrear Amount",
  "Total",
  "Rule Over",
  "Comments",
];

const deductionsHeadings = [
  "No",
  "Deduction",
  "Current Amount",
  "Arrear Amount",
  "Total",
  "Rule Over",
  "Comments",
];

const salarySetupData = {
  employee: {
    name: "Professor Dr. Md. Arafat Baset",
    designation: "Vice-Chancellor",
    department: "Secretariat of the VC",
    joiningDate: "23 Mar 2021",
    employeeId: "11001",
    basePay: "78000",
    bankAccount: "01207429990",
    date: "Sep 2024",
  },
  allowances: [
    {
      no: 1,
      name: "Basic Pay",
      currentAmount: "78000",
      arrearAmount: "0",
      total: "78000",
      ruleOver: false,
      comments: "Comment",
    },
    {
      no: 2,
      name: "Festival Allowance",
      currentAmount: "0",
      arrearAmount: "0",
      total: "0",
      ruleOver: false,
      comments: "Comment",
    },
    {
      no: 3,
      name: "Personal Pay",
      currentAmount: "0",
      arrearAmount: "0",
      total: "0",
      ruleOver: false,
      comments: "Comment",
    },
  ],
  deductions: [
    {
      no: 1,
      name: "PF Contribution",
      currentAmount: "0",
      arrearAmount: "0",
      total: "0",
      ruleOver: false,
      comments: "Comment",
    },
    {
      no: 2,
      name: "Benevolent Fund",
      currentAmount: "0",
      arrearAmount: "0",
      total: "0",
      ruleOver: false,
      comments: "Comment",
    },
    {
      no: 3,
      name: "Group Insurance Premium",
      currentAmount: "0",
      arrearAmount: "0",
      total: "0",
      ruleOver: false,
      comments: "Comment",
    },
  ],
  totals: {
    subTotal: 12610,
    netTotal: 12610,
    arrear: "0",
  },
};
