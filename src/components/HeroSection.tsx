import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-12 leading-[1.1] tracking-tight text-gray-900">
        Transform Your Smile With<br />
        <span className="text-gradient-gold">Face Max Dental Clinic</span>
      </h1>

      <div className="md:flex md:items-center md:justify-center md:gap-12 md:mb-16 max-w-5xl mx-auto">
        <div className="relative rounded-2xl aspect-[9/16] md:aspect-auto md:h-[450px] md:w-[260px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl border-4 border-white/50 group hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-black w-full h-full flex items-center justify-center">
            <video
              className="w-full h-full object-contain"
              src="/videos/1st vedio.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="relative group md:w-[450px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#485b51] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Advanced Implantology</h2>
            <div className="w-16 h-1 bg-brandGold mx-auto rounded-full mb-6 opacity-80"></div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-base text-gray-300">Oral & Maxillofacial Surgeon</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-base text-gray-300">100% Digital Workflow</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-base text-gray-300">Implants ₹18,000 – ₹30,000</p>
              </div>
            </div>

            <button
              onClick={onBookAppointment}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b4941f] text-black px-6 py-3 rounded-xl text-base font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 group-hover:ring-2 ring-white/20"
            >
              <div>✨ Book Free Consult</div>
              <div className="text-xs font-medium mt-1 opacity-90">Start Your Smile Journey Today</div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-24 md:flex-row md:justify-center">
        <button
          onClick={onBookAppointment}
          className="bg-[#485b51] text-white py-4.5 px-12 rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1 transition-all md:min-w-[260px] tracking-wide"
        >
          Book Consultation
        </button>
        <a
          href="tel:+918080697453"
          className="bg-white text-[#485b51] border-2 border-[#485b51] py-4.5 px-12 rounded-full font-bold text-lg text-center shadow-lg hover:bg-emerald-50 hover:-translate-y-1 transition-all md:min-w-[260px] tracking-wide"
        >
          Call Now ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why choose <span className="text-gradient-gold">Face Max?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Treatment",
              desc: "We don't believe in one-size-fits-all. We listen to your goals and create a custom treatment plan tailored to your specific needs.",
              icon: "🎯"
            },
            {
              title: "Modern, Transparent Care",
              desc: "Advanced digital X-rays and intraoral cameras so you can see exactly what we see, allowing you to understand your treatment clearly.",
              icon: "🖥️"
            },
            {
              title: "Uncompromising Hygiene",
              desc: "Your safety is paramount. Our clinic adheres to the highest standards of sterilization and international hygiene protocols.",
              icon: "🧼"
            }
          ].map((usp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[24px] text-center shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-500 border border-gray-100/50"
            >
              <div className="text-5xl mb-6">{usp.icon}</div>
              <h4 className="font-bold text-2xl text-gray-900 mb-4">{usp.title}</h4>
              <p className="text-gray-600 leading-relaxed font-light">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 md:p-10 rounded-2xl md:max-w-4xl md:mx-auto">
        <h3 className="font-bold text-[#485b51] mb-6 md:text-2xl text-center border-b pb-4">Face Max Dental Clinic USP</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>7+ Years Experience</strong> in Implantology.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>Oral & Maxillofacial Surgeon</strong> direct treatment.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>100% Digital Workflow</strong> for precise results.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>Affordable Implants</strong> starting from ₹18,000.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Flexible <strong>EMI Options</strong> available.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Modern <strong>Specialist-driven Clinic</strong> in Pune.</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#485b51] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full md:w-auto"
          >
            Request a Call Back ➤
          </button>
          <small className="block mt-3 text-gray-500 text-sm">
            Includes Professional Consultation & Digital Scan
          </small>
        </div>
      </div>
    </section>
  );
}