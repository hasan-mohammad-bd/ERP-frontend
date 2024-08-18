"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,

} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartComponent({ chartData }: any) {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Income</CardTitle> */}
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 12,
              bottom: 20,
              left: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="full_name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sales" fill="var(--color-desktop)" radius={8}>
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        {chartData[0]?.full_name} - {chartData[chartData.length - 1]?.full_name}
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  )
}
