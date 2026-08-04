"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between">

          <h1 className="text-5xl font-bold text-[#5A1E2A]">
            My Wishlist ❤️
          </h1>

          <Link
            href="/recommendations"
            className="bg-[#5A1E2A] text-white px-6 py-3 rounded-xl"
          >
            Continue Shopping
          </Link>

        </div>

        {wishlist.length === 0 ? (

          <div className="text-center mt-24">

            <h2 className="text-3xl font-bold">
              Your Wishlist is Empty
            </h2>

            <p className="mt-4 text-gray-600">
              Save some luxury gifts to see them here.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {wishlist.map((gift) => (

              <div
                key={gift.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-[#5A1E2A]">
                    {gift.title}
                  </h2>

                  <p className="text-xl font-bold mt-2">
                    {gift.price}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {gift.reason}
                  </p>

                  <button
                    onClick={() => removeFromWishlist(gift.id)}
                    className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
}