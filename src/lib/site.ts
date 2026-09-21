export const site = {
  name: "SQ Roofing",
  legalName: "SQ Roofing LLC",
  owner: "Barry Derickson",
  phone: "303-579-5874",
  phoneHref: "tel:+13035795874",
  email: "BDerickson@sqroofingd.com",
  domain: "sqroofingd.com",
  url: "https://sqroofingd.com",
  baseCity: "Boulder",
  baseState: "CO",
  baseStateFull: "Colorado",
  // TODO(Barry): confirm street address before launch, or leave blank to hide it.
  street: "",
  postalCode: "",
  tagline: "Colorado's roof, done right the first time.",
  hours: "Mon-Sat 7:00am - 6:00pm",
  // TODO(Barry): fill these in once the Google Business Profile is live.
  googleBusinessUrl: "",
  googleReviewUrl: "",
  licenseNumber: "",
  yearsInBusiness: "",
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  bullets: string[];
  body: { heading: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Full tear-off and replacement built for Colorado weather.",
    blurb:
      "When a roof is past repair, we replace it properly: complete tear-off, deck inspection, new underlayment, and impact-resistant shingles rated for Front Range hail.",
    metaTitle: "Roof Replacement in Boulder & Across Colorado | SQ Roofing",
    metaDescription:
      "Full roof replacement across Colorado. Complete tear-off, deck repair, impact-resistant shingles, and manufacturer-backed warranties. Free estimates from SQ Roofing.",
    bullets: [
      "Complete tear-off down to the deck, never a layover",
      "Rotten or delaminated decking replaced before anything goes back on",
      "Class 4 impact-resistant shingles that can lower your insurance premium",
      "Ice and water shield at every eave, valley, and penetration",
      "Manufacturer and workmanship warranties in writing",
    ],
    body: [
      {
        heading: "Why Colorado roofs fail early",
        text: "Between hail, 300 days of UV, and freeze-thaw cycles that swing forty degrees in an afternoon, a roof here works harder than almost anywhere in the country. Asphalt shingles that would last twenty-five years in Ohio often give up at fifteen on the Front Range. We build for that reality instead of pretending it isn't there.",
      },
      {
        heading: "What a real tear-off looks like",
        text: "We strip the roof to bare decking so we can see what we're working with. Soft spots, old nail holes, and water damage get found and fixed at this stage, not covered up. Then new synthetic underlayment, ice and water shield in the vulnerable spots, properly spaced fasteners, and shingles installed to manufacturer spec so the warranty actually holds.",
      },
      {
        heading: "Impact-resistant shingles pay for themselves",
        text: "Class 4 shingles are tested against a two-inch steel ball dropped from twenty feet. Most Colorado insurers discount your premium somewhere between ten and thirty percent for having them, which often covers the upgrade cost within a few years. We'll show you the numbers for your specific carrier.",
      },
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, honest repairs from a crew that will tell you when you don't need one.",
    blurb:
      "Leaks, missing shingles, failed flashing, ice dam damage. We find the actual source instead of guessing, fix it, and tell you straight whether the roof has life left in it.",
    metaTitle: "Roof Repair & Leak Repair in Boulder, CO | SQ Roofing",
    metaDescription:
      "Fast roof leak repair across Colorado. Flashing, missing shingles, ice dams, and storm damage fixed right. Honest assessments and free estimates from SQ Roofing.",
    bullets: [
      "Leak source traced, not guessed at",
      "Flashing, pipe boot, and valley repairs",
      "Ice dam damage and attic ventilation fixes",
      "Emergency tarping after a storm",
      "A straight answer on repair versus replace",
    ],
    body: [
      {
        heading: "The leak is rarely where the stain is",
        text: "Water travels. A stain above the kitchen can easily start fifteen feet away at a failed pipe boot or a nail that backed out over a winter. We trace it to the actual entry point, which is the difference between a repair that holds and one you call back about in March.",
      },
      {
        heading: "We'll tell you not to replace it",
        text: "Plenty of roofs that get sold a full replacement need eight hundred dollars of flashing work. If that's your situation, we'll say so. It costs us a big invoice and earns us the call five years from now when the roof genuinely is done.",
      },
      {
        heading: "Ice dams and ventilation",
        text: "If you're getting ice dams every winter, the roof usually isn't the problem. Warm air leaking into the attic melts snow that refreezes at the cold eave. We look at intake and exhaust ventilation and at insulation, because putting new shingles over a bad attic just buys you the same problem on a newer roof.",
      },
    ],
  },
  {
    slug: "hail-and-storm-damage",
    title: "Hail & Storm Damage",
    short: "Colorado leads the nation in hail claims. We handle the whole process.",
    blurb:
      "Free documented inspection, a report your adjuster will accept, and a crew that meets them on site. We work your claim with you from the first call to the final inspection.",
    metaTitle: "Hail & Storm Damage Roof Repair in Colorado | SQ Roofing",
    metaDescription:
      "Hail damage roof inspection and insurance claim help across Colorado. Free documented inspection, adjuster meetings, and full replacement. Call SQ Roofing at 303-579-5874.",
    bullets: [
      "Free, fully documented hail inspection",
      "Photo report formatted for your insurance adjuster",
      "We meet the adjuster on your roof",
      "Supplement filing when the first estimate comes in short",
      "You pay your deductible, we handle everything else",
    ],
    body: [
      {
        heading: "Colorado is hail alley",
        text: "The Front Range sits in one of the most active hail corridors in North America. Boulder, Denver, Colorado Springs, and the corridor in between take damaging hail nearly every season, and a single storm can total thousands of roofs in an afternoon. Most homeowners never see the damage from the ground.",
      },
      {
        heading: "What hail actually does",
        text: "Hail bruises asphalt shingles, knocking the protective granules loose and exposing the mat underneath to UV. The roof doesn't leak the next day. It fails two to five years later, long after the claim window has closed. That's why a free inspection after a storm is worth the twenty minutes even if everything looks fine from the driveway.",
      },
      {
        heading: "Claims are a process, not a phone call",
        text: "We document the damage properly, meet your adjuster on the roof so nothing gets missed, and file supplements when the initial scope leaves out code-required items like ice and water shield or drip edge. You are responsible for your deductible. That's the law in Colorado, and any contractor who offers to eat it is telling you exactly what kind of company they are.",
      },
    ],
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    short: "Free, honest, documented. No pressure and no scare tactics.",
    blurb:
      "Buying a home, selling one, or just weathering a bad storm. We get on the roof, document what we find, and hand you a written report whether or not there's work to do.",
    metaTitle: "Free Roof Inspections in Boulder & Across Colorado | SQ Roofing",
    metaDescription:
      "Free documented roof inspections across Colorado. Post-storm, pre-purchase, and annual maintenance inspections with a written photo report. SQ Roofing, Boulder CO.",
    bullets: [
      "Free and genuinely no-obligation",
      "Full photo documentation that you keep",
      "Pre-purchase and pre-sale inspections",
      "Post-storm damage assessment",
      "Remaining-life estimate in writing",
    ],
    body: [
      {
        heading: "What we look at",
        text: "Shingle condition and granule loss, flashing at every penetration and wall intersection, valleys, ridge and vent condition, gutters and drip edge, attic ventilation, and any sign of previous repair work. You get photos of all of it.",
      },
      {
        heading: "Buying or selling a home",
        text: "A roof is one of the largest line items in any inspection negotiation. Knowing whether you're looking at two years or fifteen changes the conversation entirely. We turn these around fast, because real estate timelines don't wait.",
      },
      {
        heading: "No scare tactics",
        text: "There's a style of roofing sales in Colorado built on knocking doors after a storm and telling everyone their roof is destroyed. That's not how we work. If your roof is fine, our report will say your roof is fine.",
      },
    ],
  },
  {
    slug: "gutters-and-downspouts",
    title: "Gutters & Downspouts",
    short: "Seamless gutters sized for Colorado downpours and snowmelt.",
    blurb:
      "A roof is only as good as the water management around it. Seamless aluminum gutters, correct downspout sizing, and guards that actually keep pine needles out.",
    metaTitle: "Seamless Gutter Installation in Colorado | SQ Roofing",
    metaDescription:
      "Seamless gutter and downspout installation and repair across Colorado. Correctly sized for snowmelt and summer downpours. Free estimates from SQ Roofing.",
    bullets: [
      "Seamless aluminum, formed on site to your roofline",
      "Correct sizing for roof pitch and square footage",
      "Downspouts routed away from the foundation",
      "Gutter guards for pine and cottonwood country",
      "Repairs, resloping, and rehanging",
    ],
    body: [
      {
        heading: "Undersized gutters are the most common defect we find",
        text: "A lot of Colorado homes were built with five-inch gutters on roofs that need six, with downspouts spaced too far apart. During a July downpour the water sheets straight over the front edge and lands against the foundation. We size the system to the roof instead of to whatever the builder had on the truck.",
      },
      {
        heading: "Snowmelt and ice",
        text: "Gutters here have to survive sliding snow as well as carry water. We hang with hidden hangers at proper spacing and pay attention to where snow comes off the roof, because a gutter torn loose in February takes the fascia with it.",
      },
    ],
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    short: "TPO, EPDM, and modified bitumen for flat and low-slope buildings.",
    blurb:
      "Low-slope and flat roof systems for commercial buildings, HOAs, and multi-family properties, scheduled around your operations instead of the other way around.",
    metaTitle: "Commercial & Flat Roofing Contractor in Colorado | SQ Roofing",
    metaDescription:
      "Commercial flat and low-slope roofing across Colorado. TPO, EPDM, and modified bitumen installation, repair, and maintenance. SQ Roofing, Boulder CO.",
    bullets: [
      "TPO, EPDM, and modified bitumen systems",
      "Flat roof leak diagnosis and repair",
      "HOA and multi-family projects",
      "Preventive maintenance programs",
      "Work scheduled around your business hours",
    ],
    body: [
      {
        heading: "Flat roofs fail at the details",
        text: "Field membrane rarely fails on its own. It's the penetrations, the curbs, the seams, and the drains. We diagnose the actual failure point and repair it rather than flood-coating the whole roof and hoping for the best.",
      },
      {
        heading: "Property managers and HOAs",
        text: "We're used to multi-building scopes, board approval timelines, and documentation requirements. You'll get a clear scope, a clear schedule, and photos of the completed work on every building.",
      },
    ],
  },
];

export type City = {
  name: string;
  slug: string;
  region: string;
  county?: string;
  featured?: boolean;
  intro?: string;
  nearby?: string[];
};

export const regions = [
  "Boulder County",
  "Denver Metro",
  "Northern Colorado",
  "Colorado Springs & Southern Colorado",
  "Western Slope & Mountains",
  "Eastern Plains",
] as const;

export const cities: City[] = [
  // ---------- Boulder County ----------
  {
    name: "Boulder",
    slug: "boulder",
    region: "Boulder County",
    county: "Boulder County",
    featured: true,
    intro:
      "Boulder is home base. We know the mix here: century-old bungalows in Mapleton Hill with complicated rooflines, mid-century ranches on the east side, and newer builds out in Gunbarrel that are just now hitting the age where old hail damage starts showing up as leaks. We also know what the city wants to see on a permit.",
    nearby: ["Gunbarrel", "Niwot", "Louisville", "Lafayette", "Superior"],
  },
  {
    name: "Longmont",
    slug: "longmont",
    region: "Boulder County",
    county: "Boulder County",
    featured: true,
    intro:
      "Longmont has taken repeated direct hail hits over the past decade, and a lot of roofs around Old Town and the newer developments east of Main were replaced fast and cheap by storm-chasing crews who left the state afterward. We see the results of that work constantly, and we're happy to tell you honestly what you're looking at.",
    nearby: ["Niwot", "Mead", "Frederick", "Firestone", "Berthoud"],
  },
  {
    name: "Louisville",
    slug: "louisville",
    region: "Boulder County",
    county: "Boulder County",
    featured: true,
    intro:
      "Louisville homeowners have been through more than their share between hail seasons and the Marshall Fire. We handle both routine replacements and the more complicated work around fire-rated assemblies and rebuild timelines.",
    nearby: ["Superior", "Lafayette", "Broomfield", "Boulder"],
  },
  {
    name: "Lafayette",
    slug: "lafayette",
    region: "Boulder County",
    county: "Boulder County",
    featured: true,
    intro:
      "Lafayette's older neighborhoods near the original downtown sit alongside a lot of 1990s and 2000s subdivisions, and those subdivision roofs are reaching end of life all at once. We work here often and can usually get a crew out quickly.",
    nearby: ["Louisville", "Erie", "Broomfield", "Boulder"],
  },
  {
    name: "Superior",
    slug: "superior",
    region: "Boulder County",
    county: "Boulder County",
    featured: true,
    intro:
      "Superior sits in an exposed spot for both wind and hail, and the Rock Creek neighborhood in particular has seen repeated storm damage. Wind uplift on ridge caps is one of the most common things we get called out for here.",
    nearby: ["Louisville", "Broomfield", "Boulder", "Westminster"],
  },
  {
    name: "Erie",
    slug: "erie",
    region: "Boulder County",
    county: "Weld County",
    featured: true,
    intro:
      "Erie has grown fast, which means a large number of homes in town came out of the same few build cycles and are aging into replacement at the same time. We're out here weekly.",
    nearby: ["Lafayette", "Broomfield", "Frederick", "Dacono"],
  },
  { name: "Niwot", slug: "niwot", region: "Boulder County", county: "Boulder County" },
  { name: "Gunbarrel", slug: "gunbarrel", region: "Boulder County", county: "Boulder County" },
  { name: "Nederland", slug: "nederland", region: "Boulder County", county: "Boulder County" },
  { name: "Lyons", slug: "lyons", region: "Boulder County", county: "Boulder County" },
  { name: "Estes Park", slug: "estes-park", region: "Boulder County", county: "Larimer County" },

  // ---------- Denver Metro ----------
  {
    name: "Denver",
    slug: "denver",
    region: "Denver Metro",
    county: "Denver County",
    featured: true,
    intro:
      "Denver's housing stock runs from 1900s Victorians in Capitol Hill to post-war brick bungalows in Park Hill to brand new infill townhomes, and every one of them needs a different approach. We pull Denver permits regularly and know what the inspectors look for.",
    nearby: ["Aurora", "Lakewood", "Glendale", "Englewood", "Wheat Ridge"],
  },
  {
    name: "Aurora",
    slug: "aurora",
    region: "Denver Metro",
    county: "Arapahoe County",
    featured: true,
    intro:
      "Aurora is one of the most hail-hit cities in the country, and large sections of it were built within the same handful of decades. If your neighbors are getting roofs done, there's a good chance yours took the same storm.",
    nearby: ["Denver", "Centennial", "Parker", "Commerce City"],
  },
  {
    name: "Lakewood",
    slug: "lakewood",
    region: "Denver Metro",
    county: "Jefferson County",
    featured: true,
    intro:
      "Lakewood's mid-century ranches near Belmar and the newer construction toward Green Mountain each come with their own quirks. Ventilation on the older ranch roofs is something we end up correcting often.",
    nearby: ["Denver", "Golden", "Wheat Ridge", "Littleton", "Morrison"],
  },
  {
    name: "Arvada",
    slug: "arvada",
    region: "Denver Metro",
    county: "Jefferson County",
    featured: true,
    intro:
      "Between Olde Town's older homes and the sprawl of newer neighborhoods to the west, Arvada keeps us busy. The hail corridor runs right through here and has for years.",
    nearby: ["Westminster", "Wheat Ridge", "Golden", "Broomfield"],
  },
  {
    name: "Westminster",
    slug: "westminster",
    region: "Denver Metro",
    county: "Adams County",
    featured: true,
    intro:
      "Westminster spans two counties and about forty years of construction, and we work across all of it. A lot of homes here are on their second roof and heading toward their third.",
    nearby: ["Arvada", "Broomfield", "Thornton", "Northglenn"],
  },
  {
    name: "Thornton",
    slug: "thornton",
    region: "Denver Metro",
    county: "Adams County",
    featured: true,
    intro:
      "Thornton took significant hail in recent seasons and plenty of homeowners here are still finding damage. If a storm came through and you haven't had the roof looked at, the inspection is free.",
    nearby: ["Northglenn", "Westminster", "Brighton", "Commerce City"],
  },
  {
    name: "Broomfield",
    slug: "broomfield",
    region: "Denver Metro",
    county: "Broomfield County",
    featured: true,
    intro:
      "Broomfield sits right between our Boulder home base and the Denver metro, so we're through here constantly. Anthem, the Broadlands, and the older neighborhoods near the original downtown all get regular attention from us.",
    nearby: ["Louisville", "Superior", "Westminster", "Erie", "Arvada"],
  },
  {
    name: "Littleton",
    slug: "littleton",
    region: "Denver Metro",
    county: "Arapahoe County",
    featured: true,
    intro:
      "Littleton's tree cover means we deal with a lot of debris-related gutter and valley issues on top of the usual hail work. Historic downtown properties get a careful eye toward matching existing materials.",
    nearby: ["Highlands Ranch", "Englewood", "Centennial", "Lakewood"],
  },
  {
    name: "Castle Rock",
    slug: "castle-rock",
    region: "Denver Metro",
    county: "Douglas County",
    featured: true,
    intro:
      "Castle Rock's elevation and exposure mean wind is as much of a factor as hail. We pay particular attention to fastening patterns and ridge cap security on roofs out here.",
    nearby: ["Parker", "Lone Tree", "Monument", "Highlands Ranch"],
  },
  {
    name: "Parker",
    slug: "parker",
    region: "Denver Metro",
    county: "Douglas County",
    featured: true,
    intro:
      "Parker's rapid growth left whole neighborhoods with roofs installed within a couple of years of each other, which means they're aging out together. We run full-neighborhood seasons here.",
    nearby: ["Castle Rock", "Aurora", "Centennial", "Lone Tree"],
  },
  {
    name: "Highlands Ranch",
    slug: "highlands-ranch",
    region: "Denver Metro",
    county: "Douglas County",
    featured: true,
    intro:
      "Highlands Ranch has HOA requirements on material and color that trip up contractors who don't work here regularly. We handle the approval paperwork as part of the job.",
    nearby: ["Littleton", "Lone Tree", "Centennial", "Castle Rock"],
  },
  { name: "Centennial", slug: "centennial", region: "Denver Metro", county: "Arapahoe County" },
  { name: "Englewood", slug: "englewood", region: "Denver Metro", county: "Arapahoe County" },
  { name: "Wheat Ridge", slug: "wheat-ridge", region: "Denver Metro", county: "Jefferson County" },
  { name: "Golden", slug: "golden", region: "Denver Metro", county: "Jefferson County" },
  { name: "Commerce City", slug: "commerce-city", region: "Denver Metro", county: "Adams County" },
  { name: "Brighton", slug: "brighton", region: "Denver Metro", county: "Adams County" },
  { name: "Northglenn", slug: "northglenn", region: "Denver Metro", county: "Adams County" },
  { name: "Lone Tree", slug: "lone-tree", region: "Denver Metro", county: "Douglas County" },
  { name: "Greenwood Village", slug: "greenwood-village", region: "Denver Metro", county: "Arapahoe County" },
  { name: "Morrison", slug: "morrison", region: "Denver Metro", county: "Jefferson County" },
  { name: "Evergreen", slug: "evergreen", region: "Denver Metro", county: "Jefferson County" },
  { name: "Conifer", slug: "conifer", region: "Denver Metro", county: "Jefferson County" },

  // ---------- Northern Colorado ----------
  {
    name: "Fort Collins",
    slug: "fort-collins",
    region: "Northern Colorado",
    county: "Larimer County",
    featured: true,
    intro:
      "Fort Collins has a wide spread of housing ages, from Old Town's historic homes to the newer subdivisions out toward Timnath. We're set up to work the whole range, including the steeper and more complex historic rooflines.",
    nearby: ["Loveland", "Windsor", "Timnath", "Wellington"],
  },
  {
    name: "Greeley",
    slug: "greeley",
    region: "Northern Colorado",
    county: "Weld County",
    featured: true,
    intro:
      "Greeley sits in an active part of the hail corridor and gets hit hard when storms track that way. A lot of homes here are due, and we're out this direction regularly.",
    nearby: ["Evans", "Windsor", "Eaton", "Johnstown", "Milliken"],
  },
  {
    name: "Loveland",
    slug: "loveland",
    region: "Northern Colorado",
    county: "Larimer County",
    featured: true,
    intro:
      "Loveland's mix of established neighborhoods and rapid new growth means we see everything from 1970s roofs well past due to five-year-old roofs with installation defects. Free inspection either way.",
    nearby: ["Fort Collins", "Berthoud", "Johnstown", "Windsor"],
  },
  { name: "Windsor", slug: "windsor", region: "Northern Colorado", county: "Weld County" },
  { name: "Berthoud", slug: "berthoud", region: "Northern Colorado", county: "Larimer County" },
  { name: "Johnstown", slug: "johnstown", region: "Northern Colorado", county: "Weld County" },
  { name: "Timnath", slug: "timnath", region: "Northern Colorado", county: "Larimer County" },
  { name: "Wellington", slug: "wellington", region: "Northern Colorado", county: "Larimer County" },
  { name: "Evans", slug: "evans", region: "Northern Colorado", county: "Weld County" },
  { name: "Eaton", slug: "eaton", region: "Northern Colorado", county: "Weld County" },
  { name: "Firestone", slug: "firestone", region: "Northern Colorado", county: "Weld County" },
  { name: "Frederick", slug: "frederick", region: "Northern Colorado", county: "Weld County" },
  { name: "Dacono", slug: "dacono", region: "Northern Colorado", county: "Weld County" },
  { name: "Mead", slug: "mead", region: "Northern Colorado", county: "Weld County" },
  { name: "Milliken", slug: "milliken", region: "Northern Colorado", county: "Weld County" },
  { name: "Platteville", slug: "platteville", region: "Northern Colorado", county: "Weld County" },
  { name: "Fort Lupton", slug: "fort-lupton", region: "Northern Colorado", county: "Weld County" },
  { name: "Severance", slug: "severance", region: "Northern Colorado", county: "Weld County" },
  { name: "Ault", slug: "ault", region: "Northern Colorado", county: "Weld County" },

  // ---------- Colorado Springs & Southern ----------
  {
    name: "Colorado Springs",
    slug: "colorado-springs",
    region: "Colorado Springs & Southern Colorado",
    county: "El Paso County",
    featured: true,
    intro:
      "Colorado Springs competes with Denver for the most hail claims in the state, and the areas east of I-25 get the worst of it. We travel down regularly and can bundle neighborhood work to keep the schedule tight.",
    nearby: ["Monument", "Fountain", "Falcon", "Woodland Park", "Security-Widefield"],
  },
  {
    name: "Pueblo",
    slug: "pueblo",
    region: "Colorado Springs & Southern Colorado",
    county: "Pueblo County",
    featured: true,
    intro:
      "Pueblo's older housing stock and intense summer sun mean UV degradation is as big a factor here as hail. Roofs often look fine from the street and turn out to be badly brittle up close.",
    nearby: ["Pueblo West", "Canon City", "Fountain", "Colorado City"],
  },
  { name: "Monument", slug: "monument", region: "Colorado Springs & Southern Colorado", county: "El Paso County" },
  { name: "Fountain", slug: "fountain", region: "Colorado Springs & Southern Colorado", county: "El Paso County" },
  { name: "Falcon", slug: "falcon", region: "Colorado Springs & Southern Colorado", county: "El Paso County" },
  { name: "Woodland Park", slug: "woodland-park", region: "Colorado Springs & Southern Colorado", county: "Teller County" },
  { name: "Canon City", slug: "canon-city", region: "Colorado Springs & Southern Colorado", county: "Fremont County" },
  { name: "Pueblo West", slug: "pueblo-west", region: "Colorado Springs & Southern Colorado", county: "Pueblo County" },
  { name: "Security-Widefield", slug: "security-widefield", region: "Colorado Springs & Southern Colorado", county: "El Paso County" },
  { name: "Trinidad", slug: "trinidad", region: "Colorado Springs & Southern Colorado", county: "Las Animas County" },
  { name: "Walsenburg", slug: "walsenburg", region: "Colorado Springs & Southern Colorado", county: "Huerfano County" },
  { name: "Alamosa", slug: "alamosa", region: "Colorado Springs & Southern Colorado", county: "Alamosa County" },
  { name: "Salida", slug: "salida", region: "Colorado Springs & Southern Colorado", county: "Chaffee County" },
  { name: "Buena Vista", slug: "buena-vista", region: "Colorado Springs & Southern Colorado", county: "Chaffee County" },

  // ---------- Western Slope & Mountains ----------
  {
    name: "Grand Junction",
    slug: "grand-junction",
    region: "Western Slope & Mountains",
    county: "Mesa County",
    featured: true,
    intro:
      "The Western Slope gets less hail than the Front Range but far more direct sun, and UV is brutal on asphalt out here. We plan Western Slope work in blocks, so call and we'll tell you when we're next in the valley.",
    nearby: ["Fruita", "Palisade", "Delta", "Montrose"],
  },
  { name: "Montrose", slug: "montrose", region: "Western Slope & Mountains", county: "Montrose County" },
  { name: "Durango", slug: "durango", region: "Western Slope & Mountains", county: "La Plata County" },
  { name: "Glenwood Springs", slug: "glenwood-springs", region: "Western Slope & Mountains", county: "Garfield County" },
  { name: "Rifle", slug: "rifle", region: "Western Slope & Mountains", county: "Garfield County" },
  { name: "Fruita", slug: "fruita", region: "Western Slope & Mountains", county: "Mesa County" },
  { name: "Palisade", slug: "palisade", region: "Western Slope & Mountains", county: "Mesa County" },
  { name: "Delta", slug: "delta", region: "Western Slope & Mountains", county: "Delta County" },
  { name: "Cortez", slug: "cortez", region: "Western Slope & Mountains", county: "Montezuma County" },
  { name: "Gunnison", slug: "gunnison", region: "Western Slope & Mountains", county: "Gunnison County" },
  { name: "Steamboat Springs", slug: "steamboat-springs", region: "Western Slope & Mountains", county: "Routt County" },
  { name: "Craig", slug: "craig", region: "Western Slope & Mountains", county: "Moffat County" },
  { name: "Aspen", slug: "aspen", region: "Western Slope & Mountains", county: "Pitkin County" },
  { name: "Vail", slug: "vail", region: "Western Slope & Mountains", county: "Eagle County" },
  { name: "Edwards", slug: "edwards", region: "Western Slope & Mountains", county: "Eagle County" },
  { name: "Breckenridge", slug: "breckenridge", region: "Western Slope & Mountains", county: "Summit County" },
  { name: "Frisco", slug: "frisco", region: "Western Slope & Mountains", county: "Summit County" },
  { name: "Silverthorne", slug: "silverthorne", region: "Western Slope & Mountains", county: "Summit County" },
  { name: "Dillon", slug: "dillon", region: "Western Slope & Mountains", county: "Summit County" },
  { name: "Granby", slug: "granby", region: "Western Slope & Mountains", county: "Grand County" },
  { name: "Winter Park", slug: "winter-park", region: "Western Slope & Mountains", county: "Grand County" },
  { name: "Leadville", slug: "leadville", region: "Western Slope & Mountains", county: "Lake County" },
  { name: "Telluride", slug: "telluride", region: "Western Slope & Mountains", county: "San Miguel County" },
  { name: "Pagosa Springs", slug: "pagosa-springs", region: "Western Slope & Mountains", county: "Archuleta County" },

  // ---------- Eastern Plains ----------
  { name: "Sterling", slug: "sterling", region: "Eastern Plains", county: "Logan County" },
  { name: "Fort Morgan", slug: "fort-morgan", region: "Eastern Plains", county: "Morgan County" },
  { name: "Brush", slug: "brush", region: "Eastern Plains", county: "Morgan County" },
  { name: "Limon", slug: "limon", region: "Eastern Plains", county: "Lincoln County" },
  { name: "Burlington", slug: "burlington", region: "Eastern Plains", county: "Kit Carson County" },
  { name: "Lamar", slug: "lamar", region: "Eastern Plains", county: "Prowers County" },
  { name: "La Junta", slug: "la-junta", region: "Eastern Plains", county: "Otero County" },
  { name: "Akron", slug: "akron", region: "Eastern Plains", county: "Washington County" },
  { name: "Yuma", slug: "yuma", region: "Eastern Plains", county: "Yuma County" },
  { name: "Holyoke", slug: "holyoke", region: "Eastern Plains", county: "Phillips County" },
  { name: "Wray", slug: "wray", region: "Eastern Plains", county: "Yuma County" },
  { name: "Julesburg", slug: "julesburg", region: "Eastern Plains", county: "Sedgwick County" },
];

export const featuredCities = cities.filter((c) => c.featured);

export function citiesByRegion(region: string) {
  return cities.filter((c) => c.region === region);
}

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/**
 * TODO(Barry): replace these with real customers once the Google Business
 * Profile is collecting reviews. Placeholder copy is marked in the UI.
 */
export const testimonials = [
  {
    quote:
      "Barry found the actual source of a leak two other companies had guessed at and patched. Fixed it in an afternoon for a fraction of what we'd been quoted for a full replacement.",
    name: "PLACEHOLDER — Homeowner",
    location: "Boulder, CO",
  },
  {
    quote:
      "They met our adjuster on the roof and caught damage the first inspection missed entirely. The supplement they filed covered code items the insurance company had left out.",
    name: "PLACEHOLDER — Homeowner",
    location: "Longmont, CO",
  },
  {
    quote:
      "Crew showed up when they said, cleaned up completely every single day, and the roof looks exactly like what we were shown. No surprises on the invoice.",
    name: "PLACEHOLDER — Homeowner",
    location: "Denver, CO",
  },
];
