"use client"
// import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label"

// Define the type for organization data
interface OrganizationData {
  name: string;
  employees_count: number;
}

// Define the props type
interface EmployeeBranchProps {
  organizationsPicChartData: OrganizationData[];
}

export function EmployeeBranch({ organizationsPicChartData }: EmployeeBranchProps) {
  const chartData = organizationsPicChartData?.map((org, index) => ({
    browser: org.name,
    visitors: org.employees_count,
    fill: `hsl(var(--chart-${index + 1}))`, // Assign color dynamically based on index
  })) || []

  // Create chart config dynamically from the transformed chart data
  const chartConfig = chartData.reduce((config, item) => {
    config[item.browser] = {
      label: item.browser,
      color: item.fill,
    }
    return config
  }, {} as Record<string, { label: string; color: string }>);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-md font-normal">Employee Branch</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* Optional footer content */}
      </CardFooter>
    </Card>
  )
}
