import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
// import { AlertModal } from "@/components/common/alert-modal";
import { LedgerGroupColumn } from "@/lib/validators";
// import { toast } from "sonner";
import { AddLedgerGroupForm } from "./add-ledger-group-form";
import { Modal } from "@/components/common/modal";
import { AddLedgerForm } from "./add-ledger-form";
// import { useRemoveFinancialYearMutation } from "@/store/services/accounts/api/financial-year";

interface CellActionProps {
  data: LedgerGroupColumn;
}

export function CellAction({ data }: CellActionProps) {
  // const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [ledgerGroupModalOpen, setLedgerGroupModalOpen] = useState(false);
  const [ledgerModalOpen, setLedgerModalOpen] = useState(false);

  /*   const [deleteFinancialYear, { isLoading: deleteLoading }] =
    useRemoveFinancialYearMutation(); */

  /*   const handleDepartmentDelete = async (id: number) => {
    try {
      await deleteFinancialYear(id);
      toast.success("Financial year deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="flex justify-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => setLedgerGroupModalOpen(true)}

              // onClick={() => toggleModal()}
            >
              <Plus className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add child Group</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() => setLedgerModalOpen(true)}

              // onClick={() => toggleModal()}
            >
              <Plus className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add ledger </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/*       <TooltipProvider>
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
            <p>Delete Financial Year</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}

      {/*       <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(data.id)}
        loading={deleteLoading}
      /> */}
      <Modal
        title="Add Group"
        isOpen={ledgerGroupModalOpen}
        toggleModal={() => setLedgerGroupModalOpen(false)}
      >
        <AddLedgerGroupForm
          data={data}
          modalClose={() => setLedgerGroupModalOpen(false)}
        />
      </Modal>
      <Modal
        title="Add Account"
        isOpen={ledgerModalOpen}
        toggleModal={() => setLedgerModalOpen(false)}
      >
        <AddLedgerForm
          data={data}
          modalClose={() => setLedgerModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
