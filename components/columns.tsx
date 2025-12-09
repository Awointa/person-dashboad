"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  transaction: string
  category: string
  amount: string
  date: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transaction",
    header: "Transaction",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as string
      return <div className="font-medium">-{amount}</div>
    },
  },
]