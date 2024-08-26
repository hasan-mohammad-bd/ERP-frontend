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
import DropdownSelect from "@/components/common/dropdown-select";
import VOUCHER_TYPES from "@/constants/voucher-types";

const CashBook = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = React.useState<number | null>(null);
  const [projectFiltered, setProjectFiltered] = React.useState<number | null>(
    null
  );
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [locationFiltered, setLocationFiltered] = React.useState<string | null>(
    null
  );
  const [voucherType, setVoucherType] = React.useState<string | null>(null);

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

  const { data: location, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );
  const locationData = location?.data || [];

  // Pagination Control
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const { data, isLoading } = useGetEntriesQuery(
    `start_date=${formateStartDate ? formateStartDate : ""}&end_date=${
      formateEndDate ? formateEndDate : ""
    }&ledger_account_id=${filtered ? filtered : ""}&project_id=${
      projectFiltered ? projectFiltered : ""
    }&location_id=${locationFiltered ? locationFiltered : ""}&type=${
      voucherType ? voucherType : ""
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
            setFiltered,
            setProjectFiltered,
            arrayItems: ledgerAccountData,
            loadingData: ledgerAccountLoading,
            arrayItemsTwo: projectData,
            loadingDataTwo: projectsLoading,
          }}
        >
          <div>
            <DropdownSelect
              items={locationData}
              loadingData={locationLoading}
              itemValueKey="id"
              itemLabelKey="name"
              placeholder="Select Location"
              setSelected={setLocationFiltered}
            />
          </div>
          <div>
            <DropdownSelect
              items={VOUCHER_TYPES}
              loadingData={false}
              itemValueKey="type"
              itemLabelKey="title"
              placeholder="Select Type"
              setSelected={setVoucherType}
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
                // noPagination={true}
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
