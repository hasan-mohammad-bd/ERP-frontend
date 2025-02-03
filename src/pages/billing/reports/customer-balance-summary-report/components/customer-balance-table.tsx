import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomerSummaryType, TotalsType } from "@/lib/validators/billing/customer-summary";

interface Props {
  tableData?: CustomerSummaryType[];
  totals: TotalsType | undefined;
}

const CustomerBalanceTable = ({ tableData, totals }: Props) => {
  return (
    <div>
      <Table className="border-separate border-spacing-0 border border-gray-200 rounded-lg">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead title="Customer ID" className="border border-gray-200 !p-1 h-6">ID</TableHead>
            <TableHead title="Customer Name" className="border border-gray-200 !p-1 h-6">Name</TableHead>
            <TableHead title="Region" className="border border-gray-200 !p-1 h-6">Region</TableHead>
            <TableHead title="Area" className="border border-gray-200 !p-1 h-6">Area</TableHead>
            <TableHead title="Territory" className="border border-gray-200 !p-1 h-6">Territory</TableHead>
            <TableHead title="Sales Executive" className="border border-gray-200 !p-1 h-6">S.Ex</TableHead>
            <TableHead title="Target" className="border border-gray-200 !p-1 h-6">Target</TableHead>
            <TableHead title="Previous Due" className="border border-gray-200 !p-1 h-6">Prev Due</TableHead>
            <TableHead title="Sales" className="border border-gray-200 !p-1 h-6">Sales</TableHead>
            <TableHead title="Return" className="border border-gray-200 !p-1 h-6">Return</TableHead>
            <TableHead title="Net Sales" className="border border-gray-200 !p-1 h-6">Net Sales</TableHead>
            <TableHead title="Collection Value" className="border border-gray-200 !p-1 h-6">Coll Val</TableHead>
            <TableHead title="Due" className="border border-gray-200 !p-1 h-6">Due</TableHead>
            <TableHead title="Collection %" className="border border-gray-200 !p-1 h-6">Coll %</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="border border-gray-200 !p-1">{item?.customer_id}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.name}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.region}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.area}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.territory}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.sales_executive}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.sales_target}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.previous_due}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.sales_value}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.sales_return}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.net_sales_value}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.collection_value}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.due}</TableCell>
              <TableCell className="border border-gray-200 !p-1">{item?.collection_percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-gray-100 font-bold">
            <TableCell className="border border-gray-200 !p-1 text-right !pr-2" colSpan={6}>Total</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_sales_target}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_previous_due}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_sales_value}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_sales_return}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_net_sales_value}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_collection_value}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.total_due}</TableCell>
            <TableCell className="border border-gray-200 !p-1">{totals?.collection_percentage}%</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CustomerBalanceTable;
