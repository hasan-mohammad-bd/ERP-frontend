import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Activity, Pencil, Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ItemRow } from "@/lib/validators/billing/items";
import { useRemoveItemMutation } from "@/store/services/billing/api/items";
import { AddOpeningStockForm } from "./add-opening-stock-form";
import { Modal } from "@/components/common/modal";

interface CellActionProps {
  data: ItemRow;
}

export function CellAction({ data }: CellActionProps) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const navigate = useNavigate();

  const [deleteItem, { isLoading: isDeleting }] = useRemoveItemMutation();

  const handleItemDelete = async (id: number) => {
    try {
      await deleteItem(id);
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }

    console.log(id);
    toast.success("Item deleted successfully");
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
              onClick={() => setStockModalOpen(true)}
            >
              <Activity className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Set Opening Stock</p>
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
              onClick={() => navigate(`/billing/items/edit/${data.id}`)}

              // onClick={() => toggleModal()}
            >
              <Pencil className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Update Item</p>
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
            <p>Delete Item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={data.name}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleItemDelete(data.id)}
        loading={isDeleting}
      />

      {stockModalOpen && (
        <Modal
          title="Set Opening Stock"
          isOpen={stockModalOpen}
          toggleModal={() => setStockModalOpen(false)}
          className="max-w-3xl w-full"
        >
          <AddOpeningStockForm
            data={data}
            modalClose={() => setStockModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
