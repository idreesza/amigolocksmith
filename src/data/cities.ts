// Full localized content for all 27 DFW city landing pages.
// Each entry powers a unique /locksmith/:slug page with its own meta, schema and content.

export type CityInfo = {
  slug: string;
  name: string;
  eta: string;
  blurb: string;
  tagline: string;
  intro: string[];
  neighborhoods: string[];
  landmarks: string[];
  localQ: { q: string; a: string };
  nearby: string[]; // slugs of nearby cities for internal linking
};

export const CITY_PAGES: CityInfo[] = [
  {
    slug: "grand-prairie",
    name: "Grand Prairie",
    eta: "15–25 min",
    blurb: "Our home base — the fastest response in the metroplex.",
    tagline: "Our home base. Your fastest locksmith response in all of DFW.",
    intro: [
      "Amigo Locksmith is headquartered right here in Grand Prairie — which means when you're locked out at Grand Prairie Premium Outlets, stranded near Epic Waters, or need every lock rekeyed on a new home in Mira Lagos, the closest mobile locksmith shop in the entire metroplex is already in your city.",
      "Our vans stage throughout Grand Prairie day and night, from the entertainment district along I-30 to the lakeside neighborhoods near Joe Pool Lake. Every unit carries key-cutting machines, OEM-grade programmers and a full hardware inventory, so whether it's a car lockout, a lost smart key, or a commercial master key system, we finish the job where you are — no towing, no waiting days for parts.",
      "Because this is home, Grand Prairie customers get our fastest average arrival: 15–25 minutes, 24/7, including holidays.",
    ],
    neighborhoods: ["Mira Lagos", "Lake Parks", "Westchester", "Indian Hills", "Nottingham Estates", "Dalworth Park", "Carrier Parkway area", "Great Southwest"],
    landmarks: ["Epic Waters Indoor Waterpark", "Grand Prairie Premium Outlets", "Lone Star Park", "Joe Pool Lake", "IKEA Grand Prairie", "Traders Village"],
    localQ: {
      q: "I'm locked out near Grand Prairie Premium Outlets or Epic Waters — can you reach me in the parking lot?",
      a: "Yes — retail and entertainment parking lots are our most common Grand Prairie calls. Give the dispatcher the store or lot section and we'll come directly to your vehicle, usually within 15–25 minutes, and open it damage-free on the spot.",
    },
    nearby: ["arlington", "irving", "duncanville", "cedar-hill", "euless"],
  },
  {
    slug: "arlington",
    name: "Arlington",
    eta: "20–30 min",
    blurb: "From AT&T Stadium to Lake Arlington, we cover every neighborhood.",
    tagline: "Stadium district to Lake Arlington — 24/7 mobile locksmith coverage.",
    intro: [
      "Arlington is the entertainment heart of DFW — and one of the easiest places in Texas to lock your keys in the car. Whether you're leaving a game at AT&T Stadium, a concert at Globe Life Field, or a day at Six Flags, Amigo Locksmith's mobile units are minutes away with everything needed to get you back on the road.",
      "We're equally at home in Arlington's neighborhoods: rekeying new builds in Viridian, installing smart locks in North Arlington, programming key fobs for UTA students, and servicing storefronts and offices along Cooper Street and Collins. One call brings a fully stocked locksmith shop to your curb, 24/7.",
    ],
    neighborhoods: ["Viridian", "North Arlington", "Southwest Arlington", "East Arlington", "Fielder Park", "Downtown Arlington", "Lake Arlington area", "Interlochen"],
    landmarks: ["AT&T Stadium", "Globe Life Field", "Six Flags Over Texas", "UT Arlington", "River Legacy Parks", "Arlington Highlands"],
    localQ: {
      q: "Do you work in the stadium and entertainment district parking lots?",
      a: "Yes — after games and concerts are peak lockout hours, and our vans position near the entertainment district on event nights. Tell us your lot and section when you call and we'll meet you at your vehicle, typically within 20–30 minutes.",
    },
    nearby: ["grand-prairie", "mansfield", "euless", "hurst", "bedford", "kennedale"],
  },
  {
    slug: "irving",
    name: "Irving",
    eta: "20–30 min",
    blurb: "Las Colinas, Valley Ranch and all Irving business districts.",
    tagline: "From Las Colinas towers to Valley Ranch homes — we come to you.",
    intro: [
      "Irving is a city of commuters, corporate campuses and high-rise living — and our locksmiths know every corner of it. Locked out of your office in Las Colinas? Lost your only car key at the Toyota Music Factory? Need a master key system for a suite off Highway 114? Amigo Locksmith dispatches a fully equipped mobile unit to you, usually within 20–30 minutes.",
      "On the residential side, we rekey homes and townhomes across Valley Ranch, Hackberry Creek and historic downtown Irving, install keypad and smart locks for apartment dwellers (with landlord approval), and program transponder and proximity keys for nearly every make on the road.",
    ],
    neighborhoods: ["Las Colinas", "Valley Ranch", "Hackberry Creek", "Cottonwood Valley", "Historic Downtown Irving", "University of Dallas area", "Irving Heights", "Woodhaven"],
    landmarks: ["Toyota Music Factory", "Mustangs of Las Colinas", "Irving Mall", "Las Colinas Urban Center", "University of Dallas", "DFW Airport (south entrance)"],
    localQ: {
      q: "Can you service offices and high-rises in Las Colinas?",
      a: "Absolutely — commercial work in Las Colinas is a specialty: office lockouts, suite rekeys after employee turnover, master key systems, keypad access and code-compliant exit hardware. We coordinate with property management when required and work around your business hours.",
    },
    nearby: ["grand-prairie", "coppell", "farmers-branch", "euless", "dallas", "grapevine"],
  },
  {
    slug: "dallas",
    name: "Dallas",
    eta: "25–40 min",
    blurb: "Downtown, Uptown, Oak Cliff, Lake Highlands and beyond.",
    tagline: "Deep Ellum to Lake Highlands — the whole city, day and night.",
    intro: [
      "Dallas is big — and when you're locked out downtown at midnight or your fob dies in a Bishop Arts parking spot, you don't have time to wait for a locksmith driving in from the suburbs. Amigo Locksmith stages mobile units across Dallas proper, with average arrival of 25–40 minutes anywhere in the city.",
      "We handle the full spectrum of Dallas locksmith work: high-rise condo lockouts in Uptown, rekeys on craftsman homes in Oak Cliff, smart lock installs in Lake Highlands, storefront security along Jefferson Boulevard, and car key programming everywhere from White Rock Lake to North Dallas. Up-front pricing, damage-free entry, and a real ETA every time.",
    ],
    neighborhoods: ["Downtown", "Uptown", "Deep Ellum", "Oak Cliff", "Bishop Arts", "Lake Highlands", "Lakewood", "North Dallas", "Pleasant Grove", "Oak Lawn"],
    landmarks: ["Reunion Tower", "American Airlines Center", "White Rock Lake", "Dallas Arboretum", "Klyde Warren Park", "NorthPark Center"],
    localQ: {
      q: "Do you service apartments, condos and gated garages in Dallas?",
      a: "Yes — apartment and condo calls are among our most common in Dallas. We coordinate access with you (and management if needed), open doors without damage, and can rekey or upgrade your lock the same visit so old keys stop working immediately.",
    },
    nearby: ["irving", "farmers-branch", "balch-springs", "lancaster", "desoto", "duncanville"],
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    eta: "30–45 min",
    blurb: "Sundance Square to Alliance — full coverage west of Grand Prairie.",
    tagline: "Stockyards, Sundance, Alliance and everything in between.",
    intro: [
      "Fort Worth keeps its Western soul — and its fair share of lockouts, from Sundance Square garages to Stockyards parking lots. Amigo Locksmith's mobile units cover the entire city, with 30–45 minute average arrival and true 24/7 dispatch.",
      "We serve TCU-area rentals, historic homes in Fairmount, new construction near Alliance, and businesses along West 7th and Camp Bowie. Car key programming, home rekeys, commercial master key systems — every service performed on-site by a licensed, background-checked technician with the price quoted before we start.",
    ],
    neighborhoods: ["Downtown / Sundance Square", "West 7th", "Fairmount", "TCU area", "Alliance", "Northside / Stockyards", "Wedgwood", "Hulen", "Ridglea"],
    landmarks: ["Fort Worth Stockyards", "Sundance Square", "Kimbell Art Museum", "Fort Worth Zoo", "Texas Christian University", "Alliance Town Center"],
    localQ: {
      q: "Can you reach me in the Stockyards or downtown Fort Worth late at night?",
      a: "Yes — nightlife districts are exactly when lockouts happen. Our dispatch is live 24/7 and we position units in central Fort Worth on weekend nights, so late calls from the Stockyards or Sundance Square still average 30–45 minutes.",
    },
    nearby: ["white-settlement", "benbrook", "crowley", "watauga", "everman", "forest-hill", "arlington"],
  },
  {
    slug: "mansfield",
    name: "Mansfield",
    eta: "25–35 min",
    blurb: "New developments and established neighborhoods alike.",
    tagline: "Fast-growing city, faster locksmith response.",
    intro: [
      "Mansfield is one of the fastest-growing cities in Texas — and with every new neighborhood comes move-in rekeys, smart lock upgrades and the occasional moving-day lockout. Amigo Locksmith covers all of Mansfield with 25–35 minute average arrival, 24/7.",
      "From historic downtown homes to new construction along Highway 360, we rekey entire houses to a single key, install keypads and smart deadbolts, program car keys in your driveway, and secure the shops, restaurants and offices along Broad Street and Debbie Lane. One visit, quoted price, done right.",
    ],
    neighborhoods: ["Historic Downtown Mansfield", "Walnut Creek", "Heritage Estates", "Mira Lagos (south)", "Lowes Farm", "South Pointe", "The Preserve"],
    landmarks: ["Elmer W. Oliver Nature Park", "Big League Dreams", "Mansfield National Golf Club", "Town Center", "Hawaiian Falls (nearby)"],
    localQ: {
      q: "We just bought a new-construction home in Mansfield — should we rekey?",
      a: "Yes, and it's our most common Mansfield job. Builders, contractors and sales agents may all have had keys. We re-pin every exterior lock to a brand-new key in a single visit — starting at $25 per cylinder — and can add smart locks or high-security deadbolts the same day.",
    },
    nearby: ["arlington", "kennedale", "crowley", "cedar-hill", "grand-prairie"],
  },
  {
    slug: "duncanville",
    name: "Duncanville",
    eta: "20–30 min",
    blurb: "Best Southwest corridor coverage, day and night.",
    tagline: "The Best Southwest's hometown locksmith.",
    intro: [
      "Duncanville sits at the heart of the Best Southwest — close enough to our Grand Prairie base that arrival averages just 20–30 minutes, any hour. Whether you're locked out near Armstrong Park, need a rekey on a family home off Camp Wisdom, or lost your car keys at the Duncanville Fieldhouse, help is a single call away.",
      "We serve Duncanville's established neighborhoods with affordable rekeys and lock upgrades, and its businesses along Main Street and I-20 with lockouts, rekeys, panic hardware and access control — all quoted up-front.",
    ],
    neighborhoods: ["Greenbriar Estates", "Fairmeadows", "Merribrook", "West Duncanville", "Clarkridge", "Clark Road area"],
    landmarks: ["Armstrong Park", "Duncanville Fieldhouse", "Red Bird Lanes area", "Duncanville Public Library", "I-20 corridor"],
    localQ: {
      q: "Do you offer same-day rekeying for Duncanville rentals?",
      a: "Yes — tenant-turnover rekeys are a specialty across the Best Southwest. Landlords and property managers call us between tenants and we rekey every exterior lock to a new key, usually same-day, starting at $25 per cylinder.",
    },
    nearby: ["desoto", "cedar-hill", "lancaster", "dallas", "grand-prairie"],
  },
  {
    slug: "cedar-hill",
    name: "Cedar Hill",
    eta: "25–35 min",
    blurb: "From Joe Pool Lake to the Hill Country retail corridor.",
    tagline: "Hilltop views, lake weekends — and a locksmith who reaches you fast.",
    intro: [
      "Cedar Hill's mix of lake recreation, hillside neighborhoods and busy retail makes for every kind of locksmith call — boat-truck lockouts at Joe Pool Lake, home rekeys near Cedar Hill State Park, and storefront service at Hillside Village. Amigo Locksmith reaches any of it in 25–35 minutes on average.",
      "Our mobile units carry everything for on-the-spot service: key cutting and fob programming at the marina parking lot, smart lock installs in Dogwood Canyon-area homes, and commercial hardware for the FM 1382 corridor. Fully licensed, up-front pricing, 24/7.",
    ],
    neighborhoods: ["High Pointe", "Dogwood Canyon", "Lake Ridge", "Waterford Oaks", "Historic Downtown Cedar Hill", "Belt Line corridor"],
    landmarks: ["Cedar Hill State Park", "Joe Pool Lake", "Hillside Village", "Dogwood Canyon Audubon Center", "Pleasant Run Towne Crossing"],
    localQ: {
      q: "Can you help if I'm locked out at Joe Pool Lake or Cedar Hill State Park?",
      a: "Yes — lake and park calls are common, especially on summer weekends. We come directly to the marina or trailhead lot, open your vehicle damage-free, and can cut a spare key on-site so it doesn't happen twice.",
    },
    nearby: ["duncanville", "desoto", "mansfield", "grand-prairie", "lancaster"],
  },
  {
    slug: "plano",
    name: "Plano",
    eta: "35–50 min",
    blurb: "Corporate campuses, retail and residential across Plano.",
    tagline: "Legacy West to downtown Plano — full mobile locksmith service.",
    intro: [
      "Plano runs on precision — and so do we. From corporate campuses along Legacy Drive to the Shops at Legacy and quiet neighborhoods off Parker Road, Amigo Locksmith provides full mobile locksmith service across Plano with 35–50 minute average arrival.",
      "We're a favorite for Plano's car-heavy commuters: transponder and smart key programming on the spot, often 40–60% below dealer pricing. Homeowners call us for whole-house rekeys and smart lock upgrades, and businesses along the Dallas North Tollway trust us for master key systems, access control and code-compliant exit hardware.",
    ],
    neighborhoods: ["Legacy West area", "Downtown Plano", "Willow Bend", "Whiffletree", "Hedgcoxe", "Los Rios", "Oak Point", "Park Forest"],
    landmarks: ["Legacy West", "The Shops at Legacy", "Arbor Hills Nature Preserve", "Haggard Park", "Toyota North America HQ", "Plano Station (DART)"],
    localQ: {
      q: "Can you program keys for luxury and import vehicles common in Plano?",
      a: "Yes — our programmers cover most domestic, Asian and European makes, including push-to-start proximity systems. We cut and program on-site in your driveway or office garage, usually for far less than the dealership charges, with no tow required.",
    },
    nearby: ["frisco", "farmers-branch", "dallas", "coppell", "grapevine"],
  },
  {
    slug: "frisco",
    name: "Frisco",
    eta: "40–55 min",
    blurb: "Fast-growing Frisco — we're already on the road there daily.",
    tagline: "From The Star to Stonebriar — locksmith service that keeps up with Frisco.",
    intro: [
      "Frisco is booming — new homes, new businesses, and a steady stream of lockouts from The Star to Stonebriar Centre. Amigo Locksmith runs mobile units into Frisco daily, with 40–55 minute average arrival and the same up-front pricing we offer everywhere in DFW.",
      "New construction means move-in rekeys and smart lock installs; Frisco Square and the Rail District mean commercial lockouts and storefront service; and packed event parking at Toyota Stadium means lost-key calls we handle right in the lot. One call, one visit, everything done where you are.",
    ],
    neighborhoods: ["Frisco Square", "Rail District", "Stonebriar", "Starwood", "Phillips Creek Ranch", "Panther Creek", "Newman Village", "Lawler Park"],
    landmarks: ["The Star (Cowboys HQ)", "Stonebriar Centre", "Toyota Stadium", "PGA Frisco", "Frisco Athletic Center", "National Videogame Museum"],
    localQ: {
      q: "Do you service the new builds and gated communities in Frisco?",
      a: "Yes — rekeying new construction is one of our most frequent Frisco jobs. We rekey every lock to one new key, install smart deadbolts and video doorbell-friendly hardware, and can set up temporary contractor codes — usually in a single visit.",
    },
    nearby: ["plano", "coppell", "farmers-branch", "grapevine"],
  },
];

