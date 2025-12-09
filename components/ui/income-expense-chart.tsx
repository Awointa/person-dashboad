"use client"

import { Activity } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A step area chart"

export const incomeExpensesData = [
  { month: "Jan", income: 1200, expenses: 800 },
  { month: "Feb", income: 2500, expenses: 900 },
  { month: "Mar", income: 3000, expenses: 1500 },
  { month: "Apr", income: 3500, expenses: 2000 },
  { month: "May", income: 4000, expenses: 2200 },
  { month: "Jun", income: 4500, expenses: 3000 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
    icon: Activity,
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-3)",
    icon: Activity,
  }
} satisfies ChartConfig

export function ChartAreaStep() {
  return (
    <Card className="pb-0 pt-3 px-6 ">
      <CardHeader>
        <CardTitle className="p-2 bg-black text-white w-fit rounded-full font-normal">Income & Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h- lg:max-h-72 lg:w-full">
          <AreaChart
            accessibilityLayer
            data={incomeExpensesData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              // dataKey="incomeAndExpense"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="income"
              type="step"
              fill="var(--chart-1)"
              fillOpacity={0.4}
              stroke="var(--chart-1)"
            />
           {/* expenses */}
            <Area
              dataKey="expenses"
              type="step"
              fill="var(--chart-3)"
              fillOpacity={0.4}
              stroke="var(--chart-3)"
            />
          </AreaChart>   
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
