import { useEffect, useMemo } from "react";
import { Heading } from "@/components/common/heading";

import { Button } from "@/components/ui/button";
import { SaveAll } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";

import { Loading } from "@/components/common/loading";

// import { zodResolver } from "@hookform/resolvers/zod";
import { Flag, LeavePolicyFields } from "./components/leave-policy-fields";
import {
  useGetLeavePoliciesQuery,
  useUpdateLeavePolicyMutation,
} from "@/store/services/hrm/api/leave-policies";
import {
  leavePolicySchema,
  leavePolicyWithoutData,
} from "@/lib/validators/hrm/leave-policy";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

const LeavePolicy = () => {
  const { data, isLoading: leavePolicyFetchLoading } =
    useGetLeavePoliciesQuery();
  const [updateLeavePolicy, { isLoading: isUpdating }] =
    useUpdateLeavePolicyMutation();

  const leavePolicyList: leavePolicyWithoutData = useMemo(() => {
    return data?.data || {};
  }, [data]);

  const form = useForm({
    // resolver: zodResolver(leavePolicySchema),
    defaultValues: {},
  });


  useEffect(() => {
    const itemsArray: string[] = []; // Declare itemsArray here
  
    if (data && data.data) {
      const keys: (keyof leavePolicyWithoutData)[] = [
        "foreign_leave_allowed",
        "multiple_application",
        "responsibility_reliever",
        "multiple_approver_hierarchy",
        "extra_day_compensation_eligible",
        "allows_half_day_leave",
        "allows_multiple_visits_same_date",
        "can_approver_change",
        "notify_approver",
        "extra_day_salary",
        "attendance_flag",
        "allow_attendance_visit",
        "start_month",
        "end_month",
        "user_id",
        "organization_id",
      ];
  
      keys.forEach((key) => {
        if (leavePolicyList[key]) {
          itemsArray.push(key as string);
        }
      });
  
      form.reset({
        items: itemsArray,
        start_month: leavePolicyList.start_month || 0,
        end_month: leavePolicyList.end_month || 0,
        attendance_flag:
          leavePolicyList.attendance_flag?.map((flag) => {
            return {
              label: flag,
              value: flag,
            };
          }) || [],
      });
    }
  }, [data, leavePolicyList, form]);

  console.log(leavePolicyList);

  const onSubmit = async (data: any) => {
    const toBoolean = (condition: boolean): 0 | 1 => (condition ? 1 : 0);

    const payload = {
      foreign_leave_allowed: toBoolean(
        data.items.includes("foreign_leave_allowed")
      ),
      multiple_application: toBoolean(
        data.items.includes("multiple_application")
      ),
      responsibility_reliever: toBoolean(
        data.items.includes("responsibility_reliever")
      ),
      multiple_approver_hierarchy: toBoolean(
        data.items.includes("multiple_approver_hierarchy")
      ),
      extra_day_compensation_eligible: toBoolean(
        data.items.includes("extra_day_compensation_eligible")
      ),
      allows_half_day_leave: toBoolean(
        data.items.includes("allows_half_day_leave")
      ),
      allows_multiple_visits_same_date: toBoolean(
        data.items.includes("allows_multiple_visits_same_date")
      ),
      can_approver_change: toBoolean(
        data.items.includes("can_approver_change")
      ),
      notify_approver: toBoolean(data.items.includes("notify_approver")),
      extra_day_salary: toBoolean(data.items.includes("extra_day_salary")),
      attendance_flag: data.attendance_flag.map((flag: Flag) => flag.value),
      allow_attendance_visit: toBoolean(
        data.items.includes("allow_attendance_visit")
      ),
      start_month: parseInt(data.start_month),
      end_month: parseInt(data.end_month),
    };

    console.log(payload);
    try {
      leavePolicySchema.parse(payload);
      await updateLeavePolicy({
        updateLeavePolicyFormData: payload,
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
    <div className="flex flex-col justify-center">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <Heading
            title="Leave Policy"
            description="Manage your holidays for your organization"
          />
          <Button size={"sm"} onClick={form.handleSubmit(onSubmit)}>
            <SaveAll className="mr-2 h-4 w-4" />{" "}
            {isUpdating ? "Updating..." : "Save Policy"}
          </Button>
        </div>
        <Separator />
        {leavePolicyFetchLoading ? (
          <Loading />
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid place-items-center  gap-6 items-start max-w-3xl mx-auto mt-10"
            >
              <LeavePolicyFields form={form} />
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default LeavePolicy;
