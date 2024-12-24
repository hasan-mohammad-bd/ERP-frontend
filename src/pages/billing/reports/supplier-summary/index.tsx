import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Paginator } from "@/components/common/paginator";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import SupplierSummaryFilter from "./components/supplier-summary-filter";
import SupplierSummaryTable from "./components/supplier-summary-table";
import { useAuth } from "@/store/hooks";


// Define your dummy data for Master Sales
const dummySalesData = {
    data: [
      {
        name: "Deen",
        mobile: "+8801586333543",
        area: "Demo_Area1",
        sale: {
          total: 25090,
          pay: 25090,
          due: 0,
          dismiss: 0,
          advance: 500,
        },
        saleReturn: {
          total: 400,
          pay: 0,
          due: 400,
        },
        totalDue: -900,
      },
      {
        name: "kashem",
        mobile: "+8801968965989",
        area: "Demo_Area2",
        sale: {
          total: 18400,
          pay: 10950,
          due: 7450,
          dismiss: 0,
          advance: 5000,
        },
        saleReturn: {
          total: 500,
          pay: 500,
          due: 0,
        },
        totalDue: 2300,
      },
      // Add more entries as needed...
    ],
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://192.168.68.130:7600/api/categories?page=1",
          label: "1",
          active: true,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      path: "http://192.168.68.130:7600/api/categories",
      per_page: 15,
      to: 3,
      total: 3,
    },
  };


const SupplierSummary = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const [filterParams, setFilterParams] = useState("");
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(new Date());

  console.log(filterParams)

  // Paginate dummy data manually
  const paginatedData = dummySalesData?.data.slice(
    (page - 1) * pageSize,
    page * pageSize,

  );

  // Properly structure the paginationInfo to match PaginationInfo type
  const paginationInfo: PaginationInfo = {
      current_page: page,
      last_page: dummySalesData.meta.last_page,
      per_page: pageSize,
      total: dummySalesData.meta.total,
      from: dummySalesData.meta.from,
      links: dummySalesData.meta.links,
      path: dummySalesData.meta.path,
      to: 0
  };

  return (
    <div className="flex-1 space-y-4">
    <div className="flex items-center justify-between">
      <Heading
        title="Supplier Summary"
        description="Manage employees for your business"
      />
    </div>
    <Separator />
    <SupplierSummaryFilter
      setFilterParams={setFilterParams}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedEndDate={selectedEndDate}
      setSelectedEndDate={setSelectedEndDate}
    />
    <Card>
      <PrintPDFWrapper className="space-y-4" fileName="supplier-summary">
        <div className="flex-1 space-y-4 my-4">
          <div className="text-center">
            <h2>{user?.organization?.name}</h2>
            <h3 className="text-xl">Supplier Summary</h3>
          </div>
        </div>
        {paginatedData.length > 0 ? (
          <SupplierSummaryTable tableData={paginatedData} />
        ) : null}
      </PrintPDFWrapper>
      {paginationInfo && (
        <Paginator
          className="print:hidden hide-in-pdf px-4 pb-4"
          meta={paginationInfo}
          dataCount={paginatedData.length}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </Card>
  </div>
  );
};

export default SupplierSummary;
