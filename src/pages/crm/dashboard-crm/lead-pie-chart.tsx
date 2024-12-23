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

interface LeadPieChartType {
  id: number;
  name: string;
  lead_count: number;
  lead_percentage: string;
}
interface Params {
  innerRadius: number;
  outerRadius: number;
  title: string;
  data?: LeadPieChartType[];
}

export function LeadPieChart({ innerRadius, outerRadius,title, data = [] }: Params) {

  const aggregatedData = Object.values(
    Array.isArray(data)
      ? data.reduce((acc, item) => {
          if (!acc[item.name]) {
            acc[item.name] = { name: item.name, lead_count: 0 };
          }
          acc[item.name].lead_count += item.lead_count;
          return acc;
        }, {} as Record<string, { name: string; lead_count: number }>)
      : {}
  );


  const chartData = aggregatedData.map((item, index) => ({
    name: item.name,
    value: item.lead_count,
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
              innerRadius={innerRadius ?? 50}
              outerRadius={outerRadius ?? 80}
              label
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
