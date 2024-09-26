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
import { AttendancePolicyForm } from "./add-leave-request-form";
import { LeaveRequestRow } from "@/lib/validators/hrm/leave";
import { useRemoveLeaveRequestMutation } from "@/store/services/hrm/api/leave-request";

interface CellActionProps {
  data: LeaveRequestRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const [deleteLeaveRequest, { isLoading: deleteLoading }] =
    useRemoveLeaveRequestMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteLeaveRequest(id);
      toast.success("Leave deleted successfully");
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
            <p>Update Leave Request</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>

          <TooltipContent>
            <p>Delete Leave Request</p>
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
        name={data?.employee?.first_name + " " + data?.employee?.last_name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Leave Request"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-3/5 max-w-3xl"

        >
          <AttendancePolicyForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}

    </div>
  );
}
