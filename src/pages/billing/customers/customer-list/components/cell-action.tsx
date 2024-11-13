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

import { useNavigate } from "react-router-dom";
import { CustomerColumn } from "@/lib/validators/billing/customer";
import { useRemoveCustomerMutation } from "@/store/services/billing/api/customer";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface CellActionProps {
  data: CustomerColumn;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const navigate = useNavigate();

  const [deleteCustomer, { isLoading: isCustomerDeleting }] =
    useRemoveCustomerMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteCustomer(id).unwrap();
      setAlertModalOpen(false);
      toast.success("Item deleted successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
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
              onClick={() => navigate(`/billing/customers/edit/${data.id}`)}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Employee</p>
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
            <p>Delete employee</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={isCustomerDeleting}
      />
    </div>
  );
}
