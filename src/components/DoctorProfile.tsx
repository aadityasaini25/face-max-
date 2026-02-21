import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Surgeon</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Meet Your Surgeon</h2>
          <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mx-auto md:mx-0" />
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

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Dr. Shubham Sunil Salunkhe brings over seven years of focused experience in oral & maxillofacial surgery and implantology. His practice covers the full spectrum: dental implants, wisdom tooth surgery, jaw correction, and facial trauma — all supported by a 100% digital workflow for precise planning and predictable outcomes.
              </p>
              <p>
                At Face Max Dental Clinic, surgery and implant care are under one roof. One surgeon who follows your case from consultation through recovery — no handoffs, no fragmented care.
              </p>
              <blockquote className="border-l-4 border-[#485b51] pl-6 py-2 my-6 bg-gray-50/80 rounded-r-lg text-gray-700 italic text-[15px] md:text-base">
                “We believe you should leave every visit informed and reassured. Taking the time to explain and get it right is part of the job.”
                <span className="block mt-2 not-italic text-sm text-gray-500">— Dr. Shubham Sunil Salunkhe</span>
              </blockquote>
              <p>
                We understand that surgery and implants can feel daunting. Our aim is to make the process clear, comfortable, and focused on your long-term health and satisfaction.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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