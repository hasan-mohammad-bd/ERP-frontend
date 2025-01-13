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
// import RoleAccess from "@/lib/access-control/role-access";
import { AddLoanTypeForm } from "./add-loan-type-form";
import { LoanTypeColumn } from "@/lib/validators/hrm/loan-type";
import { useRemoveLoanTypeMutation } from "@/store/services/hrm/api/laon-type";

interface CellActionProps {
  data: LoanTypeColumn;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteLoanType, { isLoading: deleteLoading }] =
    useRemoveLoanTypeMutation();

  const handleLoanTypeDelete = async (id: number) => {
    try {
      await deleteLoanType(id);
      toast.success("Loan Type deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      {/* <RoleAccess roles={["hrm.update"]}> */}
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
              <p>Update Loan Type</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      {/* </RoleAccess> */}

      {/* <RoleAccess roles={["hrm.delete"]}> */}
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
              <p>Delete Loan Type</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      {/* </RoleAccess> */}

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleLoanTypeDelete(data.id)}
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Loan Type"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <AddLoanTypeForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
