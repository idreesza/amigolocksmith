// Central source of truth for NAP (Name, Address, Phone) and content.
// Every section, the JSON-LD schema, llms.txt and sitemap derive from this.

export const SITE = {
  name: "Keys on Wheels",
  tagline: "The Locksmith That Comes to You — 24/7 Across DFW",
  phone: "(469) 871-5625",
  phoneHref: "tel:+14698715625",
  phoneIntl: "+1-469-871-5625",
  email: "info@keysonwheels.com",
  emailHref: "mailto:info@keysonwheels.com",
  city: "Grand Prairie",
  state: "TX",
  stateFull: "Texas",
  region: "Dallas–Fort Worth Metroplex",
  url: "https://keysonwheels.com",
  hours: "24/7 — including weekends and holidays",
  geo: { lat: 32.7459, lng: -96.9978 }, // Grand Prairie, TX
};

export const CITIES = [
  { name: "Grand Prairie", eta: "15–25 min", blurb: "Our home base — the fastest response in the metroplex." },
  { name: "Arlington", eta: "20–30 min", blurb: "From AT&T Stadium to Lake Arlington, we cover every neighborhood." },
  { name: "Irving", eta: "20–30 min", blurb: "Las Colinas, Valley Ranch and all Irving business districts." },
  { name: "Dallas", eta: "25–40 min", blurb: "Downtown, Uptown, Oak Cliff, Lake Highlands and beyond." },
  { name: "Fort Worth", eta: "30–45 min", blurb: "Sundance Square to Alliance — full coverage west of Grand Prairie." },
  { name: "Mansfield", eta: "25–35 min", blurb: "New developments and established neighborhoods alike." },
  { name: "Duncanville", eta: "20–30 min", blurb: "Best Southwest corridor coverage, day and night." },
  { name: "Cedar Hill", eta: "25–35 min", blurb: "From Joe Pool Lake to the Hill Country retail corridor." },
  { name: "Plano", eta: "35–50 min", blurb: "Corporate campuses, retail and residential across Plano." },
  { name: "Frisco", eta: "40–55 min", blurb: "Fast-growing Frisco — we're already on the road there daily." },
];

export type Service = {
  title: string;
  desc: string;
  items: string[];
  image?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Automotive Locksmith",
    desc: "Locked out of your car, lost every key, or key fob stopped working? Our mobile units cut and program keys on the spot — no tow, no dealer markup, no waiting days.",
    items: [
      "24/7 car lockout service — damage-free entry",
      "Car key replacement & duplication",
      "Transponder & chip key programming",
      "Smart key / proximity fob programming",
      "Ignition repair & replacement",
      "Broken key extraction",
      "Trunk lockouts",
      "Motorcycle & RV keys",
    ],
    image: "/images/automotive-locksmith.jpg",
  },
  {
    title: "Residential Locksmith",
    desc: "From emergency home lockouts to full smart-lock upgrades, we secure DFW homes the same day you call — with hardware we stand behind.",
    items: [
      "House lockout — fast, damage-free",
      "Lock rekeying (all locks, one key)",
      "Lock replacement & upgrades",
      "Smart lock & keypad installation",
      "Deadbolt & high-security locks",
      "Mailbox, gate & garage locks",
      "Broken key extraction",
      "New-home rekey packages",
    ],
    image: "/images/residential-locksmith.jpg",
  },
  {
    title: "Commercial Locksmith",
    desc: "Master key systems, panic hardware, access control — we keep DFW businesses open, compliant and secure, on your schedule.",
    items: [
      "Business lockout — 24/7 response",
      "Master key system design",
      "High-security locks (Medeco, Mul-T-Lock)",
      "Panic bars & exit devices (code compliant)",
      "Access control & keypad entry",
      "Storefront & glass door locks",
      "Office rekeying after turnover",
      "File cabinet, desk & safe locks",
    ],
    image: "/images/commercial-locksmith.jpg",
  },
];

export const EMERGENCY_SERVICES = [
  "Car lockouts",
  "House lockouts",
  "Business lockouts",
  "Lost key replacement",
  "Broken key extraction",
  "Lock repair after break-in",
  "Ignition won't turn",
  "Key fob not working",
];

export const PRICING = [
  { service: "Car lockout (damage-free entry)", range: "$65 – $125" },
  { service: "House lockout", range: "$75 – $135" },
  { service: "Business lockout", range: "$85 – $150" },
  { service: "Lock rekey (per cylinder)", range: "$25 – $45" },
  { service: "Standard lock replacement", range: "$85 – $185" },
  { service: "Smart lock installation", range: "$120 – $275" },
  { service: "Car key duplicate (basic)", range: "$75 – $125" },
  { service: "Transponder key cut & programmed", range: "$145 – $285" },
  { service: "Smart key / proximity fob", range: "$185 – $395" },
  { service: "Ignition repair / replacement", range: "$185 – $450" },
  { service: "Master key system setup", range: "Quote on site" },
  { service: "Panic bar / exit device install", range: "$225 – $475" },
];

