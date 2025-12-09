import { DesktopNav } from "@/components/DesktopNav"
import { DollarSign, Bell, CircleQuestionMark, CircleUser, Settings} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import {columns} from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { ChartAreaStep as IncomeExpenseChart} from "@/components/ui/income-expense-chart";
import { ChartBarActive } from "@/components/ui/budget-chart";
import { v4 as uuidv4 } from "uuid";
import { SpendingCategories } from "@/components/spending-categories-chart";
import { MobileNav } from "@/components/MobileNav";

const data = [
  {
    id: uuidv4(),
    transaction: "Netflix",
    category: "Entertaiment",
    amount: "$20.00",
    date: "2023-01-02",
  },
  {
    id: uuidv4(),
    transaction: "Nike & jordan",
    category: "clothing & shoes",
    amount: "$250.00",
    date: "2023-01-03",
  },
  {
    id: uuidv4(),
    transaction: "Backpack",
    category: "travel",
    amount: "$70.00",
    date: "2023-01-04",
  },
  {
    id: uuidv4(),
    transaction: "Citibank",
    category: "Money Transfer",
    amount: "$450.00",
    date: "2023-01-05",
  }
]

export default function Home() {
  return (
    <div className="h-screen  grid grid-cols-1 lg:grid-cols-[300px_1fr] bg-zinc-100">
      <div className="lg:col-start-1 lg:col-end-2 hidden lg:block">
        <DesktopNav/>
      </div>
  
      <main className="m-3 bg-white lg:col-start-2 rounded p-4 md:p-5 lg:p-10 shadow-md overflow-auto">
        <div className="flex justify-between items-center lg:justify-end">
          <MobileNav/>

          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center bg-white shadow-md w-fit px-2 py-1 rounded-md"><DollarSign/> USD</div>
            <Bell/>
            <CircleQuestionMark/>
            <CircleUser/>
          </div>
        </div>
       
        <div className="flex justify-between items-end mt-6 lg:mt-0"><div className="text-4xl font-bold"><div>Good morning <span className="text-gray-400">Awointa</span></div><div><span className="text-gray-400">Please review</span> today&apos;s activity</div></div> <Button className="shadow-md cursor-pointer" variant="outline"><Settings /> Customise</Button></div>

        {/*Cards*/}

        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_repeat(3,300px)] pt-6 gap-4">
          <Card className="justify-items-start bg-black p-3">
            <CardHeader>
              <CardTitle className="border-2 border-gray-200 px-4 py-2 rounded-full w-fit text-white text-sm">Total Balance</CardTitle>
            </CardHeader>
            <CardContent className="text-white text-4xl font-bold">
             {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(5907)}
            </CardContent>
            <CardFooter className="flex gap-2"><Button className="bg-zinc-600 w-auto cursor-pointer">&#43; Deposit</Button><Button className="bg-zinc-600 w-auto cursor-pointer">&minus; Withdraw</Button>
            </CardFooter>
          </Card>
          <Card className="bg-orange-500 flex flex-col justify-between p-3">
            <CardHeader>
              <CardTitle className="border-2 border-gray-200 px-4 py-2 rounded-full w-fit text-white text-sm">Main Account</CardTitle>
            </CardHeader>
            <CardContent className="text-white text-4xl font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(5600)}
            </CardContent>
          </Card>
          <Card className="bg-zinc-400 flex flex-col justify-between p-3">
            <CardHeader>
                <CardTitle className="border-2 border-black px-4 py-2 rounded-full w-fit text-black text-sm">Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-black text-4xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(5600)}
            </CardContent>
          </Card>
          <Card className="p-3">
          <CardHeader>
              <CardTitle className="border-2 border-black px-4 py-2 rounded-full w-fit text-black text-sm">Quick Transfer</CardTitle>
            </CardHeader>
            <CardContent className="text-black text-2xl font-bold">
                Move money instantly
            </CardContent>
            <CardFooter className="flex gap-2"><Button className="bg-black w-full cursor-pointer">Transfer</Button></CardFooter>
          </Card>
        </div>
        
        {/* charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_610px] lg:grid-rows-[auto_auto] gap-4 mt-4">
          <div className="lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-2">
            <IncomeExpenseChart/>
          </div>
          <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
            <ChartBarActive/>
          </div>
          <div className="md:col-start-1 md:col-end-2 lg:row-start-2 lg:row-end-3">
            <DataTable columns={columns} data={data} />
          </div>
          <div className="md:col-start-2 md:col-end-2 lg:row-start-2 lg:row-end-3">
            <SpendingCategories/>
          </div>
        </div>
      </main>
  </div>
  
  );
}

