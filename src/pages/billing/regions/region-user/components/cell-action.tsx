import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Crosshair, MapPin } from "lucide-react";

import { Modal } from "@/components/common/modal";
import RoleAccess from "@/lib/access-control/role-access";
import { RegionUserDataType } from "@/store/services/billing/api/region-user/type";
import { ApplyRegionUserForm } from "./apply-region-user-form";
import { ApplyTargetForm } from "./apply-target";

interface CellActionProps {
  rowData: RegionUserDataType;
}

export function CellAction({ rowData }: CellActionProps) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [targetModalOpen, setTargetModalOpen] = useState(false);

  return (
    <div className="flex justify-start space-x-2 min-h-10">
      <RoleAccess roles={["users.edit"]}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                onClick={() => setTargetModalOpen(true)}
              >
                <Crosshair className="h-4 w-4 text-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Apply Target</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["users.edit"]}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                onClick={() => setUpdateModalOpen(true)}
              >
                <MapPin className="h-4 w-4 text-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Set Region</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <Modal
        title=""
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
        className="w-1/2 max-w-xl"
      >
        <ApplyRegionUserForm
          userId={rowData.id}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal>
      <Modal
        title=""
        isOpen={targetModalOpen}
        toggleModal={() => setTargetModalOpen(false)}
        className="w-1/2 max-w-xl"
      >
        <ApplyTargetForm
          userData={rowData}
          modalClose={() => setTargetModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
