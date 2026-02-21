interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-emerald-50 py-16 px-4 md:px-8 border-t border-emerald-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Your Comfort and Health Come First
        </h2>
        <div className="w-16 h-1 bg-[#485b51] mx-auto rounded-full mb-8"></div>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Whether you need a complex surgical procedure or are exploring implant options, our specialist team is here to provide exceptional, pain-free care in a state-of-the-art facility.
        </p>

        <button
          onClick={onBookAppointment}
          className="bg-[#485b51] text-white py-4 px-10 rounded-full font-bold text-lg shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1 transition-all w-full md:w-auto tracking-wide"
        >
          Book Your Consultation
        </button>
        <p className="mt-6 text-sm text-gray-500 font-medium">
          Includes comprehensive evaluation and digital diagnostic scan
        </p>
      </div>
    </section>
  );
}