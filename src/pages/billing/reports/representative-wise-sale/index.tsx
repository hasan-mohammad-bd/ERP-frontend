import { Loading } from "@/components/common/loading";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import RepresentativeWiseSaleReportFilter from "./components/representative-wise-sale-report-filter";
import RepresentativeWiseSaleReportTable from "./components/representative-wise-sale-report-table";
import { useGetRepresentativeWiseSaleReportQuery } from "@/store/services/billing/api/representative-wise-sale";
import { useAuth } from "@/store/hooks";

const RepresentativeWiseSale = () => {
  const { user} = useAuth();
  const [filterParams, setFilterParams] = useState("");

  const { data, isLoading, error } = useGetRepresentativeWiseSaleReportQuery(
    filterParams,
    { skip: !filterParams }
  );


  const salesData = data?.data || [];
  const totalData = data?.total || {
    commission: "0",
    quantity: "0",
    total_amount: "0",
  };
  const startDate = data?.start_date ? new Date(data.start_date) : undefined;
  const endDate = data?.end_date ? new Date(data.end_date) : undefined;

  console.log("Query params:", filterParams);
  console.log("API Response:", data);
  console.log("API Error:", error);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="mb-5 space-y-5">
        <Heading
          title="Representative Wise Sale"
          description="Representative Wise Sale History"
        />
        <RepresentativeWiseSaleReportFilter
          setFilterParams={setFilterParams}
        />
      </div>
      {filterParams && (
        <Card>
          <PrintPDFWrapper
            className="space-y-4"
            fileName="representative-wise-sale-report"
          >
            <div className="flex-1 space-y-4 my-4">
              <div className="text-center">
                <h2>{user?.organization?.name}</h2>
                <h3 className="text-xl">Representative Wise Sale</h3>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full mx-auto">
              <Separator />
              {salesData.length > 0 ?  (
                <RepresentativeWiseSaleReportTable
                  reportData={salesData}
                  totalData={totalData}
                  selectedDate={startDate}
                  selectedEndDate={endDate}
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

export default RepresentativeWiseSale;