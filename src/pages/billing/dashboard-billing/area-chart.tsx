"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  total_sales: {
    label: "Total Sales",
    color: "hsl(var(--chart-1))",
  },
  total_expenses: {
    label: "Total Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface MonthlyProfitLoss {
  month_key: string;
  month_name: string;
  total_sales: number;
  total_expenses: number;
  profit: number;
}

interface Props {
  title: string;
  data: MonthlyProfitLoss[];
}

export function TheAreaChart({ title, data }: Props) {
  // const [timeRange, setTimeRange] = React.useState("12m");

  const formattedData = data.map((item) => ({
    date: item.month_key,
    total_sales: parseFloat((item.total_sales || "0").toString()),
    total_expenses: parseFloat((item.total_expenses || "0").toString()),
  }));

  const filteredData = formattedData.slice(-12); // Show the last 12 months

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-md font-normal">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-total_sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-total_sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-total_expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-total_expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return new Date(value + "-01").toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value + "-01").toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="total_sales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-total_sales)"
              stackId="a"
            />
            <Area
              dataKey="total_expenses"
              type="natural"
              fill="url(#fillExpenses)"
              stroke="var(--color-total_expenses)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
