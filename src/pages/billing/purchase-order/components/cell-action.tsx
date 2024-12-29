import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil, Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
// import { QuotationRow } from "@/lib/validators/billing/quotation";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { PurchaseOrderResponse } from "@/lib/validators/billing/billing-responses";
import { useRemovePurchaseOrderMutation } from "@/store/services/billing/api/purchase-order";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  rowData: PurchaseOrderResponse;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [removePurchaseOrder, { isLoading: deleteLoading }] =
    useRemovePurchaseOrderMutation();
  const navigation = useNavigate();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await removePurchaseOrder(id).unwrap();
      toast.success("Item deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      handleErrors(error as ErrorResponse);
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
              onClick={() =>
                navigation(`/billing/purchase-orders/edit/${rowData.id}`)
              }

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Purchase Order</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <RoleAccess roles={["purchase-orders.delete"]}>
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
              <p>Delete Purchase Order</p>
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
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      />
    </div>
  );
}
