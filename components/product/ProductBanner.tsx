import { Product } from "@/types/product.type";
import Image from "next/image";

export default function ProductBanner({
  mockProduct,
}: {
  mockProduct: Product;
}) {
  return (
    <div className="bg-HouseGreen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto max-w-4xl px-6 mb-4 items-center justify-evenly py-10 text-white">
        <Image
          src={mockProduct.image}
          alt={mockProduct.name}
          width={260}
          height={260}
          className="object-cover rounded-xl shadow-lg items-center"
        />
        <div className="space-y-2 max-w-xs">
          <p className="text-2xl font-semibold">{mockProduct.name}</p>
          <p className="text-sm opacity-90">{mockProduct.calories} calories</p>
        </div>
      </div>
    </div>
  );
}
