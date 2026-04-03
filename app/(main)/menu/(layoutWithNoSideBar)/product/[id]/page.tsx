"use client";

import { Product, SelectedProduct } from "@/types/product.type";
import { useEffect, useState } from "react";
import ProductBanner from "@/components/product/ProductBanner";
import { Button } from "@/components/ui/button";
import ProductOrder from "@/components/product/ProductOrder";
import ProductCustomize from "@/components/product/ProductCustomize";
import Order from "@/components/Order";
import { set } from "zod";

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
      type: "input",
      name: "Espresso Shots",
      defaultValue: 2,
      unit: "shot",
    },
  ],
};

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<string>(
    mockProduct.sizeOptions[0].key,
  );
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>();
  const [fieldOptions, setFieldOptions] = useState<
    { key: string; value: string }[]
  >([]);

  useEffect(() => {
    if (!mockProduct) return;

    const defaults = mockProduct.customizeOptions
      .map((option) => {
        if (option.type === "input" && option.defaultValue !== undefined) {
          return {
            key: option.key,
            value: String(option.defaultValue),
          };
        }

        if (option.type === "select" && option.options?.length) {
          return {
            key: option.key,
            value: option.options[0].key,
          };
        }

        return null;
      })
      .filter(Boolean) as { key: string; value: string }[];

    setFieldOptions(defaults);
  }, [mockProduct]);

  const handleChangeOption = (key: string, value: string) => {
    setFieldOptions((prev) => {
      const index = prev.findIndex((opt) => opt.key === key);

      if (index !== -1) {
        const updated = [...prev];
        updated[index].value = value;
        return updated;
      }

      return [...prev, { key, value }];
    });
  };

  const handleAddToCart = () => {
    const newSelectedProduct: SelectedProduct = {
      id: mockProduct.id,
      options: [
        { type: "size", value: selectedSize },
        ...fieldOptions.map((opt) => ({
          type: opt.key,
          value: opt.value,
        })),
      ],
    };

    localStorage.setItem("selectedProduct", JSON.stringify(newSelectedProduct));
  };

  return (
    <div className="flex flex-col gap-8">
      {/* product image */}
      <ProductBanner mockProduct={mockProduct} />

      {/* main content */}
      <div className="container mx-auto max-w-4xl px-6">
        {!isCustomizeOpen ? (
          <ProductOrder
            mockProduct={mockProduct}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            SetIsCustomizeOpen={setIsCustomizeOpen}
            handleChangeOption={handleChangeOption}
          />
        ) : (
          <ProductCustomize />
        )}
      </div>
      <Order handleAddToCart={handleAddToCart} />
    </div>
  );
}
