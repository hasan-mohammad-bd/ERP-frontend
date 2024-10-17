import { useState } from 'react';
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component from shadcn

export default function Calculation() {
  const [subTotal, setSubTotal] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [adjustment, setAdjustment] = useState(0.0);
  
  const total = (subTotal - (subTotal * (discount / 100)) + adjustment).toFixed(2);

  return (
    <div className="p-4 w-full max-w-sm bg-white shadow-lg rounded-lg">
      <div className="space-y-4">
        {/* Sub Total */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Sub total</label>
          <div className="flex items-center space-x-2">
            <Input 
              type="number" 
              value={subTotal} 
              onChange={(e) => setSubTotal(parseFloat(e.target.value))} 
              className="w-24"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Discount</label>
          <div className="flex items-center space-x-2">
            <Input 
              type="number" 
              value={discount} 
              onChange={(e) => setDiscount(parseFloat(e.target.value))} 
              className="w-16"
              placeholder="0"
            />
            <span>%</span>
          </div>
        </div>

        {/* Adjustment */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Adjustment</label>
          <div className="flex items-center space-x-2">
            <Input 
              type="number" 
              value={adjustment} 
              onChange={(e) => setAdjustment(parseFloat(e.target.value))} 
              className="w-24"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center font-bold">
          <label className="text-gray-700">Total</label>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}
