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
// import { AddHolidayForm } from "./add-holiday-form";
import { Modal } from "@/components/common/modal";
import { useRemoveHolidayMutation } from "@/store/services/hrm/api/holiday";
import { UpdateHolidayForm } from "./update-holiday-form";
import { HolidayFormRows } from "@/lib/validators/hrm/holidays";

interface CellActionProps {
  data: HolidayFormRows;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteHoliday, { isLoading: deleteLoading }] =
    useRemoveHolidayMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteHoliday(id);
      toast.success("Holiday deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

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
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Holiday</p>
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
            <p>Delete Holiday</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data?.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={deleteLoading}
      />
      {updateModalOpen && (
        <Modal
          title="Update Holiday"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
        >
          <UpdateHolidayForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
