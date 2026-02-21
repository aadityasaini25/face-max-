export default function WhyChooseUs() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Why Choose <span className="text-[#485b51]">Face Max Clinic?</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Specialist Expertise",
                            desc: "Led by an experienced Oral & Maxillofacial Surgeon and Implantologist for complex surgical precision.",
                            icon: "👨‍⚕️"
                        },
                        {
                            title: "100% Digital Workflow",
                            desc: "Predictable, precise outcomes using state-of-the-art digital scanning and 3D planning.",
                            icon: "🖥️"
                        },
                        {
                            title: "Uncompromising Hygiene",
                            desc: "Strict adherence to international sterilization protocols to ensure your absolute safety.",
                            icon: "🧼"
                        },
                        {
                            title: "Patient-Centered Care",
                            desc: "A personalized, reassuring approach to minimize anxiety and maximize comfort during procedures.",
                            icon: "🤝"
                        }
                    ].map((usp, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                        >
                            <div className="text-4xl mb-4">{usp.icon}</div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3">{usp.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-sm">{usp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
