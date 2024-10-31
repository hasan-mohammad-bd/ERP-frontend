import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { EntryRow } from "@/lib/validators/accounts";

interface Props {
  data?: any;
  subject?: string;
}

const ByOrgDeptList = ({ data, subject }: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              {subject
                ? subject[0].toUpperCase() + subject.slice(1, subject.length)
                : null}
            </TableHead>
            {/* <TableHead></TableHead> */}
            <TableHead className="!text-right">Employee Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="w-8 flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage
                    className="object-cover"
                    src={item.image}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="whitespace-nowrap">
                  {subject ? item[subject] : null}
                </span>
              </TableCell>

              <TableCell className="!text-right ">
                {item.total_employee}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ByOrgDeptList;
