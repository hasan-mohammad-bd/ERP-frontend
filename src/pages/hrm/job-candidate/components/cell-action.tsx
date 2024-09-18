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
import { JobCandidateColumn } from "@/lib/validators";
import { toast } from "sonner";
import { AddJobCandidateForm } from "./add-job-candidate-form";
import { Modal } from "@/components/common/modal";
import ProductDetails from "./productDetails";
import { useRemoveJobCandidateMutation } from "@/store/services/hrm/api/job-candidate";

interface CellActionProps {
  data: JobCandidateColumn;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [deleteJobCandidate, { isLoading: deleteLoading }] =
    useRemoveJobCandidateMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteJobCandidate(id);
      toast.success("Job Candidate deleted successfully");
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
        name={data.first_name}
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
          <AddJobCandidateForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
      {/* <AddEducationForm jobData={data} /> */}
      {detailsModalOpen && (
        <Modal
          title="Job Details"
          isOpen={detailsModalOpen}
          toggleModal={() => setDetailsModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <ProductDetails />
        </Modal>
      )}
    </div>
  );
}
