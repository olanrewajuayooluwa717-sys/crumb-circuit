"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site, techServices } from "@/lib/site";

type FormStatus = "idle" | "loading" | "success" | "error";

export function TechInquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");

    if (!name.trim() || !email.trim() || !service || !details.trim()) {
      setStatus("error");
      setMessage("Fill in every field so we know how to help.");
      return;
    }
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("That email doesn’t look quite right.");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 850));

    if (details.trim().length < 12) {
      setStatus("error");
      setMessage(
        "Tell us a little more about the project (a sentence or two is enough).",
      );
      return;
    }

    setStatus("success");
    setMessage(
      `Thanks ${name.trim()} — we’ll reply to ${email.trim()} about your ${service.toLowerCase()} enquiry.`,
    );
    setName("");
    setEmail("");
    setService("");
    setDetails("");
  }

  return (
    <section id="tech" className="relative scroll-mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="font-heading text-xs tracking-[0.3em] text-amber uppercase">
              Second revenue stream
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              Tech services for local life
            </h2>
            <p className="mt-4 max-w-xl text-cream/70">
              The same digital skills that run our bakery online — offered to
              students, clubs, and small businesses who need a clear, affordable
              start.
            </p>

            <ul className="mt-10 space-y-8">
              {techServices.map((serviceItem, index) => (
                <li key={serviceItem.title} className="border-l-2 border-teal/40 pl-5">
                  <p className="font-heading text-xs tracking-[0.25em] text-teal/70 uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-semibold text-cream">
                    {serviceItem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {serviceItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-amber/25 bg-gradient-to-b from-navy to-navy-deep p-6 sm:p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-cream">
              Request a tech chat
            </h3>
            <p className="mt-2 text-sm text-cream/60">
              Demo form — messages stay on this device. Prefer email?{" "}
              <span className="text-teal">{site.email}</span>
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tech-name">Name</Label>
                <Input
                  id="tech-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-teal/20 bg-navy-deep/70"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech-email">Email</Label>
                <Input
                  id="tech-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-teal/20 bg-navy-deep/70"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech-service">Service</Label>
                <select
                  id="tech-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-teal/20 bg-navy-deep/70 px-3 text-sm text-cream"
                >
                  <option value="">What do you need?</option>
                  <option value="Website creation">Website creation</option>
                  <option value="Digital ordering">Digital ordering system</option>
                  <option value="Computer support">Basic computer support</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech-details">Project details</Label>
                <Textarea
                  id="tech-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="min-h-28 border-teal/20 bg-navy-deep/70"
                  placeholder="What are you trying to fix or launch?"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-amber text-navy-deep hover:bg-amber/90"
              >
                {status === "loading" ? "Sending enquiry…" : "Send enquiry"}
              </Button>

              {status === "idle" && !message ? (
                <p className="text-xs text-cream/40">
                  We’ll respond with times and a rough quote — no obligation.
                </p>
              ) : null}
              {status === "error" ? (
                <p
                  role="alert"
                  className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  {message}
                </p>
              ) : null}
              {status === "success" ? (
                <p
                  role="status"
                  className="rounded-lg border border-teal/35 bg-teal/10 px-3 py-2 text-sm text-teal"
                >
                  {message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
