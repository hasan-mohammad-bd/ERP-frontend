import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomerSummaryType } from "@/lib/validators/billing/customer-summary";

interface Props {
  tableData?: CustomerSummaryType[];
}

const CustomerBalanceTable = ({ tableData }: Props) => {
  return (
    <Card>
      <div className="overflow-x-scroll 2xl:overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Area</TableHead>
              <TableHead>Territory</TableHead>
              <TableHead>Sales Executive</TableHead>
              <TableHead>Sales Target</TableHead>
              <TableHead>Previous Due</TableHead>
              <TableHead>Sales Value</TableHead>
              <TableHead>Sales Return</TableHead>
              <TableHead>Net Sales Value</TableHead>
              <TableHead>Adjust</TableHead>
              <TableHead>Collection Value</TableHead>
              <TableHead>Due</TableHead>
              <TableHead>Collection Percentage</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableData &&
              tableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell>{item.area}</TableCell>
                  <TableCell>{item.territory}</TableCell>
                  <TableCell>{item.sales_executive}</TableCell>
                  <TableCell>{item.sales_target}</TableCell>
                  <TableCell>{item.previous_due}</TableCell>
                  <TableCell>{item.sales_value}</TableCell>
                  <TableCell>{item.sales_return}</TableCell>
                  <TableCell>{item.net_sales_value}</TableCell>
                  <TableCell>{item.adjust}</TableCell>
                  <TableCell>{item.collection_value}</TableCell>
                  <TableCell>{item.due}</TableCell>
                  <TableCell>{item.collection_percentage}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default CustomerBalanceTable;
