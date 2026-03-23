import { menuData } from "@/data/menuData";
import Link from "next/link";

export default function MenuSideBar() {
  return (
    <div>
      {menuData.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-gray-700">{item.category}</h3>
            {item.items.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={`/menu/${item.categorySlug.toLowerCase()}/${subItem.slug}`}
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
