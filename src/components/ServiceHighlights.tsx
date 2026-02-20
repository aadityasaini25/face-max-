
export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Dental Implants",
      image: "/images/implant/single.png",
      description: "Restore your smile with permanent, natural-looking titanium or zirconia implants.",
      benefits: [
        "Permanent solution for missing teeth",
        "Preserves jaw bone density",
        "Looks and feels like natural teeth",
        "Titanium & Zirconia options available"
      ]
    },
    {
      title: "Full Mouth Rehabilitation",
      image: "/images/implant/all_in.png",
      description: "Comprehensive restoration of your smile's function and aesthetics using advanced techniques.",
      benefits: [
        "Restores full chewing function",
        "Improves facial aesthetics",
        "Customized treatment plan",
        "Combination of implants and crowns"
      ]
    },
    {
      title: "Wisdom Tooth Removal",
      image: "/images/implant/Multiple.png",
      description: "Expert surgical removal of impacted wisdom teeth with minimal discomfort.",
      benefits: [
        "Pain-free surgical procedure",
        "Prevents future alignment issues",
        "Quick recovery protocols",
        "Safe sedation options available"
      ]
    },
    {
      title: "Digital Smile Design",
      image: "/images/implant/supported.png",
      description: "Visualize your perfect smile before treatment begins with our 100% digital workflow.",
      benefits: [
        "Preview your new smile instantly",
        "Precise and predictable results",
        "Collaborative design process",
        "Integration with facial aesthetics"
      ]
    }
  ];

  return (
    <section className="relative bg-[#0b1120] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Specialized <span className="text-gradient-gold">Surgical & Implant Care</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#485b51] mx-auto rounded-full mb-10 opacity-80"></div>
          <p className="text-center text-gray-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Oral & Maxillofacial Surgeon | Implantologist. Expert care led by Dr. Shubham Sunil Salunkhe in Pune.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-[32px] shadow-2xl hover:shadow-emerald-500/10 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative rounded-2xl mb-8 aspect-[4/3] flex items-center justify-center overflow-hidden border border-slate-700/50 group-hover:border-emerald-500/30 transition-colors bg-white p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-bold text-center mb-4 text-2xl text-white group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-center mb-8 text-gray-400 leading-relaxed font-light flex-grow">{service.description}</p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300">
                    <span className="text-[#d4af37] mt-1 text-xs">✦</span>
                    <span className="font-light leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}