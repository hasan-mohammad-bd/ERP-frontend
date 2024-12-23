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
import { AddBrandForm } from "./add-brand-form";

import { BrandRow } from "@/lib/validators/billing/brand";
import { useRemoveBrandMutation } from "@/store/services/billing/api/brand";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  data: BrandRow; // Data type as defined
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteBrand, { isLoading: deleteLoading }] = useRemoveBrandMutation();

  const handleBrandDelete = async (id: number) => {
    try {
      await deleteBrand(id);
      toast.success("Brand deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["brands.edit"]}>
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
              <p>Update Brand</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["brands.delete"]}>
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
              <p>Delete Brand</p>
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
        onConfirm={() => handleBrandDelete(data.id!)} // Use non-null assertion here
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Brand"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[600px]"
        >
          <AddBrandForm
            data={data} // Adjusted the structure here
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
