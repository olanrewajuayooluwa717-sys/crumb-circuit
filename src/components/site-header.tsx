"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal/15 bg-navy-deep/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/brand/brand-logo-dark.jpg"
            alt={`${site.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-teal/40"
            priority
          />
          <span className="font-heading text-sm font-semibold tracking-[0.18em] uppercase sm:text-base">
            <span className="text-cream">Crumb</span>{" "}
            <span className="text-teal">Circuit</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-teal/15 text-teal"
                    : "text-cream/70 hover:text-teal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            className="text-cream hover:bg-teal/10 hover:text-teal"
            render={<Link href="/tech" />}
          >
            Tech services
          </Button>
          <Button
            className="bg-teal text-navy-deep hover:bg-teal/90"
            render={<Link href="/menu" />}
          >
            Order now
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="border-teal/30 bg-transparent text-cream lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-teal/20 bg-navy text-cream"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-left tracking-wide text-cream">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2 px-4">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-lg transition-colors",
                      active
                        ? "bg-teal/15 text-teal"
                        : "text-cream/85 hover:text-teal",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                className="mt-4 bg-teal text-navy-deep hover:bg-teal/90"
                render={
                  <Link href="/menu" onClick={() => setOpen(false)} />
                }
              >
                Order for collection
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile / tablet tab strip — horizontal scroll */}
      <nav
        aria-label="Sections"
        className="border-t border-teal/10 lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors sm:text-sm",
                  active
                    ? "bg-teal/20 text-teal"
                    : "text-cream/65 hover:bg-teal/10 hover:text-teal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
