import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { EntryRow } from "@/lib/validators/accounts";

interface Props {
  data?: any;
  subject?: string;
}

const EmployeeByList = ({ data, subject }: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          {/* <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow> */}
        </TableHeader>
        <TableBody className="">
          {data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="w-8">
                <Avatar>
                  <AvatarImage
                    className="object-cover"
                    src={item.image}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="flex flex-col ">
                <span>{item.employee_name}</span>
                <span className="text-xs text-gray-500">{item.designation}</span>
              </TableCell>
              <TableCell>{subject ? item[subject] : null}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeeByList;
