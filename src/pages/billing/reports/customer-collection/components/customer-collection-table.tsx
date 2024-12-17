import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { CustomerColumn } from "@/lib/validators/billing/customer";
import { CustomerCollectionDataType } from "@/store/services/billing/api/customer-collection/type";

interface Props {
  tableData?: CustomerCollectionDataType[]; // Update to use SalesDataRow[]
}

const CustomerCollectionTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Address</TableHead>

            <TableHead>Total Paid</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>

                <TableCell className="">{item.name}</TableCell>

                <TableCell className="">
                  {item.phone}
                  {item.phone ? "," : ""} {item.work_phone} (work phone)
                </TableCell>

                <TableCell className="">{item.type}</TableCell>
                <TableCell className="">{item.location?.name}</TableCell>
                <TableCell className="">{item?.total_paid_amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CustomerCollectionTable;
