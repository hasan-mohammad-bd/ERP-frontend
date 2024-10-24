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
  branch: string;
  product_name: string;
  sku:number;
  brand_name: string;
  stock_qty:number;
  selling_qty:number;
  selling_price: number;
  purchase_price:number;
  profit_loss:number;

}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const ProductSalesTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Branch</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Sku</TableHead>
            <TableHead>Brand Name</TableHead>
            <TableHead>Stock Qty</TableHead>
            <TableHead>Selling Quantity</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Purchase Price</TableHead>
            <TableHead>Profit/Loss</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                {/* <TableCell className="">{item.date}</TableCell>
                <TableCell className="">
                    <button className="text-blue-500"> {item.invoice}</button>
                </TableCell> */}
                <TableCell className="">{item.branch}</TableCell>
                <TableCell className="">
                  <button className="text-blue-500"> {item.product_name}</button>
                 </TableCell>
                <TableCell className="">{item.sku}</TableCell>
                <TableCell className="">{item.brand_name}</TableCell>
                <TableCell className="">{item.stock_qty}</TableCell>
                <TableCell className="">{item.selling_qty}</TableCell>
                <TableCell className="">{item.selling_price}</TableCell>
                <TableCell className="">{item.purchase_price}</TableCell>
                <TableCell className="">{item.profit_loss}</TableCell>

              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductSalesTable;
