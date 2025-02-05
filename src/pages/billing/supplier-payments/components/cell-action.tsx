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
import { BillingPaymentRow } from "@/lib/validators/billing/billing-payment";
import { useRemoveSupplierPaymentMutation } from "@/store/services/billing/api/supplier-payments";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  rowData: BillingPaymentRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const navigation = useNavigate();

  const [removeSupplierPayment, { isLoading: deleteLoading }] =
    useRemoveSupplierPaymentMutation();

  const handleDeletePaymentReceived = async (id: number) => {
    try {
      await removeSupplierPayment(id);
      toast.success("Supplier Payment deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2">
            <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick = {() => navigation(`/billing/supplier-payments/details/${rowData.id}`)}

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
            <p>Delete Supplier Payment</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
