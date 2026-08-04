"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";

export default function DashboardNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const linkClass = (path: string) =>
    pathname === path
      ? "text-[#5A1E2A] font-semibold"
      : "text-gray-600 hover:text-[#5A1E2A] transition";

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/dashboard"
          className="text-3xl font-bold text-[#5A1E2A]"
        >
          CHARIS
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            href="/dashboard"
            className={linkClass("/dashboard")}
          >
            Dashboard
          </Link>

          <Link
            href="/consultation"
            className={linkClass("/consultation")}
          >
            Consultation
          </Link>

          <Link
            href="/recommendations"
            className={linkClass("/recommendations")}
          >
            Recommendations
          </Link>

          <Link
            href="/wishlist"
            className="relative text-gray-600 hover:text-[#5A1E2A] transition"
          >
            ❤️ Wishlist

            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

        </div>

        {/* User */}
        <div className="flex items-center gap-4">

          <span className="text-gray-700">
            👋 {user?.name || user?.email || "Guest"}
          </span>

          <button
            onClick={handleLogout}
            className="bg-[#5A1E2A] text-white px-5 py-2 rounded-full hover:bg-[#43121C] transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}