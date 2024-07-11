import { type ColumnDef } from "@tanstack/react-table";

import { DetailedGeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

export const detailedGeneralLedgerColumns: ColumnDef<DetailedGeneralLedgerRow>[] =
  [
    {
      accessorKey: "ledger_account.name",
      header: "Account",
    },
    {
      accessorKey: "dr_amount",
      header: "Debit",
    },
    {
      accessorKey: "cr_amount",
      header: "Credit",
    },
  ];
