/* ==========================================================================
   AABROOH — Product catalog
   Replace "tag" text and add a real "image" URL per product once you have
   your own product photography. Until then, elegant gold placeholders
   are shown automatically (see css .product-media / .gallery-main).
   ========================================================================== */

const PRODUCTS = [
  {
    id: "aabrooh-001",
    name: "Ivory Zari Border Dupatta",
    category: "Everyday Collection",
    fabric: "Organza",
    color: "Ivory",
    occasion: "Everyday",
    price: 249,
    mrp: 499,
    rating: 4.8,
    reviews: 32,
    badge: "Best Seller",
    tag: "Ivory Zari Border",
    description: "A whisper-light organza dupatta finished with a hand-worked gold zari border. Designed for everyday elegance — soft against the skin, structured enough to hold a graceful drape from morning through evening.",
    care: "Dry clean only. Store folded in muslin cloth. Keep away from direct sunlight and perfume contact.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-002",
    name: "Matte Gold Embroidered Dupatta",
    category: "Premium Collection",
    fabric: "Silk",
    color: "Gold",
    occasion: "Festive",
    price: 249,
    mrp: 499,
    rating: 4.9,
    reviews: 51,
    badge: "New Arrival",
    tag: "Matte Gold Embroidered",
    description: "Pure silk dupatta with fine matte-gold thread embroidery running the full length of the pallu. A quiet statement piece for festive gatherings and celebrations.",
    care: "Dry clean only. Iron on low heat with a protective cloth.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-003",
    name: "Black Chiffon Sequin Dupatta",
    category: "Party Wear",
    fabric: "Chiffon",
    color: "Black",
    occasion: "Party",
    price: 249,
    mrp: 499,
    rating: 4.7,
    reviews: 24,
    badge: "",
    tag: "Black Chiffon Sequin",
    description: "Flowing black chiffon scattered with hand-sewn sequins that catch the light with every movement. Built for evenings that call for a little drama.",
    care: "Hand wash cold or dry clean. Do not wring.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-004",
    name: "Bridal Red Banarasi Dupatta",
    category: "Wedding Collection",
    fabric: "Banarasi Silk",
    color: "Red",
    occasion: "Wedding",
    price: 249,
    mrp: 499,
    rating: 5.0,
    reviews: 18,
    badge: "Limited Edition",
    tag: "Bridal Red Banarasi",
    description: "A heritage Banarasi weave in deep bridal red, woven with intricate gold motifs. Crafted for the moments that call for heirloom-level detail.",
    care: "Dry clean only. Store flat or rolled to preserve the weave.",
    shipping: "Ships within 4-5 business days (made-to-order weave). Pan India delivery in 7-10 business days.",
    returns: "Final sale on bridal pieces — exchange only for manufacturing defects."
  },
  {
    id: "aabrooh-005",
    name: "Beige Floral Print Dupatta",
    category: "Everyday Collection",
    fabric: "Cotton Silk",
    color: "Beige",
    occasion: "Everyday",
    price: 249,
    mrp: 499,
    rating: 4.6,
    reviews: 40,
    badge: "",
    tag: "Beige Floral Print",
    description: "A soft cotton-silk blend in a delicate floral print. Easy to style, easy to wear, and made for daily grace without compromise.",
    care: "Hand wash cold, dry in shade.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-006",
    name: "Emerald Green Mirror Work Dupatta",
    category: "Festive Collection",
    fabric: "Georgette",
    color: "Green",
    occasion: "Festive",
    price: 249,
    mrp: 499,
    rating: 4.8,
    reviews: 29,
    badge: "Best Seller",
    tag: "Emerald Mirror Work",
    description: "Rich emerald georgette detailed with traditional mirror work along the border. A festive staple that pairs beautifully with both traditional and contemporary silhouettes.",
    care: "Dry clean recommended.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-007",
    name: "Blush Pink Net Dupatta",
    category: "Party Wear",
    fabric: "Net",
    color: "Pink",
    occasion: "Party",
    price: 249,
    mrp: 499,
    rating: 4.7,
    reviews: 21,
    badge: "New Arrival",
    tag: "Blush Pink Net",
    description: "Airy net dupatta in a soft blush shade with a delicate scalloped edge. Lightweight enough for long celebrations, elegant enough to be remembered.",
    care: "Hand wash cold or dry clean.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  },
  {
    id: "aabrooh-008",
    name: "Charcoal Grey Minimal Dupatta",
    category: "Everyday Collection",
    fabric: "Chiffon",
    color: "Grey",
    occasion: "Everyday",
    price: 249,
    mrp: 499,
    rating: 4.5,
    reviews: 16,
    badge: "",
    tag: "Charcoal Minimal",
    description: "Understated charcoal grey with a fine satin border — for the days that call for quiet, confident style.",
    care: "Hand wash cold.",
    shipping: "Ships within 2-3 business days. Pan India delivery in 4-7 business days.",
    returns: "7-day easy returns on unused pieces with original tags."
  }
];

const WHATSAPP_NUMBER = "917309329960";

function whatsappLink(product) {
  const msg = `Hi AABROOH, I'd like to order:%0A*${product.name}*%0APrice: ₹${product.price}%0AProduct ID: ${product.id}%0A%0APlease share availability and delivery details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
