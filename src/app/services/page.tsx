"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Abhyanga Ayurvedic Massage",
    duration: "60 / 90 min",
    description: "Warm herbal oil full-body relaxation.",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Balinese Deep Tissue Massage",
    duration: "60 / 90 min",
    description: "Deep pressure for knots and stiffness.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Potli Herbal Therapy",
    duration: "45 / 75 min",
    description: "Heated herbal pouch muscle relief.",
    image:
      "https://images.unsplash.com/photo-1591343395902-1adcb454c4a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aromatherapy Shirodhara Blend",
    duration: "60 min",
    description: "Stress relief and deep head relaxation.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hot Stone Rejuvenation",
    duration: "75 min",
    description: "Warm stones, deep release.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Thai Stretch Therapy",
    duration: "60 min",
    description: "Assisted stretches for mobility.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <>
      <section className="space-y-8">
        <div className="animate-fade-in-up rounded-3xl bg-white p-8 shadow-lg ring-1 ring-rose-100 md:p-10">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Services
          </h1>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Tap any service card to view details and book.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              className="service-card group overflow-hidden rounded-2xl bg-white text-left ring-1 ring-rose-100"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-700 backdrop-blur-sm">
                  {service.duration}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-zinc-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedService ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 animate-fade-in-up">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-rose-100">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-zinc-700 ring-1 ring-zinc-200"
            >
              ✕
            </button>

            <div className="relative h-56">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-700">
                {selectedService.duration}
              </p>
            </div>

            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-bold text-zinc-900">
                {selectedService.title}
              </h3>
              <p className="text-zinc-600">{selectedService.description}</p>
              <p className="text-sm text-zinc-500">Starting from ₹1,999</p>

              <div className="pt-2">
                <Link
                  href="/about-contact#contact-us"
                  className="btn-primary inline-flex"
                  onClick={() => setSelectedService(null)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
