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
  product_name: string;
  sku: number;
  barcode: string;
  branch: string;
  size: string;
  color: string;
  in_quantity: string;
  out_quantity: string;
  stock: string;
  stock_purchase_price: number;
  stock_cell_price: number
}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const StockReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead> Branch </TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>In Quantity</TableHead>
            <TableHead>Out Quantity </TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Stock Purchase Price </TableHead>
            <TableHead>Stock Sell Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">

                <TableCell className="">
                    <button className="text-blue-500"> {item.product_name}</button>
                </TableCell>
                <TableCell className="">{item.sku}</TableCell>
                <TableCell className="">{item.barcode}</TableCell>
                <TableCell className="">{item.branch}</TableCell>
                <TableCell className="">{item.size}</TableCell>
                <TableCell className="">{item.color}</TableCell>
                <TableCell className="">{item.in_quantity}</TableCell>
                <TableCell className="">{item.out_quantity}</TableCell>
                <TableCell className="">{item.stock}</TableCell>
                <TableCell className="">{item.stock_purchase_price}</TableCell>
                <TableCell className="">{item.stock_cell_price}</TableCell>


              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default StockReportTable;
