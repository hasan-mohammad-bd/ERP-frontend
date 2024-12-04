import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressColumn } from "./validators";

interface AddressColumnProps {
  title: string;
  icon: React.ReactNode;
  data: AddressColumn;
  idPrefix: string;
}


export function AddressColumnForProfile ({ title, icon, data, idPrefix }: AddressColumnProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-address`}>Address</Label>
          <Input
            id={`${idPrefix}-address`}
            value={data.address || "N/A"}
            readOnly
            className=""
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-postcode`}>Post Code</Label>
            <Input
              id={`${idPrefix}-postcode`}
              value={data.post_code || "N/A"}
              readOnly
              className=""
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-country`}>Country</Label>
            <Input
              id={`${idPrefix}-country`}
              value={data.country?.name || "N/A"}
              readOnly
              className=""
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-city`}>City</Label>
          <Input
            id={`${idPrefix}-city`}
            value={data.city?.name || "N/A"}
            readOnly
            className=""
          />
        </div>
      </div>
    </div>
  )
}
