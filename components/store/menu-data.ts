export type MenuItem = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  badge: string;
  image: string;
  alt: string;
  accent: string;
};

export const menuItems: MenuItem[] = [
  {
    slug: "farmhouse-gourmet",
    name: "Farmhouse Gourmet",
    category: "Signature pies",
    price: "₹449",
    description: "Roasted peppers, sautéed mushrooms, olives, basil oil, and a playful finish of oregano.",
    badge: "Garden favorite",
    image: "/images/home/farmhouse-pizza.jpg",
    alt: "Wood-fired farm pizza with roasted vegetables",
    accent: "bg-[#eff5ec] text-[#567653]",
  },
  {
    slug: "smoked-margherita",
    name: "Smoked Margherita",
    category: "Signature pies",
    price: "₹349",
    description: "Slow-roasted tomato, creamy mozzarella, basil, and a whisper of smoked sea salt.",
    badge: "Bestseller",
    image: "/images/home/smoked-margherita.jpg",
    alt: "Fresh smoked margherita pizza on a stone oven tray",
    accent: "bg-[#f8eedc] text-[#9d6d1f]",
  },
  {
    slug: "garlic-burrata",
    name: "Garlic & Burrata",
    category: "Chef specials",
    price: "₹499",
    description: "Roasted garlic, burrata cream, lemon zest, basil, and a glossy drizzle of herb oil.",
    badge: "Chef pick",
    image: "/images/home/garlic-burrata.jpg",
    alt: "Garlic and burrata pizza served hot from the fire oven",
    accent: "bg-[#fbefea] text-[#c83226]",
  },
  {
    slug: "sunset-spice",
    name: "Sunset Spice",
    category: "Chef specials",
    price: "₹529",
    description: "Calabrian chili, charred onion, mozzarella, and grilled peppers with a sweet-savoury lift.",
    badge: "Hot & bold",
    image: "/images/home/hero-pizza.jpg",
    alt: "Spicy pizza with vibrant toppings and melted cheese",
    accent: "bg-[#fde9d5] text-[#a14a24]",
  },
  {
    slug: "garden-veg",
    name: "Garden Veg",
    category: "Vegetarian",
    price: "₹399",
    description: "Courgette ribbons, mixed greens, caramelized onion, ricotta, and fresh herbs.",
    badge: "Veggie glow",
    image: "/images/home/farmhouse-pizza.jpg",
    alt: "Vegetarian pizza with green vegetables and creamy ricotta",
    accent: "bg-[#edf8ee] text-[#3a6a3d]",
  },
  {
    slug: "truffle-mushroom",
    name: "Truffle Mushroom",
    category: "Chef specials",
    price: "₹559",
    description: "Wild mushrooms, thyme, mozzarella, and an earthy truffle finish made for slow evenings.",
    badge: "Limited run",
    image: "/images/home/garlic-burrata.jpg",
    alt: "Truffle mushroom pizza with earthy toppings and soft cheese",
    accent: "bg-[#f1ebf9] text-[#5b3a7a]",
  },
];

export const sideItems = [
  {
    name: "Crispy fries",
    description: "Sea salt & smoked paprika, served hot.",
    price: "₹169",
    badge: "Snack attack",
  },
  {
    name: "Garlic knots",
    description: "Soft knots brushed with basil butter.",
    price: "₹189",
    badge: "Crowd favorite",
  },
  {
    name: "Garden salad",
    description: "Baby greens, fennel, and lemon vinaigrette.",
    price: "₹219",
    badge: "Fresh pick",
  },
];

export const drinks = [
  { name: "Sparkling lime soda", price: "₹119", badge: "Citrus" },
  { name: "House iced tea", price: "₹99", badge: "Cold brew" },
  { name: "Cucumber mint cooler", price: "₹129", badge: "Fresh" },
];
