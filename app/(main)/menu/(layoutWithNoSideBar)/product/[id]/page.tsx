"use client";
import { Product } from "@/types/product.type";
import Image from "next/image";
import { useParams } from "next/navigation";

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
      name: "Tall",
      priceExtended: 0, // Giá bằng basePrice
    },
    {
      name: "Grande",
      priceExtended: 0.8, // + $0.80 vào basePrice
    },
    {
      name: "Venti",
      priceExtended: 1.5, // + $1.50 vào basePrice
    },
  ],
  customizeOptions: [
    {
      name: "Milk",
      options: [
        { name: "2% Milk", priceExtended: 0 },
        { name: "Soymilk", priceExtended: 0.7 },
        { name: "Oatmilk", priceExtended: 0.7 },
        { name: "Almondmilk", priceExtended: 0.7 },
      ],
    },
    {
      name: "Toppings",
      options: [
        { name: "Caramel Drizzle", priceExtended: 0 }, // Mặc định có sẵn
        { name: "Extra Caramel Drizzle", priceExtended: 0.6 },
        { name: "Whipped Cream", priceExtended: 0.5 },
      ],
    },
    {
      name: "Espresso Shots",
      options: [
        { name: "Single Shot", priceExtended: 0 },
        { name: "Extra Shot", priceExtended: 0.9 },
      ],
    },
  ],
};

export default function Page() {
  const params = useParams<{ id: string }>();
  return (
    <div className="flex flex-col">
      {/* product image */}
      <div className="w-full h-96 bg-primary-dark mb-8 flex flex-col md:flex-row items-center justify-center">
        <Image
          src={mockProduct.image}
          alt={mockProduct.name}
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        <div>
          <p className="">{mockProduct.name}</p>
          <p>{mockProduct.calories} calories</p>
        </div>
      </div>
    </div>
  );
}
