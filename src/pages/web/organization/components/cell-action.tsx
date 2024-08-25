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
import { type OrganizationColumn  } from "@/lib/validators";
import { toast } from "sonner";

import { useRemoveOrganizationMutation } from "@/store/services/erp-main/api/organization";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  data: OrganizationColumn;
}

export function CellAction({ data }: CellActionProps) {
  const navigate = useNavigate()
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const [deleteOrganization, { isLoading: deleteLoading }] =
    useRemoveOrganizationMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteOrganization(id);
      toast.success("Organization deleted successfully");
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
              // onClick={() => setUpdateModalOpen(true)}
              onClick={()=> navigate(`/web/organizations/edit/${data.id}`)}

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Organization</p>
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
            <p>Delete Organization</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={deleteLoading}
      />
      {/* <Modal
        title="Update Organization"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
      > */}
       
      {/* </Modal> */}
    </div>
  );
}
