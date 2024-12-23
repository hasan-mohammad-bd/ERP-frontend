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
import { AddAttributeCategoryForm } from "./add-attribute-category-form";

import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { AttributeCategoryRow } from "@/lib/validators/billing/attribute-category";
import { useRemoveAttributeCategoryMutation } from "@/store/services/billing/api/attribute-category";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  data: AttributeCategoryRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteAttributeCategory, { isLoading }] =
    useRemoveAttributeCategoryMutation();

  const handleAttributeCategoryDelete = async (id: number) => {
    try {
      await deleteAttributeCategory(id).unwrap();
      toast.success("Attribute Category deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["attribute-categories.edit"]}>
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
              <p>Update Attribute Category</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["attribute-categories.delete"]}>
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
              <p>Delete Attribute Category</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      {alertModalOpen && (
        <AlertModal
          title="Are you sure?"
          description="This action cannot be undone."
          name={data.name}
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={() => handleAttributeCategoryDelete(data.id)}
          loading={isLoading}
        />
      )}
      {updateModalOpen && (
        <Modal
          title="Update Attribute Category"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <AddAttributeCategoryForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
