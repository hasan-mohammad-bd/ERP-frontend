// // import React from "react";
// import { Loading } from "@/components/common/loading";
// import { useGetLeaveSummaryQuery } from "@/store/services/hrm/api/report/leave/leave-summay";
// import { PaginationInfo } from "@/types";
// import { useState } from "react";
// import { Paginator } from "@/components/common/paginator";
// import PrintPDFWrapper from "@/components/common";
// import { Card } from "@/components/ui/card";
// import MasterSalesTable from "./components/master-sales-report";


// const MasterSales = () => {
//   const [page, setPage] = useState(1); // Default current page
//   const [pageSize, setPageSize] = useState(10); // Number of items per page

//   const { data, isLoading } = useGetLeaveSummaryQuery(
//     `per_page=${pageSize}&page=${page}`
//   );

//   const leaveSummary = data?.data || [];
//   const leavesTypeSummary = data?.leaves_type_summary;

//   const paginationInfo: PaginationInfo | undefined = data?.meta;

//   if (isLoading) return <Loading />;

//   return (
//     <>
//       <Card>
//         <PrintPDFWrapper className="space-y-4" fileName="leave-summary-report">
//           <div className="flex-1 space-y-4 my-4">
//             <div className="text-center  ">
//               <h2>Akaar IT</h2>
//               <h3 className="text-xl">Master Sales Report</h3>
//             </div>
//           </div>
//           {leaveSummary && leavesTypeSummary ? (
//             <MasterSalesTable
//               tableData={leaveSummary}
//               leaveTypeSummary={leavesTypeSummary}
//             />
//           ) : null}
//         </PrintPDFWrapper>
//         {paginationInfo && (
//           <Paginator
//             className="print:hidden hide-in-pdf px-4 pb-4" // optional
//             meta={paginationInfo} // Pagination information
//             dataCount={leaveSummary.length} // Total number of data is shown in the paginator
//             onPageChange={setPage} // Function to handle page change event
//             onPageSizeChange={setPageSize} // Function to handle page size change event
//           />
//         )}
//       </Card>
//     </>
//   );
// };

// export default MasterSales;


import { useState } from "react";
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import MasterSalesTable from "./components/master-sales-report";
import { Paginator } from "@/components/common/paginator";
import { PaginationInfo } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import MasterSalesFilter from "./components/master-sales-filter";

// Define your dummy data for Master Sales
const dummySalesData = {
  data: [
    {
      date: "2024-10-01",
      invoice: "IN-V12345",
      customer: "John Doe",
      phone: "123-456-7890",
      total: 1000,
      paid: 800,
      paidBy: "Credit Card",
      due: 200,
      returnAmount: 50,
      paymentStatus: "Partially Paid",
    },
    {
      date: "2024-10-02",
      invoice: "IN-V12346",
      customer: "Jane Smith",
      phone: "987-654-3210",
      total: 1500,
      paid: 1500,
      paidBy: "Bank Transfer",
      due: 0,
      returnAmount: 0,
      paymentStatus: "Paid",
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

const MasterSales = () => {
  const [page, setPage] = useState(1); // Default current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const [filterParams, setFilterParams] = useState("");
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
              title="Master Sales"
              description="Manage employees for you business"
            />

          </div>
     <Separator />
     <MasterSalesFilter setFilterParams={setFilterParams} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <Card>
        <PrintPDFWrapper className="space-y-4" fileName="master-sales-report">
          <div className="flex-1 space-y-4 my-4">
            <div className="text-center">
              <h2>Akaar IT</h2>
              <h3 className="text-xl">Master Sales Report</h3>
            </div>
          </div>

          {paginatedData.length > 0 ? (
            <MasterSalesTable
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

export default MasterSales;
