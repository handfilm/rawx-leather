RAWx LAB — প্রোডাক্ট ফটো বসানোর নিয়ম (বাংলা)
==================================================

কী পরিবর্তন করা হয়েছে
------------------------
- data.js: প্রতিটা প্রোডাক্টে এখন একটা `image` ফিল্ড যোগ হয়েছে —
  `assets/products/{SKU-id}.jpg`
- app.js: প্রোডাক্ট কার্ড (hide-tag) এখন ওই path থেকে ছবি লোড করার
  চেষ্টা করবে। ছবি না পেলে rawxImgFail() স্বয়ংক্রিয়ভাবে আগের মতোই
  CSS swatch প্যাটার্ন দেখাবে — কোনো ভাঙা-ছবি আইকন আসবে না।

কোথায় ছবি রাখবেন
------------------
সাইটের রুটে (index.html যেখানে আছে) একটা ফোল্ডার:

  assets/products/

এর ভেতরে নিচের ফাইলনেমগুলোতে ছবি রাখুন (.jpg)। নাম হুবহু মিলতে হবে,
নইলে ছবি দেখাবে না:

  bifold-001.jpg   → Kent Bifold Wallet
  bifold-002.jpg   → Reed Classic Bifold
  bifold-003.jpg   → Hazel Card-Slider Bifold
  bifold-004.jpg   → Kevin Bifold Wallet
  trifold-005.jpg  → Edd Trifold Wallet
  trifold-006.jpg  → Tedd Magnet Trifold v2
  trifold-007.jpg  → Holden Trifold Wallet
  trifold-008.jpg  → Reo Trifold Wallet
  longwallet-009.jpg → Kane Long Wallet v2
  longwallet-010.jpg → Jason Long Wallet
  longwallet-011.jpg → Dane Semi-Long Wallet
  longwallet-012.jpg → Walt Long Wallet — Reborn
  belt-013.jpg     → Rowan Solid-Brass Belt
  belt-014.jpg     → Finn Reversible Belt
  belt-015.jpg     → Marsh Buckle Belt
  laptopbag-016.jpg → Ryan Laptop Organizer
  laptopbag-017.jpg → Victor Laptop Organizer
  backpack-018.jpg → Walker Backpack v2
  backpack-019.jpg → Bruce Backpack
  bag-020.jpg      → Logan Office Bag
  cardholder-021.jpg → Mino Card Holder
  cardholder-022.jpg → Jude Cardholder
  passportholder-023.jpg → Arlo Passport Sleeve
  passportholder-024.jpg → Nash Passport Sleeve
  accessories-025.jpg → Demi Sunglass Cover
  accessories-026.jpg → Hong Pouch Bag
  accessories-027.jpg → Urbaland Coaster 6pc Set
  accessories-028.jpg → Toby Pouch Bag
  ladiesbackpack-029.jpg → Nadia Ladies Backpack
  totebag-030.jpg  → Elle Structured Tote
  purse-031.jpg    → Mira Compact Purse
  ladiesbag-032.jpg → Sana Crossbody
  trekonbackpack-033.jpg → Trekon Field Backpack
  trekoncrossbody-034.jpg → Trekon Utility Crossbody
  trekon-035.jpg   → Trekon Trail Sling

আগে যা ছিল, সেগুলোও একইভাবে কাজ করে
--------------------------------------
  assets/categories/  → ক্যাটাগরি কার্ডের ছবি (bifold.jpg, trifold.jpg...)
  assets/hero/         → হোমপেজ হিরো স্লাইডারের ছবি (slide-1.jpg ... slide-6.jpg)

⚠️ জরুরি সতর্কতা — SKU id ভবিষ্যতে বদলে যেতে পারে
----------------------------------------------------
data.js-এ প্রতিটা প্রোডাক্টের id (যেমন bifold-003) অটো-জেনারেট হয়
`rxItem()` কল হওয়ার ক্রম অনুযায়ী (উপর থেকে নিচে গোনা হয়)। মানে:

- লিস্টের মাঝখানে নতুন কোনো প্রোডাক্ট যোগ করলে তার পরের সব id শিফট
  হয়ে যাবে, আর তখন আগে থেকে রাখা ছবিগুলোর নাম আর মিলবে না।
- নিরাপদ থাকতে: নতুন প্রোডাক্ট সবসময় RAWX_PRODUCTS অ্যারের একদম
  শেষে যোগ করুন, মাঝখানে না।
- অথবা, চাইলে আমাকে বলুন — id-টাকে ক্রম-নির্ভর না রেখে প্রতিটা
  rxItem() কলে ম্যানুয়ালি একটা fixed slug (যেমন "kent-bifold")
  দেওয়ার সিস্টেমে বদলে দিতে পারি, যা আরও স্থিতিশীল হবে।

ছবির সাইজ পরামর্শ
-------------------
- অ্যাসপেক্ট রেশিও: 4:5 (পোর্ট্রেট) — কার্ডের swatch এরিয়ার সাথে
  মিলবে।
- ফাইল সাইজ: 150–300KB-এর মধ্যে রাখলে পেজ লোড দ্রুত হবে
  (JPG, quality ~75-80%)।
