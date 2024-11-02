import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Pencil, Trash2, CircleDollarSign } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { EmployeeColumn } from "@/lib/validators";
import { toast } from "sonner";
// import { EmployeeForm } from "./employee-form";
import { Modal } from "@/components/common/modal";
import ProductDetails from "./productDetails";
import { useRemoveEmployeeMutation } from "@/store/services/hrm/api/employee-list";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  data: EmployeeColumn;
}


export function CellAction({ data }: CellActionProps) {
  console.log(data)
  console.log(data.id)
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  // const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [deleteEmployee, { isLoading: deleteLoading }] =
    useRemoveEmployeeMutation();

  const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
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
              onClick={() => navigate(`/hrm/salary-setup/${data.id}`)}
              className="hover:bg-secondary"
            >
              <CircleDollarSign className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Employee Salary Setup</p>
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
              onClick={() => navigate(`/hrm/employees-list/edit/${data.id}`)}

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Employee</p>
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
            <p>Delete employee</p>
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
      {/* {updateModalOpen && (
        <Modal
          title="Update Job"
          isOpen={updateModalOpen}
          toggleModal={() => setUpdateModalOpen(false)}
          className="w-[90%] max-w-6xl"
        >
          <EmployeeForm
            data={data}
            modalClose={() => setUpdateModalOpen(false)}
          />
        </Modal>
      )} */}
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
