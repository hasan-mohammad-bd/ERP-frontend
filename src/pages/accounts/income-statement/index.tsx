import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetIncomeStatementQuery } from "@/store/services/accounts/api/income-statement";
import IncomeStatementTable from "./components/incone-statement-table";

const IncomeStatement = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = React.useState<number | null>(null);
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetIncomeStatementQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${filtered ? filtered : ""}`
  );

  const balanceSheet = data?.data;

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
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />

          {balanceSheet ? (
            <IncomeStatementTable
              tableData={balanceSheet}
              // totalCr={totalCr}
              // totalDr={totalDr}
              reportFormate={{
                startDate,
                endDate,
                company: "Akaar IT",
                reportType: "Income Statement",
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default IncomeStatement;
