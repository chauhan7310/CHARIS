"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";
import { useWishlist } from "@/context/WishlistContext";

type Gift = {
  id: number;
  title: string;
  price: number;
  image: string;
  reason: string;
};

export default function ProductDetails() {
  const params = useParams();
  const { addToWishlist } = useWishlist();

  const [gift, setGift] = useState<Gift | null>(null);

  useEffect(() => {
    const fetchGift = async () => {
      try {
        const response = await api.get(`/recommendations/${params.id}`);
        setGift(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGift();
  }, [params.id]);

  if (!gift) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={gift.image}
          alt={gift.title}
          className="w-full rounded-3xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold text-[#5A1E2A]">
            {gift.title}
          </h1>

          <p className="text-4xl font-bold text-[#8B5E3C] mt-6">
            ${gift.price}
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            {gift.reason}
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() =>
                addToWishlist({
                  id: gift.id,
                  title: gift.title,
                  price: `$${gift.price}`,
                  image: gift.image,
                  reason: gift.reason,
                })
              }
              className="bg-[#5A1E2A] text-white px-8 py-4 rounded-xl"
            >
              ❤️ Add to Wishlist
            </button>

            <Link
              href="/recommendations"
              className="border border-[#5A1E2A] px-8 py-4 rounded-xl"
            >
              Back
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}