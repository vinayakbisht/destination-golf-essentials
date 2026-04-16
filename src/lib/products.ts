import p1 from "@/assets/p1-bag.jpg";
import p2 from "@/assets/p2-shoes.jpg";
import p3 from "@/assets/p3-rangefinder.jpg";
import p4 from "@/assets/p4-polo.jpg";
import p5 from "@/assets/p5-balls.jpg";
import p6 from "@/assets/p6-gloves.jpg";
import p7 from "@/assets/p7-shoebag.jpg";
import p8 from "@/assets/p8-sunglasses.jpg";
import p9 from "@/assets/p9-cap.jpg";
import p10 from "@/assets/p10-kit.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  short: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Travel Golf Bag",
    price: 32999,
    image: p1,
    short: "Crafted for the discerning traveler.",
    description:
      "A meticulously crafted travel golf bag built from full-grain leather and reinforced ballistic nylon. Designed to withstand the rigors of global travel while keeping your clubs in pristine condition.",
    features: ["Full-grain leather body", "Reinforced shell", "TSA-approved lock", "Smooth-glide wheels"],
  },
  {
    id: 2,
    name: "Luxury Golf Shoes",
    price: 14999,
    image: p2,
    short: "Italian craftsmanship meets the fairway.",
    description:
      "Hand-stitched in Italy from premium calfskin leather. Features a hybrid spike system for maximum grip on the green and all-day comfort on the course.",
    features: ["Italian calfskin", "Hybrid spike system", "Memory foam insole", "Waterproof finish"],
  },
  {
    id: 3,
    name: "Pro Rangefinder",
    price: 28500,
    image: p3,
    short: "Tour-grade precision in your palm.",
    description:
      "A tournament-legal rangefinder with slope compensation, magnetic mount, and 1-yard accuracy up to 1,000 yards. Engineered for serious players.",
    features: ["±1 yard accuracy", "Slope mode", "6x magnification", "Magnetic mount"],
  },
  {
    id: 4,
    name: "Designer Golf Polo",
    price: 5999,
    image: p4,
    short: "Refined silhouette, performance fabric.",
    description:
      "A tailored polo woven from moisture-wicking Pima cotton blend. Subtle tonal accents and a clean silhouette make it perfect on and off the course.",
    features: ["Pima cotton blend", "Moisture-wicking", "UPF 50+", "Tailored fit"],
  },
  {
    id: 5,
    name: "Tour Edition Golf Balls Set",
    price: 4499,
    image: p5,
    short: "Engineered for tour-level performance.",
    description:
      "A dozen tour-grade four-piece urethane balls delivering exceptional spin control, soft feel, and unmatched distance.",
    features: ["4-piece construction", "Urethane cover", "338 dimples", "Box of 12"],
  },
  {
    id: 6,
    name: "Premium Leather Golf Gloves",
    price: 3299,
    image: p6,
    short: "Cabretta leather. Tour-grade grip.",
    description:
      "Soft, supple AAA Cabretta leather gloves that mold to your hand for the perfect feel and consistent grip in all conditions.",
    features: ["AAA Cabretta leather", "Reinforced palm", "Breathable mesh", "Pack of 2"],
  },
  {
    id: 7,
    name: "Travel Shoe Bag",
    price: 3999,
    image: p7,
    short: "Carry your spikes in style.",
    description:
      "Heritage canvas with full-grain leather trim and brass hardware. Ventilated lining keeps shoes fresh on the move.",
    features: ["Heritage canvas", "Leather trim", "Brass YKK zip", "Ventilated lining"],
  },
  {
    id: 8,
    name: "Polarized Sports Sunglasses",
    price: 6499,
    image: p8,
    short: "Sharper vision on every lie.",
    description:
      "Polarized lenses with HD contrast technology cut glare and enhance fairway definition. Lightweight TR90 frame stays put through every swing.",
    features: ["Polarized HD lenses", "TR90 frame", "100% UV protection", "Anti-slip nose pads"],
  },
  {
    id: 9,
    name: "Elite Golf Cap",
    price: 2999,
    image: p9,
    short: "Signature style for the course.",
    description:
      "Six-panel structured cap in performance twill with embroidered gold detailing and a moisture-wicking sweatband.",
    features: ["Performance twill", "Embroidered emblem", "Moisture-wicking band", "Adjustable strap"],
  },
  {
    id: 10,
    name: "Compact Travel Organizer Kit",
    price: 4999,
    image: p10,
    short: "Every essential, beautifully arranged.",
    description:
      "A leather-bound travel organizer with dedicated compartments for documents, devices, and accessories — refined for the modern golfer.",
    features: ["Vegetable-tanned leather", "RFID-blocking pocket", "Multiple compartments", "Detachable strap"],
  },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
