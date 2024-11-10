import { Card } from "@/components/ui/card";
import BankSalaryVoucher from "./components/bank-salary-boucher";
import BankSalaryAdviceFilter from "./components/bank-salary-advice-filter";
import { useState } from "react";
import { format } from "date-fns";
import { useGetSalariesByBatchAndMonthQuery } from "@/store/services/hrm/api/btach-list";
import {
  SalaryBatchDataType,
  SalaryBatchMonthDataType,
} from "@/store/services/hrm/api/btach-list/type";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";

const BankSalaryAdvice = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<
    SalaryBatchDataType | undefined
  >(undefined);

  const [salaryData, setSalaryData] = useState<
    SalaryBatchMonthDataType[] | null
  >(null);

  const salaryMonth = selectedDate ? format(selectedDate, "yyyy-MM") : null;

  // Trigger the API call when Generate is clicked
  const { refetch: fetchSalaries } = useGetSalariesByBatchAndMonthQuery(
    {
      batch_number: String(selectedBatch?.batch_number),
      salary_month: salaryMonth!,
    },
    { skip: !selectedBatch || !salaryMonth }
  );

  const handleGenerate = async () => {
    if (!selectedDate || !selectedBatch) {
      toast.error("Please select a date and batch.");
      return;
    }

    try {
      const salaryResult = await fetchSalaries().unwrap();
      console.log("Salary Result:", salaryResult);
      setSalaryData(salaryResult.data); // Set the salary data state
      toast.success("Bank Salary Advise Generated Successfully");
    } catch (error) {
      console.error("Failed to generate salary:", error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Bank Salary Advice"
          description="Manage Bank Salary Advice for you business"
        />
      </div>
      <Separator />
      <div>
        <BankSalaryAdviceFilter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedBatch={selectedBatch}
          setSelectedBatch={setSelectedBatch}
          onGenerate={handleGenerate} // Pass the handleGenerate function
        />
      </div>

      {salaryData && (
        <div className="max-w-5xl mx-auto">
          <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
            {/* Conditionally render BankSalaryVoucher only if salaryData is available */}
            <BankSalaryVoucher salaryData={salaryData} />
          </Card>
        </div>
      )}
    </div>
  );
};

export default BankSalaryAdvice;
