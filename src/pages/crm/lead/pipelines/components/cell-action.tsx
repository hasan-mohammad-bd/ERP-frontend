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
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { PipelineRow } from "@/lib/validators/crm/pipelines";
import { useRemovePipelineMutation } from "@/store/services/crm/api/pipelines";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  data: PipelineRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [deletePipeline, { isLoading }] = useRemovePipelineMutation();
  const navigation = useNavigate();

  const handlePipelineDelete = async (id: number) => {
    try {
      await deletePipeline(id).unwrap();
      toast.success("Pipeline deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
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
              onClick={() =>
                navigation(`/crm/lead/pipelines/edit/${data.id}`)
              }
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Pipeline</p>
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
            <p>Delete Pipeline</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {alertModalOpen && (
        <AlertModal
          title="Are you sure?"
          description="This action cannot be undone."
          name={"This Pipeline"}
          isOpen={alertModalOpen}
          onClose={() => setAlertModalOpen(false)}
          onConfirm={() => handlePipelineDelete(data.id)}
          loading={isLoading}
        />
      )}
    </div>
  );
}
