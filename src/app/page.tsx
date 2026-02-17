import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="relative h-[74vh] min-h-[480px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-rose-100 animate-fade-in-up">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=80"
          alt="Relaxing massage therapy session"
          fill
          priority
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-2xl space-y-5 text-white">
            <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur-sm">
              SERENITY TOUCH THERAPIES
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Feel Better. Move Better.
            </h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/pricing-plan" className="btn-primary">
                Book Now
              </Link>
              <Link href="/services" className="btn-glass">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { title: "Expert Hands", text: "Licensed therapists." },
          { title: "Personalized Care", text: "Sessions built for you." },
          { title: "Calm Ambience", text: "Luxury, warm, and quiet." },
        ].map((item) => (
          <article
            key={item.title}
            className="card-lift rounded-2xl bg-white p-6 ring-1 ring-rose-100 animate-fade-in-up"
          >
            <h3 className="text-lg font-semibold text-zinc-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
