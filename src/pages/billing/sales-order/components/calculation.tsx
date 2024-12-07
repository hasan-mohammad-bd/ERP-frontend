import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { SalesOrderFormValues } from "@/lib/validators/billing/sales-order";
import { ExtendedItemRow } from "./search-product";

interface CalculationProps {
  form: UseFormReturn<SalesOrderFormValues>;
  subTotal: number;
  selectedProducts: ExtendedItemRow[];
}

export default function Calculation({
  form,
  subTotal,
  selectedProducts,
}: CalculationProps) {
  const { watch, setValue } = form;

  const discount = watch("discount");
  const tax_type = watch("tax_type");

  let discountedAmount = 0;
  let totalTaxAmount = 0;

  if (selectedProducts && selectedProducts.length > 0) {
    selectedProducts?.forEach((product) => {
      const productDiscount = (product.total * (discount ?? 0)) / 100;
      const discountedPrice = product.total - productDiscount;
      const productTax =
        (discountedPrice * (Number(product.tax?.amount) || 0)) / 100;

      discountedAmount += productDiscount;
      totalTaxAmount += productTax;
    });
  }

  // Calculating the final total
  const total = Math.round(
    subTotal -
      discountedAmount +
      (tax_type === "inclusive" ? 0 : totalTaxAmount)
  );
  // const total =
  //   subTotal -
  //   discountedAmount +
  //   (tax_type === "inclusive" ? 0 : totalTaxAmount);

  setValue("total", total);
  setValue("sub_total", subTotal);
  setValue("tax", totalTaxAmount);

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
                  setValue("discount", undefined); // Set undefined for empty state
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
          <span>{discountedAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Tax</span>
          <span>{totalTaxAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <span>Total</span>
          <span>{total ? total.toFixed(2) : 0}</span>
        </div>
      </div>
    </div>
  );
}
