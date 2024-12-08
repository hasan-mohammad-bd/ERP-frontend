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
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";
import { useRemoveSalesOrderMutation } from "@/store/services/billing/api/sales-order";

interface CellActionProps {
  rowData: PurchaseOrderRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [removeSalesOrder, { isLoading: deleteLoading }] =
    useRemoveSalesOrderMutation();
  const navigation = useNavigate();

  const handleSalesOrderDelete = async (id: number) => {
    try {
      await removeSalesOrder(id).unwrap();
      toast.success("Item deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      handleErrors(error as ErrorResponse);
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
              onClick={() =>
                navigation(`/billing/quotes/edit/${rowData.id}`)
              }
            >
              <Pencil className="h-4 w-4 text-foreground" />
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
            <p>Delete Opening Balance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={"This Sales Order"}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleSalesOrderDelete(rowData.id)}
        loading={deleteLoading}
      />
    </div>
  );
}
