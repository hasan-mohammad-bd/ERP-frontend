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
import { ExpenseCategoryRow } from "@/lib/validators/billing/category";
import { Modal } from "@/components/common/modal";
import { AddCategoryForm } from "./add-category-form";
import { useRemoveExpensesCategoryMutation } from "@/store/services/billing/api/expenses-category";

interface CellActionProps {
  data: ExpenseCategoryRow; // Data type as defined
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteCategory, { isLoading: deleteLoading }] =
    useRemoveExpensesCategoryMutation();

  const handleCategoryDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      toast.success("Category deleted successfully");
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
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Category</p>
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
              onClick={() => setAlertModalOpen(true)}
            >
              <Trash2 className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Category</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleCategoryDelete(data.id!)} // Use non-null assertion here
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Category"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="max-w-xl"
        >
          <AddCategoryForm
            data={data} // Adjusted the structure here
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
