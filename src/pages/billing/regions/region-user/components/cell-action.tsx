import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil } from "lucide-react";

import { Modal } from "@/components/common/modal";
import RoleAccess from "@/lib/access-control/role-access";
import { RegionUserDataType } from "@/store/services/billing/api/region-user/type";
import { ApplyRegionUserForm } from "./apply-region-user-form";

interface CellActionProps {
  rowData: RegionUserDataType;
}

export function CellAction({ rowData }: CellActionProps) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["users.edit"]}>
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
              <p>Update User</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      {/* <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      /> */}
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
    </div>
  );
}
