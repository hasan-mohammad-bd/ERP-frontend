import React from "react";
import { Loading } from "@/components/common/loading";
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";

import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";

import { generalLedgerColumns } from "./components/columns";

import { useGetGeneralLedgersQuery } from "@/store/services/accounts/api/general-ledger";

import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { Card } from "@/components/ui/card";
import { LedgerRow } from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import { useAuth } from "@/store/hooks";

const GeneralLedger = () => {
  // const [isOpen, setIsOpen] = useState(false);
  
  const [project, setProject] = React.useState<ProjectRow | undefined>();
  const [account, setAccount] = React.useState<LedgerRow | undefined>();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { user } = useAuth();

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data, isLoading } = useGetGeneralLedgersQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${account?.id ? account?.id : ""}&project_id=${
      project?.id ? project?.id : ""
    }`
  );

  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const { data: projects, isLoading: projectsLoading } =
    useGetProjectsQuery(`page=1&per_page=1000`);


  const projectData = projects?.data || [];
  const ledgerAccountData = ledgerAccount?.data || [];
  const generalLedger = data?.data || [];
  const summery = data?.summery;

  // useEffect(() => {
  //   if (param.ledgerId) {
  //    const found = ledgerAccountData.find((item) => {
  //      return item.id == Number(param.ledgerId)
  //    })
  //    setAccount(found);
  //    console.log(found, "found");
  //   }
  // },[ledgerAccountData, param.ledgerId])

  console.log(summery);



  const paginationInfo: PaginationInfo | undefined = data?.meta;
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex flex-col mb-3">
        <ReportsToolBar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          filterProp={{
            setAccount,
            account,
            project,
            setProject,
            // setProjectFiltered,

            arrayItems: ledgerAccountData,
            loadingData: ledgerAccountLoading,
            arrayItemsTwo: projectData,
            loadingDataTwo: projectsLoading,
          }}
        />
        <div className="flex-1 space-y-4">
          <Separator />
          {generalLedger && user && (
            <Card className="w-2/3 mx-auto">
              <DataTable
                columns={generalLedgerColumns}
                data={generalLedger}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                noPagination={true}
                reportFormate={{
                  startDate,
                  endDate,
                  company: user.organization.name,
                  reportType: "General Ledger",
                }}
              >
                {/*                 <div className="grid grid-cols-7 items-center justify-end bg-gray-100 rounded-lg py-3">
                  <span className="font-bold text-sm col-span-5 text-right mr-10">
                    Total
                  </span>
                  <span className="font-bold text-sm">
                    {summery?.cr_amount.toLocaleString("en-IN")}
                  </span>
                  <span className="font-bold text-sm">
                    {summery?.dr_amount.toLocaleString("en-IN")}
                  </span>
                  <span></span>
                </div> */}
              </DataTable>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default GeneralLedger;
