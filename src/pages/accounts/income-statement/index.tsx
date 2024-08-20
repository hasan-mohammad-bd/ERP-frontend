import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetIncomeStatementQuery } from "@/store/services/accounts/api/income-statement";
import IncomeStatementTable from "./components/incone-statement-table";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";

const IncomeStatement = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [projectFiltered, setProjectFiltered] = React.useState<number | null>(
    null
  );
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
    }&ledger_account_id=${filtered ? filtered : ""}&project_id=${
      projectFiltered ? projectFiltered : ""
    }`
  );

  const incomeStatement = data?.data.slice().reverse();
//descending order data

  const summery = data?.summery;

  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const ledgerAccountData = ledgerAccount?.data || [];

  const { data: projects, isLoading: projectsLoading } =
    useGetProjectsQuery(`page=1&per_page=1000`);

  const projectData = projects?.data || [];

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col mb-3">
        <ReportsToolBar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          filterProp={{
            setFiltered,
            setProjectFiltered,
            arrayItems: ledgerAccountData,
            loadingData: ledgerAccountLoading,
            arrayItemsTwo: projectData,
            loadingDataTwo: projectsLoading,
          }}
        />
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />

          {incomeStatement ? (
            <IncomeStatementTable
              tableData={incomeStatement}
              summery={summery}
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
