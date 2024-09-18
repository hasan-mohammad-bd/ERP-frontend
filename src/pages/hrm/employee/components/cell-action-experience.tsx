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
import { ExperienceColumn } from "@/lib/validators";
// import { toast } from "sonner";

import { Modal } from "@/components/common/modal";

// import { useRemoveJobCandidateMutation } from "@/store/services/hrm/api/job-candidate";

import { AddExperienceForm } from "./employee-form/add-experience";

interface CellActionProps {
  data: ExperienceColumn;
}

export function CellActionExperience({ data }: CellActionProps) {
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
            <p>Update Experience</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {updateModalOpen && (
        <Modal
          title="Update Experience"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <AddExperienceForm
            data={data}
            modelClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
