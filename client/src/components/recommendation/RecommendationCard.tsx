"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";

type Props = {
  id: number;
  title: string;
  price: string;
  image: string;
  reason: string;
};

export default function RecommendationCard({
  id,
  title,
  price,
  image,
  reason,
}: Props) {
  const { addToWishlist } = useWishlist();

  const handleSave = () => {
    addToWishlist({
      id,
      title,
      price,
      image,
      reason,
    });

    alert("Gift added to Wishlist ❤️");
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Premium Badge */}

        <div className="absolute top-4 left-4 bg-[#5A1E2A] text-white px-4 py-2 rounded-full text-sm font-semibold">
          Premium Pick
        </div>

        {/* Wishlist Heart */}

        <button
          onClick={handleSave}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition"
        >
          ❤️
        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-[#5A1E2A]">
          {title}
        </h2>

        <p className="text-3xl font-bold text-[#8B5E3C] mt-2">
          {price}
        </p>

        <p className="mt-5 text-gray-600 leading-7">
          {reason}
        </p>

        {/* Rating */}

        <div className="flex items-center mt-5 text-yellow-500 text-lg">
          ⭐⭐⭐⭐⭐
          <span className="ml-3 text-gray-500 text-sm">
            Luxury Choice
          </span>
        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <Link
            href={`/product/${id}`}
            className="text-center bg-[#5A1E2A] text-white py-3 rounded-xl hover:bg-[#43121C] transition"
          >
            View Details
          </Link>

          <button
            onClick={handleSave}
            className="border-2 border-[#5A1E2A] text-[#5A1E2A] rounded-xl hover:bg-[#5A1E2A] hover:text-white transition"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}