import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";
import { LedgerGroupRow } from "@/lib/validators/accounts";
import ChartOfAccountChild from "./chart-of-account-child";
// import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
// import { File, Folder } from "lucide-react";
// import { LedgerCellAction } from "./ledger-cell-action";
// import { GroupCellAction } from "./group-cell-action";

interface ChartOfAccountItemProps {
  data: LedgerGroupRow[];
  title: string;
  description: string;
  coaType: string;
}

const ChartOfAccountItem = ({
  data,
  // title,
  // description,
  coaType,
}: ChartOfAccountItemProps) => {
  const coaItemData = data.find((item) => item.name === coaType);

  if (!coaItemData) return null;

  return (
    <Card className="mt-4">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="py-2.5 h-8 col-span-2 w-2/3">Name</TableHead>
            <TableHead className="py-2.5 h-8 w-[100px]">Code</TableHead>
            <TableHead className="py-2.5 h-8">Type</TableHead>
{/*             <TableHead className="py-2.5 h-8">Status</TableHead>
            <TableHead className="py-2.5 h-8">Debit</TableHead>
            <TableHead className="py-2.5 h-8">Credit</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="py-2.5 col-span-2 w-2/3 font-medium">
              {coaItemData.name}
            </TableCell>
            <TableCell className="py-2.5">{coaItemData.code}</TableCell>
            <TableCell className="py-2.5">Group</TableCell>
{/*             <TableCell className="py-2.5">
              <Badge variant="outline">Active</Badge> 
            </TableCell>
            <TableCell className="py-2.5"></TableCell>
            <TableCell className="py-2.5"></TableCell> */}
          </TableRow>
          <ChartOfAccountChild
            group={coaItemData}
            coaType={coaType}
            depth={1}
          />
          {coaItemData.ledgers.map((ledger) => (
            <TableRow key={ledger.id}>
              <TableCell className="py-2.5 col-span-2 w-2/3">
                <Link
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-blue-400 hover:no-underline",
                  })}
                  // to={`/accounts/${coaType}/${ledger.id}`}
                  to={`/accounts/detailed-general-ledger/${ledger.id}`}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;{ledger.name}
                </Link>
              </TableCell>
              <TableCell className="py-2.5">{ledger.code}</TableCell>
              <TableCell className="py-2.5">Account</TableCell>
{/*               <TableCell className="py-2.5">
                <Badge variant="secondary">Inactive</Badge>
              </TableCell>
              <TableCell className="py-2.5">700</TableCell>
              <TableCell className="py-2.5">500</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ChartOfAccountItem;
