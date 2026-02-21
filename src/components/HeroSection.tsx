import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-28 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Expert Oral & Maxillofacial<br className="hidden md:block" />
          <span className="text-[#485b51]"> Surgical Care</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Experience world-class surgical precision and digital implantology in a comfortable, reassuring environment. Led by Dr. Shubham Sunil Salunkhe.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-center md:gap-16 md:mb-16 max-w-5xl mx-auto">
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

        {/* Specializations Section */}
        <div className="relative group md:w-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#485b51] to-[#3a4a42] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0b1120] text-white p-8 rounded-2xl text-center shadow-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 tracking-wide text-white">Dedicated to Excellence</h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-8"></div>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4 text-left">
                <span className="text-[#d4af37] text-xl">✦</span>
                <p className="text-[15px] text-gray-300 font-light">Oral & Maxillofacial Surgery</p>
              </div>
              <div className="flex items-center gap-4 text-left">
                <span className="text-[#d4af37] text-xl">✦</span>
                <p className="text-[15px] text-gray-300 font-light">Advanced Digital Implantology</p>
              </div>
              <div className="flex items-center gap-4 text-left">
                <span className="text-[#d4af37] text-xl">✦</span>
                <p className="text-[15px] text-gray-300 font-light">Pain-Free Surgical Protocols</p>
              </div>
            </div>

            <button
              onClick={onBookAppointment}
              className="w-full bg-[#d4af37] text-gray-950 px-6 py-3.5 rounded-xl text-base font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
        <button
          onClick={onBookAppointment}
          className="bg-[#485b51] text-white py-4 px-10 rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1 transition-all md:min-w-[240px] tracking-wide"
        >
          Book Appointment
        </button>
        <a
          href="tel:+918080697453"
          className="bg-white text-[#485b51] border-2 border-[#485b51] py-4 px-10 rounded-full font-bold text-lg text-center shadow-lg hover:bg-[#f8faf9] hover:-translate-y-1 transition-all md:min-w-[240px] tracking-wide"
        >
          Call Us Today
        </a>
      </div>
    </section>
  );
}