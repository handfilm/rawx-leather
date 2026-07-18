/* ============================================================
   RAWx LAB — DATA LAYER
   সব ক্যাটাগরি ও প্রোডাক্ট এই ফাইলে সংজ্ঞায়িত।
   নতুন প্রোডাক্ট/ক্যাটাগরি যোগ করতে চাইলে এই ফাইলটাই এডিট করুন —
   HTML বা CSS ছোঁয়ার দরকার নেই।
   ============================================================ */

const RAWX_CATEGORIES = [
  { id: "bifold",         code: "01", name: "Bifold",          tagline: "Slim stack / everyday carry",
    image: "assets/categories/bifold.jpg", swatch: ["#161513","#3a372f"] },
  { id: "trifold",        code: "02", name: "Trifold",         tagline: "Three-panel structure / higher capacity",
    image: "assets/categories/trifold.jpg", swatch: ["#3c3a24","#6b6a3f"] },
  { id: "longwallet",     code: "03", name: "Long Wallet",     tagline: "Full-length note & card run",
    image: "assets/categories/longwallet.jpg", swatch: ["#4a1414","#7a2e24"] },
  { id: "belt",           code: "04", name: "Belt",            tagline: "Single-strap / solid hardware",
    image: "assets/categories/belt.jpg", swatch: ["#7a3f18","#b5652b"] },
  { id: "bag",            code: "05", name: "Bag",             tagline: "Structured carry",
    image: "assets/categories/bag.jpg", swatch: ["#3b2415","#6b4526"],
    children: [
      { id: "laptopbag", name: "Laptop Bag" },
      { id: "backpack",  name: "Backpack" }
    ]
  },
  { id: "cardholder",     code: "06", name: "Card Holder",     tagline: "Minimal card carry",
    image: "assets/categories/cardholder.jpg", swatch: ["#3b2415","#6b4526"] },
  { id: "passportholder", code: "07", name: "Passport Holder", tagline: "Travel document sleeve",
    image: "assets/categories/passportholder.jpg", swatch: ["#161513","#3a372f"] },
  { id: "accessories",    code: "08", name: "Accessories",     tagline: "Small leather goods & desk objects",
    image: "assets/categories/accessories.jpg", swatch: ["#161513","#3a372f"] },
  { id: "ladiesbag",      code: "09", name: "Ladies Bag",      tagline: "Structured womenswear carry",
    image: "assets/categories/ladiesbag.jpg", swatch: ["#4a1414","#7a2e24"],
    children: [
      { id: "ladiesbackpack", name: "Ladies Backpack" },
      { id: "totebag",        name: "Tote Bag" },
      { id: "purse",          name: "Purse" }
    ]
  },
  { id: "trekon",         code: "10", name: "Trekon",          tagline: "Rugged utility line",
    image: "assets/categories/trekon.jpg", swatch: ["#33361f","#565c33"],
    children: [
      { id: "trekonbackpack",  name: "Trekon Backpack" },
      { id: "trekoncrossbody", name: "Trekon Crossbody" }
    ]
  }
];

/* Hero slider — 6 slides. Replace `image` with your own photo at the same
   path (see assets/hero/) to override the generated placeholder. */
