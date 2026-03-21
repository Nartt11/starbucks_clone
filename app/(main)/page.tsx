import PromoSection from "@/components/PromoSection";
import { promos } from "@/data/promos";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex justify-center text-center py-5 bg-[#32462f]">
          <div className="mix-w-16 flex items-center">
            <h2 className="align-middle font-semibold text-sm mt-1 text-white items-center">
              It&apos;s a greatday for coffee!
            </h2>
            <Link
              href="/menu"
              className="text-sm text-white ml-3.5 border-2 rounded-full border-white cursor-pointer transition duration-300 ease-in-out hover:bg-primary hover:text-[#32462f] px-3 py-1 rounded"
            >
              Start an order
            </Link>
          </div>
        </div>

        {/* promos */}
        {promos.map((promo, index) => (
          <PromoSection key={index} {...promo} />
        ))}
      </main>
    </div>
  );
}
