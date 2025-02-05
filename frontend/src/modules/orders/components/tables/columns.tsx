"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Payment } from "@/types";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order.email",
    header: () => <div className="text-right">Email</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row?.original?.order?.user || ""}
      </div>
    ),
  },

  {
    accessorKey: "product.name",
    header: () => <div className="text-right">Name of Product</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row?.original?.product?.name || ""}
      </div>
    ),
  },

  {
    accessorKey: "product.price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row?.original?.product?.price || ""}
      </div>
    ),
  },

  {
    accessorKey: "order.paymentMethod",
    header: () => <div className="text-right">Payment Method</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row?.original?.order?.paymentMethod || ""}
      </div>
    ),
  },

  {
    accessorKey: "order.phone",
    header: () => <div className="text-right">Phone Number</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row?.original?.order?.phone || ""}
      </div>
    ),
  },

  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: () => (
      <div className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                window.open("https://github.com/davidpattaguan", "_blank")
              }
            >
              Contact Seller
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];
