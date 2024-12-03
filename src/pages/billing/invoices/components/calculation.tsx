import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { InvoiceFieldsType } from "@/lib/validators/billing/invoices";

interface CalculationProps {
  form: UseFormReturn<InvoiceFieldsType>;
  subTotal: number;
}

export default function Calculation({ form, subTotal }: CalculationProps) {
  const { watch, setValue } = form;

  // Watching form fields
  const discount = watch("discount");
  const shippingCharges = watch("shipping_charges"); // Watch shipping charges field

  // Calculating totals
  const discountedAmount = (subTotal * (discount ?? 0)) / 100;
  const total = subTotal - discountedAmount + (shippingCharges ?? 0); // Include shipping charges
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
        <div className="flex justify-between items-center">
          <Label htmlFor="shipping_charges" className="font-medium">
            Shipping Charges
          </Label>
          <div className="flex items-center">
            <Input
              id="shipping_charges"
              type="number"
              className="w-32 mr-2"
              disabled={!subTotal}
              value={
                shippingCharges !== null && shippingCharges !== undefined
                  ? shippingCharges
                  : ""
              }
              onChange={(e) => {
                const rawValue = e.target.value;

                if (rawValue === "") {
                  setValue("shipping_charges", undefined);
                  return;
                }

                const value = Math.max(0, parseFloat(rawValue) || 0); // Ensure non-negative values
                setValue("shipping_charges", value);
              }}
              onBlur={() => {
                if (!shippingCharges) {
                  setValue("shipping_charges", 0); // Default to 0
                }
              }}
            />
          </div>
          <span>{shippingCharges ? shippingCharges.toFixed(2) : "0.00"}</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Total</span>
          <span>{total ? total.toFixed(2) : 0}</span>
        </div>
      </div>
    </div>
  );
}

