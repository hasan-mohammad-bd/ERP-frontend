// SaleRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import SaleRegisterTable from "./components/sale-register-table";
import SaleSummaryFilter from "./components/sale-summary-filter";
import { useGetMonthDateSaleQuery } from "@/store/services/billing/api/reports/month-to-date-sale-report";

const MonthToDateSale = () => {
  const [filterParams, setFilterParams] = useState("");

  const [filtersApplied, setFiltersApplied] = useState(false); // Track if filters are applied

  // Use skip option to prevent fetching data before filters are applied
  const { data, isLoading } = useGetMonthDateSaleQuery(
    `${filterParams}`,
    { skip: !filtersApplied } // Skip the query when filters are not applied
  );

  const fetchedData = data?.data;
  console.log(fetchedData)

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Month to Date Sale Report"
          description="Manage employees for your business"
        />
        <SaleSummaryFilter
          setFilterParams={(params) => {
            setFilterParams(params);
            setFiltersApplied(true); // Enable data fetching
          }}
          setFiltersApplied={setFiltersApplied}
          // selectedDate={selectedDate}
          // setSelectedDate={setSelectedDate}
          // selectedEndDate={selectedEndDate}
          // setSelectedEndDate={setSelectedEndDate}
        />
      </div>
      {filtersApplied && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="sale-summary-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>Akaar IT</h2>
                <h3 className="text-xl">Month to Date Sale Report</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              { fetchedData ? (
                  <SaleRegisterTable
                    tableData={fetchedData}
                    // ledgerAccounts={fetchedData.ledger_accounts}
                   
                  />

              ) : (
                <p>No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
        </Card>
      )}
    </>
  );
};

export default MonthToDateSale;
