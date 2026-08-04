"use client";


import Link from "next/link";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <DashboardNavbar />

      <main className="min-h-screen bg-[#F8F5F2] py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">

            <div>

              <h1 className="text-5xl font-bold text-[#5A1E2A]">
                Welcome Back 👋
              </h1>

              <p className="mt-4 text-lg text-gray-600">
                Logged in as{" "}
                <span className="font-semibold text-[#5A1E2A]">
                  {user?.email}
                </span>
              </p>

              <p className="mt-2 text-gray-500">
                Discover luxury gifting experiences powered by AI.
              </p>

            </div>

            <Link
              href="/consultation"
              className="bg-[#5A1E2A] text-white px-8 py-4 rounded-full hover:bg-[#43121C] transition text-lg"
            >
              + Start Consultation
            </Link>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow p-6">
              <p className="text-gray-500">Consultations</p>

              <h2 className="text-4xl font-bold text-[#5A1E2A] mt-3">
                08
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow p-6">
              <p className="text-gray-500">Saved Gifts</p>

              <h2 className="text-4xl font-bold text-[#5A1E2A] mt-3">
                14
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow p-6">
              <p className="text-gray-500">Recommendations</p>

              <h2 className="text-4xl font-bold text-[#5A1E2A] mt-3">
                52
              </h2>
            </div>

            <div className="bg-[#5A1E2A] rounded-3xl p-6 text-white">
              <p className="text-white/80">
                Premium Member
              </p>

              <h2 className="text-3xl font-bold mt-3">
                Luxury
              </h2>

              <p className="mt-3 text-white/70">
                Personalized gifting experience.
              </p>
            </div>

          </div>

          {/* Main Cards */}

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Recent */}

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold text-[#5A1E2A]">
                Recent Consultations
              </h2>

              <ul className="space-y-4 mt-8 text-gray-600">

                <li>🎂 Birthday Luxury Gift</li>

                <li>💍 Wedding Collection</li>

                <li>❤️ Anniversary Surprise</li>

                <li>👨‍💼 Corporate Executive Gift</li>

              </ul>

            </div>

            {/* Saved */}

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold text-[#5A1E2A]">
                Saved Luxury Gifts
              </h2>

              <ul className="space-y-4 mt-8 text-gray-600">

                <li>⌚ Rolex Watch</li>

                <li>🖋️ Montblanc Pen</li>

                <li>🌸 Chanel Perfume</li>

                <li>💼 Leather Briefcase</li>

              </ul>

            </div>
                        {/* Featured Gift */}

            <div className="bg-gradient-to-br from-[#5A1E2A] to-[#7A2B3B] rounded-3xl p-8 text-white">

              <p className="uppercase tracking-widest text-white/70">
                Featured Luxury Gift
              </p>

              <h2 className="text-3xl font-bold mt-4">
                Rolex Submariner
              </h2>

              <p className="mt-5 text-white/80 leading-7">
                A timeless luxury watch recommended by CHARIS based on
                current gifting trends. Perfect for celebrating life's
                biggest milestones.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-4xl font-bold">
                  $850
                </span>

                <Link
                  href="/recommendations"
                  className="bg-white text-[#5A1E2A] px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Explore →
                </Link>

              </div>

            </div>

          </div>

          {/* Bottom Section */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {/* Quick Actions */}

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold text-[#5A1E2A] mb-6">
                Quick Actions
              </h2>

              <div className="grid gap-4">

                <Link
                  href="/consultation"
                  className="bg-[#5A1E2A] text-white py-4 rounded-xl text-center hover:bg-[#43121C] transition"
                >
                  🎁 Start New Consultation
                </Link>

                <Link
                  href="/recommendations"
                  className="border-2 border-[#5A1E2A] text-[#5A1E2A] py-4 rounded-xl text-center hover:bg-[#5A1E2A] hover:text-white transition"
                >
                  ⭐ View Recommendations
                </Link>

                <button
                  className="border py-4 rounded-xl hover:bg-gray-100 transition"
                >
                  ❤️ Wishlist (Coming Soon)
                </button>

              </div>

            </div>

            {/* AI Insight */}

            <div className="bg-[#5A1E2A] rounded-3xl p-8 text-white">

              <h2 className="text-3xl font-bold">
                AI Insight
              </h2>

              <p className="mt-6 text-white/80 leading-8">
                Based on your gifting preferences, luxury watches,
                premium perfumes and personalized leather accessories
                are currently the most suitable recommendations for you.
              </p>

              <div className="mt-8 bg-white/10 rounded-2xl p-5">
                <p className="text-white/90">
                  💡 Tip: Complete more consultations to receive even
                  smarter AI recommendations.
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>

    </>
  );
}