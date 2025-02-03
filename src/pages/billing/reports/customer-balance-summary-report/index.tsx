import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PaginationInfo } from "@/types"; // Assuming you have a PaginationInfo type like in CheckBooks

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Paginator } from "@/components/common/paginator";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/store/hooks";
import CustomerBalanceTable from "./components/customer-balance-table";
import CustomerBalanceFilter from "./components/customer-balance-filter";
import { useGetCustomerBalanceSummaryReportQuery } from "@/store/services/billing/api/reports/customer-summary-report";
import { getFormattedDate } from "@/utils/format-dates";

const CustomerSummaryReport = () => {
  const { user } = useAuth();
  // State for pagination
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const [filterParams, setFilterParams] = useState("");
  //   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  console.log();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>();

  // Fetch leave balance data with pagination
  const { data, isLoading } = useGetCustomerBalanceSummaryReportQuery(
    `per_page=${pageSize}&page=${page}&${filterParams}`
  );

  const totals = data?.totals;

  const fetchedData = data?.data || [];
  console.log("fetchedData", data);
  console.log("fetchedData", fetchedData);

  const paginationInfo: PaginationInfo | undefined = data?.meta;

  // Handle loading state
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Customer Balance Summary Report"
          description="Manage employees for you business"
        />
        <CustomerBalanceFilter
          setFilterParams={setFilterParams}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
        />
      </div>
      <Card>
        <PrintPDFWrapper
          className="py-4  "
          fileName="customer-balance-summary-report"
          landscape={true}
        >
          <div className="flex-1 space-y-4 my-4 relative">
            <div className="absolute left-2 top-6 h-[80px] max-w-[180px]">
              {user?.organization?.logo && (
                <img
                  src={user?.organization?.logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="text-center  ">
              <h2 className="text-2xl font-semibold">
                {user?.organization?.name}
              </h2>
              <h4>{user?.organization?.address.join(". ")}</h4>
              <h3 className="text-lg font-normal">Customer Balance Summary</h3>
              {data?.start_date && data?.end_date ? (
                <h5 className="text-sm">
                  From: {getFormattedDate(data?.start_date)} to{" "}
                  {getFormattedDate(data?.end_date)}
                </h5>
              ) : null}
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full mx-auto">
            <Separator />

            {fetchedData ? (
              <CustomerBalanceTable totals={totals} tableData={fetchedData} />
            ) : null}
          </div>
        </PrintPDFWrapper>
        {paginationInfo && (
          <Paginator
            className="px-4 pb-4"
            meta={paginationInfo}
            dataCount={fetchedData.length}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        )}
      </Card>
    </>
  );
};

export default CustomerSummaryReport;
