import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AgedReceivableDataType } from "@/store/services/billing/api/aged-receivable-report/type";

interface Props {
  tableData?: AgedReceivableDataType[]; // Update to use SalesDataRow[]
}

const AgedReceivablelReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Current</TableHead>
            <TableHead>1 to 30 days</TableHead>
            <TableHead>31 to 60 days</TableHead>
            <TableHead>61 to 90 days</TableHead>
            <TableHead>Over 90 days</TableHead>
            <TableHead>Total Due</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.name}</TableCell>
                <TableCell className="">{item.current}</TableCell>
                <TableCell className="">{item.one_to_thirty}</TableCell>
                <TableCell className="">{item.thirty_to_sixty}</TableCell>
                <TableCell className="">{item?.sixty_to_ninety}</TableCell>
                <TableCell className="">{item?.more_than_ninety}</TableCell>
                <TableCell className="">{item?.total_due}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AgedReceivablelReportTable;
