import Link from "next/link";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-8">
        <Logo />
        <NavMenu />
      </div>
      <div className="hidden md:flex items-center gap-12">
        <Link
          href="/store-locator"
          className="flex items-center text-sm font-medium text-gray-700 hover:text-green-900"
        >
          <MapPin className="inline-block mr-1" size={16} />
          Find a store
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/account/signin"
            className="rounded-4xl py-2 px-4 border-2 hover:bg-gray-100 text-black font-bold text-sm cursor-pointer"
          >
            Sign In
          </Link>
          <Link
            href="/account/create"
            className="rounded-4xl py-2 px-4 border-2 hover:bg-gray-800 text-white bg-black text-sm font-bold cursor-pointer"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
