import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ZoomIn } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { GeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

interface CellActionProps {
  rowData: GeneralLedgerRow;
}

export function CellAction({ rowData }: CellActionProps) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
              onClick={() =>
                navigate(`/accounts/opening-balance/edit/${rowData.id}`)
              }

              // onClick={() => toggleModal()}
            >
              <ZoomIn className="h-4 w-4 text-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Details</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
