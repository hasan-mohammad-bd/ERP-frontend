import { type ColumnDef } from "@tanstack/react-table";

import { DetailedGeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";
import { CellActionDynamicRoute } from "@/components/common/accounts/cell-action-dynamc-route";
import { FormatIndianCurrency } from "@/utils/indian-formate";

export const detailedGeneralLedgerColumns: ColumnDef<DetailedGeneralLedgerRow>[] =
  [
    {
      accessorKey: "entry.date",
      header: "Date",
    }
    ,
    {
      accessorKey: "ledger_account.name",
      header: "Account Head",
      cell: ({ row }) => <CellActionDynamicRoute field={row.original.ledger_account.name} rowData={row.original} />,
    },
    {
      accessorKey: "ledger_account.type",
      header: "Account Type",
    },
    {
      accessorKey: "entry.entry_number",
      header: "Journal No.",
    },
    {
      accessorKey: "entry.note",
      header: "Description",
    },
    {
      accessorKey: "dr_amount",
      header: "Debit",
      cell: ({ row }) => <FormatIndianCurrency amount={row.original.dr_amount} />,
    },
    {
      accessorKey: "cr_amount",
      header: "Credit",
      cell: ({ row }) => <FormatIndianCurrency amount={row.original.cr_amount} />,
    },

  ];
