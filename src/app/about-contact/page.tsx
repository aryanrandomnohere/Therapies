import Image from "next/image";

export default function AboutContactPage() {
  return (
    <section className="space-y-12">
      <div className="animate-fade-in-up rounded-3xl bg-gradient-to-br from-white to-stone-50 p-10 md:p-14 shadow-lg ring-1 ring-stone-200/50">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold text-teal-700 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-600"></span>
          ABOUT US
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-5">
          Arogya Vardhan Therapies
        </h1>
        <p className="max-w-4xl text-lg text-stone-600 leading-relaxed">
          <span className="font-semibold text-emerald-700">Art of Ayurveda</span> - Therapies for Rejuvenating Physical Health. 
          Led by certified Panchakarma therapist <span className="font-semibold text-teal-700">Aaryan Ramchandran</span>, 
          we offer traditional Ayurvedic treatments and wellness services designed to restore balance and vitality to your body and mind.
        </p>
      </div>

      {/* Business Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl overflow-hidden ring-1 ring-stone-200/50 shadow-xl bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="relative h-80 w-full">
            <Image
              src="/cardFront.jpeg"
              alt="Arogya Vardhan Business Card - Front"
              fill
              className="object-contain p-6 hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden ring-1 ring-stone-200/50 shadow-xl bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="relative h-80 w-full">
            <Image
              src="/cardBack.jpeg"
              alt="Arogya Vardhan Business Card - Back"
              fill
              className="object-contain p-6 hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        <article className="rounded-3xl bg-white p-8 md:p-10 ring-1 ring-stone-200/50 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">✨</span>
            <h2 className="text-2xl font-bold text-stone-900">
              Why Choose Us
            </h2>
          </div>
          <ul className="space-y-4 text-base text-stone-600">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Certified Expertise:</strong> Ayurvedic and Panchakarma therapist with traditional training</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Personalized Approach:</strong> Custom pressure and oil selection for each client</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Hygienic Environment:</strong> Clean and serene therapy space</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Flexible Scheduling:</strong> Available by appointment for your convenience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Traditional Methods:</strong> Authentic Ayurvedic methodologies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0 mt-1">✓</span>
              <span><strong className="text-stone-900">Specialized Care:</strong> Targeted treatments for various health conditions</span>
            </li>
          </ul>
        </article>

        <article
          id="contact-us"
          className="rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📞</span>
              <h2 className="text-2xl font-bold">
                Get in Touch
              </h2>
            </div>
            <div className="space-y-5 text-base">
              <div>
                <p className="text-emerald-100 font-medium mb-1 text-sm">THERAPIST</p>
                <p className="text-xl font-bold">Aaryan Ramchandran</p>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-1 text-sm">WHATSAPP / PHONE</p>
                <a href="tel:+919082157339" className="text-xl font-bold hover:text-amber-200 transition-colors inline-flex items-center gap-2">
                  +91 9082157339
                  <span className="text-sm">📱</span>
                </a>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-1 text-sm">PHONE (ALTERNATE)</p>
                <a href="tel:+919744977992" className="text-lg font-semibold hover:text-amber-200 transition-colors">
                  +91 9744977992
                </a>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-1 text-sm">EMAIL</p>
                <a href="mailto:aarkaary@gmail.com" className="text-lg font-semibold hover:text-amber-200 transition-colors break-all">
                  aarkaary@gmail.com
                </a>
              </div>
              <div>
                <p className="text-emerald-100 font-medium mb-1 text-sm">AVAILABILITY</p>
                <p className="text-lg font-semibold">Mon-Sat · By Appointment</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* CTA Section */}
      <article className="rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 p-10 md:p-14 shadow-lg ring-1 ring-amber-200/50">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Experience Authentic Ayurveda</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            With Arogya Vardhan Therapies, experience the rejuvenating power of traditional Ayurvedic treatments. 
            Each session is personalized to your unique constitution and health needs, ensuring optimal healing and wellness. 
            Begin your journey to better health today.
          </p>
          <a 
            href="tel:+919082157339" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-8 py-4 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>📞</span>
            Call to Book Now
          </a>
        </div>
      </article>
    </section>
  );
}
