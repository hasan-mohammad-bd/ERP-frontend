import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function Calculation() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Financial Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <SummaryRow label="Amount Received :" value="0.00" />
        <SummaryRow label="Amount used for Payments :" value="0.00" />
        <SummaryRow label="Amount Refunded :" value="0.00" />
        <SummaryRow 
          label="Amount in Excess:" 
          value="BDT 0.00" 
          warning 
        />
      </CardContent>
    </Card>
  )
}

function SummaryRow({ label, value, warning = false }: { label: string; value: string; warning?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center">
        {warning && <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />}
        <span className={`text-sm font-medium ${warning ? 'text-red-500' : 'text-gray-900'}`}>{value}</span>
      </div>
    </div>
  )
}