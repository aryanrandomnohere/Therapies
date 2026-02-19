import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[75vh] min-h-[500px] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-stone-200/50 animate-fade-in-up">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=80"
          alt="Relaxing massage therapy session"
          fill
          priority
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl space-y-7 text-white px-10 md:px-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wider backdrop-blur-md border border-white/20">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              SERENITY TOUCH THERAPIES
            </div>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl tracking-tight">
              Feel Better.<br/>Move Better.
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed">
              Experience authentic Ayurvedic healing through personalized massage therapies designed to restore balance and vitality.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing-plan" className="btn-primary">
                Book Your Session
              </Link>
              <Link href="/services" className="btn-glass">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-stone-100 to-stone-50 ring-1 ring-stone-200/50 md:col-span-2 lg:col-span-1 lg:row-span-2 shadow-lg">
          <div className="relative h-full min-h-[400px] w-full">
            <Image
              src="/massagepick.png"
              alt="Professional massage therapy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        {[
          { 
            title: "Expert Hands", 
            text: "Certified Panchakarma therapist with years of experience in traditional Ayurvedic treatments.",
            icon: "✨"
          },
          { 
            title: "Personalized Care", 
            text: "Every session is customized to your unique needs, body type, and wellness goals.",
            icon: "🌿"
          },
          { 
            title: "Calm Ambience", 
            text: "A tranquil, hygienic environment designed for ultimate relaxation and healing.",
            icon: "🕉️"
          },
        ].map((item) => (
          <article
            key={item.title}
            className="card-lift rounded-3xl bg-white p-8 ring-1 ring-stone-200/50 animate-fade-in-up shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-stone-600">{item.text}</p>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Authentic Ayurveda</h2>
          <p className="text-lg text-emerald-50 leading-relaxed mb-8">
            Discover the rejuvenating power of traditional Ayurvedic treatments. Each session is personalized to your unique constitution and health needs, ensuring optimal healing and wellness.
          </p>
          <Link href="/about-contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More About Us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
