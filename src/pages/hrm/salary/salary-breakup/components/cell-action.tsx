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
import { AddSalaryBreakupForm } from "./add-salary-breakup-form";
import { useRemoveSalaryCategoriesMutation } from "@/store/services/hrm/api/salary-categories";
import { SalaryCategoriesFormRows } from "@/lib/validators/hrm/salary-categories";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

export interface CellActionProps {
  data: SalaryCategoriesFormRows;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [removeSalaryCategories, { isLoading: deleteLoading }] =
    useRemoveSalaryCategoriesMutation();

  const handleSalaryCategoryDelete = async (id: number) => {
    try {
      await removeSalaryCategories(id).unwrap();
      toast.success("Job deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {

      console.log(error);
      handleErrors(error as ErrorResponse)
    }
  };

  const canDelete = data.is_default === 0;

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
            <p>Update Job Post</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {canDelete ? (
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
              <p>Delete Requisition</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                disabled
              >
                <Trash2 className="h-4 w-4 text-gray-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cannot delete default category</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleSalaryCategoryDelete(data.id)}
        loading={deleteLoading}
      />

      {updateModalOpen && (
        <Modal
          title="Update Salary BreakUp"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="max-w-xl"
        >
          <AddSalaryBreakupForm
            data={{
              id: data.id,
              name: data.name,
              short_code: data.short_code || "", // Provide a default value
              type: data.type,
              is_default: data.is_default.toString(), // Ensure is_default is a string
              sorting_index: data.sorting_index,
            }}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
