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
// import { toast } from "sonner";
import { ErrorResponse } from "react-router-dom";
// import { QuotationRow } from "@/lib/validators/billing/quotation";
// import { useRemoveQuotationMutation } from "@/store/services/billing/api/quotations";
// import handleErrors from "@/lib/handle-errors";
// import { ErrorResponse } from "@/types";

import { PurchaseReturnRow } from "@/lib/validators/billing/return";
// import { useRemovePurchaseReturnMutation } from "@/store/services/billing/api/purchase-return";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { useRemoveInvoiceReturnMutation } from "@/store/services/billing/api/invoice-return";

interface CellActionProps {
  rowData: PurchaseReturnRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [removeInvoiceReturn, { isLoading: deleteLoading }] =
    useRemoveInvoiceReturnMutation();

  const handleDepartmentDelete = async (id: number) => {
    console.log(id);
    try {
      await removeInvoiceReturn(id).unwrap();
      toast.success("Item deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {/*       <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() =>
                navigation(`/billing/purchase-return/edit/${rowData.id}`)
              }

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Opening Balance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}

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
            <p>Delete Opening Balance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
