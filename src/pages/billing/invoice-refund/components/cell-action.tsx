import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { BillingPaymentRow } from "@/lib/validators/billing/billing-payment";
import { useRemovePurchaseRefundMutation } from "@/store/services/billing/api/purchase-refund";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  rowData: BillingPaymentRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [removePurchaseRefund, { isLoading: deleteLoading }] =
    useRemovePurchaseRefundMutation();

  const handleDeletePurchaseRefund = async (id: number) => {
    try {
      await removePurchaseRefund(id);
      toast.success("Purchase Refund deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["invoice-refunds.delete"]}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => {
                setAlertModalOpen(true);
              }}
            >
              <Trash2 className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Invoice Refund</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </RoleAccess>
      

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.invoice_number}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDeletePurchaseRefund(rowData.id)}
        loading={deleteLoading}
      />
    </div>
  );
}
