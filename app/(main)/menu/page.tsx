import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h2> Menu </h2>
      {menuData.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-gray-700 border-b w-full">
              {item.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {item.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={`/menu/${item.categorySlug.toLowerCase()}/${subItem.slug}`}
                  className="text-sm text-gray-600 cursor-pointer flex flex-row gap-2"
                >
                  <Image
                    src={subItem.image}
                    alt={subItem.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 object-cover rounded-full "
                  />
                  <p>{subItem.name}</p>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
