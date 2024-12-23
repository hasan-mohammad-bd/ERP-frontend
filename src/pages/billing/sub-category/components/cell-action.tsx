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
import { CategoryFormValues } from "@/lib/validators/billing/category";
import { Modal } from "@/components/common/modal";
import { AddSubCategoryForm } from "./add-sub-category-form";
import { useRemoveCategoryMutation } from "@/store/services/billing/api/category";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  data: CategoryFormValues;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteCategory, { isLoading: deleteLoading }] =
    useRemoveCategoryMutation();

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
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["categories.edit"]}>
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
              <p>Update Employee</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["categories.delete"]}>
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
              <p>Delete employee</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleCategoryDelete(data?.id)}
        loading={deleteLoading}
      />

      {updateModalOpen && (
        <Modal
          title="Update Sub Category"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <AddSubCategoryForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
