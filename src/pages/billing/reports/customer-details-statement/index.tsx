import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import CustomerDetailsStatementReportFilter from "./components/customer-details-statement-report-filter";
import CustomerDetailsStatementReportTable from "./components/customer-details-statement-report-table";
import { useGetCustomerDetailsStatementReportQuery } from "@/store/services/billing/api/customer-details-statement";

const CustomerDetailsStatement = () => {
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(undefined);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const { data, isLoading, error } = useGetCustomerDetailsStatementReportQuery(
    filterParams,
    { skip: !filtersApplied }
  );

  console.log("Query params:", filterParams); // Debug log
  console.log("API Response:", data); // Debug log
  console.log("API Error:", error); // Debug log

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Customer Details Statement Report"
          description="View customer transaction history"
        />
        <CustomerDetailsStatementReportFilter
          setFilterParams={setFilterParams}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
          setFiltersApplied={setFiltersApplied}
        />
      </div>
      {filtersApplied && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="customer-details-statement-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{data?.data?.organization?.name}</h2>
                <h3 className="text-xl">Customer Details Statement Report</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              {data?.data ? (
                <CustomerDetailsStatementReportTable 
                  reportData={data.data}
                  selectedDate={selectedDate}
                  selectedEndDate={selectedEndDate}
                />
              ) : (
                <p className="text-center py-4">No data available</p>
              )}
            </div>
          </PrintPDFWrapper>
        </Card>
      )}
    </>
  );
};

export default CustomerDetailsStatement;