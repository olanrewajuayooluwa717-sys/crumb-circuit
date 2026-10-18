import { MapPin, Clock, Phone, Mail } from "lucide-react";

import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative pt-[6.5rem] lg:pt-16">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="font-heading text-xs tracking-[0.3em] text-teal uppercase">
            Takeaway collection
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            Find us
          </h2>
          <p className="mt-4 text-cream/70">
            Order online, then collect from our counter. We’re set up for quick
            takeaway — no table service, just fresh bags ready with your name.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <MapPin className="size-5 text-amber" />
            <h3 className="mt-3 font-heading text-base font-semibold text-cream">
              Location
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/65">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
              <br />
              {site.address.postcode}
            </p>
          </div>

          <div>
            <Clock className="size-5 text-amber" />
            <h3 className="mt-3 font-heading text-base font-semibold text-cream">
              Opening hours
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-cream/65">
              {site.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-cream/85">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Phone className="size-5 text-amber" />
            <h3 className="mt-3 font-heading text-base font-semibold text-cream">
              Phone
            </h3>
            <p className="mt-2 text-sm text-cream/65">{site.phone}</p>
            <p className="mt-2 text-xs text-cream/45">
              Call ahead if you’re collecting a large celebration cake.
            </p>
          </div>

          <div>
            <Mail className="size-5 text-amber" />
            <h3 className="mt-3 font-heading text-base font-semibold text-cream">
              Email
            </h3>
            <p className="mt-2 text-sm text-cream/65">{site.email}</p>
            <p className="mt-2 text-xs text-cream/45">
              Best for tech enquiries and cake design notes.
            </p>
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-sm text-cream/55">
          {site.collectionNote}
        </p>
      </div>
    </section>
  );
}
