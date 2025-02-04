"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "product.id",
    header: () => <div className="text-right">Id</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.original.product.id}</div>
      );
    },
  },

  {
    accessorKey: "product.name",
    header: () => <div className="text-right">Name</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.original.product.name}
        </div>
      );
    },
  },

  {
    accessorKey: "product",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.original.product.price}
        </div>
      );
    },
  },
];
