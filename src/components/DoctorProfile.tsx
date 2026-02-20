import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">Meet The <span className="text-gradient-gold">Expert</span></h2>
          <div className="w-24 h-1.5 bg-[#485b51] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium border-8 border-white ring-1 ring-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
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
            <p className="text-[#485b51] font-bold text-xl uppercase tracking-widest mb-8 border-b border-emerald-100 pb-4 inline-block">
              Oral & Maxillofacial Surgeon | Implantologist
            </p>

            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-light">
              <p>
                With over <strong className="text-gray-900">7+ years of implantology experience</strong>, Dr. Shubham Sunil Salunkhe is a leading expert in complex and complicated implant cases. He is known for his precision and aesthetic-driven results.
              </p>
              <p>
                At <strong>Face Max Dental Clinic</strong>, we pride ourselves on offering a <strong className="text-gray-900">100% digital workflow in implantology</strong>—a unique feature in Pune.
              </p>
              <p>
                Dr. Salunkhe works across multiple clinics as a leading implantologist, bringing advanced equipment and expertise for all procedures to ensure the highest standard of care.
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={onBookAppointment}
                className="btn-primary"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}