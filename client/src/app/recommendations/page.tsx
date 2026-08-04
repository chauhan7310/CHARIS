"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RecommendationCard from "@/components/recommendation/RecommendationCard";
import api from "@/lib/api";

type Gift = {
  id: number;
  title: string;
  price: number;
  image: string;
  reason: string;
};

export default function Recommendations() {
  const searchParams = useSearchParams();

  const occasion = searchParams.get("occasion") || "";
  const relationship = searchParams.get("relationship") || "";
  const budget = searchParams.get("budget") || "";

  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await api.get("/recommendations", {
        params: {
          occasion,
          relationship,
          budget,
        },
      });

      setGifts(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load recommendations.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F5F2]">
        <h1 className="text-3xl font-bold text-[#5A1E2A]">
          CHARIS AI is preparing recommendations...
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#5A1E2A]">
            Your Luxury Recommendations
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Personalized by CHARIS AI
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="text-4xl font-bold text-[#5A1E2A]">
              {gifts.length}
            </h2>

            <p className="mt-2 text-gray-500">
              AI Picks
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">

            <h2 className="text-3xl font-bold text-[#5A1E2A]">
              {occasion}
            </h2>

            <p className="mt-2 text-gray-500">
              Occasion
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">

            <h2 className="text-3xl font-bold text-[#5A1E2A]">
              ${budget}
            </h2>

            <p className="mt-2 text-gray-500">
              Budget
            </p>

          </div>

        </div>

        {gifts.length === 0 ? (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold text-[#5A1E2A]">
              No matching luxury gifts found.
            </h2>

            <p className="mt-3 text-gray-500">
              Try increasing your budget or selecting another occasion.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {gifts.map((gift) => (
              <RecommendationCard
                key={gift.id}
                id={gift.id}
                title={gift.title}
                price={`$${gift.price}`}
                image={gift.image}
                reason={gift.reason}
              />
            ))}

          </div>

        )}

      </div>
    </main>
  );
}