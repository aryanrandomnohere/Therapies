export default function AboutContactPage() {
  return (
    <section className="space-y-8">
      <div className="animate-fade-in-up rounded-3xl bg-white p-8 shadow-lg ring-1 ring-rose-100 md:p-10">
        <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
          About & Contact Us
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          We are an India-focused wellness studio blending Ayurvedic traditions
          with modern massage therapy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 ring-1 ring-rose-100">
          <h2 className="text-xl font-semibold text-zinc-900">
            Why clients choose us
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>• Certified Ayurvedic and spa therapists</li>
            <li>• Personalized pressure and oil selection</li>
            <li>• Clean private therapy rooms</li>
            <li>• Open all week with evening slots</li>
          </ul>
        </article>

        <article
          id="contact-us"
          className="rounded-2xl bg-white p-6 ring-1 ring-rose-100"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            Contact Details
          </h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p>
              <span className="font-semibold text-zinc-800">Phone:</span> +91
              98765 43210
            </p>
            <p>
              <span className="font-semibold text-zinc-800">Email:</span>{" "}
              namaste@serenitytouch.in
            </p>
            <p>
              <span className="font-semibold text-zinc-800">Address:</span> 24,
              Indiranagar 100 Ft Road, Bengaluru, Karnataka
            </p>
            <p>
              <span className="font-semibold text-zinc-800">Hours:</span> Mon -
              Sun, 9:00 AM - 9:00 PM
            </p>
          </div>
        </article>
      </div>

      <article className="rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-semibold">Ready to feel your best?</h2>
        <p className="mt-2 max-w-2xl text-rose-50">
          This demo is built to show a premium and conversion-focused website
          experience. It can be customized with real photos, online booking,
          testimonials, and your brand identity.
        </p>
      </article>
    </section>
  );
}
