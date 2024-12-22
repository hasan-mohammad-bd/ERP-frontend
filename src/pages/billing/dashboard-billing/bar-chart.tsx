"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { MonthlySalesBilling } from "@/lib/validators/billing/dashboard-report"

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface Params {
  title: string
  data?: MonthlySalesBilling[]
}

export function TheBarChart({ title, data }: Params) {
  // Map data to fit chart requirements
  const chartData = data?.map((item) => ({
    month: item.month_name, // Use month_name for display
    amount: parseFloat((item.amount || "0").toString()), // Ensure amount is a number
  })) || []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md font-normal">{title}</CardTitle>
        {/* <CardDescription>Last 30 days</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.split(" ")[0]} // Optional: Show only the month's name
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
           <Bar dataKey="amount" fill={chartConfig.amount.color} radius={8}> 
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
