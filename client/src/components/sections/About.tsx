export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#F8F5F2]"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <p className="uppercase tracking-[6px] text-[#6A1E2A] mb-5">
            About CHARIS
          </p>

          <h2 className="text-5xl font-bold text-[#5A1E2A] leading-tight">
            Luxury gifting
            <br />
            powered by
            <br />
            thoughtful AI.
          </h2>
        </div>

        <div>

          <p className="text-gray-600 text-lg leading-9">
            CHARIS transforms gifting into a memorable experience.
            Instead of browsing endless products, our AI concierge
            learns about your recipient, understands their personality,
            and curates meaningful luxury gifts with emotional value.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-white rounded-3xl p-6 shadow">

              <h3 className="text-3xl font-bold text-[#6A1E2A]">
                500+
              </h3>

              <p className="mt-2 text-gray-500">
                Curated Luxury Gifts
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow">

              <h3 className="text-3xl font-bold text-[#6A1E2A]">
                AI
              </h3>

              <p className="mt-2 text-gray-500">
                Personalized Concierge
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}