// src/data/products.js
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";

const products = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    category: "Sofas",
    price: "$899",
    description: "Luxury 3-seater sofa with premium velvet upholstery and solid oak legs. Features deep seating and tapered metal legs for a contemporary look.",
    image: product1,
    stock: 12,
    rating: 4.8,
    colors: ["#303030", "#654321", "#228B22"],
    dimensions: "86\"W x 38\"D x 32\"H",
    materials: "Velvet, Solid Wood, Metal",
    weight: "120 lbs"
  },
  {
    id: 2,
    name: "Industrial Coffee Table",
    category: "Tables",
    price: "$349",
    description: "Handcrafted coffee table with reclaimed wood top and black iron frame. Perfect for loft-style living spaces.",
    image: product2,
    stock: 8,
    rating: 4.6,
    colors: ["#000000", "#654321"],
    dimensions: "48\"W x 24\"D x 18\"H",
    materials: "Reclaimed Wood, Iron",
    weight: "45 lbs"
  },
  {
    id: 3,
    name: "Scandinavian Dining Chair",
    category: "Chairs",
    price: "$179",
    description: "Minimalist dining chair with curved backrest and beechwood frame. Upholstered in premium wool fabric.",
    image: product3,
    stock: 24,
    rating: 4.7,
    colors: ["#FFFFFF", "#000000", "#B88E2F"],
    dimensions: "19\"W x 22\"D x 32\"H",
    materials: "Beechwood, Wool",
    weight: "15 lbs"
  },
  {
    id: 4,
    name: "Mid-Century Credenza",
    category: "Storage",
    price: "$1,299",
    description: "Elegant media console featuring walnut veneer and brass hardware. Six spacious drawers with soft-close mechanisms.",
    image: product4,
    stock: 5,
    rating: 4.9,
    colors: ["#654321", "#000000"],
    dimensions: "72\"W x 20\"D x 30\"H",
    materials: "Walnut, Brass, Steel",
    weight: "95 lbs"
  },
  {
    id: 5,
    name: "Adjustable Standing Desk",
    category: "Office",
    price: "$599",
    description: "Electric height-adjustable desk with spacious 55\" x 28\" work surface. Three memory presets and quiet dual motors.",
    image: product5,
    stock: 15,
    rating: 4.5,
    colors: ["#FFFFFF", "#000000"],
    dimensions: "55\"W x 28\"D x 29-48\"H",
    materials: "MDF, Steel",
    weight: "80 lbs"
  },
  {
    id: 6,
    name: "Boho Rattan Armchair",
    category: "Chairs",
    price: "$279",
    description: "Handwoven rattan chair with thick cushion and arched backrest. Perfect for reading nooks or bedroom seating.",
    image: product6,
    stock: 10,
    rating: 4.4,
    colors: ["#B88E2F", "#FFFFFF"],
    dimensions: "26\"W x 28\"D x 31\"H",
    materials: "Rattan, Cotton",
    weight: "22 lbs"
  },
  {
    id: 7,
    name: "Marble Side Table",
    category: "Tables",
    price: "$229",
    description: "Round side table with Carrara marble top and gold metal base. Water-resistant surface perfect for drinks.",
    image: product7,
    stock: 18,
    rating: 4.3,
    colors: ["#FFFFFF", "#FFD700"],
    dimensions: "18\"W x 18\"D x 22\"H",
    materials: "Marble, Metal",
    weight: "28 lbs"
  },
  {
    id: 8,
    name: "Leather Recliner",
    category: "Armchairs",
    price: "$1,199",
    description: "Premium top-grain leather recliner with power headrest and lumbar support. Includes USB charging port.",
    image: product8,
    stock: 7,
    rating: 4.9,
    colors: ["#654321", "#000000"],
    dimensions: "35\"W x 40\"D x 42\"H",
    materials: "Leather, Steel, Foam",
    weight: "110 lbs"
  },
  {
    id: 9,
    name: "Bookshelf Room Divider",
    category: "Shelving",
    price: "$499",
    description: "Modern 5-tier open shelving unit that doubles as a room divider. Asymmetric design creates visual interest.",
    image: product9,
    stock: 11,
    rating: 4.2,
    colors: ["#000000", "#FFFFFF"],
    dimensions: "71\"W x 14\"D x 71\"H",
    materials: "MDF, Metal",
    weight: "65 lbs"
  },
  {
    id: 10,
    name: "Convertible Sleeper Sofa",
    category: "Sofas",
    price: "$1,599",
    description: "Sectional sofa that converts to queen bed with storage chaise. Features high-density foam and linen upholstery.",
    image: product10,
    stock: 4,
    rating: 4.7,
    colors: ["#808080", "#000000"],
    dimensions: "120\"W x 60\"D x 34\"H",
    materials: "Linen, Wood, Foam",
    weight: "180 lbs"
  },
  {
    id: 11,
    name: "Glass Display Cabinet",
    category: "Storage",
    price: "$899",
    description: "Contemporary cabinet with tempered glass doors and LED lighting. Perfect for displaying collectibles or fine china.",
    image: product11,
    stock: 6,
    rating: 4.8,
    colors: ["#000000", "#FFFFFF"],
    dimensions: "48\"W x 16\"D x 72\"H",
    materials: "Glass, Metal, Wood",
    weight: "85 lbs"
  },
  {
    id: 12,
    name: "Acacia Wood Bench",
    category: "Benches",
    price: "$249",
    description: "Solid acacia wood bench with live edge detail. Perfect for entryways or foot-of-bed placement.",
    image: product12,
    stock: 14,
    rating: 4.6,
    colors: ["#654321"],
    dimensions: "48\"W x 14\"D x 18\"H",
    materials: "Acacia Wood",
    weight: "35 lbs"
  },
  {
    id: 13,
    name: "Swivel Bar Stool",
    category: "Stools",
    price: "$199",
    description: "Industrial-style stool with 360° swivel and adjustable height. Features distressed leather seat and iron base.",
    image: product13,
    stock: 20,
    rating: 4.4,
    colors: ["#654321", "#000000"],
    dimensions: "18\"W x 18\"D x 24-32\"H",
    materials: "Leather, Iron",
    weight: "25 lbs"
  },
  {
    id: 14,
    name: "Floating Wall Shelf",
    category: "Shelving",
    price: "$129",
    description: "Set of 3 minimalist floating shelves with hidden brackets. Each shelf holds up to 25 lbs.",
    image: product14,
    stock: 25,
    rating: 4.3,
    colors: ["#000000", "#FFFFFF", "#B88E2F"],
    dimensions: "36\"W x 8\"D x 1.5\"H (each)",
    materials: "Solid Wood, Metal",
    weight: "12 lbs (set)"
  },
  {
    id: 15,
    name: "Velvet Ottoman",
    category: "Footstools",
    price: "$179",
    description: "Round storage ottoman with button-tufted velvet top. Lifts to reveal spacious interior compartment.",
    image: product15,
    stock: 16,
    rating: 4.5,
    colors: ["#228B22", "#800080", "#000000"],
    dimensions: "24\"W x 24\"D x 18\"H",
    materials: "Velvet, Wood, Foam",
    weight: "20 lbs"
  },
  {
    id: 16,
    name: "Geometric Floor Lamp",
    category: "Lighting",
    price: "$279",
    description: "Modern tripod floor lamp with dimmable LED bulb. Adjustable arms direct light where needed.",
    image: product16,
    stock: 9,
    rating: 4.7,
    colors: ["#000000", "#FFFFFF"],
    dimensions: "16\"W x 16\"D x 65\"H",
    materials: "Metal, Fabric",
    weight: "18 lbs"
  }
];

export default products;