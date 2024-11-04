import { Button } from "@/components/ui/button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";

import SearchSelect from "@/components/common/search-select";
import { useGetSalaryBatchQuery } from "@/store/services/hrm/api/btach-list";
import {
  SalaryBatchResponseType,
  SalaryBatchDataType,
} from "@/store/services/hrm/api/btach-list/type";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

type FormValues = {
  batch_number: string;
};

interface BankSalaryAdviceFilterProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedBatch: SalaryBatchDataType | undefined; // Change type here
  setSelectedBatch: (batch: SalaryBatchDataType | undefined) => void; // Change type here
  onGenerate: () => void;
}

export default function BankSalaryAdviceFilter({
  selectedDate,
  setSelectedDate,
  selectedBatch,
  setSelectedBatch,
  onGenerate,
}: BankSalaryAdviceFilterProps) {
  const [showBatchDropdown, setShowBatchDropdown] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      batch_number: "",
    },
  });

  const salaryMonth = selectedDate ? format(selectedDate, "yyyy-MM") : null;

  const { data: batchData } = useGetSalaryBatchQuery(
    { salary_month: salaryMonth! },
    { skip: !salaryMonth }
  ) as { data: SalaryBatchResponseType | undefined };

  const handleGetBatch = async () => {
    if (!selectedDate) return;

    try {
      setShowBatchDropdown(true);
    } catch (error) {
      console.error("Failed to fetch batch numbers:", error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          onGenerate(); // Call the onGenerate function passed from the parent
        }}
        className="w-full p-4 rounded-lg space-y-6"
      >
        <h2 className="font-semibold mb-6">Bank Salary Advise</h2>
        <Card>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 p-5">
            {/* Month and Year Picker */}
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium mt-1">
                Month and Year *
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Select month and year"
                className="border rounded p-2 w-full"
              />
            </div>

            {!showBatchDropdown ? (
              <div className="pt-3 col-span-6 flex justify-end items-center mt-auto">
                <Button
                  variant="default"
                  onClick={handleGetBatch}
                  className="w-fit px-14 mt-[3px]"
                >
                  Get Batch
                </Button>
              </div>
            ) : (
              <>
                {/* Batch Number Dropdown using SearchSelect */}
                <FormField
                  control={form.control}
                  name="batch_number"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>
                        <p className="mt-2 mb-1">Batch Number *</p>
                      </FormLabel>
                      <FormControl>
                        <SearchSelect<SalaryBatchDataType>
                          items={batchData?.data ?? []}
                          labelKey="batch_number"
                          valueKey="batch_number"
                          value={selectedBatch} // Now this can be SalaryBatchDataType | undefined
                          placeholder="Select batch number"
                          onSelect={(value) => {
                            setSelectedBatch(value); // value can be SalaryBatchDataType or undefined
                            field.onChange(value?.batch_number || ""); // Adjust if needed
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Generate Button */}
                <div className="col-span-5 flex justify-end items-center mt-auto">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-fit px-14"
                  >
                    Bank Salary Advise
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card>
      </form>
    </Form>
  );
}
