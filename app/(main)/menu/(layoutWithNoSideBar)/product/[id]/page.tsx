"use client";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product.type";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";
import { id } from "zod/locales";

export const mockProduct: Product = {
  id: 701,
  name: "Caramel Macchiato",
  slug: "caramel-macchiato",
  image:
    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
  calories: 250,
  basePrice: 4.95,
  sizeOptions: [
    {
      id: 1,
      name: "Tall",
      priceExtended: 0, // Giá bằng basePrice
    },
    {
      id: 2,
      name: "Grande",
      priceExtended: 0.8, // + $0.80 vào basePrice
    },
    {
      id: 3,
      name: "Venti",
      priceExtended: 1.5, // + $1.50 vào basePrice
    },
  ],
  customizeOptions: [
    {
      name: "Milk",
      options: [
        { id: 1, name: "2% Milk", priceExtended: 0 },
        { id: 2, name: "Soymilk", priceExtended: 0.7 },
        { id: 3, name: "Oatmilk", priceExtended: 0.7 },
        { id: 4, name: "Almondmilk", priceExtended: 0.7 },
      ],
    },
    {
      name: "Toppings",
      options: [
        { id: 1, name: "Caramel Drizzle", priceExtended: 0 }, // Mặc định có sẵn
        { id: 2, name: "Extra Caramel Drizzle", priceExtended: 0.6 },
        { id: 3, name: "Whipped Cream", priceExtended: 0.5 },
      ],
    },
    {
      name: "Espresso Shots",
      options: [
        { id: 1, name: "Single Shot", priceExtended: 0 },
        { id: 2, name: "Extra Shot", priceExtended: 0.9 },
      ],
    },
  ],
};

export default function Page() {
  const params = useParams<{ id: string }>();

  const [selectedSize, setSelectedSize] = useState(mockProduct.sizeOptions[0]);
  return (
    <div className="flex flex-col gap-8">
      {/* product image */}
      <div className="w-full bg-primary-dark mb-4 flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-10 text-white">
        <Image
          src={mockProduct.image}
          alt={mockProduct.name}
          width={260}
          height={260}
          className="object-cover rounded-xl shadow-lg"
        />
        <div className="space-y-2 max-w-xs">
          <p className="text-2xl font-semibold">{mockProduct.name}</p>
          <p className="text-sm opacity-90">{mockProduct.calories} calories</p>
        </div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto max-w-4xl px-6">
        {/* Left: Size options */}
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Size options
          </h2>
          <div className="h-px bg-green-100 mb-6" />

          <div className="flex gap-6 mb-10">
            {mockProduct.sizeOptions.map((size, index) => (
              <button
                key={size.name}
                type="button"
                className={`flex flex-col items-center gap-2 text-sm ${
                  index === selectedSize.id - 1
                    ? "text-green-900 font-semibold"
                    : "text-neutral-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                <span
                  className={`flex items-center justify-center w-16 h-16 rounded-full border-2 ${
                    index === selectedSize.id - 1
                      ? "border-green-800 bg-green-50"
                      : "border-neutral-300 bg-white"
                  }`}
                >
                  <span className="w-7 h-10 border-2 border-current rounded-md" />
                </span>
                <span>{size.name}</span>
              </button>
            ))}
          </div>

          {/* <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="text-lg">📍</span>
            <span>Select a store to view availability</span>
          </div> */}
        </section>

        {/* Right: What's included */}
        <section className="flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              What&apos;s included
            </h2>
            <div className="h-px bg-green-100 mb-4" />

            <div className="space-y-3">
              {mockProduct.customizeOptions.map((group) => (
                <Field
                  key={group.name}
                  className="w-full  bg-white px-4 py-3 flex items-center justify-between text-sm "
                >
                  <FieldLabel className="flex-1 ">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                      {group.name}
                    </p>
                  </FieldLabel>

                  <FieldContent>
                    <Select defaultValue={group.options[0].name}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {group.options.map((option) => (
                          <SelectItem key={option.id} value={option.name}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
              ))}
            </div>
          </div>

          {/* <div className="flex justify-end mt-6">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-green-900 text-white px-8 py-3 text-sm font-semibold shadow-md hover:bg-green-950"
            >
              <span>Customize</span>
            </button>
          </div> */}
        </section>
      </div>
    </div>
  );
}
