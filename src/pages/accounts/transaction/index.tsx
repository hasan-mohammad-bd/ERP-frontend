import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { detailedGeneralLedgerColumns } from "./components/columns";
import { useGetDetailGeneralLedgersQuery } from "@/store/services/accounts/api/general-ledger";
import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { LedgerRow } from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";

const Transaction = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = React.useState<LedgerRow | undefined>();
  const [project, setProject] = React.useState<ProjectRow | undefined>();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetDetailGeneralLedgersQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${account?.id ? account?.id : ""}&project_id=${
      project?.id ? project?.id : ""
    }`
  );



  const detailedGeneralLedgerData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

    const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery(
      `page=1&per_page=1000`
    );

  const projectData = projects?.data || [];

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
          {detailedGeneralLedgerData && (
            <div>
              <DataTable
                columns={detailedGeneralLedgerColumns}
                data={detailedGeneralLedgerData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                noPagination={true}
                reportFormate={{
                  startDate,
                  endDate,
                  company: "Akaar IT",
                  reportType: "Transaction Report",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Transaction;