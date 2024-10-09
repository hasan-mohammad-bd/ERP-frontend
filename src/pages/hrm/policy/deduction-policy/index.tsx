import { useEffect, useMemo } from "react";
import { Heading } from "@/components/common/heading";
import { AbsentPolicy } from "./components/absent-policy";
import { Button } from "@/components/ui/button";
import { SaveAll } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import {
  useGetDeductionPoliciesQuery,
  useUpdateDeductionPolicyMutation,
} from "@/store/services/hrm/api/deduction-policies";
import { Loading } from "@/components/common/loading";
import { DelayPolicy } from "./components/delay-policy";
import { ExtremeDelayPolicy } from "./components/extreme-delay-policy";
import { UnderworkPolicy } from "./components/underwork-policy";
import { UnpaidPolicy } from "./components/unpaid-policy";
import {
  deductionPolicySchema,
  DeductionPolicyWithoutData,
} from "@/lib/validators/hrm/deduction-policy";
import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

const DeductionPolicy = () => {
  const { data, isLoading: deductionPolicyFetchLoading } =
    useGetDeductionPoliciesQuery();
  const [updateDeductionPolicy, { isLoading: isUpdating }] =
    useUpdateDeductionPolicyMutation();

  const deductionPolicyList: DeductionPolicyWithoutData = useMemo(() => {
    return data?.data || {};
  }, [data]);

  const form = useForm({
    resolver: zodResolver(deductionPolicySchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (data && data.data) {
      const itemsArray: string[] = [];

      const keys: Array<keyof DeductionPolicyWithoutData> = [
        "absent_consider",
        "absent_deduct_salary",
        "absent_deduct_gross_salary",
        "delay_consider",
        "delay_deduct_salary",
        "delay_deduct_gross_salary",
        "extreme_delay_consider",
        "extreme_delay_deduct_salary",
        "extreme_delay_deduct_gross_salary",
        "underwork_consider",
        "underwork_deduct_salary",
        "underwork_deduct_gross_salary",
        "unpaid_consider",
        "unpaid_deduct_gross_salary",
      ];

      keys.forEach((key) => {
        if (deductionPolicyList[key] === 1) {
          itemsArray.push(key);
        }
      });

      form.reset({
        items: itemsArray || [],
        absent_adjust_days: deductionPolicyList.absent_adjust_days || 0,
        absent_leave_type_id: deductionPolicyList?.absent_leave_type_id || 0,

        delay_leave_type_id: deductionPolicyList?.delay_leave_type_id,
        delay_consider_days: deductionPolicyList.delay_consider_days || 0,
        delay_adjust_days: deductionPolicyList.delay_adjust_days || 0,
        delay_consecutive: deductionPolicyList.delay_consecutive || 0,

        extreme_delay_leave_type_id:
          deductionPolicyList?.extreme_delay_leave_type_id || 0,
        extreme_delay_consider_days:
          deductionPolicyList.extreme_delay_consider_days || 0,
        extreme_delay_adjust_days:
          deductionPolicyList.extreme_delay_adjust_days || 0,
        extreme_delay_consecutive:
          deductionPolicyList.extreme_delay_consecutive || 0,

        underwork_leave_type_id:
          deductionPolicyList?.underwork_leave_type_id || 0,
        underwork_consider_hours:
          deductionPolicyList.underwork_consider_hours || 0,
        underwork_adjust_days: deductionPolicyList.underwork_adjust_days || 0,
      });
    }
  }, [data, deductionPolicyList, form]);

  const onSubmit = async (data: any) => {
    const toBoolean = (condition: boolean): 0 | 1 => (condition ? 1 : 0);

    const payload = {
      absent_consider: toBoolean(data.items.includes("absent_consider")),
      absent_deduct_salary: toBoolean(
        data.items.includes("absent_deduct_salary")
      ),
      absent_deduct_gross_salary: toBoolean(
        data.items.includes("absent_deduct_gross_salary")
      ),
      absent_adjust_days: parseInt(data.absent_adjust_days),
      absent_leave_type_id: parseInt(data.absent_leave_type_id),

      delay_consider: toBoolean(data.items.includes("delay_consider")),
      delay_deduct_salary: toBoolean(
        data.items.includes("delay_deduct_salary")
      ),
      delay_deduct_gross_salary: toBoolean(
        data.items.includes("delay_deduct_gross_salary")
      ),
      delay_consecutive: toBoolean(data.delay_consecutive > 0),
      delay_consider_days: parseInt(data.delay_consider_days),
      delay_adjust_days: parseInt(data.delay_adjust_days),
      delay_leave_type_id: parseInt(data.delay_leave_type_id),

      extreme_delay_consider: toBoolean(
        data.items.includes("extreme_delay_consider")
      ),
      extreme_delay_deduct_salary: toBoolean(
        data.items.includes("extreme_delay_deduct_salary")
      ),
      extreme_delay_deduct_gross_salary: toBoolean(
        data.items.includes("extreme_delay_deduct_gross_salary")
      ),
      extreme_delay_consecutive: toBoolean(data.extreme_delay_consecutive > 0),
      extreme_delay_consider_days: parseInt(data.extreme_delay_consider_days),
      extreme_delay_adjust_days: parseInt(data.extreme_delay_adjust_days),
      extreme_delay_leave_type_id: parseInt(data.extreme_delay_leave_type_id),

      underwork_consider: toBoolean(data.items.includes("underwork_consider")),
      underwork_deduct_salary: toBoolean(
        data.items.includes("underwork_deduct_salary")
      ),
      underwork_deduct_gross_salary: toBoolean(
        data.items.includes("underwork_deduct_gross_salary")
      ),
      underwork_consider_hours: parseInt(data.underwork_consider_hours),
      underwork_adjust_days: parseInt(data.underwork_adjust_days),
      underwork_leave_type_id: parseInt(data.underwork_leave_type_id),

      unpaid_consider: toBoolean(data.items.includes("unpaid_consider")),
      unpaid_deduct_gross_salary: toBoolean(
        data.items.includes("unpaid_deduct_gross_salary")
      ),
    };

    // Validate the payload
    try {
      deductionPolicySchema.parse(payload);
      await updateDeductionPolicy({
        updateDeductionPolicyFormData: payload,
      }).unwrap();
      toast.success("Policy updated successfully!");
    } catch (error: any) {
      toast.error(
        "Validation failed: " +
          error.errors?.map((err: any) => err.message).join(", ") ||
          "Unknown error"
      );
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <Heading
            title="Deduction Policy"
            description="Manage your holidays for your organization"
          />
          <Button size={"sm"} onClick={form.handleSubmit(onSubmit)}>
            <SaveAll className="mr-2 h-4 w-4" />{" "}
            {isUpdating ? "Updating..." : "Save Policy"}
          </Button>
        </div>
        <Separator />
        {deductionPolicyFetchLoading ? (
          <Loading />
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-6 items-start max-w-7xl mx-auto"
            >
              <AbsentPolicy form={form} />
              <DelayPolicy form={form} />
              <ExtremeDelayPolicy form={form} />
              <UnderworkPolicy form={form} />
              <UnpaidPolicy form={form} />
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default DeductionPolicy;
