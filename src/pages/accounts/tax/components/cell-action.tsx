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
import { Modal } from "@/components/common/modal";

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { AddTaxForm } from "./add-tax-form";
import { useRemoveTaxesMutation } from "@/store/services/accounts/api/tax";
import { TaxRow } from "@/lib/validators/accounts/tax";

interface CellActionProps {
  data: TaxRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteUnit, { isLoading }] = useRemoveTaxesMutation();

  const handleUnitDelete = async (id: number) => {
    try {
      await deleteUnit(id).unwrap();
      toast.success("Unit deleted successfully");
      setAlertModalOpen(false);
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
            <p>Update Unit</p>
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
            <p>Delete Unit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {alertModalOpen && (
        <AlertModal
          title="Are you sure?"
          description="This action cannot be undone."
          name={data.name}
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={() => handleUnitDelete(data.id)}
          loading={isLoading}
        />
      )}
      {updateModalOpen && (
        <Modal
          title="Update Unit"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <AddTaxForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
