export const company = {
  name: 'Halcyon Real Estate',
  phone: '(858) 243-5304',
  phoneHref: 'tel:+18582435304',
  email: 'gingercouvrette@yahoo.com',
  broker: 'Ginger Couvrette',
  calBRE: 'CalBRE #01915672',
  address: {
    street: '14282 Danielson Street',
    city: 'Poway, CA 92064',
    country: 'United States',
  },
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Four Pillars', href: '/four-pillars' },
      { label: 'Client Testimonials', href: '/client-testimonials' },
    ],
  },
  {
    label: 'Buy/Sell',
    href: '/buying-and-selling',
    children: [
      {
        label: 'Buy',
        href: '/buy',
        children: [
          { label: "Buyer's Guide", href: '/buyers-guide' },
          { label: 'Buyer Resources', href: '/buyer-resources' },
        ],
      },
      {
        label: 'Sell',
        href: '/sell',
        children: [
          { label: 'Seller Advice', href: '/seller-advice' },
          { label: "Seller's Resources", href: '/sellers-resources' },
        ],
      },
    ],
  },
  {
    label: 'Halcyon Properties',
    href: '/halcyon-properties',
    children: [
      { label: 'All Properties', href: '/halcyon-properties' },
      { label: 'For Sale', href: '/halcyon-properties/for-sale' },
      { label: 'For Rent', href: '/halcyon-properties/for-rent' },
    ],
  },
  { label: 'Property Management', href: '/property-management' },
  { label: 'Invest', href: '/invest' },
]

export const buySellNav = [
  { label: 'Overview', href: '/buying-and-selling' },
  // { label: 'Buy', href: '/buy' },
  { label: "Buyer's Guide", href: '/buyers-guide' },
  { label: 'Buyer Resources', href: '/buyer-resources' },
 // { label: 'Sell', href: '/sell' },
  { label: 'Seller Advice', href: '/seller-advice' },
  { label: "Seller's Resources", href: '/sellers-resources' },
]

export type TeamMember = {
  name: string
  role?: string
  phone?: string
  email: string
  calBRE: string
  image?: string
  featured?: boolean
}

export const team: TeamMember[] = [
  {
    name: 'Ginger Couvrette',
    role: 'Founder and Broker of Halcyon',
    phone: '(858) 243-5304',
    email: 'gingercouvrette@yahoo.com',
    calBRE: 'CalBRE #01915672',
    image: '/images/halcyonheadshots/gingerweb.jpg',
    featured: true,
  },
  { name: 'Norma Aguilar', phone: '(858) 254-2694', email: 'aleaguila1@hotmail.com', calBRE: 'CalBRE #01956133', image: '/images/halcyonheadshots/norma.jpg' },
  { name: 'T.J. Zane', phone: '(619) 840-8718', email: 'tjzane@tjzane.com', calBRE: 'CalBRE #02178297', image: '/images/halcyonheadshots/tj.jpg' },
  { name: 'Rindy Barnes', phone: '(858) 705-7633', email: 'mail@rindybarnes.com', calBRE: 'CalBRE #01930061', image: '/images/halcyonheadshots/rindy.jpg' },
  { name: 'John Couvrette', phone: '(858) 243-5318', email: 'john.couvrette@halcyonca.com', calBRE: 'CalBRE #02105871', image: '/images/halcyonheadshots/john.jpg' },
  { name: 'Cynthia Elizondo', phone: '(858) 353-1638', email: 'cynthiae1000@gmail.com', calBRE: 'CalBRE #01924853', image: '/images/halcyonheadshots/cynthia.jpg' },
  { name: 'Jen Harty', phone: '(858) 252-4546', email: 'Jen.Harty.Homes@gmail.com', calBRE: 'CalBRE #02114482', image: '/images/halcyonheadshots/Meet-Jen-Harty.jpg' },
  { name: 'Kristine Kirkman', phone: '(858) 663-1077', email: 'kristinekirkman2@gmail.com', calBRE: 'CalBRE #02179840', image: '/images/halcyonheadshots/Kristine-1-min-1-e1657044787820.jpg' },
  { name: 'Tracy Sturney', phone: '(858) 335-6067', email: 'tracygetsreal@outlook.com', calBRE: 'CalBRE #00844044', image: '/images/halcyonheadshots/tracy.jpeg' },
  { name: 'Victoria Luna', email: 'vickylunatc@gmail.com', calBRE: 'CalBRE #01887793', image: '/images/halcyonheadshots/victoria.jpg' },
  { name: 'Sheri Ortiz', phone: '(858) 335-8390', email: 'Sheri@Halcyonca.com', calBRE: 'CalBRE #02110275', image: '/images/halcyonheadshots/Meet-Sheri-Ortiz.jpg' },
  { name: 'Adrieke Osmun', phone: '(858) 956-4305', email: 'adrieke.halcyon@gmail.com', calBRE: 'CalBRE #02046571', image: '/images/halcyonheadshots/adrieke.jpg' },
  { name: 'Anna Short', phone: '(858) 208-3265', email: 'annashort@live.com', calBRE: 'CalBRE #02108501', image: '/images/halcyonheadshots/anna.jpg' },
  { name: 'Louise Ziminsky', phone: '(858) 449-3645', email: 'louiseziminsky@gmail.com', calBRE: 'CalBRE #00907243', image: '/images/halcyonheadshots/louise.jpg' },
  { name: 'Jan Dunlap', phone: '(858) 504-0327', email: 'jandunlaprealestate@gmail.com', calBRE: 'CalBRE #01714822', image: '/images/halcyonheadshots/jan.jpg' },
  { name: 'Patrice Fuchs', phone: '(858) 735-6926', email: 'patricefuchs01@gmail.com', calBRE: 'CalBRE #02108501', image: '/images/halcyonheadshots/patrice.jpg' },
  { name: 'Torrey Rodgers', phone: '(619) 997-6878', email: 'torrey@halcyonca.com', calBRE: 'CalBRE #02233162', image: '/images/halcyonheadshots/torrey.jpeg' },
  { name: 'Jamie Hall', phone: '(619) 997-6878', email: 'homesbyjamiehall@outlook.com', calBRE: 'CalBRE #02046571', image: '/images/halcyonheadshots/jamie.jpg' },
]

