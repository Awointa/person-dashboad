"use client"
import { Bar, BarChart, CartesianGrid, Cell, Rectangle } from "recharts"

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

export const description = "A bar chart with an active bar"

const budgetData = [
  { label: "Total Budget", amount:1200, value: 51, color: "var(--chart-1" }, 
  { label: "Spent", amount:2250, value: 29, color: "var(--chart-3)" },
  { label: "Remaining", amount:40000, value: 20, color: "var(--chart-2)" }, 
 
     //
]

const chartConfig = {
  remaining: {
    label: "Remaining",
    color: "var(--chart-3)",
  },
  sent: {
    label: "Sent",
    color: "var(--chart-2)",
  },
  Total: {
    label: "Total",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarActive() {
  return (
    <Card className="pb-0 pt-3">
      <CardHeader className="pl-3.5">
        <CardTitle className="py-1 px-1 text-black w-fit rounded-full border-2 border-black font-normal">Budget</CardTitle>
      </CardHeader>
      <div>
        {
              budgetData.map((data, index) => {
                return (
                <div key={index} className="flex justify-between px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: data.color}}></div>
                    <span>{data.label}</span>
                  </div>
                  <div>
                    { new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(data.amount)
                    }
                  </div>
                </div>)
              })
             }     
      </div>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-44 lg:max-h-48 lg:w-full">
          <BarChart accessibilityLayer data={budgetData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="value"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            >
              {budgetData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