CITY_PAGES.push(
  {
    slug: "euless",
    name: "Euless",
    eta: "20–30 min",
    blurb: "Mid-Cities coverage between Dallas and Fort Worth.",
    tagline: "Mid-Cities means middle of nowhere-waiting — we get to Euless fast.",
    intro: [
      "Sitting in the heart of the Mid-Cities, Euless is one of the quickest cities we reach — 20–30 minute average arrival, day or night. Locked out near Texas Star Golf Course, need a rekey in the Villages of Bear Creek, or lost keys at Glade Parks? One call brings a fully stocked locksmith van to you.",
      "Euless's apartments and townhomes keep us busy with rekeys and lockouts, while local businesses along Airport Freeway and Euless Boulevard call us for storefront locks, rekeys after turnover, and code-compliant exit hardware — all at up-front starting prices.",
    ],
    neighborhoods: ["Villages of Bear Creek", "Glade Parks", "Trinity Trails area", "Oakwood Terrace", "Westpark", "Moraine Estates"],
    landmarks: ["Texas Star Golf Course", "Glade Parks", "Villages of Bear Creek Park", "Euless Family Life Center", "Airport Freeway corridor"],
    localQ: {
      q: "I'm in an Euless apartment — can you rekey my door with management approval?",
      a: "Yes. Apartment rekeys and lockouts are everyday Euless calls. We coordinate with you and your property manager when required, open the door damage-free, and can rekey the cylinder the same visit so only your new key works.",
    },
    nearby: ["bedford", "hurst", "arlington", "irving", "grapevine"],
  },
  {
    slug: "hurst",
    name: "Hurst",
    eta: "20–30 min",
    blurb: "Northeast Tarrant coverage, from North East Mall to Chisholm Park.",
    tagline: "Locked out in Hurst? The Mid-Cities' fastest help is one call away.",
    intro: [
      "Hurst's central Mid-Cities location makes it one of our fastest service zones — average arrival of 20–30 minutes, 24/7. Whether you're locked out at North East Mall, need home locks rekeyed near Chisholm Park, or want a master key system for an office off Pipeline Road, Amigo Locksmith comes to you.",
      "Our mobile units carry key cutters, programmers and a full hardware wall, so car keys, home rekeys, smart locks and commercial hardware are all handled in a single visit, at a price quoted before we start.",
    ],
    neighborhoods: ["Bellaire", "Hurst Hills", "Wintergreen", "Shady Oaks", "Hurstview", "Pipeline corridor"],
    landmarks: ["North East Mall", "Chisholm Park", "Hurst Conference Center", "TCC Northeast Campus (nearby)", "Central Park Hurst"],
    localQ: {
      q: "Can you get into North East Mall parking areas quickly?",
      a: "Yes — mall-area lockouts are among our most common Hurst calls, and the mall is minutes from our usual staging points. Tell the dispatcher the entrance or anchor store nearest your car and we'll typically arrive within 20–30 minutes.",
    },
    nearby: ["bedford", "euless", "watauga", "arlington", "fort-worth"],
  },
  {
    slug: "bedford",
    name: "Bedford",
    eta: "20–30 min",
    blurb: "HEB-area homes and businesses, covered 24/7.",
    tagline: "HEB's hometown locksmith — homes, cars and businesses.",
    intro: [
      "Right in the middle of Hurst-Euless-Bedford, our vans reach Bedford in 20–30 minutes on average. From lockouts near Bedford Boys Ranch to rekeys in the established neighborhoods off Central Drive, Amigo Locksmith handles it all on-site — no towing, no return trips.",
      "Bedford's mix of mature homes and busy retail along Harwood and Airport Freeway means steady demand for rekeys, deadbolt upgrades, car key programming and storefront service. Every job starts with a firm quote and ends with tested, guaranteed work.",
    ],
    neighborhoods: ["Bedford Heights", "Brookhollow", "Forest Creek", "Central Drive corridor", "Harwood Hills", "Bedford Meadows"],
    landmarks: ["Bedford Boys Ranch Park", "Old Bedford School", "Central Park (HEB)", "Airport Freeway corridor", "Generations Park at Boys Ranch"],
    localQ: {
      q: "Do you upgrade older locks common in Bedford's established neighborhoods?",
      a: "Yes — many Bedford homes still have original builder hardware. We rekey or replace worn cylinders, add high-security deadbolts, and can key everything to a single modern key in one visit, starting at $25 per cylinder for rekeys.",
    },
    nearby: ["hurst", "euless", "watauga", "arlington", "grapevine"],
  },
  {
    slug: "kennedale",
    name: "Kennedale",
    eta: "25–35 min",
    blurb: "Small-town service between Arlington and Mansfield.",
    tagline: "Kennedale may be small — our response there isn't slow.",
    intro: [
      "Kennedale's quiet streets sit right between Arlington and Mansfield — squarely inside our fastest coverage zone, with 25–35 minute average arrival. Whether it's a lockout near Kennedale Speedway Park or a full rekey on a ranch-style home off Bowman Springs, Amigo Locksmith brings the whole shop to you.",
      "We serve Kennedale's homes, churches and small businesses with the same licensed, up-front-priced service we provide across DFW: lockouts, rekeys, smart locks, car key programming and light commercial hardware.",
    ],
    neighborhoods: ["Kennedale Old Town", "Briarwood", "Sonora Park area", "Village Creek corridor", "Woodland Hills"],
    landmarks: ["Kennedale Speedway Park", "Sonora Park", "Village Creek", "Kennedale High School area"],
    localQ: {
      q: "Do you really come all the way out to Kennedale for small jobs?",
      a: "Yes — Kennedale is inside our core coverage zone, not an outskirt. Single-lock rekeys, one car lockout, one fob — we treat every Kennedale call like any other, with the same arrival times and starting prices.",
    },
    nearby: ["arlington", "mansfield", "crowley", "fort-worth"],
  },
  {
    slug: "everman",
    name: "Everman",
    eta: "25–35 min",
    blurb: "South Fort Worth suburb along I-35W.",
    tagline: "Quick help for Everman — just off I-35W, just minutes away.",
    intro: [
      "Everman sits along the I-35W corridor in south Tarrant County — an easy, fast run for our mobile units, with 25–35 minute average arrival. Locked out of your car, need the house rekeyed after a move, or want sturdier deadbolts on an older home? Amigo Locksmith handles it on the spot.",
      "We keep Everman pricing simple and published: car lockouts starting at $65, house lockouts at $75, rekeys at $25 per cylinder — quoted in full before any work begins, 24/7.",
    ],
    neighborhoods: ["Everman Park area", "Christie Estates", "Oak Grove", "Barron Park", "I-35W corridor"],
    landmarks: ["Everman Park", "Everman Joe C. Bean High School area", "I-35W & Rendon Crowley corridor"],
    localQ: {
      q: "How fast can you reach Everman at night?",
      a: "Everman is close to our south Tarrant staging, so overnight arrival still averages 25–35 minutes. Dispatch is live 24/7 — you always talk to a person, get a firm quote, and get a real ETA before we roll.",
    },
    nearby: ["fort-worth", "forest-hill", "crowley", "kennedale"],
  },
  {
    slug: "forest-hill",
    name: "Forest Hill",
    eta: "25–35 min",
    blurb: "Southeast Fort Worth coverage along I-20.",
    tagline: "Forest Hill's 24/7 locksmith — fast, local and up-front.",
    intro: [
      "Forest Hill's neighborhoods along I-20 are well inside our southeast Tarrant coverage, with 25–35 minute average arrival around the clock. From car lockouts near Forest Hill Park to home rekeys off Wichita Street, Amigo Locksmith arrives with everything needed to finish in one visit.",
      "Residents call us for affordable rekeys, deadbolt upgrades and damage-free lockouts; local businesses along Mansfield Highway call us for storefront locks, rekeys and exit hardware — always at a price quoted up-front.",
    ],
    neighborhoods: ["Forest Hill Park area", "Londa Estates", "Anglin Addition", "Wichita Street corridor", "Mansfield Highway corridor"],
    landmarks: ["Forest Hill Park", "I-20 corridor", "Mansfield Highway retail", "Forest Hill Civic & Convention Center"],
    localQ: {
      q: "Do you service businesses along Mansfield Highway in Forest Hill?",
      a: "Yes — we handle storefront lockouts, rekeys after staff changes, panic bars and keypad entry for the retail corridor. Commercial lockouts start at $85 and we work around your business hours.",
    },
    nearby: ["fort-worth", "everman", "kennedale", "crowley", "arlington"],
  },
  {
    slug: "coppell",
    name: "Coppell",
    eta: "30–45 min",
    blurb: "Northwest DFW, minutes from DFW Airport.",
    tagline: "Airport-adjacent and always covered — Coppell's mobile locksmith.",
    intro: [
      "Coppell's spot near DFW Airport makes it a regular stop for our mobile units — 30–45 minute average arrival. Whether you're locked out after a flight, need a rekey in Old Town Coppell, or want smart locks on a home near Andy Brown Park, Amigo Locksmith comes to you, 24/7.",
      "Coppell's commuters love our on-site transponder and proximity key programming at dealer-beating prices, while local offices along Freeport Parkway call us for master key systems and access control — all quoted before we start.",
    ],
    neighborhoods: ["Old Town Coppell", "Northlake Woodlands", "Coppell Greens", "Riverchase", "Sandy Lake area", "Parkview Estates"],
    landmarks: ["Andy Brown Park", "Old Town Coppell", "Coppell Aquatic & Recreation Center", "DFW Airport (north entrance)", "Grapevine Springs Preserve"],
    localQ: {
      q: "Locked out at or near DFW Airport — can you help?",
      a: "Yes, airport-adjacent calls are routine for us. We can meet you at off-airport parking, hotels, or your Coppell home after a trip — with damage-free entry and on-the-spot key cutting if the keys are gone entirely.",
    },
    nearby: ["irving", "grapevine", "farmers-branch", "euless", "plano"],
  },
  {
    slug: "grapevine",
    name: "Grapevine",
    eta: "30–45 min",
    blurb: "Historic Main Street to Grapevine Mills — full coverage.",
    tagline: "From Main Street wine bars to the Mills — we've got Grapevine covered.",
    intro: [
      "Grapevine packs a lot into one city — a historic Main Street, a lake, one of Texas's biggest malls, and hotels everywhere. That means every kind of locksmith call, and Amigo Locksmith answers them all with 30–45 minute average arrival, 24/7.",
      "We rekey historic-district homes and new builds alike, program car keys at Grapevine Mills or the Gaylord Texan lots, and service Main Street's shops, tasting rooms and offices with storefront locks, master key systems and code-compliant exit hardware.",
    ],
    neighborhoods: ["Historic Downtown Grapevine", "Silver Lake", "Glade Crossing", "Cannon Gate", "Meadowmere", "Stone Bridge Oaks"],
    landmarks: ["Historic Main Street", "Grapevine Mills", "Gaylord Texan", "Grapevine Lake", "Vintage Railroad", "SEA LIFE / LEGOLAND Discovery Center"],
    localQ: {
      q: "Can you service shops and restaurants on Historic Main Street?",
      a: "Yes — Main Street is one of our regular commercial zones. Older doors and specialty hardware are no problem: we service mortise locks, storefront cylinders, exit devices and keypad entry, and we schedule work around your opening hours.",
    },
    nearby: ["coppell", "euless", "bedford", "irving", "farmers-branch"],
  },
  {
    slug: "farmers-branch",
    name: "Farmers Branch",
    eta: "30–40 min",
    blurb: "North Dallas edge, along I-35E and I-635.",
    tagline: "The City in the Park — with a locksmith who's always nearby.",
    intro: [
      "Farmers Branch sits at the I-35E/I-635 junction — one of the best-connected spots in DFW, and one of our quickest north-side zones at 30–40 minutes average arrival. Locked out near the Historical Park, rekeying a Brookhaven-area home, or securing an office along the Stemmons corridor? We come to you.",
      "Our mobile units handle everything on-site: car key cutting and programming, whole-house rekeys, smart locks, and commercial hardware for the warehouses and offices that line the freeway corridors.",
    ],
    neighborhoods: ["Brookhaven", "Mansfield Estates", "Mercer Crossing", "Rawhide Parkway area", "Vitruvian Park area (nearby)", "Stemmons corridor"],
    landmarks: ["Farmers Branch Historical Park", "Brookhaven Country Club", "Gussie Field Watterworth Park", "I-35E & I-635 interchange"],
    localQ: {
      q: "Do you service the offices and warehouses along the Stemmons corridor?",
      a: "Yes — commercial work in Farmers Branch is a specialty: lockouts, rekeys after turnover, master key systems, high-security cylinders and keypad entry, all with minimal disruption to your operations.",
    },
    nearby: ["irving", "coppell", "dallas", "plano"],
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    eta: "25–35 min",
    blurb: "Southern Dallas County, along I-35E.",
    tagline: "Lancaster's hometown help — 24/7, up-front and on the spot.",
    intro: [
      "Lancaster's historic square and fast-growing neighborhoods are squarely inside our southern Dallas County zone — 25–35 minute average arrival, day and night. From lockouts near the Town Square to rekeys in new subdivisions off Pleasant Run, Amigo Locksmith brings the full shop to your curb.",
      "Homeowners call us for move-in rekeys and deadbolt upgrades; drivers call us for on-the-spot key cutting and fob programming; and local businesses along I-35E call us for storefront service and exit hardware — all at published starting prices.",
    ],
    neighborhoods: ["Historic Town Square area", "Millbrook East", "Berkshire", "Houston School Road corridor", "Pleasant Run Estates"],
    landmarks: ["Lancaster Historic Town Square", "Bear Creek Nature Park", "Lancaster Community Park", "Cedar Valley College (nearby)", "I-35E corridor"],
    localQ: {
      q: "Do you cover the new subdivisions going up around Lancaster?",
      a: "Yes — new-build rekeys are one of our most common Lancaster jobs. We rekey every exterior lock to a new key the day you move in, starting at $25 per cylinder, and can add smart deadbolts in the same visit.",
    },
    nearby: ["desoto", "duncanville", "cedar-hill", "red-oak", "balch-springs"],
  },
  {
    slug: "desoto",
    name: "DeSoto",
    eta: "25–35 min",
    blurb: "Best Southwest city on I-35E — full 24/7 coverage.",
    tagline: "DeSoto's 24/7 locksmith — Best Southwest, best response.",
    intro: [
      "DeSoto anchors the Best Southwest, and it's one of our busiest southern zones — 25–35 minute average arrival, 24/7. Whether you're locked out near DeSoto Town Center, rekeying a home off Pleasant Run, or programming a key fob in your driveway, Amigo Locksmith does it all where you are.",
      "We're the go-to for DeSoto's established neighborhoods (whole-house rekeys, smart lock upgrades) and its growing retail corridor along Hampton and I-35E (storefront locks, rekeys, exit devices) — always with the price quoted before we start.",
    ],
    neighborhoods: ["Eagle Estates", "Elerson Ranch", "Mockingbird Hills", "Silver Creek Estates", "DeSoto Ranch", "Hampton Road corridor"],
    landmarks: ["DeSoto Town Center", "Ernie Roberts Park", "DeSoto Amphitheater", "I-35E & Belt Line corridor", "Thorntree Country Club (nearby)"],
    localQ: {
      q: "Can you make a car key in my DeSoto driveway if I lost all of them?",
      a: "Yes — all-keys-lost is a specialty. We originate a new key from your vehicle's lock or VIN, cut and program it on the spot, and you're driving again in one visit — no tow to the dealer, and usually far cheaper.",
    },
    nearby: ["duncanville", "cedar-hill", "lancaster", "red-oak", "dallas"],
  },
  {
    slug: "white-settlement",
    name: "White Settlement",
    eta: "25–35 min",
    blurb: "West Fort Worth, next to NAS JRB and Lockheed Martin.",
    tagline: "West Fort Worth's quick-response locksmith — 24/7.",
    intro: [
      "White Settlement's place on Fort Worth's west edge — right by NAS JRB and Lockheed Martin — puts it in easy reach of our mobile units: 25–35 minute average arrival, around the clock. Car lockout on Cherry Lane, home rekey near Central Park, or new locks after a move? One call handles it.",
      "We serve White Settlement's neighborhoods with affordable rekeys and lock upgrades, its commuters with on-site car key cutting and programming, and its small businesses with storefront and office locksmith service — all up-front priced.",
    ],
    neighborhoods: ["Central Park area", "Saddle Hills", "Silver Ridge", "Las Vegas Trail area", "Cherry Lane corridor"],
    landmarks: ["Naval Air Station JRB Fort Worth", "Lockheed Martin", "White Settlement Historical Museum", "Central Park", "Cherry Lane corridor"],
    localQ: {
      q: "Do you service areas near NAS JRB and Lockheed Martin?",
      a: "Yes — we're in that corridor daily. Shift changes are peak lockout times, and our west-side units reach the base-adjacent neighborhoods and parking areas in 25–35 minutes on average.",
    },
    nearby: ["fort-worth", "benbrook", "watauga", "hurst"],
  },
  {
    slug: "benbrook",
    name: "Benbrook",
    eta: "25–35 min",
    blurb: "Southwest Fort Worth, on the shores of Benbrook Lake.",
    tagline: "Lake days and easy living — with a locksmith minutes away.",
    intro: [
      "Benbrook's lakeside neighborhoods are a fast run for our southwest units — 25–35 minute average arrival, 24/7. Boat-truck lockout at Benbrook Lake, rekey on a home near Dutch Branch Park, or smart lock upgrade in Whitestone? Amigo Locksmith brings everything to you.",
      "We handle Benbrook's homes, vehicles and small businesses with the same licensed, up-front service we deliver across DFW: damage-free lockouts, whole-house rekeys, car key programming and commercial hardware — all in one visit.",
    ],
    neighborhoods: ["Whitestone", "Brookside", "Benbrook Lake area", "La Cantera", "Winscott", "Dutch Branch area"],
    landmarks: ["Benbrook Lake", "Dutch Branch Park", "Benbrook Community Center", "Winscott Plover Road corridor", "Benbrook Stables area"],
    localQ: {
      q: "Locked out at Benbrook Lake or the marina — can you reach me?",
      a: "Yes — lake calls are common on weekends. Give us the ramp or park area and we'll meet your vehicle there, open it without damage, and can cut a spare key on-site so you're not stuck twice.",
    },
    nearby: ["fort-worth", "white-settlement", "crowley", "kennedale"],
  },
  {
    slug: "red-oak",
    name: "Red Oak",
    eta: "30–40 min",
    blurb: "Growing Ellis County suburb on I-35E.",
    tagline: "Red Oak is growing fast — and we're already there.",
    intro: [
      "Red Oak's rapid growth along I-35E means new homes, new businesses — and new locks that need rekeying. Amigo Locksmith covers Red Oak with 30–40 minute average arrival, 24/7, from the historic center to the newest subdivisions.",
      "Move-in rekeys are our most common Red Oak call, alongside car key programming in driveways, smart lock installs, and storefront service for the growing retail along Ovilla Road — all at published starting prices.",
    ],
    neighborhoods: ["Red Oak town center", "Oak Leaf (nearby)", "Pecan Grove", "Ovilla Road corridor", "Woodridge Estates"],
    landmarks: ["Red Oak Municipal Center", "I-35E corridor", "Red Oak High School area", "Pearson Park"],
    localQ: {
      q: "Do you charge extra to come out to Red Oak?",
      a: "No trip premium surprises here — our published starting prices apply in Red Oak just like everywhere else in DFW, and we quote the complete price before starting. Average arrival is 30–40 minutes.",
    },
    nearby: ["lancaster", "desoto", "cedar-hill", "duncanville"],
  },
  {
    slug: "balch-springs",
    name: "Balch Springs",
    eta: "25–35 min",
    blurb: "Southeast Dallas County at I-635 and I-20.",
    tagline: "Southeast Dallas County's fast, honest locksmith.",
    intro: [
      "Balch Springs sits at the I-635/I-20 junction — one of the most connected spots in southeast Dallas County, and a quick run for our mobile units at 25–35 minutes average arrival, 24/7. Car lockouts, home rekeys, lost-key replacement — all done on the spot.",
      "We keep it simple for Balch Springs: published starting prices (car lockouts from $65, rekeys from $25 per cylinder), licensed technicians, damage-free entry, and a firm quote before any work begins.",
    ],
    neighborhoods: ["Spring Oaks", "Pioneer Springs", "Balch Springs Estates", "Hickory Tree corridor", "Lake June area"],
    landmarks: ["I-635 & I-20 junction", "Balch Springs Recreation Center", "Walter E. Luedeke Park", "Lake June Road corridor"],
    localQ: {
      q: "How late do you run calls in Balch Springs?",
      a: "We're 24/7 — midnight, 4am, holidays. Balch Springs is inside our southeast Dallas County staging zone, so late-night arrival still averages 25–35 minutes with the same up-front pricing.",
    },
    nearby: ["dallas", "lancaster", "desoto", "duncanville"],
  },
  {
    slug: "watauga",
    name: "Watauga",
    eta: "25–35 min",
    blurb: "Northeast Tarrant County, near North Richland Hills.",
    tagline: "Watauga's neighborhood locksmith — quick, local, up-front.",
    intro: [
      "Watauga's tight-knit neighborhoods in northeast Tarrant County are well inside our coverage zone — 25–35 minute average arrival, day or night. From a lockout near Watauga Pavilion to a full-house rekey off Denton Highway, Amigo Locksmith brings the whole shop to you.",
      "Residents count on us for affordable rekeys and smart lock upgrades; local businesses along Rufe Snow and Watauga Road call us for lockouts, storefront locks and exit hardware — all quoted before we start.",
    ],
    neighborhoods: ["Indian Springs", "Watauga Heights", "Brewer area", "Denton Highway corridor", "Rufe Snow corridor"],
    landmarks: ["Watauga Pavilion", "Foster Village Park", "Capp Smith Park", "Denton Highway retail corridor"],
    localQ: {
      q: "Can you rekey a Watauga home the same day I call?",
      a: "Almost always, yes. Watauga is inside our northeast Tarrant staging zone, and rekeys are a one-visit job — usually same-day, starting at $25 per cylinder, with all locks keyed to one new key if you like.",
    },
    nearby: ["hurst", "bedford", "fort-worth", "white-settlement", "euless"],
  },
  {
    slug: "crowley",
    name: "Crowley",
    eta: "25–35 min",
    blurb: "South Fort Worth growth corridor on I-35W.",
    tagline: "Crowley's booming — and so is our coverage there.",
    intro: [
      "Crowley's growth along I-35W has made it one of our busiest south Fort Worth zones — 25–35 minute average arrival, 24/7. New subdivision rekeys, driveway key programming, lockouts near Crowley Park — Amigo Locksmith handles it all on-site.",
      "Builders' keys, old keys, lost keys — we make them all stop mattering in one visit: whole-house rekeys, smart deadbolts, car key cutting and programming, and commercial service for the growing retail along Main Street.",
    ],
    neighborhoods: ["Crowley town center", "Crescent Springs", "Karon Hills", "Bria Estates", "Rendon Road corridor"],
    landmarks: ["Crowley Park", "Bicentennial Park", "I-35W corridor", "Crowley High School area"],
    localQ: {
      q: "We just moved into a new Crowley build — when should we rekey?",
      a: "Move-in day is ideal. Builders, contractors and agents may all have had access, and rekeying is fast and affordable — starting at $25 per cylinder. We can also install smart locks in the same visit.",
    },
    nearby: ["fort-worth", "everman", "kennedale", "mansfield", "benbrook"],
  },
);

export const getCity = (slug: string) => CITY_PAGES.find((c) => c.slug === slug);
