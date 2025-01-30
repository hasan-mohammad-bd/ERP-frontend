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

import { CustomerColumn } from "@/lib/validators/billing/customer-supplier";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useRemoveContactPersonMutation } from "@/store/services/billing/api/contact-person";
import AddContactPersonForm from "./AddContactPersonForm";
import { Modal } from "@/components/common/modal";
import { useParams } from "react-router-dom";

interface CellActionProps {
  data: CustomerColumn;
}

export function CellAction({ data }: CellActionProps) {
  const params = useParams();
  const customerId = Number(params.id);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [editContactPersonModalOpen, setEditContactPersonModalOpen] =
    useState(false);

  const [deleteContactPErson, { isLoading: isCustomerDeleting }] =
    useRemoveContactPersonMutation();

  const handleContactPersonDelete = async (id: number) => {
    try {
      await deleteContactPErson(id).unwrap();
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
              onClick={() => setEditContactPersonModalOpen(true)}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Contact Person</p>
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
            <p>Delete Contact Person</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {editContactPersonModalOpen && (
        <Modal
          title={`Update Contact Person`}
          isOpen={editContactPersonModalOpen}
          toggleModal={() => {
            setEditContactPersonModalOpen(false);
          }}
          className="!w-full max-w-lg"
        >
          <AddContactPersonForm
            modalClose={() => {
              setEditContactPersonModalOpen(false);
            }}
            customer_id={customerId}
            data={data}
          />
        </Modal>
      )}

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleContactPersonDelete(data.id)}
        loading={isCustomerDeleting}
      />
    </div>
  );
}
