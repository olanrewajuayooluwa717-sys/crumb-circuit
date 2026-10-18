"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  formatPrice,
  menuCategories,
  menuItems,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu";
import { site } from "@/lib/site";

type CartLine = { item: MenuItem; qty: number };
type OrderStatus = "idle" | "loading" | "success" | "error";

export function MenuOrder() {
  const [filter, setFilter] = useState<MenuCategory | "all">("all");
  const [cart, setCart] = useState<Record<string, CartLine>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("");
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [message, setMessage] = useState("");

  const visible = useMemo(
    () =>
      filter === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === filter),
    [filter],
  );

  const lines = Object.values(cart);
  const total = lines.reduce((sum, line) => sum + line.item.price * line.qty, 0);
  const count = lines.reduce((sum, line) => sum + line.qty, 0);

  function addItem(item: MenuItem) {
    setCart((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: { item, qty: existing ? existing.qty + 1 : 1 },
      };
    });
    setStatus("idle");
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      const nextQty = existing.qty + delta;
      if (nextQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...existing, qty: nextQty } };
    });
  }

  function clearCart() {
    setCart({});
  }

  async function placeOrder(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");

    if (lines.length === 0) {
      setStatus("error");
      setMessage("Your bag is empty — add something from the menu first.");
      return;
    }
    if (!name.trim() || !phone.trim() || !slot) {
      setStatus("error");
      setMessage("Add your name, phone, and a collection slot to continue.");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Mock occasional network blip for demo error state
    if (phone.replace(/\D/g, "").endsWith("0000")) {
      setStatus("error");
      setMessage(
        "We couldn’t reach the kitchen just now. Check your connection and try again.",
      );
      return;
    }

    setStatus("success");
    setMessage(
      `Order locked in for ${name.trim()}. Collect from ${site.address.line1} at ${slot}. Total ${formatPrice(total)}.`,
    );
    setCart({});
    setName("");
    setPhone("");
    setSlot("");
  }

  return (
    <section id="menu" className="relative scroll-mt-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="font-heading text-xs tracking-[0.3em] text-teal uppercase">
            Bakery + accessories
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            Menu &amp; collection order
          </h2>
          <p className="mt-4 text-cream/70">
            Build a bag online, then pick it up warm from our takeaway counter.
            Mock checkout only — no card details needed for this pitch demo.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {menuCategories.map((category) => {
            const active = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-teal text-navy-deep"
                    : "bg-secondary text-cream/75 hover:text-cream"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            {visible.length === 0 ? (
              <p className="rounded-xl border border-dashed border-teal/25 bg-navy/40 px-5 py-10 text-center text-cream/60">
                Nothing in this category right now — try another filter.
              </p>
            ) : (
              visible.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 border-b border-teal/10 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-lg font-semibold text-cream">
                        {item.name}
                      </h3>
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] tracking-wide text-amber uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-cream/65">{item.description}</p>
                    <p className="mt-2 text-sm font-medium text-teal">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <Button
                    type="button"
                    onClick={() => addItem(item)}
                    className="shrink-0 bg-amber text-navy-deep hover:bg-amber/90"
                  >
                    <Plus className="size-4" />
                    Add
                  </Button>
                </article>
              ))
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-teal/20 bg-navy/70 p-5 shadow-[0_20px_50px_rgb(0_0_0_/_25%)] backdrop-blur-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-heading flex items-center gap-2 text-lg font-semibold text-cream">
                <ShoppingBag className="size-5 text-teal" />
                Your bag
                {count > 0 ? (
                  <span className="text-sm font-normal text-cream/55">
                    ({count})
                  </span>
                ) : null}
              </h3>
              {lines.length > 0 ? (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-cream/50 transition-colors hover:text-amber"
                >
                  Clear
                </button>
              ) : null}
            </div>

            {lines.length === 0 ? (
              <p className="mt-6 text-sm text-cream/55">
                Empty for now. Add pastries, bread, or a tech accessory to get
                started.
              </p>
            ) : (
              <ul className="mt-5 space-y-4">
                {lines.map((line) => (
                  <li
                    key={line.item.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-cream">
                        {line.item.name}
                      </p>
                      <p className="text-xs text-cream/50">
                        {formatPrice(line.item.price)} each
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease ${line.item.name}`}
                        onClick={() => updateQty(line.item.id, -1)}
                        className="rounded-md border border-teal/25 p-1 text-cream/80 hover:text-teal"
                      >
                        {line.qty === 1 ? (
                          <Trash2 className="size-3.5" />
                        ) : (
                          <Minus className="size-3.5" />
                        )}
                      </button>
                      <span className="w-5 text-center text-sm">{line.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${line.item.name}`}
                        onClick={() => updateQty(line.item.id, 1)}
                        className="rounded-md border border-teal/25 p-1 text-cream/80 hover:text-teal"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <Separator className="my-5 bg-teal/15" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-cream/60">Total</span>
              <span className="font-heading text-lg text-amber">
                {formatPrice(total)}
              </span>
            </div>

            <form onSubmit={placeOrder} className="mt-5 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="order-name">Name</Label>
                <Input
                  id="order-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Who’s collecting?"
                  className="border-teal/20 bg-navy-deep/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-phone">Phone</Label>
                <Input
                  id="order-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07…"
                  inputMode="tel"
                  className="border-teal/20 bg-navy-deep/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-slot">Collection slot</Label>
                <select
                  id="order-slot"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-teal/20 bg-navy-deep/60 px-3 text-sm text-cream"
                >
                  <option value="">Choose a time</option>
                  <option value="08:00–08:30">08:00–08:30</option>
                  <option value="10:00–10:30">10:00–10:30</option>
                  <option value="12:00–12:30">12:00–12:30</option>
                  <option value="15:00–15:30">15:00–15:30</option>
                  <option value="16:30–17:00">16:30–17:00</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal text-navy-deep hover:bg-teal/90"
              >
                {status === "loading" ? "Sending to kitchen…" : "Place collection order"}
              </Button>

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
              <p className="text-xs text-cream/45">{site.collectionNote}</p>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}
