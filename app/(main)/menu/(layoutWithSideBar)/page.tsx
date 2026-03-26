import LoadingSkeleton from "@/components/LoadingSkeleton";
import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function page() {
  return (
    <div>
      <h2> Menu </h2>
      {menuData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-gray-700 border-b w-full">
              {item.name}
            </h3>
            <Suspense fallback={<LoadingSkeleton />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {item.subCategories.map((subItem) => (
                  <Link
                    key={subItem.id}
                    href={`/menu/${item.slug.toLowerCase()}/${subItem.slug}`}
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
            </Suspense>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {item.subCategories.map((subItem) => (
                <Link
                  key={subItem.id}
                  href={`/menu/${item.slug.toLowerCase()}/${subItem.slug}`}
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
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
