import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Paginator } from "@/components/common/paginator";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import StockReportFilter from "./components/stock-report-filter";
import StockReportTable from "./components/stock-report-table";



// Define your dummy data for Master Sales
const dummySalesData = {
  data: [
    {
      product_name: "Demo-product-1",
      sku: 564,
      barcode: "09768",
      branch: "Demo Branch1",
      size: "Demo Size1",
      color: "demo_color1",
      in_quantity: "1 Pcs",
      out_quantity: "4 Pcs",
      stock: "1 Pcs",
      stock_purchase_price: 100,
      stock_cell_price: 120
    },
    {
      product_name: "Demo-product-2",
      sku: 364,
      barcode: "09765",
      branch: "Demo Branch2",
      size: "Demo Size2",
      color: "demo_colo2",
      in_quantity: "2 Pcs",
      out_quantity: "3 Pcs",
      stock: "2 Pcs",
      stock_purchase_price: 200,
      stock_cell_price: 320
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

const StockReport = () => {
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const [filterParams, setFilterParams] = useState("");
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

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
              title="Stock Summary"
              description="Manage employees for you business"
            />

          </div>
     <Separator />
     <StockReportFilter setFilterParams={setFilterParams} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="stock-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Stock Summary</h3>
            </div>
          </div>

          {paginatedData.length > 0 ? (
            <StockReportTable
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

export default StockReport;
