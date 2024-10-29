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
import { AddProjectForm } from "./add-project-form";
import { Modal } from "@/components/common/modal";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import { useRemoveProjectMutation } from "@/store/services/accounts/api/project";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  rowData: ProjectRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteProject, { isLoading: deleteLoading }] =
    useRemoveProjectMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteProject(id);
      toast.success("Project deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["projects.edit"]}>
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
              <p>Update Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <RoleAccess roles={["projects.delete"]}>
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
              <p>Delete Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      />
      <Modal
        title="Update Contact"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
      >
        <AddProjectForm
          rowData={rowData}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
