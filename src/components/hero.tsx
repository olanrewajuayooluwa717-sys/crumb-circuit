import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-[6.5rem] lg:pt-16"
    >
      <Image
        src="/brand/brand-cyber-croissant.jpg"
        alt="Glowing cyber croissant with circuit traces — the Crumb Circuit brand mark"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/35" />
      <div className="absolute inset-0 circuit-grid animate-circuit-pulse" />

      <div className="section-shell relative z-10 pb-16 pt-24 lg:pb-24">
        <div className="max-w-2xl">
          <Image
            src="/brand/brand-logo-dark.jpg"
            alt="Crumb Circuit"
            width={220}
            height={220}
            className="mb-8 h-auto w-40 animate-float-soft rounded-2xl object-cover shadow-[0_20px_60px_rgb(0_0_0_/_45%)] ring-1 ring-teal/30 sm:w-52"
            priority
          />

          <p className="animate-fade-up font-heading text-xs font-semibold tracking-[0.35em] text-amber uppercase sm:text-sm">
            {site.taglinePrimary}
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 font-heading text-5xl leading-[0.95] font-bold tracking-tight text-cream sm:text-6xl md:text-7xl">
            <span className="text-cream">Crumb</span>{" "}
            <span className="text-teal">Circuit</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-md text-base text-cream/85 sm:text-lg">
            {site.taglineSecondary} Fresh bakes for collection, plus practical
            tech help for local life and small business.
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-teal px-7 text-navy-deep hover:bg-teal/90"
              render={<Link href="/menu" />}
            >
              Order for collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream/35 bg-navy-deep/40 px-7 text-cream hover:bg-cream/10 hover:text-cream"
              render={<Link href="/tech" />}
            >
              Explore tech services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
