import Link from "next/link";

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
export default function NavMenu() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {NavData.map((item) => {
        return (
          <div key={item.lable}>
            <Link
              href={item.href}
              className="text-sm  font-bold uppercase text-gray-700 hover:text-green-900"
            >
              {item.lable}
            </Link>
            <span className="w-full h-10 bg-green-400" />
          </div>
        );
      })}
    </div>
  );
}
