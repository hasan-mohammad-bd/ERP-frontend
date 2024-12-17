// SaleRegister Component
import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import SaleRegisterFilter from "./components/sale-register-filter";
import { useGetSaleRegisterQuery } from "@/store/services/billing/api/reports/sale-register";
import SaleRegisterTable from "./components/sale-register-table";

const SaleRegister = () => {
  const [filterParams, setFilterParams] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    undefined
  );
  const [filtersApplied, setFiltersApplied] = useState(false); // Track if filters are applied

  // Use skip option to prevent fetching data before filters are applied
  const { data, isLoading } = useGetSaleRegisterQuery(
    `with_summary=1&${filterParams}`,
    { skip: !filtersApplied } // Skip the query when filters are not applied
  );

  const fetchedData = data?.data;

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Sale Register"
          description="Manage employees for your business"
        />
        <SaleRegisterFilter
          setFilterParams={(params) => {
            setFilterParams(params);
            setFiltersApplied(true); // Enable data fetching
          }}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
        />
      </div>
      {filtersApplied && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="sale-register-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>Akaar IT</h2>
                <h3 className="text-xl">Sale Register</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              { fetchedData ? (
                  <SaleRegisterTable
                    tableData={fetchedData.sales_register}
                    ledgerAccounts={fetchedData.ledger_accounts}
                    totals={fetchedData.totals} // Pass the totals object
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

export default SaleRegister;
