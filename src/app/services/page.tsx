"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Abhyanga",
    duration: "60 / 90 min",
    description: "Full-body warm herbal oil massage for relaxation and rejuvenation.",
    image: "/massagepick.png",
  },
  {
    title: "Shirodhara",
    duration: "60 min",
    description: "Continuous flow of warm herbal oil on the forehead for stress relief.",
    image: "/massagepick.png",
  },
  {
    title: "Thakkra Dhara",
    duration: "45 min",
    description: "Herbal paste application for cooling and healing properties.",
    image: "/massagepick.png",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <>
      <section className="space-y-12">
        <div className="animate-fade-in-up rounded-3xl bg-gradient-to-br from-white to-stone-50 p-10 md:p-14 shadow-lg ring-1 ring-stone-200/50">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
            OUR THERAPIES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Traditional Ayurvedic Services
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-stone-600 leading-relaxed">
            Tap any service card to view details and book your personalized healing session.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              className="service-card group overflow-hidden rounded-3xl bg-white text-left ring-1 ring-stone-200/50 shadow-lg"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />
                <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-emerald-700 backdrop-blur-sm shadow-lg">
                  {service.duration}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedService ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4 animate-fade-in-up">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-stone-200/50">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-stone-600 shadow-lg ring-1 ring-stone-200 hover:bg-stone-100 transition-colors"
            >
              ✕
            </button>

            <div className="relative h-72">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
              <p className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-2 text-sm font-bold text-emerald-700 shadow-lg">
                {selectedService.duration}
              </p>
            </div>

            <div className="space-y-5 p-8 md:p-10">
              <h3 className="text-3xl font-bold text-stone-900">
                {selectedService.title}
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed">{selectedService.description}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-sm text-stone-500">Starting from</p>
                <p className="text-2xl font-bold text-emerald-700">₹1,999</p>
              </div>

              <div className="pt-4 flex gap-3">
                <Link
                  href="/about-contact#contact-us"
                  className="btn-primary flex-1 text-center"
                  onClick={() => setSelectedService(null)}
                >
                  Book Now
                </Link>
                <Link
                  href="/pricing-plan"
                  className="btn-secondary flex-1 text-center rounded-full px-6 py-3.5 border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-700 transition-all font-semibold"
                  onClick={() => setSelectedService(null)}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
