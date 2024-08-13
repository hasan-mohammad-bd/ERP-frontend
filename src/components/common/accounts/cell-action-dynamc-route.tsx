
import { DetailedGeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  rowData: DetailedGeneralLedgerRow;
}

export function CellActionDynamicRoute({ rowData }: CellActionProps) {
  // const { data } = useGetEntryByIdQuery(`${rowData?.id}`);

 console.log(rowData)


const navigate = useNavigate()


  return (
    <div className="">
      <span
        className="cursor-pointer text-blue-600"
        onClick={() => navigate(`/accounts/reports/detailed-general-ledger/${rowData?.ledger_account?.id}`)}
      >
        {rowData?.ledger_account?.name}
      </span>


    </div>
  );
}