export const REVIEWS = [
  {
    name: "Marisol G.",
    city: "Grand Prairie, TX",
    service: "Car lockout",
    text: "Locked my keys in the car at 11pm near Grand Prairie Premium Outlets. They answered on the first ring, arrived in under 20 minutes, and had my door open in five — zero damage. Cannot recommend enough.",
    rating: 5,
  },
  {
    name: "Derek T.",
    city: "Arlington, TX",
    service: "Key fob programming",
    text: "The dealer quoted me $480 and a two-day wait for a new fob. Keys on Wheels came to my office, cut and programmed it in the parking lot for nearly half the price. Unreal service.",
    rating: 5,
  },
  {
    name: "Priya S.",
    city: "Irving, TX",
    service: "Home rekey",
    text: "Just bought a house in Las Colinas and wanted every lock rekeyed. They explained options clearly, gave the exact price before starting, and were done in about an hour. True professionals.",
    rating: 5,
  },
  {
    name: "Marcus W.",
    city: "Dallas, TX",
    service: "Smart lock install",
    text: "Had three smart locks installed plus a high-security deadbolt. The tech was on time, cleaned up after himself, and walked me through the app setup. Worth every penny.",
    rating: 5,
  },
  {
    name: "Angela R.",
    city: "Fort Worth, TX",
    service: "Business lockout",
    text: "Our storefront lock jammed at 6am before opening. They had a tech out before 7 and replaced the cylinder on the spot. Saved our entire business day.",
    rating: 5,
  },
  {
    name: "James & Holly K.",
    city: "Mansfield, TX",
    service: "Lock replacement",
    text: "After a break-in attempt they came out the same evening, replaced and upgraded all our exterior locks, and gave us real advice on what was worth upgrading. Felt safe again that night.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How fast can a locksmith get to me in Grand Prairie or DFW?",
    a: "Because Keys on Wheels is a fully mobile locksmith based in Grand Prairie, our average arrival time is 15–25 minutes within Grand Prairie and 20–45 minutes across the rest of the Dallas–Fort Worth metroplex, including Arlington, Irving, Dallas, Fort Worth, Mansfield, Duncanville, Cedar Hill, Plano and Frisco. When you call (469) 871-5625, we give you a real-time ETA before you hang up.",
  },
  {
    q: "How much does a locksmith cost in Grand Prairie, TX?",
    a: "Most car lockouts in Grand Prairie cost $65–$125, house lockouts $75–$135, and lock rekeys $25–$45 per cylinder. Transponder key cutting and programming typically runs $145–$285 — often 40–60% less than a dealership. We always quote the full price before any work begins, so you never pay a surprise fee.",
  },
  {
    q: "Can you make a car key if I lost all my keys?",
    a: "Yes. Our mobile units carry key-cutting and programming equipment for most makes and models, including transponder keys, smart keys and proximity fobs. We can originate a brand-new key from your vehicle's lock or VIN and program it on the spot — no towing to a dealership required.",
  },
  {
    q: "Are you available 24 hours a day, even on weekends and holidays?",
    a: "Yes — Keys on Wheels operates 24/7/365, including nights, weekends and holidays. Lockouts don't keep business hours, and neither do we. Emergency calls are answered by a real dispatcher, not a voicemail.",
  },
  {
    q: "Will opening my car or house damage the lock?",
    a: "No. We use professional, non-destructive entry techniques — picks, decoders and air-wedge tools — that open vehicles and doors without damaging the lock, door or paint. Drilling is an absolute last resort and is always discussed with you first.",
  },
  {
    q: "What should I do right now if I'm locked out?",
    a: "Stay calm and safe, don't force the lock or try coat-hanger tricks (they cause expensive damage), and call (469) 871-5625. Tell us your location, vehicle or door type, and whether there are children or pets inside — those calls are prioritized above everything else.",
  },
  {
    q: "Do you rekey locks after buying a new home or after a tenant moves out?",
    a: "Absolutely — rekeying is one of our most requested services across DFW. We re-pin your existing locks so old keys stop working, and can key all your locks to a single key. It's far cheaper than replacing every lock and just as secure.",
  },
  {
    q: "Can you program key fobs and push-to-start smart keys?",
    a: "Yes. We program transponder keys, remote head keys, and push-to-start proximity fobs for most domestic and import vehicles on-site, wherever the car is parked — usually for far less than dealer pricing.",
  },
  {
    q: "Are your locksmiths licensed and insured?",
    a: "Yes. Keys on Wheels technicians are licensed under the Texas Department of Public Safety Private Security Bureau, background-checked, uniformed, and fully insured. Ask for the license number any time — we're proud to show it.",
  },
  {
    q: "Do you charge extra for nights, weekends or emergencies?",
    a: "After-hours emergency service may carry a modest dispatch fee, but we quote the complete price — service call plus labor plus parts — before we start. The price we quote is the price you pay. No bait-and-switch, ever.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
