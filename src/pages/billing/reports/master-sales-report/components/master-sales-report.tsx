// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import {
//   LeaveSummaryRow,
//   LeaveTypes,
//   LeaveTypeSummaryRow,
// } from "@/lib/validators/hrm/report/leave/leave-summary";
// import React from "react";

// interface Props {
//   tableData?: LeaveSummaryRow[];
//   leaveTypeSummary?: LeaveTypeSummaryRow[];
// }
// const MasterSalesTable = ({ tableData, leaveTypeSummary }: Props) => {
//   return (
//     <Card>
//       {" "}
//       <Table className="">
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date</TableHead>
//             <TableHead>Invoice</TableHead>
//             <TableHead> Customer</TableHead>
//             <TableHead> Phone</TableHead>
//             <TableHead> Total</TableHead>
//             <TableHead> Paid</TableHead>
//             <TableHead>Paid By</TableHead>
//             <TableHead> Due</TableHead>
//             <TableHead> Return Amount </TableHead>
//             <TableHead> Due</TableHead>
//             <TableHead> Payment Status </TableHead>
//             <TableHead> Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody className="">
//           {tableData &&
//             tableData.map((item) => (
//               <TableRow key={item.id} className="">
//                 <TableCell className="">{item?.employee_unique_id}</TableCell>
//                 <TableCell className="">
//                   {item?.first_name} {item?.last_name}
//                 </TableCell>

//                 {item?.leave_types?.map((type: LeaveTypes) => (
//                   <React.Fragment key={type?.id}>
//                     <TableCell className="">
//                       {type?.used?.total_days}{" "}
//                       {type?.used?.total_days > 1 ? "days" : "day"}
//                       {type?.used?.total_hours > 0
//                         ? ` (${type?.used?.total_hours} hours)`
//                         : ""}
//                     </TableCell>
//                   </React.Fragment>
//                 ))}
//                 <TableCell className="">
//                   {item?.leave_taken?.total_days}{" "}
//                   {item?.leave_taken?.total_days > 1 ? "days" : "day"}
//                   {item?.leave_taken?.total_hours > 0
//                     ? ` (${item?.leave_taken?.total_hours} hours)`
//                     : ""}
//                 </TableCell>
//               </TableRow>
//             ))}
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             {leaveTypeSummary &&
//               leaveTypeSummary.map((item) => (
//                 <TableCell className="" key={item.leave_type_id}>
//                   {item.total_days} {item.total_days > 1 ? "days" : "day"}
//                   {item.total_hours > 0 ? ` (${item.total_hours} hours)` : ""}
//                 </TableCell>
//               ))}
//           </TableRow>
//         </TableBody>

//         <TableFooter></TableFooter>
//       </Table>
//     </Card>
//   );
// };

// export default MasterSalesTable;

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define a new interface for sales data
interface SalesDataRow {
  date: string;
  invoice: string;
  customer: string;
  phone: string;
  total: number;
  paid: number;
  paidBy: string;
  due: number;
  returnAmount: number;
  paymentStatus: string;
}

interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const MasterSalesTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Paid</TableHead>
            <TableHead>Paid By</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Return Amount</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">
                    <button className="text-blue-500"> {item.invoice}</button>
                </TableCell>
                <TableCell className="">{item.customer}</TableCell>
                <TableCell className="">{item.phone}</TableCell>
                <TableCell className="">{item.total}</TableCell>
                <TableCell className="">{item.paid}</TableCell>
                <TableCell className="">{item.paidBy}</TableCell>
                <TableCell className="">{item.due}</TableCell>
                <TableCell className="">{item.returnAmount}</TableCell>
                <TableCell className="">{item.paymentStatus}</TableCell>
                <TableCell className="">
                  {/* You can add any action buttons here */}
                  <button className="text-blue-500">Invoice</button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default MasterSalesTable;
