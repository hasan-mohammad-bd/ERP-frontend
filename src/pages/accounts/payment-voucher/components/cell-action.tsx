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
import { EntryRow } from "@/lib/validators/accounts";
import { toast } from "sonner";
import { AddPaymentForm } from "./add-payment-form";
import { Modal } from "@/components/common/modal";
import { useRemoveEntryMutation } from "@/store/services/accounts/api/entries";

interface CellActionProps {
  rowData: EntryRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [removeEntry, { isLoading: deleteLoading }] = useRemoveEntryMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await removeEntry(id);
      toast.success("Payment voucher deleted successfully");
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
              onClick={() => setUpdateModalOpen(true)}

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Payment Voucher</p>
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
            <p>Delete payment voucher</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.entry_number}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      />
      <Modal
        title="Update Payment Voucher"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
        className="max-w-5xl h-[87vh] "
      >
        <AddPaymentForm
          rowData={rowData}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
