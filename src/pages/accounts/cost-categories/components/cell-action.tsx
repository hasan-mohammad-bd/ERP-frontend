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
import { AddCostCategoryForm } from "./add-const-category-form";
import { Modal } from "@/components/common/modal";
import { CostCategoryRow } from "@/lib/validators/accounts/cost-categories";
import { useRemoveCostCategoryMutation } from "@/store/services/accounts/api/cost-category";

interface CellActionProps {
  rowData: CostCategoryRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteCostCategory, { isLoading: deleteLoading }] =
    useRemoveCostCategoryMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteCostCategory(id);
      toast.success("Cost Category deleted successfully");
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
            <p>Update Cost Category</p>
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
            <p>Delete Cost Category</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      />
      <Modal
        title="Update Contact"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
      >
        <AddCostCategoryForm
          rowData={rowData}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
