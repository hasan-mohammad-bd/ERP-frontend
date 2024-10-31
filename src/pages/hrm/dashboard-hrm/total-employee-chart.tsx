"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Define the type for each entry in the employee_month data
interface EmployeeMonthData {
  month_short: string;
  count: number;
}

// Define the props type for TotalEmployeeChart
interface TotalEmployeeChartProps {
  employee_month: EmployeeMonthData[];
}

// Update TotalEmployeeChart to receive `employee_month` data as a prop
export function TotalEmployeeChart({ employee_month }: TotalEmployeeChartProps) {
  // Transform `employee_month` data to match the structure expected by the chart
  const chartData = employee_month?.map((entry) => ({
    month: entry.month_short,
    desktop: entry.count,
  })) || []

  // Define chart config for styling the area chart dynamically
  const chartConfig = {
    desktop: {
      label: "Total Employees",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md font-normal">Total Employee By Year</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Ensures short month names
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
