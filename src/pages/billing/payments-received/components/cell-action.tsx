import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash2, ZoomIn } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { useRemovePaymentReceivedMutation } from "@/store/services/billing/api/payment-received";
import { BillingPaymentRow } from "@/lib/validators/billing/billing-payment";
import { useNavigate } from "react-router-dom";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  rowData: BillingPaymentRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const navigation = useNavigate();

  const [removePaymentReceived, { isLoading: deleteLoading }] =
    useRemovePaymentReceivedMutation();

  const handleDeletePaymentReceived = async (id: number) => {
    try {
      await removePaymentReceived(id);
      toast.success("Payments Received deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick = {() => navigation(`/billing/purchase-receive/details/${rowData.id}`)}

              // onClick={() => toggleModal()}
            >
              <ZoomIn className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Opening Balance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
       <RoleAccess roles={["payment-receives.delete"]}>
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
            <p>Delete Payment Receive</p>
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
        onConfirm={() => handleDeletePaymentReceived(rowData.id)}
        loading={deleteLoading}
      />
    </div>
  );
}
