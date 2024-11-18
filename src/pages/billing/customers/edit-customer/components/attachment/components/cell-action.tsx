import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";

import { Attachment } from "@/lib/validators/billing/customer";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useRemoveAttachmentMutation } from "@/store/services/billing/api/attachment";

interface CellActionProps {
  data: Attachment;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [deleteAttachment, { isLoading: isAttachmentDeleting }] =
    useRemoveAttachmentMutation();

  const handleAttachmentDelete = async (id: number) => {
    try {
      await deleteAttachment(id).unwrap();
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

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.file_name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleAttachmentDelete(data.id)}
        loading={isAttachmentDeleting}
      />
    </div>
  );
}
