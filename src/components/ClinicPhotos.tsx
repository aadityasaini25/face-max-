import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/clinic/clinic1.jpeg', alt: 'Modern Clinic Interior' },
    { src: '/images/clinic/clinic2.jpeg', alt: 'Comfortable Reception Area' },
    { src: '/images/clinic/clinic3.jpeg', alt: 'Advanced Dental Lab' },
    // { src: '/images/clinic/clinic4.jpeg', alt: 'State-of-the-art Equipment' }, // User only provided 3, keep 3 or duplicate one if 4 slots needed?
    // kept 3 as user provided 3. The grid handles 3 items (grid-cols-1 md:grid-cols-2).
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-lavender" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Modern Facility</h2>
          <div className="w-24 h-1.5 bg-[#485b51] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="btn-primary"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
