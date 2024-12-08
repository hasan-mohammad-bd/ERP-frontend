import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BillingSummaryProps {
  form: any;
  subTotal: number;
  discountedAmount: number;
  totalTaxAmount: number;
  grandTotal: number;
  includeShipping?: boolean;
}

export default function BillingSummaryShow({
  form,
  subTotal,
  discountedAmount,
  totalTaxAmount,
  grandTotal,
  includeShipping = false,
}: BillingSummaryProps) {
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
          <div className="flex items-center gap-1">
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter discount amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span>%</span>
          </div>
          <span>{discountedAmount.toFixed(2)}</span>
        </div>

        {includeShipping && (
          <div className="flex justify-between items-center">
            <Label htmlFor="shipping_charges" className="font-medium">
              Shipping Charges
            </Label>
            <div className="flex items-center gap-1">
              <FormField
                control={form.control}
                name="shipping_charges"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Shipping charges"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <span>{form.watch("shipping_charges") | 0}</span>
          </div>
        )}

        <div className="flex justify-between items-center font-semibold">
          <span>Tax</span>
          <span>{totalTaxAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <span>Total</span>
          <span>{grandTotal ? grandTotal.toFixed(2) : 0}</span>
        </div>
      </div>
    </div>
  );
}
