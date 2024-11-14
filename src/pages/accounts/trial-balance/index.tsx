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
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { LedgerRow } from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import { useAuth } from "@/store/hooks";

const TrialBalance = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = React.useState<ProjectRow | undefined>();
  const [account, setAccount] = React.useState<LedgerRow | undefined>();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const { user } = useAuth();

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetTrialBalancesQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${account?.id ? account?.id : ""}&project_id=${
      project?.id ? project?.id : ""
    }`
  );

  const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery(
    `page=1&per_page=1000`
  );

const projectData = projects?.data || [];

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
            account,
            setAccount,
            project,
            setProject,
            arrayItems: ledgerAccountData,
            loadingData: ledgerAccountLoading,
            arrayItemsTwo: projectData,
            loadingDataTwo: projectsLoading,
          }}
        />
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />
          {trialBalance && user ? (
            <TrialBalanceTable
              tableData={trialBalance}
              totalCr={totalCr}
              totalDr={totalDr}
              reportFormate={{
                startDate,
                endDate,
                company: user.organization.name,
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
