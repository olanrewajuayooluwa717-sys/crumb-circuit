"use client";

import Image from "next/image";
import Link from "next/link";
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

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal/15 bg-navy-deep/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            className="text-cream hover:bg-teal/10 hover:text-teal"
            render={<a href="#tech" />}
          >
            Tech services
          </Button>
          <Button
            className="bg-teal text-navy-deep hover:bg-teal/90"
            render={<a href="#menu" />}
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
            <div className="mt-8 flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-cream/85 transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-4 bg-teal text-navy-deep hover:bg-teal/90"
                render={<a href="#menu" onClick={() => setOpen(false)} />}
              >
                Order for collection
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
