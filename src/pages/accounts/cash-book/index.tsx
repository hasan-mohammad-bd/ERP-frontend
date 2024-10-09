import React from "react";
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PaginationInfo } from "@/types";
import { PaginationState } from "@tanstack/react-table";
import { cashBookColumns } from "./components/columns";
import ReportsToolBar from "@/components/common/tool-bar/reports-tool-bar";
import { useGetLedgerAccountsQuery } from "@/store/services/accounts/api/ledger-account";
import { format } from "date-fns";
import { useGetProjectsQuery } from "@/store/services/accounts/api/project";
import { useGetEntriesQuery } from "@/store/services/accounts/api/entries";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import VOUCHER_TYPES from "@/constants/voucher-types";
import { LedgerRow } from "@/lib/validators/accounts";
import { ProjectRow } from "@/lib/validators/accounts/projects";
import SearchSelect from "@/components/common/search-select";
import { LocationColumn } from "@/lib/validators";

const CashBook = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = React.useState<LedgerRow | undefined>();
  const [project, setProject] = React.useState<ProjectRow | undefined>();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [location, setLocation] = React.useState<LocationColumn | undefined>();
  const [voucherType, setVoucherType] = React.useState<{type: string, title: string} | undefined>();

  // Filters
  const { data: ledgerAccount, isLoading: ledgerAccountLoading } =
    useGetLedgerAccountsQuery("page=1&per_page=1000");

  const { data: projects, isLoading: projectsLoading } =
    useGetProjectsQuery(`page=1&per_page=1000`);

  const projectData = projects?.data || [];

  const ledgerAccountData = ledgerAccount?.data || [];

  const formateStartDate = format(
    startDate ? startDate : new Date(),
    "yyyy-MM-dd"
  );
  const formateEndDate = format(endDate ? endDate : new Date(), "yyyy-MM-dd");

  const { data: locations } = useGetLocationsQuery("page=1&per_page=1000");
  const locationData = locations?.data || [];

  // Pagination Control
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const { data, isLoading } = useGetEntriesQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${account?.id ? account.id : ""}&project_id=${
      project?.id ? project?.id : ""
    }&location_id=${location?.id ? location?.id : ""}&type=${
      voucherType?.type ? voucherType?.type : ""
    }&page=${pagination.pageIndex + 1}&per_page=${pagination.pageSize}`
  );

  const entriesData = data?.data || [];
  const paginationInfo: PaginationInfo | undefined = data?.meta;

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
        >
          <div>
            <SearchSelect
              items={locationData || []}
              labelKey="name"
              valueKey="id"
              value={location}
              placeholder="Select Location"
              onSelect={setLocation}
            />
          </div>
          <div>
            {/* <DropdownSelect
              items={VOUCHER_TYPES}
              loadingData={false}
              itemValueKey="type"
              itemLabelKey="title"
              placeholder="Select Type"
              setSelected={setVoucherType}
            /> */}
            <SearchSelect
              items={VOUCHER_TYPES || []}
              labelKey="title"
              valueKey="type"
              value={voucherType}
              placeholder="Select ledger account"
              onSelect={setVoucherType}
            />
          </div>
        </ReportsToolBar>
        <div className="flex-1 space-y-4 w-2/3 mx-auto">
          <Separator />
          {entriesData && (
            <div>
              <DataTable
                columns={cashBookColumns}
                data={entriesData}
                paginationInfo={paginationInfo}
                pagination={paginationInfo && pagination}
                setPagination={paginationInfo && setPagination}
                reportFormate={{
                  startDate,
                  endDate,
                  company: "Akaar IT",
                  reportType: "Cash Book Report",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CashBook;
