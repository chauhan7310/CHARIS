"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F5F2] pt-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[8px] text-[#7A2E3A] mb-8">
            Luxury AI Gift Concierge
          </p>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-[#5A1E2A]">
            Find the Perfect Gift,
            <br />
            Not Just Another Product.
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            CHARIS understands your recipient,
            relationship, occasion and emotions
            to recommend meaningful luxury gifts.
          </p>

          <div className="flex gap-5 mt-10">

            {/* Start Consultation */}
            <Link
              href="/consultation"
              className="bg-[#5A1E2A] text-white px-8 py-4 rounded-full hover:bg-[#471520] transition duration-300"
            >
              Start Consultation
            </Link>

            {/* Learn More */}
            <Link
              href="#about"
              className="border border-[#5A1E2A] text-[#5A1E2A] px-8 py-4 rounded-full hover:bg-[#5A1E2A] hover:text-white transition duration-300"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Right Card */}
        <div className="flex justify-center items-center">

          <div className="w-[430px] h-[520px] rounded-[40px] bg-[#6A2433] shadow-2xl flex items-center justify-center">

            <div className="text-center text-white">

              <h2 className="text-5xl font-bold mb-5">
                AI Concierge
              </h2>

              <p className="text-xl">
                Personalized luxury gifting
                powered by AI.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}