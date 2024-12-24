import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WarehouseSaleItemBarcodeType } from "@/store/services/billing/api/reports/warehouse-wise-item-sale-summary/type";

interface Props {
  tableData?: WarehouseSaleItemBarcodeType[];
}

const WarehouseWiseSalesTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Ware House</TableHead>
            <TableHead>Sell Quantity</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Unit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData &&
            tableData.map((item, index) =>
              item.warehouse_report.map((warehouse, wi) => (
                <TableRow key={`${index}-${wi}`}>
                  {wi === 0 && (
                    <>
                      <TableCell rowSpan={item.warehouse_report.length}>
                        {item.item_name}
                      </TableCell>
                      <TableCell rowSpan={item.warehouse_report.length}>
                        {item.item_barcode}
                      </TableCell>
                    </>
                  )}
                  <TableCell>{warehouse.warehouse}</TableCell>
                  <TableCell>{warehouse.sell_qty}</TableCell>
                  <TableCell>{warehouse.stock_qty}</TableCell>
                  <TableCell>{warehouse.unit}</TableCell>
                </TableRow>
              ))
            )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default WarehouseWiseSalesTable;
