import { menuData } from "@/data/menuData";
import Link from "next/link";

export default function MenuSideBar() {
  return (
    <div>
      {menuData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-gray-700">{item.name}</h3>
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
