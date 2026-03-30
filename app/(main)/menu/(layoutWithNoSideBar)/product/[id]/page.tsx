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
import cup from "@/public/coffee-cup.svg";
import { useState } from "react";

export const mockProduct: Product = {
  id: 701,
  name: "Caramel Macchiato",
  slug: "caramel-macchiato",
  image:
    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
  calories: 250,
  basePrice: 4.95,
  sizeOptions: [
    { key: "tall", name: "Tall", priceExtended: 0 },
    { key: "grande", name: "Grande", priceExtended: 0.8 },
    { key: "venti", name: "Venti", priceExtended: 1.5 },
  ],
  customizeOptions: [
    {
      key: "milk",
      type: "select",
      name: "Milk",
      options: [
        { key: "2-percent", name: "2% Milk", priceExtended: 0 },
        { key: "soy", name: "Soymilk", priceExtended: 0.7 },
        { key: "oat", name: "Oatmilk", priceExtended: 0.7 },
        { key: "almond", name: "Almondmilk", priceExtended: 0.7 },
      ],
    },
    {
      key: "toppings",
      type: "select",
      name: "Toppings",
      options: [
        { key: "caramel-drizzle", name: "Caramel Drizzle", priceExtended: 0 },
        {
          key: "extra-caramel-drizzle",
          name: "Extra Caramel Drizzle",
          priceExtended: 0.6,
        },
        { key: "whipped-cream", name: "Whipped Cream", priceExtended: 0.5 },
      ],
    },
    {
      key: "espresso-shots",
      type: "select",
      name: "Espresso Shots",
      options: [
        { key: "single-shot", name: "Single Shot", priceExtended: 0 },
        { key: "extra-shot", name: "Extra Shot", priceExtended: 0.9 },
      ],
    },
  ],
};

export default function Page() {
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
            {mockProduct.sizeOptions.map((size) => (
              <button
                key={size.key}
                type="button"
                className={`flex flex-col items-center gap-2 text-sm  ${
                  size.key === selectedSize.key
                    ? "text-green-900 font-semibold"
                    : "text-neutral-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                <Image
                  src={cup}
                  alt={size.name}
                  width={10}
                  height={10}
                  className="border-primary h-10 w-10 border-2 rounded-full bg-primary-light p-2 "
                />
                <span>{size.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Right: What's included */}
        <section className="flex flex-col justify-between gap-3">
          <div className="w-full">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              What&apos;s included
            </h2>
            <div className="h-px bg-green-100 mb-4" />

            <div className="space-y-3">
              {mockProduct.customizeOptions.map((group) =>
                group.type === "select" ? (
                  <Field
                    key={group.key}
                    className="w-full min-w-48 bg-white px-4 py-1 flex items-center justify-between text-sm "
                  >
                    <FieldLabel className="flex-1 ">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                        {group.name}
                      </p>
                    </FieldLabel>

                    <FieldContent>
                      <Select defaultValue={group.options?.[0].name}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {group.options?.map((option) => (
                            <SelectItem key={option.key} value={option.name}>
                              {option.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>
                ) : (
                  <p key = {group.key}>t</p>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
