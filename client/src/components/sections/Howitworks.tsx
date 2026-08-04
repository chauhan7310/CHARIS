import {
  FaComments,
  FaGift,
  FaHeart,
} from "react-icons/fa";

export default function HowItWorks() {

  const steps = [

    {
      icon: <FaComments size={34} />,
      title: "Tell Us",
      desc: "Describe your recipient and occasion."
    },

    {
      icon: <FaHeart size={34} />,
      title: "AI Understands",
      desc: "Luxury AI learns personality and emotions."
    },

    {
      icon: <FaGift size={34} />,
      title: "Perfect Gift",
      desc: "Receive meaningful curated recommendations."
    }

  ];

  return (

    <section
      id="works"
      className="py-28 bg-white"
    >

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="tracking-[6px] uppercase text-[#6A1E2A]">
            How It Works
          </p>

          <h2 className="text-5xl font-bold text-[#5A1E2A] mt-4">
            Three Simple Steps
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-[#F8F5F2] rounded-3xl p-10 text-center shadow hover:shadow-xl transition duration-300"
            >

              <div className="text-[#6A1E2A] flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}