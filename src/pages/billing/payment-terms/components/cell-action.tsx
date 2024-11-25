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

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { PaymentTermRow } from "@/lib/validators/billing/payment-terms";
import { useRemovePaymentTermMutation } from "@/store/services/billing/api/payment-terms";
import { AddPaymentTermForm } from "./add-payment-term-form";
import { Modal } from "@/components/common/modal";

interface CellActionProps {
  data: PaymentTermRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deletePaymentTerm, { isLoading: isDeleting }] =
    useRemovePaymentTermMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deletePaymentTerm(id);
      setAlertModalOpen(false);
      toast.success("Item deleted successfully");
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
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
              onClick={() => setUpdateModalOpen(true)}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Payment Term</p>
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
            <p>Delete Payment Term</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={isDeleting}
      />

      {updateModalOpen && (
        <Modal
          title="Update Payment Term"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[420px]"
        >
          <AddPaymentTermForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
