import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";

import { Paginator } from "@/components/common/paginator";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import DueReceiveableReportFilter from "./components/due-receiveable-report-filter";
import DueReceiveableReportTable from "./components/due-receiveable-report-table";
import { useAuth } from "@/store/hooks";


// Define your dummy data for Master Sales
const dummySalesData = {
  data: [
    {
        date: "2024-10-01",
        invoice_no: "IN-9834324",
        customer_name: "John Doe",
        total_amount: 400,
        invoice:"invoice"
    },
    {
        date: "2024-10-01",
        invoice_no: "IN-9834322",
        customer_name: "John Dee",
        total_amount: 500,
        invoice:"invoice"
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

const DueReceiveableReport = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const [filterParams, setFilterParams] = useState("");
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
              title="Due Receivable Report"
              description="Manage employees for you business"
            />

          </div>
     <Separator />
     <DueReceiveableReportFilter setFilterParams={setFilterParams} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate}/>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="due-receivable-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>{user?.organization?.name}</h2>
              <h3 className="text-xl">Due Receivable Report</h3>
            </div>
          </div>

          {paginatedData.length > 0 ? (
            <DueReceiveableReportTable
              tableData={paginatedData}
            />
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

export default DueReceiveableReport;
