import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Pencil } from "lucide-react";
// import { AlertModal } from "@/components/common/alert-modal";
import { EducationColumn } from "@/lib/validators";
// import { toast } from "sonner";

import { Modal } from "@/components/common/modal";

// import { useRemoveJobCandidateMutation } from "@/store/services/hrm/api/job-candidate";
import { AddEducationForm } from "./add-education";

interface CellActionProps {
  data: EducationColumn;
}

export function CellActionEducation({ data }: CellActionProps) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

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
            <p>Update Education</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {updateModalOpen && (
        <Modal
          title="Update Education"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <AddEducationForm
            data={data}
            modelClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
