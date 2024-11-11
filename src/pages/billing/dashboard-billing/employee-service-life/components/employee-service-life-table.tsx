import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  // TableRow,
} from "@/components/ui/table";

// import { EntryRow } from "@/lib/validators/accounts";



interface Props {
  data?: any;
  subjectOn?: string;
}

const EmployeeServiceLifeTable = ({data, subjectOn}: Props) => {
  return (
<div>
  <Table>
    <TableHeader>
      {/* Uncomment this if you want to display the header
      <TableRow>
        <TableHead>Date</TableHead>
        <TableHead>Account Code</TableHead>
        <TableHead>Amount</TableHead>
      </TableRow>
      */}
    </TableHeader>
    <TableBody className="grid grid-cols-3 gap-3">
      {data.map((item: any) => (
        <div key={item.id}>
          <TableCell className="mb">
           {subjectOn? item[subjectOn] : null}
          </TableCell>
          <Card className="text-center">
            <TableCell className="!text-center">{item.total_employee}</TableCell>
          </Card>
        </div>
      ))}
    </TableBody>
  </Table>
</div>

  );
};

export default EmployeeServiceLifeTable;
