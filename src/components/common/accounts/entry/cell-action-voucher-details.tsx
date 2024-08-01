import { useEffect, useState } from "react";
import { EntryRow } from "@/lib/validators/accounts";
import { Modal } from "@/components/common/modal";
import VoucherDetails from "./voucher-details";
import { useGetEntryByIdQuery } from "@/store/services/accounts/api/entries";
import { Loading } from "../../loading";

interface CellActionProps {
  rowData: EntryRow;
}

export function CellActionVoucherDetails({ rowData }: CellActionProps) {
  const { data } = useGetEntryByIdQuery(`${rowData?.id}`);

  const [fetchedData, setFetchedData] = useState<EntryRow>();
  useEffect(() => {
    setFetchedData(data?.data);
  }, [data]);

  // const voucherDetails = data?.data as EntryRow;

  const [voucherDetailsOpen, setVoucherDetailsOpen] = useState(false);

  return (
    <div className="">
      <span
        className="cursor-pointer text-blue-600"
        onClick={() => setVoucherDetailsOpen(true)}
      >
        {rowData?.entry_number}
      </span>

      <Modal
        isOpen={voucherDetailsOpen}
        toggleModal={() => setVoucherDetailsOpen(false)}
        className="max-w-5xl h-3/4 "
      >
        {fetchedData ? <VoucherDetails data={fetchedData} /> : <div className="w-full h-full flex justify-center items-center"><Loading /></div>}
      </Modal>
    </div>
  );
}
