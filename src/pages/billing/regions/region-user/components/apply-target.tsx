import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";
import {
  TargetUserSchema,
  TargetUserValue,
} from "@/lib/validators/billing/user-target";
import { useCreateUserTargetMutation } from "@/store/services/billing/api/regeion-user-terget";
import { ErrorResponse } from "@/types";
import { RegionUserDataType } from "@/store/services/billing/api/region-user/type";

type AddDivisionProps = {
  modalClose: () => void;
  userData: RegionUserDataType;
};

export function ApplyTargetForm({ userData }: AddDivisionProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const form = useForm<TargetUserValue>({
    resolver: zodResolver(TargetUserSchema),
    defaultValues: {
      user_id: userData?.id,
      amount: 0,
      date: "",
    },
  });

  const [createTargetUser, { isLoading: createLoading }] =
    useCreateUserTargetMutation();

  async function onSubmit(data: TargetUserValue) {
    try {
      await createTargetUser(data).unwrap();
      toast.success("Target created successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.error(error);
    }
  }

  return (
    <>
      {createLoading ? (
        <Loading />
      ) : (
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="gap-4">
              <div className="grid grid-cols-3 gap-4 items-end">
                <div className="mt-3">
                  <label className="text-sm font-semibold">Amount</label>
                  <Input
                    type="number"
                    placeholder="Enter Amount"
                    {...form.register("amount")}
                  />
                </div>

                {/* Date Picker */}
                <div className="mt-4">
                  <label className="text-sm font-semibold">
                    Effective Date
                  </label>
                  <div className="mt-2">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          form.setValue(
                            "date",
                            `${date.getFullYear()}-${(date.getMonth() + 1)
                              .toString()
                              .padStart(2, "0")}`
                          );
                        }
                      }}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      placeholderText="Select date"
                      className="border rounded p-[6px] w-full bg-none bg_remove"
                    />
                  </div>
                </div>

                <Button variant="default" type="submit" className="w-fit">
                  Save
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-5">
            <h3 className="text-sm font-semibold mb-3">User Targets</h3>
            {userData?.user_targets && (
              <div className="border rounded-md p-3">
                <div className="mt-2 space-y-3">
                  {userData.user_targets.map((target) => (
                    <div
                      key={target.id}
                      className="border-b pb-3 flex flex-wrap gap-4 items-center"
                    >
                      <p className="text-sm font-semibold">
                        Amount: {target.target_amount}
                      </p>
                      <div className="flex items-center gap-2">
                        <p>Month : {target?.target_month}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
