import Link from "next/link";
import { navItems } from "@/data/navItems";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-[999]">
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-white">
            My Portofolio
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white font-semibold hover:text-gray-300 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
