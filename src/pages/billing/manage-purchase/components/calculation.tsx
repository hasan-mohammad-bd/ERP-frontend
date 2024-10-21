import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export default function Calculation() {
  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Sub Total</span>
          <span>0.00</span>
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
              placeholder="0"
            />
            <span>%</span>
          </div>
          <span>0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <Label htmlFor="shipping" className=" text-sm">
            Shipping Charges
          </Label>
          <div className="flex items-center">
            <Input id="shipping" type="number" className="w-32 mr-2" />
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <span>0.00</span>
        </div>
        <div className="">
          <Button variant="link" className="text-blue-500 p-0 h-auto">
            Apply Tax on Shipping Charge
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <Label htmlFor="adjustment" className="font-medium">
            Adjustment
          </Label>
          <div className="flex items-center">
            <Input id="adjustment" type="number" className="w-32 mr-2" />
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <span>0.00</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="font-bold">Total ( BDT )</span>
          <span className="font-bold">0.00</span>
        </div>
      </div>
    </div>
  )
}