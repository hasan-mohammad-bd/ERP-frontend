"use client";

import { Pie, PieChart } from "recharts";

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

interface AccountBillingDashboard {
  id: number;
  code: string;
  name: string;
  balance: number;
}

interface Params {
  title: string;
  data: AccountBillingDashboard[];
}

export function ThePieChartDonut({ title, data }: Params) {
  // Aggregate balances by name
  const aggregatedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = { name: item.name, balance: 0 };
      }
      acc[item.name].balance += item.balance;
      return acc;
    }, {} as Record<string, { name: string; balance: number }>)
  );

  // Map aggregated data to chart format
  const chartData = aggregatedData.map((item, index) => ({
    name: item.name,
    value: item.balance,
    fill: `hsl(var(--chart-${(index % 5) + 1}))`, 
  }));

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-md font-normal">{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              label
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
