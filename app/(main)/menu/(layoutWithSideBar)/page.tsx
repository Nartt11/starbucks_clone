import LoadingSkeleton from "@/components/LoadingSkeleton";
import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 md:pb-5 lg:pb-7"> Menu </h1>
      {menuData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-900 w-full p-2 md:pb4">
              {item.name}
            </h2>
            <hr className="h-px w-full bg-gray-700 mb-4" />
            <Suspense fallback={<LoadingSkeleton />}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center pb-3">
                {item.subCategories.map((subItem) => (
                  <Link
                    key={subItem.id}
                    href={`/menu/${item.slug.toLowerCase()}/${subItem.slug}`}
                    className="text-sm font-medium text-gray-800 cursor-pointer flex items-center flex-row gap-3"
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
