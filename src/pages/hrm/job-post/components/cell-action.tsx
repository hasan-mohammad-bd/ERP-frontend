import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Pencil, Trash2, ZoomIn } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { JobPostColumn } from "@/lib/validators";
import { toast } from "sonner";
import { AddJobPostForm } from "./add-job-post-form";
import { Modal } from "@/components/common/modal";
import { useRemoveJobPostMutation } from "@/store/services/hrm/api/job-post";
import ProductDetails from "./productDetails";

interface CellActionProps {
  data: JobPostColumn;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteJobPost, { isLoading: deleteLoading }] =
    useRemoveJobPostMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteJobPost(id);
      toast.success("Job deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
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
              onClick={() => setUpdateModalOpen(true)}

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Job Post</p>
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
                setDetailsModalOpen(true);
              }}
            >
              <ZoomIn className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Requisition</p>
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
            <p>Delete Requisition</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.title}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Job"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <AddJobPostForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
      {detailsModalOpen && (
        <Modal
          title="Job Details"
          isOpen={detailsModalOpen}
          toggleModal={() => setDetailsModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <ProductDetails data={data} />
        </Modal>
      )}
    </div>
  );
}
