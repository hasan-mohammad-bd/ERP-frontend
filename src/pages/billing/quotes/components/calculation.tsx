import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { QuotationFieldsType } from "@/lib/validators/billing/quotation";

interface CalculationProps {
  form: UseFormReturn<QuotationFieldsType>;
  subTotal: number;
}

export default function Calculation({ form, subTotal }: CalculationProps) {
  const { watch, setValue } = form;

  // Watching form fields
  const discount = watch("discount");

  // Calculating totals
  const total = subTotal - (subTotal * (discount ?? 0)) / 100;
  setValue("total", total);

  return (
    <div className="w-full max-w-lg p-6 border rounded-lg shadow">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Sub Total</span>
          <span>{subTotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <Label htmlFor="discount" className="font-medium">
            Discount
          </Label>
          <div className="flex items-center">
            <Input
              id="discount"
              type="number"
              className="w-20 mr-2"
              disabled={!subTotal}
              value={
                discount !== null && discount !== undefined ? discount : ""
              } // Avoid forcing 0 when editing
              onChange={(e) => {
                const rawValue = e.target.value;

                // Allow empty string temporarily for editing
                if (rawValue === "") {
                  setValue("discount", undefined); // Set null to represent an empty state
                  return;
                }

                const value = Math.max(
                  0,
                  Math.min(100, parseFloat(rawValue) || 0)
                ); // Clamp value between 0 and 100
                setValue("discount", value); // Save the clamped value
              }}
              onBlur={() => {
                // Ensure the field is set to 0 if left empty on blur
                if (!discount) {
                  setValue("discount", 0);
                }
              }}
            />

            <span>%</span>
          </div>
          <span>
            {discount ? ((subTotal * (discount ?? 0)) / 100).toFixed(2) : 0}
          </span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Total</span>
          <span>{total ? total.toFixed(2) : 0}</span>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="">
          <Button variant="link" className="text-blue-500 p-0 h-auto">
            Apply Tax on Shipping Charge
          </Button>
        </div> */
}
{
  /* <div className="flex justify-between items-center">
          <Label htmlFor="adjustment" className="font-medium">
            Adjustment
          </Label>
          <div className="flex items-center">
            <Input id="adjustment" type="number" className="w-32 mr-2" />
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <span>0.00</span>
        </div> */
}
