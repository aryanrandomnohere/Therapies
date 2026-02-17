const plans = [
  {
    name: "Shanti Basic",
    price: "₹1,999",
    subtitle: "Ideal for first-time guests",
    features: [
      "60-min therapy session",
      "Quick posture consultation",
      "Herbal welcome drink",
    ],
  },
  {
    name: "Ayur Bliss",
    price: "₹2,999",
    subtitle: "Most booked in studio",
    features: [
      "90-min Abhyanga blend",
      "Aromatherapy oils",
      "Head + shoulder stress release",
    ],
    highlight: true,
  },
  {
    name: "Royal Recovery",
    price: "₹4,499",
    subtitle: "Best for deep recovery",
    features: [
      "120-min premium therapy",
      "Hot stone upgrade",
      "Priority weekend booking",
    ],
  },
];

export default function PricingPlanPage() {
  return (
    <section className="space-y-8">
      <div className="animate-fade-in-up rounded-3xl bg-white p-8 shadow-lg ring-1 ring-rose-100 md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
          Pricing Plan
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Transparent pricing in INR with no hidden charges.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`card-lift rounded-2xl p-6 ring-1 ${
              plan.highlight
                ? "bg-gradient-to-b from-rose-600 to-rose-500 text-white ring-rose-400 shadow-xl"
                : "bg-white text-zinc-800 ring-rose-100"
            }`}
          >
            <p
              className={`text-sm ${plan.highlight ? "text-rose-100" : "text-zinc-500"}`}
            >
              {plan.subtitle}
            </p>
            <h2 className="mt-2 text-2xl font-bold">{plan.name}</h2>
            <p className="mt-4 text-4xl font-bold">{plan.price}</p>
            <p
              className={`mt-1 text-sm ${plan.highlight ? "text-rose-100" : "text-zinc-500"}`}
            >
              per session
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={plan.highlight ? "text-rose-50" : "text-zinc-600"}
                >
                  • {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-white text-rose-700 hover:bg-rose-50"
                  : "bg-rose-600 text-white hover:bg-rose-700"
              }`}
            >
              Choose Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
