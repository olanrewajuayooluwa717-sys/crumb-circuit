import { businessPitch, site } from "@/lib/site";

const blocks = [
  {
    title: "Products & services",
    body: businessPitch.products,
  },
  {
    title: "Target customers",
    body: businessPitch.customers,
  },
  {
    title: "How we make money",
    body: businessPitch.revenue,
  },
] as const;

export function AboutPitch() {
  return (
    <section id="about" className="relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(58_183_191_/_08%),transparent_55%)]" />
      <div className="section-shell relative">
        <div className="max-w-2xl">
          <p className="font-heading text-xs tracking-[0.3em] text-amber uppercase">
            Enterprise Challenge · {site.seedBudget} seed
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            Business model
          </h2>
          <p className="mt-4 text-cream/70">
            {site.name} is a hybrid: a technology business that also sells bakery
            products. Pitch date {site.pitchDate}.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {blocks.map((block) => (
            <div key={block.title}>
              <h3 className="font-heading text-lg font-semibold text-teal">
                {block.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/70">
                {block.body.map((item) => (
                  <li key={item} className="border-t border-teal/10 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-teal/15 pt-10 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-cream">
              Model &amp; why it fits
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {businessPitch.model}
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-amber">
              Challenge: second revenue stream
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {businessPitch.secondStream}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
