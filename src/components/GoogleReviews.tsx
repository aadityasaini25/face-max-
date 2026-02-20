import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Amol kenche",
      initials: "AK",
      date: "6 months ago",
      review: "Had a great experience at Face max Dental & Face Clinic. Dr. Rasika Salunkhe is skilled and gentle. The treatment was painless and effective. Clean and modern clinic with a supportive staff. Highly recommended!"
    },
    {
      name: "Shrirup Jogdand",
      initials: "SJ",
      date: "1 months ago",
      review: "Took my kids to Face Max Dental for their check-ups, and Dr. Rasika was amazing with them! She made the experience fun and comfortable, and the kids left with smiles on their faces. A family-friendly clinic indeed!"
    },
    {
      name: "Dr suyog shendage",
      initials: "SS",
      date: "8 months ago",
      review: "I had a dental emergency last weekend and Dr. Shubham at Face Max Dental and Face Clinic was a lifesaver. He was calm, professional, and very skilled. The pain relief was immediate, and the follow-up care instructions were clear. Truly grateful"
    },
    {
      name: "Eppar Amit",
      initials: "EA",
      date: "6 months ago",
      review: "Face Max Dental provides efficient and professional service. Dr. Shubham handled my root canal procedure seamlessly, and the results were excellent. The clinic is clean, and the staff is courteous. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-lavender">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={160}
            height={60}
            className="mx-auto mb-6 object-contain"
          />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-[#485b51] mx-auto rounded-full mt-6 opacity-60"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-inner" style={{ backgroundColor: '#485b51' }}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed font-light">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}