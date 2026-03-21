import { ChevronDown } from "lucide-react";
import Link from "next/link";

const footerData = [
  {
    title: "About Us",
    links: [
      { label: "Our Company", href: "/about/our-company" },
      { label: "Our Coffee", href: "/about/our-coffee" },
      { label: "About Starbucks", href: "/about/starbucks" },
      { label: "Starbucks Archive", href: "/about/archive" },
      { label: "Investor Relations", href: "/about/investors" },
      { label: "Customer Service", href: "/about/customer-service" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Culture and Values", href: "/careers/culture" },
      { label: "Belonging at Starbucks", href: "/careers/belonging" },
      { label: "College Achievement Plan", href: "/careers/college-plan" },
      { label: "Alumni Community", href: "/careers/alumni" },
      { label: "U.S. Careers", href: "/careers/us" },
      { label: "International Careers", href: "/careers/international" },
    ],
  },
  {
    title: "Social Impact",
    links: [
      { label: "Communities", href: "/social-impact/communities" },
      { label: "Starbucks Foundation", href: "/social-impact/foundation" },
      { label: "Sustainability", href: "/social-impact/sustainability" },
      {
        label: "Environmental and Social Impact Reporting",
        href: "/social-impact/reporting",
      },
    ],
  },
  {
    title: "For Business Partners",
    links: [
      { label: "Landlord Support Center", href: "/business/landlord" },
      { label: "Suppliers", href: "/business/suppliers" },
      { label: "Corporate Gift Card Sales", href: "/business/gift-cards" },
      {
        label: "Office and Foodservice Coffee",
        href: "/business/office-coffee",
      },
    ],
  },
  {
    title: "Order and Pick Up",
    links: [
      { label: "Order on the App", href: "/order/app" },
      { label: "Order on the Web", href: "/order/web" },
      { label: "Delivery", href: "/order/delivery" },
      { label: "Order and Pick Up Options", href: "/order/options" },
      {
        label: "Explore and Find Coffee for Home",
        href: "/order/coffee-at-home",
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className="bg-white shadow-2xl py-6 px-4 md:py-6 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        {footerData.map((section) => (
          <div key={section.title}>
            {/* Section Title */}
            <div className="flex flex-row justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                {" "}
                {section.title}{" "}
              </h3>
              <ChevronDown className="inline-block md:hidden" size={16} />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1">
              {section.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="hidden md:inline-block text-sm text-gray-500 hover:text-gray-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-gray-700 shadow-2xl" />
      {/* logo */}
      <div></div>
      <div className="flex flex-col gap-4">
        <p> Privacy Notice </p>
        <p> Consumer Health Privacy Notice </p>
        <p> Terms of Use </p>
        <p> Not Sell or Share My Personal Information </p>
        <p>Supply Chain Act</p>
        <p> Accessibility </p>
        <p> Cookie Preferences </p>
        <span className="text-sm text-gray-500">
          © 2026 Starbucks Coffee Company. All rights reserved.
        </span>
      </div>
    </div>
  );
}
