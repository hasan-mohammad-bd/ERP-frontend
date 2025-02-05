import { FormatNumberTowDecimal } from "@/components/common/billing/NumberFormater";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CustomerSummaryType,
  TotalsType,
} from "@/lib/validators/billing/customer-summary";

interface Props {
  tableData?: CustomerSummaryType[];
  totals: TotalsType | undefined;
}

const CustomerBalanceTable = ({ tableData, totals }: Props) => {
  return (
    <div>
      <Table className="border border-black rounded-lg">
        <TableHeader>
          <TableRow className="bg-gray-100 border-b border-black">
            <TableHead className="!p-1 h-6 border-r border-black">ID</TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Name
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Region
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Area
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Territory
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Sales.Ex
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Target
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Prev Due
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Sales
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Return
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Net Sales
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Coll Val
            </TableHead>
            <TableHead className="!p-1 h-6 border-r border-black">
              Due
            </TableHead>

            <TableHead className="!p-1 h-6">Coll %</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((item, index) => (
            <TableRow key={index} className="border-b border-black">
              <TableCell className="!p-1 border-r border-black">
                {item?.customer_id}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {item?.name}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {item?.region}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {item?.area}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {item?.territory}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {item?.sales_executive}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.sales_target).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.previous_due).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.sales_value).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.sales_return).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.net_sales_value).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.collection_value).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1 border-r border-black">
                {Number(item?.due).toFixed(2)}
              </TableCell>
              <TableCell className="!p-1">
                {item?.collection_percentage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-gray-100 font-bold border-t border-black">
            <TableCell className="!p-1 text-right !pr-2 border-r border-black" colSpan={6}>
              Total
            </TableCell>
            <TableCell className="!p-1 border-r border-black">{totals?.total_sales_target}</TableCell>
            <TableCell className="!p-1 border-r border-black">{totals?.total_previous_due}</TableCell>
            <TableCell className="!p-1 border-r border-black">{totals?.total_sales_value}</TableCell>
            <TableCell className="!p-1 border-r border-black">{totals?.total_sales_return}</TableCell>
            <TableCell className="!p-1 border-r border-black">
              {totals?.total_net_sales_value}
            </TableCell>
            <TableCell className="!p-1 border-r border-black">
              {totals?.total_collection_value}
            </TableCell>
            <TableCell className="!p-1 border-r border-black" >{totals?.total_due}</TableCell>
            <TableCell className="!p-1">
              {totals?.collection_percentage}%
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CustomerBalanceTable;
