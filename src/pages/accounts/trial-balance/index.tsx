import React from "react";
import { Loading } from "@/components/common/loading";
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetTrialBalancesQuery } from "@/store/services/accounts/api/trial-balance.ts";
import TrialBalanceTable from "./components/trial-balance-table";

const TrialBalance = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = React.useState<number | null>(null);
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetTrialBalancesQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${filtered ? filtered : ""}`
  );

  const trialBalance = data?.data;
  const totalCr = data?.cr_balance || 0;
  const totalDr = data?.dr_balance || 0;


  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const ledgerAccountData = ledgerAccount?.data || [];

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col mb-3">
        <ReportsToolBar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          filterProp={{
            setFiltered,
            arrayItems: ledgerAccountData,
            loadingData: ledgerAccountLoading,
          }}
        />
        <div className="flex-1 space-y-4">
          <Separator />
          {trialBalance ? (
            <TrialBalanceTable
              tableData={trialBalance}
              totalCr={totalCr}
              totalDr={totalDr}
              reportFormate={{
                startDate,
                endDate,
                company: "Akaar IT",
                reportType: "Trial Balance",
              }}
            />
          ) : null}
          {/* <DataTable
                columns={subAccountColumns}
                data={generalLedger}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                noPagination={true}
                reportFormate={{
                  startDate,
                  endDate,
                  company: "Akaar IT",
                  reportType: "General Ledger",
                }}
              /> */}
        </div>
      </div>
    </>
  );
};

export default TrialBalance;
