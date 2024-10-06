
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

const AnnouncementList = ({ data }: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            {/* <TableHead></TableHead> */}
            <TableHead className="!text-right"> Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="">
                <div className="whitespace-nowrap">{item.title}</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">{item.date}</div>
              </TableCell>

              <TableCell className="!text-right">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AnnouncementList;
