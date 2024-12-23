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

import { useRemoveAttributeMutation } from "@/store/services/billing/api/attributes";
import { AttributeRow } from "@/lib/validators/billing/attributes";
import { AddAttributeForm } from "./add-attribute-form";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  data: AttributeRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteAttribute, { isLoading }] = useRemoveAttributeMutation();

  const handleAttributeDelete = async (id: number) => {
    try {
      await deleteAttribute(id).unwrap();
      toast.success("Attribute  deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["attributes.edit"]}>
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
              <p>Update Attribute </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["attributes.delete"]}>
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
              <p>Delete Attribute </p>
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
          onConfirm={() => handleAttributeDelete(data.id)}
          loading={isLoading}
        />
      )}
      {updateModalOpen && (
        <Modal
          title="Update Attribute "
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <AddAttributeForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
