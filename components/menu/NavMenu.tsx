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
    <div className="sticky w-full top-0  flex items-center gap-6 py-4 px-6 bg-gray-100 border-2 border-gray-300 inset-shadow-sm">
      <div className="container mx-auto max-w-7xl flex flex-row items-center space-x-8  ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border-b-2 border-transparent hover:border-green-400"
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-gray-700"
            >
              {item.name}
            </Link>
            {/* <span className="w-full h-2 bg-green-400" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
