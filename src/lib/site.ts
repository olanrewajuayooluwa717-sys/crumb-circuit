export const site = {
  name: "Crumb Circuit",
  shortName: "CrumbCircuit",
  taglinePrimary: "Fresh ideas. Smarter every day.",
  taglineSecondary: "Technology meets the art of baking.",
  seedBudget: "£20,000",
  pitchDate: "Wednesday 21 October 2026",
  email: "hello@crumbcircuit.local",
  phone: "01234 567 890",
  address: {
    line1: "14 Market Lane",
    line2: "Town Centre",
    city: "Milton Keynes",
    postcode: "MK9 1AA",
  },
  hours: [
    { day: "Mon–Fri", time: "07:30–17:00" },
    { day: "Saturday", time: "08:30–16:00" },
    { day: "Sunday", time: "Closed" },
  ],
  collectionNote:
    "Orders are prepared for local collection at our takeaway counter. No delivery — come pick up fresh.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu & order" },
  { href: "/tech", label: "Tech services" },
  { href: "/cakes", label: "Celebration cakes" },
  { href: "/pitch", label: "Business" },
  { href: "/contact", label: "Contact" },
] as const;

export const techServices = [
  {
    title: "Website creation",
    description:
      "Clean, mobile-ready sites for clubs, tutors, and local shops — built so customers can find you fast.",
  },
  {
    title: "Digital ordering systems",
    description:
      "Simple online menus and collection workflows, the same approach we use for Crumb Circuit itself.",
  },
  {
    title: "Basic computer support",
    description:
      "Setup help, backups, and everyday troubleshooting for students and small teams who need a clear next step.",
  },
];

export const businessPitch = {
  products: [
    "Everyday bakery: bread, cakes, pastries, and cookies",
    "Celebration cakes made to order",
    "Selected tech accessories at the counter",
    "Tech services: websites, ordering systems, light support",
  ],
  customers: [
    "Students and young adults between lectures",
    "Workers and commuters needing a quick snack",
    "Families and local residents stocking up on bakes",
    "Small businesses wanting approachable tech help",
  ],
  revenue: [
    "Bakery sales in-store and via online order for collection",
    "Custom celebration cake commissions",
    "Tech accessory add-ons",
    "Charged tech service packages",
  ],
  model:
    "We chose a hybrid product-and-service model: high-frequency bakery cashflow plus higher-margin tech projects. Online ordering for local collection grows reach without delivery vans, while tech work uses the same digital skills that power the shop.",
  secondStream:
    "Bakery is the front door. Tech services and accessories are the second revenue stream — steadier project income that does not depend on lunchtime footfall alone.",
};
