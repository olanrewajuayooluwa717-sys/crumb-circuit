"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "loading" | "success" | "error";

const sizes = ["6″ (serves 8)", "8″ (serves 14)", "10″ (serves 24)", "Tiered / custom"];
const flavours = ["Vanilla bean", "Chocolate", "Lemon", "Red velvet", "Ask us"];

export function CakeOrder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [size, setSize] = useState("");
  const [flavour, setFlavour] = useState("");
  const [messageText, setMessageText] = useState("");
  const [notes, setNotes] = useState("");
  const [allergens, setAllergens] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFeedback("");

    if (!name.trim() || !email.trim() || !date || !size || !flavour) {
      setStatus("error");
      setFeedback("Name, email, date, size, and flavour are required.");
      return;
    }

    const pickup = new Date(date);
    const soonest = new Date();
    soonest.setDate(soonest.getDate() + 3);
    soonest.setHours(0, 0, 0, 0);

    if (Number.isNaN(pickup.getTime()) || pickup < soonest) {
      setStatus("error");
      setFeedback(
        "Celebration cakes need at least three days’ notice — pick a later date.",
      );
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setFeedback(
      `Thanks ${name.trim()}! We’ve logged your ${flavour.toLowerCase()} ${size} cake for ${date}. We’ll confirm design details by email.`,
    );
    setName("");
    setEmail("");
    setDate("");
    setSize("");
    setFlavour("");
    setMessageText("");
    setNotes("");
    setAllergens(false);
  }

  return (
    <section id="cakes" className="relative pt-[6.5rem] lg:pt-16">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs tracking-[0.3em] text-teal uppercase">
            Special order
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            Celebration cakes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Birthdays, milestones, and “we shipped it” moments — designed with
            the same amber-and-teal care as our brand, or kept classic and
            simple.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-12 max-w-2xl space-y-5 rounded-2xl border border-teal/20 bg-navy/55 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cake-name">Name</Label>
              <Input
                id="cake-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-teal/20 bg-navy-deep/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cake-email">Email</Label>
              <Input
                id="cake-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-teal/20 bg-navy-deep/70"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cake-date">Collection date</Label>
              <Input
                id="cake-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-teal/20 bg-navy-deep/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cake-size">Size</Label>
              <select
                id="cake-size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="flex h-9 w-full rounded-md border border-teal/20 bg-navy-deep/70 px-3 text-sm text-cream"
              >
                <option value="">Select size</option>
                {sizes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cake-flavour">Flavour</Label>
            <select
              id="cake-flavour"
              value={flavour}
              onChange={(e) => setFlavour(e.target.value)}
              className="flex h-9 w-full rounded-md border border-teal/20 bg-navy-deep/70 px-3 text-sm text-cream"
            >
              <option value="">Select flavour</option>
              {flavours.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cake-message">Message on cake</Label>
            <Input
              id="cake-message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder='e.g. “Happy birthday Sam”'
              className="border-teal/20 bg-navy-deep/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cake-notes">Design notes</Label>
            <Textarea
              id="cake-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Colours, theme, dietary notes…"
              className="min-h-24 border-teal/20 bg-navy-deep/70"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-cream/70">
            <Checkbox
              checked={allergens}
              onCheckedChange={(checked) => setAllergens(checked === true)}
              className="mt-0.5 border-teal/40 data-[state=checked]:bg-teal data-[state=checked]:text-navy-deep"
            />
            <span>
              I’ll discuss allergens and dietary needs when you confirm the
              order.
            </span>
          </label>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-teal text-navy-deep hover:bg-teal/90"
          >
            {status === "loading" ? "Saving special order…" : "Request celebration cake"}
          </Button>

          {status === "error" ? (
            <p
              role="alert"
              className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {feedback}
            </p>
          ) : null}
          {status === "success" ? (
            <p
              role="status"
              className="rounded-lg border border-teal/35 bg-teal/10 px-3 py-2 text-sm text-teal"
            >
              {feedback}
            </p>
          ) : null}
          {status === "idle" ? (
            <p className="text-center text-xs text-cream/40">
              Minimum three days’ notice. Deposit and final price confirmed by email.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
