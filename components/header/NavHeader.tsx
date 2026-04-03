import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

const NavData = [
  {
    lable: "Menu",
    href: "/menu",
  },

  {
    lable: "Rewards",
    href: "/rewards",
  },

  {
    lable: "Gift Cards",
    href: "/gift",
  },
];
export default function NavHeader() {
  const path = usePathname();
  return (
    <div className="hidden md:flex items-center gap-6">
      {NavData.map((item) => {
        const isActive =
          path.split("/").filter(Boolean)[0] ===
          item.href.split("/").filter(Boolean)[0];
        return (
          <div key={item.lable} className="relative group">
            <Link
              href={item.href}
              className={`text-sm font-bold uppercase   ${isActive ? "text-green-900" : "text-gray-700 group-hover:text-green-900"}`}
            >
              {item.lable}
            </Link>
            <span
              className={`absolute bottom-0 h-0.5 bg-primary-dark left-1/2 -translate-x-1/2 transition-all duration-400 ${isActive ? " w-1/2" : "w-0 group-hover:w-1/2"}`}
            />
          </div>
        );
      })}
    </div>
  );
}
