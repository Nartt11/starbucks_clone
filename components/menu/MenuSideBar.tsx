import { menuData } from "@/data/menuData";
import Link from "next/link";

export default function MenuSideBar({ className }: { className?: string }) {
  return (
    <div className={`w-64 flex flex-col gap-6 ${className}`}>
      {menuData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2 pb-3 md:pb-4">
            <h4 className="font-bold text-gray-700">{item.name}</h4>
            {item.subCategories.map((subItem) => (
              <Link
                key={subItem.id}
                href={`/menu/${item.slug.toLowerCase()}/${subItem.slug}`}
                className="text-sm text-gray-600 cursor-pointer"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
}
