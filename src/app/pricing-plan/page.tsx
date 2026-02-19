import Image from "next/image";

const plans = [
  {
    name: "Shanti Basic",
    price: "₹1,500",
    subtitle: "Single therapy session",
    features: [
      "45-60 min Ayurvedic therapy",
      "Herbal consultation",
      "Customized oil selection",
    ],
    image: "/massagepick.png",
  },
  {
    name: "Ayur Bliss",
    price: "₹2,500",
    subtitle: "Most popular package",
    features: [
      "90-min Abhyanga + Shirodhara",
      "Premium herbal oils",
      "Full body rejuvenation",
    ],
    highlight: true,
    image: "/somemassagepicfakecharacters.jpeg",
  },
  {
    name: "Royal Recovery",
    price: "₹3,500",
    subtitle: "Complete wellness package",
    features: [
      "120-min comprehensive therapy",
      "Multiple techniques included",
      "Post-treatment consultation",
    ],
    image: "/massagepick.png",
  },
];

export default function PricingPlanPage() {
  return (
    <section className="space-y-12">
      <div className="animate-fade-in-up rounded-3xl bg-gradient-to-br from-white to-stone-50 p-10 md:p-14 shadow-lg ring-1 ring-stone-200/50">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-700 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
          TRANSPARENT PRICING
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Wellness Packages
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-stone-600 leading-relaxed">
          Choose the perfect therapy package for your wellness journey. All prices in INR with no hidden charges.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`card-lift overflow-hidden rounded-3xl ring-1 transition-all duration-500 ${
              plan.highlight
                ? "bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white ring-emerald-400/50 shadow-2xl scale-105 lg:scale-110"
                : "bg-white text-stone-800 ring-stone-200/50 shadow-lg"
            }`}
          >
            {plan.highlight && (
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-center py-2 px-4 font-bold text-sm text-stone-900 tracking-wide">
                ⭐ MOST POPULAR
              </div>
            )}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={plan.image}
                alt={plan.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 ${plan.highlight ? 'bg-gradient-to-t from-emerald-900/60 to-transparent' : 'bg-gradient-to-t from-stone-900/50 to-transparent'}`} />
            </div>
            <div className="flex flex-col p-8 md:p-10">
              <p
                className={`text-sm font-medium tracking-wide ${plan.highlight ? "text-emerald-100" : "text-stone-500"}`}
              >
                {plan.subtitle}
              </p>
              <h2 className="mt-3 text-3xl font-bold">{plan.name}</h2>
              <div className="mt-6 flex items-baseline gap-2">
                <p className="text-5xl font-bold">{plan.price}</p>
                <p
                  className={`text-sm ${plan.highlight ? "text-emerald-100" : "text-stone-500"}`}
                >
                  /session
                </p>
              </div>

              <ul className="mt-8 space-y-4 text-base flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 ${
                      plan.highlight ? "text-emerald-50" : "text-stone-600"
                    }`}
                  >
                    <span className={`text-xl flex-shrink-0 ${plan.highlight ? 'text-amber-300' : 'text-emerald-600'}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full px-6 py-4 text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  plan.highlight
                    ? "bg-white text-emerald-700 hover:bg-amber-50"
                    : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Additional Info */}
      <div className="rounded-3xl bg-gradient-to-br from-stone-100 to-stone-50 p-8 md:p-10 ring-1 ring-stone-200/50 shadow-sm">
        <h3 className="text-2xl font-bold text-stone-900 mb-4">What's Included</h3>
        <div className="grid md:grid-cols-3 gap-6 text-stone-600">
          <div>
            <p className="font-semibold text-stone-900 mb-2">✓ Premium Oils</p>
            <p className="text-sm">Authentic herbal oils selected for your constitution</p>
          </div>
          <div>
            <p className="font-semibold text-stone-900 mb-2">✓ Expert Care</p>
            <p className="text-sm">Certified Panchakarma therapist guidance</p>
          </div>
          <div>
            <p className="font-semibold text-stone-900 mb-2">✓ Consultation</p>
            <p className="text-sm">Pre and post-treatment health assessment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
