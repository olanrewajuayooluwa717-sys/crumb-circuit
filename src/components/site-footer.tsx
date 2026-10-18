import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-teal/15 bg-navy-deep/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase">
            <span className="text-cream">Crumb</span>{" "}
            <span className="text-teal">Circuit</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-cream/55">
            {site.taglinePrimary} · {site.taglineSecondary}
          </p>
        </div>
        <p className="text-xs text-cream/40">
          Enterprise Challenge demo · mock orders only · {site.pitchDate}
        </p>
      </div>
    </footer>
  );
}
