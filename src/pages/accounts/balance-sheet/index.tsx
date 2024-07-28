import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";

import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";

import { useGetBalanceSheetsQuery } from "@/store/services/accounts/api/balance-sheet.ts";
import BalanceSheetTable from "./components/balance-sheet-table";

const BalanceSheet = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = React.useState<number | null>(null);
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetBalanceSheetsQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${filtered ? filtered : ""}`
  );


  
  const balanceSheet = data?.data;


  console.log(balanceSheet)


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
          {balanceSheet ? (
            <BalanceSheetTable
              tableData={balanceSheet}
              // totalCr={totalCr}
              // totalDr={totalDr}
              reportFormate={{
                startDate,
                endDate,
                company: "Akaar IT",
                reportType: "Balance Sheet",
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

export default BalanceSheet;
