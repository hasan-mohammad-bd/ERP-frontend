"use client";


import { CartesianGrid, Dot, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface CustomerDashboard {
  id: number;
  name: string;
  company_name: string;
  phone: string;
  email: string;
  sale_amount: string;
}

interface Params {
  title: string;
  data: CustomerDashboard[];
}

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TheLineGraph({ title, data }: Params) {
  // Convert sale_amount to numeric values for chart plotting
  const chartData = data.map((customer) => ({
    name: customer.name,
    sales: parseFloat(customer.sale_amount.replace(/[^\d.-]/g, "")),
    fill: "hsl(var(--chart-1))", // Use consistent color for all points
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md font-normal">{title}</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
              bottom: 64,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              interval={0}
              angle={-45}
              textAnchor="end"
              tick={{ fontSize: 10 }}
            />
            <YAxis
              tickFormatter={(value) =>
                `৳${value.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                })}`
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="name"
                  labelFormatter={(value) =>
                    `৳${value.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}`
                  }
                  hideLabel
                />
              }
            />
            <Line
              dataKey="sales"
              type="natural"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.name}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
