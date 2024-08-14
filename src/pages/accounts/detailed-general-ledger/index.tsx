import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useGetDetailGeneralLedgersQuery } from "@/store/services/accounts/api/general-ledger";
import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";

import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import DetailedGeneralTable from "./components/detailed-general-table";
import { Button } from "@/components/ui/button";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";

const DetailedGeneralLedger = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [ filtered, setFiltered ] = React.useState<number | null>(null);


  const param = useParams();



  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetDetailGeneralLedgersQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${param.ledgerId || filtered}`
  );

  const detailedGeneralLedgerData = data?.data || [];
  const navigate = useNavigate()


  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
  useGetLedgerAccountsQuery("page=1&per_page=1000");

  const ledgerAccountData = ledgerAccount?.data || [];
  console.log(detailedGeneralLedgerData)


 
  const summery = data?.summery || {

    dr_amount: 0,
    cr_amount: 0,
    closeing_balance: 0,
    opening_balance: 0,
  };

  console.log(summery)

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col mb-3">
        <ReportsToolBar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          filterProp={{ setFiltered, arrayItems: ledgerAccountData, loadingData: ledgerAccountLoading }}

        />
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />
          {detailedGeneralLedgerData && summery ? (
            <DetailedGeneralTable
              tableData={detailedGeneralLedgerData}
              summery={summery}
              reportFormate={{
                startDate,
                endDate,
                company: "Akaar IT",
                reportType: "Detailed General Ledger",
              }}
            />
          ) : null}
          <div className="flex justify-end">
          <Button className="" onClick={() => navigate("/accounts/reports/transaction")}>Back</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedGeneralLedger;