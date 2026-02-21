import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Meet Your <span className="text-[#485b51]">Surgeon</span></h2>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/smile.jpg"
                alt="Dr. Shubham Sunil Salunkhe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Dr. Shubham Sunil Salunkhe
            </h3>
            <p className="text-[#485b51] font-bold text-lg md:text-xl uppercase tracking-widest mb-8 border-b border-emerald-100 pb-4 inline-block">
              Oral & Maxillofacial Surgeon | Implantologist
            </p>

            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-light">
              <p>
                With over <strong className="text-gray-900 font-medium">7 years of specialized surgical experience</strong>, Dr. Salunkhe has built a reputation for clinical excellence and compassionate patient care. He focuses on delivering precise, natural-looking results in complex implant and reconstructive cases.
              </p>
              <p>
                Under his leadership, <strong>Face Max Dental Clinic</strong> utilizes a 100% digital workflow. This advanced technology ensures that every procedure—from a simple extraction to full mouth rehabilitation—is safe, predictable, and minimally invasive.
              </p>
              <p>
                Dr. Salunkhe understands that visiting a surgeon can be daunting. His approach is rooted in empathy, ensuring you feel completely informed, supported, and comfortable throughout your entire treatment journey.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onBookAppointment}
                className="bg-[#485b51] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#3a4a42] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}