const RAWX_HERO_SLIDES = [
  { image: "assets/hero/slide-1.jpg", swatch: ["#3a372f","#161513"],
    tag: "Est. Dhaka // Full-Grain Leather Lab",
    title: "RAW<em>x</em><br>HIDE<span class='dot'>.</span>REGISTRY",
    sub: "প্রতিটা প্রোডাক্ট এখানে একটা lab specimen-এর মতো ক্যাটালগড — batch code, উপকরণ, আর origin সহ।",
    ctaText: "Browse the Registry", ctaHref: "shop.html" },
  { image: "assets/hero/slide-2.jpg", swatch: ["#6b4526","#3b2415"],
    tag: "Pillar 01–02 // Everyday Carry",
    title: "BIFOLD<br><em>&</em> TRIFOLD",
    sub: "স্লিম স্ট্যাক থেকে হায়ার-ক্যাপাসিটি ফোল্ড — ফুল-গ্রেইন কাউহাইডে হাতে তৈরি।",
    ctaText: "Shop Wallets", ctaHref: "shop.html?cat=bifold" },
  { image: "assets/hero/slide-3.jpg", swatch: ["#7a2e24","#4a1414"],
    tag: "Pillar 03 & 06 // Slim Carry",
    title: "LONG WALLET<br><em>&</em> CARD HOLDER",
    sub: "ফুল-লেংথ নোট রান থেকে মিনিমাল কার্ড ক্যারি — যেটা যেভাবে ক্যারি করেন সেভাবেই।",
    ctaText: "Shop Slim Carry", ctaHref: "shop.html?cat=longwallet" },
  { image: "assets/hero/slide-4.jpg", swatch: ["#6b4526","#3b2415"],
    tag: "Pillar 05 // Structured Carry",
    title: "BAG<br><em>&</em> BACKPACK",
    sub: "ল্যাপটপ অর্গানাইজার থেকে ডেইলি ব্যাকপ্যাক — স্ট্রাকচারড, দুর‍্যাবল।",
    ctaText: "Shop Bags", ctaHref: "shop.html?cat=bag" },
  { image: "assets/hero/slide-5.jpg", swatch: ["#565c33","#7a2e24"],
    tag: "Pillar 09 // Ladies Line",
    title: "LADIES<br><em>BAG</em> LINE",
    sub: "ব্যাকপ্যাক, টোট আর পার্স — উইমেনসওয়্যার কারির জন্য স্ট্রাকচারড ডিজাইন।",
    ctaText: "Shop Ladies Line", ctaHref: "shop.html?cat=ladiesbag" },
  { image: "assets/hero/slide-6.jpg", swatch: ["#565c33","#33361f"],
    tag: "Pillar 10 // Rugged Utility",
    title: "TREKON<br><em>UTILITY</em>",
    sub: "ওয়্যাক্সড ফুল-গ্রেইন — ট্রেইল-রেডি ব্যাকপ্যাক আর ক্রসবডি।",
    ctaText: "Shop Trekon", ctaHref: "shop.html?cat=trekon" }
];

/* colorway → swatch pair used to paint the CSS-only placeholder art on hide-tags */
const RAWX_COLORWAYS = {
  "Black":       ["#161513", "#3a372f"],
  "Chocolate":   ["#3b2415", "#6b4526"],
  "Cognac":      ["#7a3f18", "#b5652b"],
  "Olive":       ["#3c3a24", "#6b6a3f"],
  "Red Wine":    ["#4a1414", "#7a2e24"],
  "Army Green":  ["#33361f", "#565c33"],
  "Tan":         ["#8a5a30", "#c1793d"]
};

let RAWX_SEQ = 1;
function rxItem(category, name, price, material, colorway, origin) {
  const cat = RAWX_CATEGORIES.find(c => c.id === category) || RAWX_CATEGORIES.find(c => (c.children||[]).some(s=>s.id===category));
  const code = cat ? cat.code : "00";
  const serial = String(RAWX_SEQ++).padStart(3, "0");
  const id = `${category}-${serial}`;
  return {
    id,
    category, name, price, material, colorway, origin,
    batch: `RX-${code}-${serial}`,
    swatch: RAWX_COLORWAYS[colorway] || ["#161513", "#3a372f"],
    /* Real product photo goes here — filename must match the SKU id exactly.
       Missing file? rawxImgFail() quietly falls back to the CSS swatch,
       no broken-image icon. */
    image: `assets/products/${id}.jpg`
  };
}

