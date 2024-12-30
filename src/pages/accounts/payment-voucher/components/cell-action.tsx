import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye, Pencil, Trash2} from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { EntryRow } from "@/lib/validators/accounts";
import { toast } from "sonner";

import {
  useGetEntryByIdQuery,
  useRemoveEntryMutation,
} from "@/store/services/accounts/api/entries";
import { useNavigate } from "react-router-dom";
import RoleAccess from "@/lib/access-control/role-access";
import { Modal } from "@/components/common/modal";
import { Loading } from "@/components/common/loading";
import VoucherDetailsForReceivedPayment from "@/components/common/accounts/entry/voucher-details-for-received-payment";

interface CellActionProps {
  rowData: EntryRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const [voucherDetailsOpen, setVoucherDetailsOpen] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);
  // Fetch the data only when the modal is open
  const { data, isFetching } = useGetEntryByIdQuery(`${rowData?.id}`, {
    skip: !fetchDataOnOpen,
  });

  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [removeEntry, { isLoading: deleteLoading }] = useRemoveEntryMutation();
  const navigation = useNavigate();

  const handleOpenModal = () => {
    setFetchDataOnOpen(true);
    setVoucherDetailsOpen(true);
  };

  const handleDepartmentDelete = async (id: number) => {
    try {
      await removeEntry(id);
      toast.success("Payment voucher deleted successfully");
      setAlertModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center space-x-2 min-h-10">
      <RoleAccess roles={["entries.edit"]}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                // onClick={() =>

                // }

                onClick={handleOpenModal}
              >
                <Eye className="h-4 w-4 text-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Payment Voucher Details</p>
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
                // onClick={() => setUpdateModalOpen(true)}
                onClick={() =>
                  navigation(`/accounts/payment-voucher/edit/${rowData.id}`)
                }

                // onClick={() => toggleModal()}
              >
                <Pencil className="h-4 w-4 text-foreground" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update Payment Voucher</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <RoleAccess roles={["entries.delete"]}>
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
              <p>Delete payment voucher</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RoleAccess>

      <AlertModal
        title="Are you sure?"
        description="This action cannot be undone."
        name={rowData.entry_number}
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        onConfirm={() => handleDepartmentDelete(rowData.id)}
        loading={deleteLoading}
      />
      {/*       <Modal
        title="Update Payment Voucher"
        isOpen={updateModalOpen}
        toggleModal={() => setUpdateModalOpen(false)}
        className="max-w-5xl h-[87vh] "
      >
        <AddPaymentForm
          rowData={rowData}
          modalClose={() => setUpdateModalOpen(false)}
        />
      </Modal> */}
      {voucherDetailsOpen && data && (
        <Modal
          isOpen={voucherDetailsOpen}
          toggleModal={() => setVoucherDetailsOpen(false)}
          className="max-w-5xl h-fit"
        >
          {isFetching ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <VoucherDetailsForReceivedPayment data={data?.data} />
          )}
        </Modal>
      )}
    </div>
  );
}
