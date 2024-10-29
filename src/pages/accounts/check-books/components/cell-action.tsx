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
import { AddCheckBookForm } from "./add-check-book-form";
import { Modal } from "@/components/common/modal";
import { CheckBookRow } from "@/lib/validators/accounts/check-books";
import { useRemoveCheckBookMutation } from "@/store/services/accounts/api/check-books";
import RoleAccess from "@/lib/access-control/role-access";

interface CellActionProps {
  rowData: CheckBookRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteCheckBook, { isLoading: deleteLoading }] =
    useRemoveCheckBookMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteCheckBook(id);
      toast.success("Check Book deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["check-books.edit"]}>
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
              <p>Update Check Book</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>
      <RoleAccess roles={["check-books.delete"]}>
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
              <p>Delete Check Book</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.book_number}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDelete(rowData.id)}
        loading={deleteLoading}
      />
      <Modal
        title="Update Check Book"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
      >
        <AddCheckBookForm
          rowData={rowData}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