export type Property = {
  slug: string
  title: string
  status: 'for-sale' | 'for-rent'
  price: string
  beds: number
  baths: number
  sqft: number
  address: string
  date: string
  image: string
  zillowUrl: string
}

export const properties: Property[] = [
  // --- FOR SALE (10 Properties) ---
  {
    slug: '1050-concord-st-point-loma',
    title: 'Beautiful 4-Bedroom Home with Bay Views in Point Loma',
    status: 'for-sale',
    price: '$1,862,500',
    beds: 4,
    baths: 2,
    sqft: 1594,
    address: '1050 Concord St, Point Loma, CA 92106',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/concord.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/1050-Concord-St-San-Diego-CA-92106/17063013_zpid/',
  },

  {
    slug: '16749-obispo-ln-san-diego',
    title: 'Single-Story Home with Mountain Views in Seven Oaks',
    status: 'for-sale',
    price: '$880,000',
    beds: 2,
    baths: 2,
    sqft: 1386,
    address: '16749 Obispo Ln, San Diego, CA 92128',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/obispo.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/16749-Obispo-Ln-San-Diego-CA-92128/16743192_zpid/',
  },

  {
    slug: '13278-wanesta-dr-poway',
    title: 'Iconic Poway Family Home on a Quiet Cul-de-Sac with Park Views',
    status: 'for-sale',
    price: '$1,149,000',
    beds: 4,
    baths: 3,
    sqft: 1520,
    address: '13278 Wanesta Dr, Poway, CA 92064',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/wanesta.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/13278-Wanesta-Dr-Poway-CA-92064/16814758_zpid/',
  },

  {
    slug: '11242-capilla-rd-san-diego',
    title: 'Brightly Refreshed Single-Story Home with Indoor-Outdoor Living in Westwood',
    status: 'for-sale',
    price: '$1,175,000',
    beds: 3,
    baths: 2,
    sqft: 1401,
    address: '11242 Capilla Rd, San Diego, CA 92127',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/capilla.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/11242-Capilla-Rd-San-Diego-CA-92127/16739959_zpid/',
  },

  {
    slug: '718-stoneybrae-pl-escondido',
    title: 'Private 4.5-Acre Estate with Panoramic Mountain Views in Escondido',
    status: 'for-sale',
    price: '$1,225,000',
    beds: 3,
    baths: 3,
    sqft: 2290,
    address: '718 Stoneybrae Pl, Escondido, CA 92027',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/stoneybrae.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/718-Stoneybrae-Pl-Escondido-CA-92027/333879246_zpid/',
  },

  {
    slug: '13211-wimberly-sq-san-diego',
    title: 'Updated 2-Bedroom Condo with Resort-Style Community Amenities in Sabre Springs',
    status: 'for-sale',
    price: '$567,000',
    beds: 2,
    baths: 2,
    sqft: 907,
    address: '13211 Wimberly Sq #285, San Diego, CA 92128',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/wimberly.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/13211-Wimberly-Sq-UNIT-285-San-Diego-CA-92128/16811111_zpid/',  },

  {
    slug: '500-w-harbor-san-diego',
    title: 'Waterfront Downtown Living at CityFront Terrace with Bay & City Views',
    status: 'for-sale',
    price: '$915,000',
    beds: 2,
    baths: 2,
    sqft: 1184,
    address: '500 W Harbor Dr #504, San Diego, CA 92101',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/harbor.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/500-W-Harbor-Dr-UNIT-504-San-Diego-CA-92101/449916238_zpid/',
  },

  {
    slug: '3796-alabama-st-san-diego',
    title: 'Affordable North Park 1-Bedroom Condo in a Gated Community',
    status: 'for-sale',
    price: '$295,000',
    beds: 1,
    baths: 1,
    sqft: 378,
    address: '3796 Alabama St #1, San Diego, CA 92104',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/alabama.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/3796-Alabama-St-UNIT-1-San-Diego-CA-92104/16972781_zpid/',
  },

  {
    slug: '1441-9th-san-diego',
    title: 'Stunning 17th-Floor Corner Residence with Panoramic Bay & City Views',
    status: 'for-sale',
    price: '$949,000',
    beds: 2,
    baths: 2,
    sqft: 1355,
    address: '1441 9th Ave #1704, San Diego, CA 92101',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/9th.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/1441-9th-Ave-UNIT-1704-San-Diego-CA-92101/83893478_zpid/',
  },

  {
    slug: '12122-royal-birkdale-row-san-diego',
    title: 'Light-Filled 2-Bedroom Condo with Resort-Style Living in Bernardo Heights',
    status: 'for-sale',
    price: '$599,000',
    beds: 2,
    baths: 2,
    sqft: 1172,
    address: '12122 Royal Birkdale Row #103, San Diego, CA 92128',
    date: 'June 22, 2026',
    image: '/images/properties/for-sale/royalbirkdale.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/12122-Royal-Birkdale-Row-UNIT-103-San-Diego-CA-92128/16796970_zpid/',
  },

  // --- FOR RENT (5 Properties) ---
  {
    slug: '1785-marita-ln-fallbrook',
    title: 'Spacious Fallbrook Home with Private Outdoor Space and Room to Entertain',
    status: 'for-rent',
    price: '$4,050/mo',
    beds: 3,
    baths: 2.5,
    sqft: 2300,
    address: '1785 Marita Ln Unit A, Fallbrook, CA 92028',
    date: 'June 11, 2026',
    image: '/images/properties/for-rent/maritaA.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/1785-Marita-Ln-Fallbrook-CA-92028/120795231_zpid/',
  },

  {
    slug: '16755-coyote-bush-dr-san-diego',
    title: 'Spacious 3-Bedroom Townhome in Desirable Black Mountain Ranch',
    status: 'for-rent',
    price: '$4,900/mo',
    beds: 3,
    baths: 3,
    sqft: 1855,
    address: '16755 Coyote Bush Dr #34, San Diego, CA 92127',
    date: 'June 11, 2026',
    image: '/images/properties/for-rent/coyote.webp',
    zillowUrl:
      'https://www.zillow.com/b/16755-coyote-bush-dr-san-diego-ca-BMRdb7/',
  },

  {
    slug: '1785-marita-ln-unit-2-fallbrook',
    title: 'Charming 2-Bedroom Fallbrook Guest Home with Private Living Space',
    status: 'for-rent',
    price: '$3,200/mo',
    beds: 2,
    baths: 1,
    sqft: 1200,
    address: '1785 Marita Ln Unit B, Fallbrook, CA 92028',
    date: 'June 11, 2026',
    image: '/images/properties/for-rent/maritaB.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/1785-Marita-Ln-A-Fallbrook-CA-92028/464874228_zpid/',
  },

  {
    slug: '13502-los-olivos-ave-poway',
    title: 'Fully Remodeled 4-Bedroom Poway Home with Pool & Covered Patio',
    status: 'for-rent',
    price: '$4,445/mo',
    beds: 4,
    baths: 2,
    sqft: 1387,
    address: '13502 Los Olivos Ave, Poway, CA 92064',
    date: 'June 11, 2026',
    image: '/images/properties/for-rent/olivos.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/13502-Los-Olivos-Ave-Poway-CA-92064/16829807_zpid/',
  },

  {
    slug: '13451-provision-way-valley-center',
    title: 'Modern 4-Bedroom Single-Story Home with 3-Car Garage in Valley Center',
    status: 'for-rent',
    price: '$4,295/mo',
    beds: 4,
    baths: 3,
    sqft: 2620,
    address: '13451 Provision Way, Valley Center, CA 92082',
    date: 'June 11, 2026',
    image: '/images/properties/for-rent/provision.webp',
    zillowUrl:
      'https://www.zillow.com/homedetails/13451-Provision-Way-Valley-Center-CA-92082/96793044_zpid/',
  },
]


export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: { 
    heading?: string; 
    body?: string[]; 
    links?: { name: string; url: string; }[]; // <-- Add the brackets [] here
  }[]
  image?: string
}
export const blogPosts: BlogPost[] = [
  {
    slug: 'tips-on-finding-your-perfect-realtor',
    title: 'Tips on Finding Your Perfect Realtor',
    date: 'May 19, 2025',
    excerpt:
      'One of the hardest and most expensive decisions most people make is whether to buy or sell a home. That is why having a knowledgeable Realtor at your side is vital to making the process efficient and smooth.',
    content: [
      {
        body: [
          'One of the hardest and most expensive decisions most people make is whether to buy or sell a home. Not only is it expensive, but it can be stressful and time consuming!',
          'That is why having a knowledgeable Realtor at your side is vital to making the process efficient and smooth!',
        ],
      },
      {
        heading: 'What Kinds of Things Should You Look for in an Agent?',
        body: [
          'From the internet to family & friend referrals to signs on a park bench, Realtors seem to be EVERYWHERE! Additionally, if you’re in a large area, finding one real estate agent or team to work with can be overwhelming!',
          'We’re here to help by sharing some ideas on how to find the right real estate agent for you and what you should look for.',
        ],
      },
      {
        heading: 'Area Expertise',
        body: [
          'Every city or town in every state is different. From food and nightlife to neighborhoods and schools. It’s important to find a Realtor who has specific knowledge of the area you hope to live in. While market trends are a big part of your decision, you’ll want to work with someone who is well versed in more than just the current stats. Area expertise is also important in the selling process — from marketing your home to working with the buyer’s agents on any area questions that may come up.',
        ],
      },
      {
        heading: 'Ask for Referrals',
        body: [
          'Talk to your family or your peer group about who they have used in the past. Ask about their likes & dislikes. People are usually open about sharing their experiences. However, remember that what may have been a good fit for your family and friends may not necessarily be the right agent for you.',
        ],
      },
      {
        heading: 'Interviews',
        body: [
          'The interview process can be daunting. But with a clear plan, it can be fairly simple. You’re going to be spending A LOT of time with your Realtor, so make sure you’re comfortable with them! Keep a few things in mind during your interview: are they approachable, do they have a good reputation, are they taking the time to answer all of your questions? Most importantly, will they act in your best interest?',
        ],
      },
      {
        heading: 'Interview Q&A',
        body: [
          'Asking clear and concise questions will help make the process so much easier. Consider these questions: What is your marketing plan for my property? How can you help with my specific wants/needs? How many active clients do you have? What makes you different? Where is your primary area? Do you work with a team or will I be working directly with you? How long have you been a Realtor?',
        ],
      },
      {
        heading: 'Congratulations!',
        body: [
          'You’ve made your selection! Now the fun begins! Paperwork, paperwork and more paperwork is in your future, but don’t worry — your Realtor is well versed in all these forms. Buying or selling your home doesn’t have to be a super stressful time. We’re here to help! Give us a call and let’s talk!',
        ],
      },
    ],
  },
  {
    slug: 'first-time-buyers',
    title: 'First Time Buyers',
    date: 'May 19, 2025',
    excerpt:
      'The Federal Reserve has cut interest rates for the first time in four years. Here’s what that means for the housing market and for first-time buyers.',
    content: [
      {
        heading: 'The Federal Reserve has Cut Interest Rates for the First Time in Four Years',
        body: [
          'Over the last several years, we’ve seen mortgage rates peak at nearly 8%, existing home sales drop to near 1990’s levels and we hit a 40 year low in affordable homes. Looking forward, the fed expects that there will be more cuts coming which will help change the market trends over the next several months. Even though we won’t see the difference overnight, it’s welcome news for the future of the real estate market.',
        ],
      },
      {
        heading: 'What Does this Mean for the Housing Market?',
        body: [
          'With mortgage rates dropping we will see an increase in buyers looking to purchase, which leads to more sellers being motivated to list their home knowing there will be more competition.',
          'We expect to see an increase in homes for sale, along with lower borrowing costs which will help strengthen the real estate market. Demand will grow as we have the lowest interest rates we’ve seen in several years, making homeownership more accessible to a wider range of buyers. This combination of increased inventory and improved affordability is likely to create a more balanced market, benefiting both buyers and sellers.',
        ],
      },
      {
        heading: 'C.A.R. Releases its Housing Market Forecast',
        body: [
          'According to the California Association of Realtors: “A more favorable interest rate environment that will loosen up the ‘lock-in’ effect and improve housing inventory will encourage buyers and sellers to return to the market to boost both home sales and prices next year.”',
          'Housing supply conditions will continue to improve, but a moderate increase rather than a surge in active listings should be expected. As interest rates decline and the lock-in effect loosens, more properties will be released onto the market. While supply will remain below historical norms, active listings are expected to increase slightly above 10% as market conditions and the lending environment continue to improve.',
        ],
      },
    ],
  },
  {
    slug: 'maximizing-home-value',
    title: 'Maximizing Home Value',
    date: 'May 14, 2025',
    excerpt:
      'Selling your home is exciting but challenging. Here are tried-and-true tips to showcase its strengths and maximize your sale price — without breaking the bank.',
    content: [
      {
        body: [
          'Selling your home is an exciting but often challenging process. To ensure you get the best possible price for your property, it’s essential to showcase its strengths and minimize its weaknesses effectively. The good news is, you don’t have to break the bank to make your home more appealing to potential buyers.',
        ],
      },
      {
        heading: 'Declutter',
        body: [
          'Start by decluttering every inch of your home. Remove excess furniture, personal items, knick-knacks, and clutter from closets and drawers. Remember, less is more! Aim to store or get rid of at least 50% more than you initially think you need to. This will make your home appear more spacious and allow potential buyers to envision themselves living there.',
        ],
      },
      {
        heading: 'Clean, Clean, Clean!',
        body: [
          'Give your home a thorough top-to-bottom cleaning, paying special attention to corners and garages. A clean home is more inviting and can have a significant positive impact on potential buyers’ impressions.',
        ],
      },
      {
        heading: 'Enhance Curb Appeal',
        body: [
          'First impressions matter! Tidy up the exterior of your home, including the yard, landscaping, and entryway. Ask yourself if your home’s curb appeal would entice you to want to step inside.',
        ],
      },
      {
        heading: 'Let in Natural Light',
        body: [
          'Open curtains and blinds, and clean windows to maximize natural light inside your home. A bright and airy space is much more appealing to potential buyers.',
        ],
      },
      {
        heading: 'Fresh Paint & Minor Repairs',
        body: [
          'A fresh coat of paint can work wonders in freshening up your home’s appearance — focus on neutral colors that appeal to a wide range of tastes. Fix any minor issues around the house, such as replacing light bulbs, fixing leaky faucets, and tightening loose doorknobs. These small details may seem insignificant but can make a big difference in buyers’ perceptions of your home.',
        ],
      },
      {
        heading: 'Good Luck!',
        body: [
          'By following these tips, you can make your home more attractive to potential buyers and increase its chances of selling quickly and for top dollar. Remember, presentation is key, so take the time to prepare your home thoroughly before listing it on the market.',
        ],
      },
    ],
  },
  {
    slug: 'new-builds',
    title: 'New Builds',
    date: 'May 14, 2025',
    excerpt:
      'You’ve looked and looked for your perfect home but your search has come up short; or maybe you’ve always dreamed of building your own home. Here’s how to navigate new construction.',
    content: [
      {
        heading: 'Navigating New Construction',
        body: [
          'You’ve looked and looked for your perfect home but your search has come up short; or maybe you’ve always dreamed of building your own home. Whatever the reason, building a new home can be a roller coaster of elation and frustration — but with the right builder and the right agent, the process can be smooth and rewarding.',
          'Having an experienced agent represent your interests during a new-construction purchase is invaluable. Builder representatives work for the builder, not for you. We help you understand contracts, upgrades, timelines, and financing so your dream home doesn’t come with unwelcome surprises.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-our-property-management-division',
    title: 'Understanding Our Property Management Division',
    date: 'May 13, 2025',
    excerpt:
      'Halcyon started in property management in 2019 with 25 properties. Today we manage 230! Learn about one of our Four Pillars.',
    content: [
      {
        heading: 'Halcyon Started in Property Management in 2019 with 25 Properties… Today We Manage 230!',
        body: [
          'One of our ‘Four Pillars’ is our Property Management Division. We strive to provide property owners with exemplary service by valuing your investment and treating your home like our own.',
          'We offer a wide range of property management services to fit your needs — from strategic marketing and thorough tenant screening to reliable rent collection, proactive maintenance, and clear financial reporting. Our growth is a direct result of the trust our owners place in us and the care we bring to every property we manage.',
        ],
      },
    ],
  },
  {
    slug: 'is-now-a-good-time-to-buy',
    title: 'Is Now a Good Time to Buy?',
    date: 'May 13, 2025',
    excerpt:
      'Is now the time to buy a house in San Diego? In Southern California, the answer is almost always a resounding “Yes!” Here’s why.',
    content: [
      {
        heading: 'Is Now the Time to Buy a House in San Diego?',
        body: [
          'In Southern California, the answer to whether it’s the right time to buy a house is almost always a resounding “Yes!” Why? Well, let’s dive into the numbers: appreciation has been averaging over 10% year over year on many San Diego properties.',
          'The ability to recognize appreciation on the full asset value with only a percentage down is an excellent way to leverage your investment. Combine that with the long-term tax benefits of homeownership, and buying sooner rather than later often pays off. As always, we encourage everyone to consult with their CPA and to speak with us about your specific goals.',
        ],
      },
    ],
  },
  {
    slug: 'pusd-school-pages',
    title: 'PUSD School Pages',
    date: 'April 24, 2025',
    excerpt:
      'Buying in PUSD? With two Halcyon associates having served on the PUSD School Board, we are experts in what the Poway Unified School District has to offer.',
    content: [
      {
        heading: 'Buying in PUSD?',
        body: [
          'With two Halcyon associates having served on the PUSD School Board and many other associates who have worked in this area for a while, we are experts in what the Poway Unified School District has to offer.',
          'Whether you are relocating or simply moving across town, the schools in our district are a major consideration for families. See below for detailed informational sheets on each of the elementary, middle, and high schools in PUSD.',
        ],
      },
      {
        heading: 'Elementary Schools',
        links: [
          { name: 'Adobe Bluffs', url: 'https://drive.google.com/file/d/1ORdt_r_IrH-yR9sej4uxAkqegVqpCPx6/view?usp=sharing' },
          { name: 'Canyon View', url: 'https://drive.google.com/file/d/1-kLWcfHuG6N9M9q_KbR9zPrwsvuf0iFD/view?usp=drive_link' },
          { name: 'Chaparral', url: 'https://drive.google.com/file/d/1UQ0b9eH_m1vtmTmjwtNESmcEUBs-g2Kh/view?usp=drive_link' },
          { name: 'Creekside', url: 'https://drive.google.com/file/d/1xab1d9yOCI-61dM2aSLusvGpw8i7x4L_/view?usp=drive_link' },
          { name: 'Deer Canyon', url: 'https://drive.google.com/file/d/139tGzdlAEaXFTXCKm9gp5eKpOYj0MlMJ/view?usp=drive_link' },
          { name: 'Del Sur', url: 'https://drive.google.com/file/d/1WK_CnZBma7Op_X0eh3wFgWqmkrt084Zz/view?usp=drive_link' },
          { name: 'Design39', url: 'https://drive.google.com/file/d/1WRx7x_GNFZRtqWM14vMI2TM0NXnELMWt/view?usp=drive_link' },
          { name: 'Garden Road', url: 'https://drive.google.com/file/d/15m-baLsO8zJZ7GJ8Ohze-rKdMvYQmgM1/view?usp=drive_link' },
          { name: 'Highland Ranch', url: 'https://drive.google.com/file/d/1Snjop-WQtWkG5qrPAAVLV2gJsBIkPmF8/view?usp=drive_link' },
          { name: 'Los Penasquitos', url: 'https://drive.google.com/file/d/1501jGDa0afMZfxpzrOmLdwIR9OQevUsF/view?usp=drive_link' },
          { name: 'Midland', url: 'https://drive.google.com/file/d/1mbha3HCBbpP0kBR2g6PLQPIC5YYWo4pZ/view?usp=drive_link' },
          { name: 'Monterey Ridge', url: 'https://drive.google.com/file/d/1t5yxnNBXAmkGufMQKRui7__-DjUMNKJC/view?usp=drive_link' },
          { name: 'Morning Creek', url: 'https://drive.google.com/file/d/13rwwY9DlrDUQW7u9nH_P9rQheLErZyVJ/view?usp=drive_link' },
          { name: 'Painted Rock', url: 'https://drive.google.com/file/d/1RRhpOxpH2jA4ejRvarj5WfwZ3iPIIfqy/view?usp=drive_link' },
          { name: 'Park Village', url: 'https://drive.google.com/file/d/11ZPyF3yXSA6HzvM6UTEpMJBakqFG9Gp6/view?usp=drive_link' },
          { name: 'Pomerado', url: 'https://drive.google.com/file/d/1ch30flw14hqueePqZC7vYHNaOCQPsat6/view?usp=drive_link' },
          { name: 'Rolling Hills', url: 'https://drive.google.com/file/d/1dgboadTSuGm6LzLg7jHnUMZ2wXu4u34W/view?usp=drive_link' },
          { name: 'Shoal Creek', url: 'https://drive.google.com/file/d/1RZqo4ALldYEJ_PRnx-UUKftTCgaEa0LG/view?usp=drive_link' },
          { name: 'Stone Ranch', url: 'https://drive.google.com/file/d/1_fteaiVd4sQyVd8wec_Yw4jxIHnzWnS-/view?usp=drive_link' },
          { name: 'Sundance', url: 'https://drive.google.com/file/d/19DsYqk3Ijsjaqnypc0bBB9VnIH4Sghgx/view?usp=drive_link' },
          { name: 'Sunset Hills', url: 'https://drive.google.com/file/d/1W7pe9UQAuPhjeh0pG4lCj_vZ23IXOAY9/view?usp=drive_link' },
          { name: 'Tierra Bonita', url: 'https://drive.google.com/file/d/1XhF7jfqYjZum8Ca6ZI-at6VlcgqipW_x/view?usp=drive_link' },
          { name: 'Turtleback', url: 'https://drive.google.com/file/d/1_2KPNZfb7ZNwwxPrKC-AfVj81zFxnTJB/view?usp=drive_link' },
          { name: 'Valley', url: 'https://drive.google.com/file/d/1VcXNmaKAni4jhgZMv8KVRLztt2bJN-9E/view?usp=drive_link' },
          { name: 'Westwood', url: 'https://drive.google.com/file/d/1lrQ-LSyenmhA9d1Uj2wIG1Mwvl76etxW/view?usp=drive_link' },
          { name: 'Willow Grove', url: 'https://drive.google.com/file/d/1ZO_zqFCutehz4_CcP1FhNAUyJHXVx-CB/view?usp=drive_link' },
        ],
      },
      {
        heading: 'Middle Schools',
        links: [
          { name: 'Bernardo Heights', url: 'https://drive.google.com/file/d/1RZr56aQy-Q8D7oO5evCuis49CFbOr_KB/view?usp=drive_link' },
          { name: 'Black Mountain', url: 'https://drive.google.com/file/d/1lk_j0QTtV8AWzlkiaiZI-Vi0Q1jq0lrn/view?usp=drive_link' },
          { name: 'Connect Academy', url: 'https://drive.google.com/file/d/150ZzFCcG8nd5zUkN7_9LOm-jRjLtxOKQ/view?usp=drive_link' },
          { name: 'Design39', url: 'https://drive.google.com/file/d/1WRx7x_GNFZRtqWM14vMI2TM0NXnELMWt/view?usp=drive_link' },
          { name: 'Meadowbrook', url: 'https://drive.google.com/file/d/1eiqvhEiSCSt1VWdMugkXE--0n59jBQW2/view?usp=drive_link' },
          { name: 'Mesa Verde', url: 'https://drive.google.com/file/d/1RrEoJV33Khbp0B2HEoINxF2hI_JxvTX4/view?usp=drive_link' },
          { name: 'Oak Valley', url: 'https://drive.google.com/file/d/1EyOUh2vc_645hNmbL898QBpmIimhwxSc/view?usp=drive_link' },
          { name: 'Twin Peaks', url: 'https://drive.google.com/file/d/1zCS9KzB_eYfnmEhGljYmUDAg0Q9MQYru/view?usp=drive_link' },
        ],
      },
      {
        heading: 'High Schools',
        links: [
          { name: 'Abraxas', url: 'https://drive.google.com/file/d/1_OqouBMS5tGVaLxHLMtYJK__Rn9Wgson/view?usp=drive_link' },
          { name: 'Del Norte', url: 'https://drive.google.com/file/d/14kNd70R7CLVLYyM-YnTfSWdb0MoX-8nB/view?usp=drive_link' },
          { name: 'Mt. Carmel', url: 'https://drive.google.com/file/d/1_NFkRp_SIyL3KxaQPdFOl7jQuna0mQQ5/view?usp=drive_link' },
          { name: 'Poway', url: 'https://drive.google.com/file/d/1yivFz4cu1WAe0H_QWhkFBapMpuuytttl/view?usp=drive_link' },
          { name: 'Rancho Bernardo', url: 'https://drive.google.com/file/d/15LaL3M1F6rI25gIVJlAdjdpmcLp5djRr/view?usp=drive_link' },
          { name: 'Westview', url: 'https://drive.google.com/file/d/1NiZt2ZqNLf-ilOU6OVF1xbU1KkiyAj2t/view?usp=drive_link' },
        ],
      },
      {
        heading: 'Connection Schools',
        links: [
          { name: 'Poway to Palomar Middle College', url: 'https://drive.google.com/file/d/1wuBY6HoXCpIQtgvgTF0rk4XUZ1GmkKHV/view?usp=drive_link' },
        ],
      },
    ],
  },

]

export const whyHalcyon = [
  {
    title: 'Professional & Personable',
    body: 'As a mid-sized Poway property management company, our clients enjoy the capabilities of a large brokerage with a local feel.',
  },
  {
    title: 'The Best Technology',
    body: 'Our team can securely access information about all properties at any time and from anywhere, providing the best service.',
  },
  {
    title: 'Seasoned & Knowledgeable',
    body: 'Our licensed full-service Poway team brings their many years of professional experience to benefit your bottom line.',
  },
  {
    title: 'Maximizing Investor Return',
    body: 'We address vacancies and work orders promptly to ensure your investment is taken care of while minimizing client costs.',
  },
  {
    title: 'Proud to Call Home',
    body: 'We help property managers by maintaining the property, ensuring tenants are proud to come home to the properties we manage.',
  },
  {
    title: 'Fast Statements & Payments',
    body: 'Our property owner web portals and direct deposit technology make client statements and payments both paperless and seamless.',
  },
]

export const testimonials = [
  {
    quote:
      'Ginger and the Halcyon team made selling our Poway home completely stress-free. Their pricing strategy and marketing brought us multiple offers in the first week.',
    author: 'The Martinez Family',
    location: 'Poway, CA',
  },
  {
    quote:
      'As first-time buyers we had a hundred questions, and our agent answered every one with patience. We closed on our dream home ahead of schedule.',
    author: 'Daniel & Priya',
    location: 'San Diego, CA',
  },
  {
    quote:
      'Halcyon has managed our rental properties for years. On-time payments, careful tenant screening, and responsive maintenance — exactly what an owner wants.',
    author: 'R. Thompson',
    location: 'El Cajon, CA',
  },
  {
    quote:
      'Their knowledge of the local market is unmatched. We felt informed and confident at every step of our investment purchase.',
    author: 'The Nguyens',
    location: 'Rancho Bernardo, CA',
  },
]
