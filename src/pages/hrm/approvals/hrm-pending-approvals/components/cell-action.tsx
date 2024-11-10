import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import RoleAccess from "@/lib/access-control/role-access";
import { ApprovalRequestRow } from "@/store/services/accounts/api/approvals/types";
import { AlertModal } from "@/components/common/alert-modal";

import { useState } from "react";
import { ApprovalBulkUpdateFormValues } from "@/lib/validators/approvals";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useChange_HRM_BulkApprovalStatusMutation } from "@/store/services/hrm/api/approvals";

interface CellActionProps {
  rowData: ApprovalRequestRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [actionData, setActionData] = useState("");
  const [changeBulkStatus, { isLoading }] =
    useChange_HRM_BulkApprovalStatusMutation();

  const handleBulkStatusUpdate = async (id: number) => {
    const payload: ApprovalBulkUpdateFormValues = {
      approval_ids: [id],
      status: actionData === "approve" ? 1 : 0,
      note: "",
    };
    try {
      await changeBulkStatus(payload).unwrap();
      toast.success("Approval Status updated successfully");
      setActionData("");
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["settings", "entries"]}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                onClick={() => setActionData("approve")}
              >
                <Check className="h-4 w-4 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Approve</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["settings", "entries"]}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                onClick={() => setActionData("reject")}
              >
                <X className="h-4 w-4 text-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reject</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      {actionData && (
        <AlertModal
          isOpen={actionData !== ""}
          onClose={() => setActionData("")}
          onConfirm={() => handleBulkStatusUpdate(rowData.id)}
          loading={isLoading}
          title="Confirmation"
          alertMessage={`Are you sure you want to ${actionData} this request?`}
          type={actionData === "approve" ? "default" : "destructive"}
        />
      )}
    </div>
  );
}
