// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// // Define a new interface for sales data
// interface SalesDataRow {
//   date: string;
//   business_branch: string;
//   invoice: string;
//   supplier: string;
//   purchased_by: string;
//   product_qty: string;
//   invoice_qty: number;
//   total: number;
//   paid: number;
//   due: number;
//   payment_status: string
// }


// interface Props {
//   tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
// }

// const CustomerReportTable = ({ tableData }: Props) => {
//   return (
//     <Card>
//       <Table className="">
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date</TableHead>
//             <TableHead>Business Branch</TableHead>
//             <TableHead>Invoice</TableHead>
//             <TableHead>Supplier</TableHead>
//             <TableHead>Purchased by</TableHead>
//             <TableHead>Product (Qty)</TableHead>
//             <TableHead>Invoice Qty</TableHead>
//             <TableHead>Total</TableHead>
//             <TableHead>Paid</TableHead>
//             <TableHead>Due</TableHead>
//             <TableHead>Payment Status</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody className="">
//           {tableData &&
//             tableData.map((item, index) => (
//               <TableRow key={index} className="">
//                 <TableCell className="">{item.date}</TableCell>
//                 {/* <TableCell className="">
//                     <button className="text-blue-500"> {item.invoice}</button>
//                 </TableCell> */}
//                 <TableCell className="">{item.date}</TableCell>
//                 <TableCell className="">{item.business_branch}</TableCell>
//                 <TableCell className="">{item.supplier}</TableCell>
//                 <TableCell className="">{item.purchased_by}</TableCell>
//                 <TableCell className="">{item.product_qty}</TableCell>
//                 <TableCell className="">{item.invoice_qty}</TableCell>
//                 <TableCell className="">{item.total}</TableCell>
//                 <TableCell className="">{item.paid}</TableCell>
//                 <TableCell className="">{item.due}</TableCell>
//                 <TableCell className="">{item.payment_status}</TableCell>
//                 {/* <TableCell className="">
//                   <button className="text-blue-500">Invoice</button>
//                 </TableCell> */}

//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </Card>
//   );
// };

// export default CustomerReportTable;


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
  total:number;
  paid:number;
  paid_by: string,
  due:number;
  return_amount:number;
  payment_status:string;
  remark:string;
  product_details_info: {
    product_name: string;
    selling_qty: string;
    return_qty: string;
    selling_price: number;
    profit_Loss: number;
  };

}




// Updated Props to match the new data structure
interface Props {
  tableData?: SalesDataRow[];
}

const InvoiceWiseProfitLossTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2}>Date</TableHead>
            <TableHead rowSpan={2}>Invoice</TableHead>
            <TableHead rowSpan={2}>Customer</TableHead>
            <TableHead rowSpan={2}>Total</TableHead>
            <TableHead rowSpan={2}>Paid</TableHead>
            <TableHead rowSpan={2}>Paid By</TableHead>
            <TableHead rowSpan={2}>Due</TableHead>
            <TableHead rowSpan={2}>Return Amount</TableHead>
            <TableHead rowSpan={2}>Payment Status</TableHead>
            <TableHead rowSpan={2}>Remark</TableHead>

            
            {/* Sale Section with Colspan */}
            <TableHead colSpan={5} className="text-center border">
              Product Details Info
            </TableHead>

            {/* Sale Return Section with Colspan */}
            {/* <TableHead colSpan={3} className="text-center border">
              Sale Return
            </TableHead> */}
            

            {/* <TableHead rowSpan={2}>Action</TableHead> */}
          </TableRow>
          <TableRow>
            <TableHead className="border">Product Name</TableHead>
            <TableHead className="border">Selling Qty</TableHead>
            <TableHead className="border">Return Qty</TableHead>
            <TableHead className="border">Selling Price</TableHead>
            <TableHead className="border">Profit/Loss</TableHead>


          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                <TableCell className="">{item.invoice}</TableCell>
                <TableCell className="">{item.customer}</TableCell>


                <TableCell className="">{item.total}</TableCell>
                <TableCell className="">{item.paid}</TableCell>
                <TableCell className="">{item.paid_by}</TableCell>
                <TableCell className="">{item.due}</TableCell>
                <TableCell className="">{item.return_amount}</TableCell>
                <TableCell className="">{item.payment_status}</TableCell>


                <TableCell className="">{item.remark}</TableCell>
                <TableCell className="">{item.product_details_info.product_name}</TableCell>
                <TableCell className="">{item.product_details_info.selling_qty}</TableCell>

                <TableCell className="">{item.product_details_info.return_qty}</TableCell>
                <TableCell className="">{item.product_details_info.selling_price}</TableCell>
                <TableCell className="">{item.product_details_info.profit_Loss}</TableCell>
                {/* <TableCell className="">
                  <button className="text-blue-500">Action</button>
                </TableCell> */}
              </TableRow>


            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default InvoiceWiseProfitLossTable;
