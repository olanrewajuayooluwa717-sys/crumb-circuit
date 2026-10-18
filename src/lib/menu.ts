export type MenuCategory = "bread" | "pastries" | "cakes" | "cookies" | "tech";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: string[];
};

export const menuCategories: { id: MenuCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bread", label: "Bread" },
  { id: "pastries", label: "Pastries" },
  { id: "cakes", label: "Cakes" },
  { id: "cookies", label: "Cookies" },
  { id: "tech", label: "Tech accessories" },
];

export const menuItems: MenuItem[] = [
  {
    id: "sourdough-loaf",
    name: "Circuit Sourdough",
    description: "Long-fermented loaf with a crackling crust — baked fresh each morning.",
    price: 3.8,
    category: "bread",
    tags: ["bestseller"],
  },
  {
    id: "seeded-batch",
    name: "Seeded Batch Roll",
    description: "Soft roll packed with sunflower and pumpkin seeds. Ideal for lunch on the move.",
    price: 1.4,
    category: "bread",
  },
  {
    id: "cyber-croissant",
    name: "Cyber Croissant",
    description: "Butter-laminated classic with a glossy amber finish. Our signature bake.",
    price: 2.9,
    category: "pastries",
    tags: ["signature"],
  },
  {
    id: "pain-au-choc",
    name: "Signal Chocolate Twist",
    description: "Flaky pastry wrapped around dark chocolate batons.",
    price: 3.1,
    category: "pastries",
  },
  {
    id: "cinnamon-scroll",
    name: "Amber Cinnamon Scroll",
    description: "Warm spice swirl finished with a soft cream glaze.",
    price: 3.4,
    category: "pastries",
  },
  {
    id: "lemon-drizzle",
    name: "Lemon Node Slice",
    description: "Zesty sponge with sharp lemon drizzle — by the slice.",
    price: 3.2,
    category: "cakes",
  },
  {
    id: "brownie",
    name: "Dark Matter Brownie",
    description: "Dense cocoa brownie with a molten centre and sea-salt flake.",
    price: 2.8,
    category: "cakes",
  },
  {
    id: "cookie-chip",
    name: "Chip Cookie",
    description: "Chewy edge, soft middle, generous milk-chocolate chips.",
    price: 1.9,
    category: "cookies",
  },
  {
    id: "cookie-oat",
    name: "Oat Trace Cookie",
    description: "Toasted oat cookie with a hint of honey — great with coffee.",
    price: 1.9,
    category: "cookies",
  },
  {
    id: "usb-cable",
    name: "USB-C Charge Lead",
    description: "1m braided cable for phones and laptops. Selected tech accessory.",
    price: 8.5,
    category: "tech",
  },
  {
    id: "mouse",
    name: "Compact Wireless Mouse",
    description: "Quiet click mouse for study desks and small-office setups.",
    price: 14.0,
    category: "tech",
  },
  {
    id: "webcam-cover",
    name: "Webcam Privacy Slider",
    description: "Simple physical cover for laptop cameras — pack of two.",
    price: 4.5,
    category: "tech",
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}
