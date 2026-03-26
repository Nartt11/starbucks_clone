import { Product } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Link
      key={product.id}
      href={`/menu/product/${product.id}`}
      className="p-4 flex flex-col items-center gap-2"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-48 h-48 object-cover rounded-full"
      />
      <h4 className="text-lg font-medium text-gray-800">{product.name}</h4>
    </Link>
  );
}
