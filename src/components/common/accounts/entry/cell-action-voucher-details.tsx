import { useState } from "react";
import { EntryRow } from "@/lib/validators/accounts";
import { Modal } from "@/components/common/modal";
import VoucherDetails from "./voucher-details";
import { useGetEntryByIdQuery } from "@/store/services/accounts/api/entries";
import { Loading } from "../../loading";

interface CellActionProps {
  rowData: EntryRow;
}

export function CellActionVoucherDetails({ rowData }: CellActionProps) {
  const [voucherDetailsOpen, setVoucherDetailsOpen] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);

  // Fetch the data only when the modal is open
  const { data, isFetching } = useGetEntryByIdQuery(`${rowData?.id}`, {
    skip: !fetchDataOnOpen,
  });

  const handleOpenModal = () => {
    setFetchDataOnOpen(true);
    setVoucherDetailsOpen(true);
  };

  return (
    <div>
      <span
        className="cursor-pointer text-blue-600"
        onClick={handleOpenModal}
      >
        {rowData?.entry_number}
      </span>

      {voucherDetailsOpen && data && (
        <Modal
          isOpen={voucherDetailsOpen}
          toggleModal={() => setVoucherDetailsOpen(false)}
          className="w-[100px] h-fit"
        >
          {isFetching ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <VoucherDetails data={data?.data} />
          )}
        </Modal>
      )}
    </div>
  );
}
