"use client"

import { GitCommitVertical } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { SaleDashboard } from "@/lib/validators/billing/dashboard-report"

interface Props {
  title: string
  data: SaleDashboard[]
}

const chartConfig: ChartConfig = {
  desktop: {
    label: "Total Sell Price",
    color: "hsl(var(--chart-1))",
  },
}

const preprocessData = (data: SaleDashboard[]) => {
  return data.map((item) => ({
    item_name: item.item_name,
    total_sell_price: parseFloat(item.total_sell_price),
  }))
}

export function TheLineGraph2({ title, data }: Props) {
  const chartData = preprocessData(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md font-normal">{title}</CardTitle>
        <CardDescription>Sales Performance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              bottom: 62,
              top: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="item_name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="total_sell_price"
              type="natural"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 12
                return (
                  <GitCommitVertical
                    key={payload.item_name}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="hsl(var(--chart-1))"
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
