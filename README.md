# Crumb Circuit

Marketing and mock ordering site for **Crumb Circuit** — a bakery + tech hybrid for a school Enterprise Challenge (£20k seed, pitch Wed 21/10/26).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Local mock state for orders and enquiry forms (no auth, payments, or database)

## Run locally

```bash
npm install
npm run dev -- --port 4731
```

Open [http://127.0.0.1:4731](http://127.0.0.1:4731).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## What’s on the site

1. Brand-first hero with cyber croissant and logo
2. Bakery menu + mock collection order bag
3. Tech services list + enquiry form
4. Celebration cake special-order form
5. Business model pitch (products, customers, revenue, second stream)
6. Contact / takeaway location

Brand images live in `public/brand/`.
