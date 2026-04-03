"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Menu", href: "/menu", slug: "menu" },
  { name: "Features", href: "/menu/features", slug: "features" },
  { name: "Previous", href: "/menu/previous", slug: "previous" },
  { name: "Favorites", href: "/menu/favorites", slug: "favorites" },
];
export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div className="sticky w-full top-0 flex items-center gap-6 py-4 px-6  bg-gray-100 border-2 border-gray-300 inset-shadow-sm">
      <div className="container mx-auto max-w-7xl flex flex-row items-center space-x-8  ">
        {menuItems.map((item, index) => {
          const isActive =
            pathname.split("/").filter(Boolean)[1] === item.slug ||
            pathname.split("/").filter(Boolean)[0] === "";
          console.log("path nav header", pathname.split("/"));

          return (
            <div key={index} className="flex items-center gap-6 ">
              <Link
                href={item.href}
                className={`text-sm font-medium text-gray-700 ${isActive ? "text-green-900" : "hover:text-green-900"}`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute bottom-0 h-0.5 bg-primary-dark left-1/2 -translate-x-1/2 transition-all duration-400 ${isActive ? " w-1/2" : "w-0 group-hover:w-1/2"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