const RAWX_PRODUCTS = [
  rxItem("bifold", "Kent Bifold Wallet", 779, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("bifold", "Reed Classic Bifold", 729, "Vegetable-tanned hide", "Chocolate", "Dhaka, BD"),
  rxItem("bifold", "Hazel Card-Slider Bifold", 849, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),
  rxItem("bifold", "Kevin Bifold Wallet", 790, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),

  rxItem("trifold", "Edd Trifold Wallet", 1079, "Oil pull-up leather", "Olive", "Dhaka, BD"),
  rxItem("trifold", "Tedd Magnet Trifold v2", 1049, "Full-grain cowhide", "Olive", "Dhaka, BD"),
  rxItem("trifold", "Holden Trifold Wallet", 1190, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("trifold", "Reo Trifold Wallet", 1250, "Oil pull-up leather", "Red Wine", "Dhaka, BD"),

  rxItem("longwallet", "Kane Long Wallet v2", 1150, "Full-grain cowhide", "Red Wine", "Dhaka, BD"),
  rxItem("longwallet", "Jason Long Wallet", 1079, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("longwallet", "Dane Semi-Long Wallet", 995, "Vegetable-tanned hide", "Chocolate", "Dhaka, BD"),
  rxItem("longwallet", "Walt Long Wallet — Reborn", 1379, "Oil pull-up leather", "Black", "Dhaka, BD"),

  rxItem("belt", "Rowan Solid-Brass Belt", 990, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("belt", "Finn Reversible Belt", 1090, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),
  rxItem("belt", "Marsh Buckle Belt", 950, "Vegetable-tanned hide", "Tan", "Dhaka, BD"),

  rxItem("laptopbag", "Ryan Laptop Organizer", 3490, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("laptopbag", "Victor Laptop Organizer", 3499, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),
  rxItem("backpack", "Walker Backpack v2", 3999, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),
  rxItem("backpack", "Bruce Backpack", 3480, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("bag", "Logan Office Bag", 3490, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),

  rxItem("cardholder", "Mino Card Holder", 399, "Vegetable-tanned hide", "Chocolate", "Dhaka, BD"),
  rxItem("cardholder", "Jude Cardholder", 599, "Full-grain cowhide", "Black", "Dhaka, BD"),

  rxItem("passportholder", "Arlo Passport Sleeve", 690, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("passportholder", "Nash Passport Sleeve", 690, "Vegetable-tanned hide", "Tan", "Dhaka, BD"),

  rxItem("accessories", "Demi Sunglass Cover", 720, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),
  rxItem("accessories", "Hong Pouch Bag", 1399, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("accessories", "Urbaland Coaster 6pc Set", 579, "Vegetable-tanned hide", "Chocolate", "Dhaka, BD"),
  rxItem("accessories", "Toby Pouch Bag", 1479, "Full-grain cowhide", "Black", "Dhaka, BD"),

  rxItem("ladiesbackpack", "Nadia Ladies Backpack", 2890, "Full-grain cowhide", "Black", "Dhaka, BD"),
  rxItem("totebag", "Elle Structured Tote", 2450, "Full-grain cowhide", "Tan", "Dhaka, BD"),
  rxItem("purse", "Mira Compact Purse", 1290, "Vegetable-tanned hide", "Red Wine", "Dhaka, BD"),
  rxItem("ladiesbag", "Sana Crossbody", 1890, "Full-grain cowhide", "Chocolate", "Dhaka, BD"),

  rxItem("trekonbackpack", "Trekon Field Backpack", 4290, "Waxed full-grain", "Army Green", "Dhaka, BD"),
  rxItem("trekoncrossbody", "Trekon Utility Crossbody", 1990, "Waxed full-grain", "Army Green", "Dhaka, BD"),
  rxItem("trekon", "Trekon Trail Sling", 2190, "Waxed full-grain", "Black", "Dhaka, BD")
];

/* helper: flat list of {id, name, parentId} including sub-categories, for filter UIs */
function rawxAllCategoryOptions() {
  const out = [];
  RAWX_CATEGORIES.forEach(c => {
    out.push({ id: c.id, name: c.name, top: true });
    (c.children || []).forEach(s => out.push({ id: s.id, name: s.name, top: false, parent: c.id }));
  });
  return out;
}

function rawxCategoryLabel(id) {
  const top = RAWX_CATEGORIES.find(c => c.id === id);
  if (top) return top.name;
  for (const c of RAWX_CATEGORIES) {
    const sub = (c.children || []).find(s => s.id === id);
    if (sub) return sub.name;
  }
  return id;
}
