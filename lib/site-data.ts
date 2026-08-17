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
  { label: 'Buy', href: '/buy' },
  { label: "Buyer's Guide", href: '/buyers-guide' },
  { label: 'Buyer Resources', href: '/buyer-resources' },
  { label: 'Sell', href: '/sell' },
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
    featured: true,
  },
  { name: 'Norma Aguilar', phone: '(858) 254-2694', email: 'aleaguila1@hotmail.com', calBRE: 'CalBRE #01956133' },
  { name: 'T.J. Zane', phone: '(619) 840-8718', email: 'tjzane@tjzane.com', calBRE: 'CalBRE #02178297' },
  { name: 'Rindy Barnes', phone: '(858) 705-7633', email: 'mail@rindybarnes.com', calBRE: 'CalBRE #01930061' },
  { name: 'John Couvrette', phone: '(858) 243-5318', email: 'john.couvrette@halcyonca.com', calBRE: 'CalBRE #02105871' },
  { name: 'Cynthia Elizondo', phone: '(858) 353-1638', email: 'cynthiae1000@gmail.com', calBRE: 'CalBRE #01924853' },
  { name: 'Jen Harty', phone: '(858) 252-4546', email: 'Jen.Harty.Homes@gmail.com', calBRE: 'CalBRE #02114482' },
  { name: 'Kristine Kirkman', phone: '(858) 663-1077', email: 'kristinekirkman2@gmail.com', calBRE: 'CalBRE #02179840' },
  { name: 'Tracy Sturney', phone: '(858) 335-6067', email: 'tracygetsreal@outlook.com', calBRE: 'CalBRE #00844044' },
  { name: 'Victoria Luna', email: 'vickylunatc@gmail.com', calBRE: 'CalBRE #01887793' },
  { name: 'Sheri Ortiz', phone: '(858) 335-8390', email: 'Sheri@Halcyonca.com', calBRE: 'CalBRE #02110275' },
  { name: 'Adrieke Osmun', phone: '(858) 956-4305', email: 'adrieke.halcyon@gmail.com', calBRE: 'CalBRE #02046571' },
  { name: 'Anna Short', phone: '(858) 208-3265', email: 'annashort@live.com', calBRE: 'CalBRE #02108501' },
  { name: 'Louise Ziminsky', phone: '(858) 449-3645', email: 'louiseziminsky@gmail.com', calBRE: 'CalBRE #00907243' },
  { name: 'Jan Dunlap', phone: '(858) 504-0327', email: 'jandunlaprealestate@gmail.com', calBRE: 'CalBRE #01714822' },
  { name: 'Patrice Fuchs', phone: '(858) 735-6926', email: 'patricefuchs01@gmail.com', calBRE: 'CalBRE #02108501' },
  { name: 'Torrey Rodgers', phone: '(619) 997-6878', email: 'torrey@halcyonca.com', calBRE: 'CalBRE #02233162' },
  { name: 'Jamie Hall', phone: '(619) 997-6878', email: 'homesbyjamiehall@outlook.com', calBRE: 'CalBRE #02046571' },
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
  image?: string
  description: string
}

export const properties: Property[] = [
  {
    slug: 'seven-oaks-move-in-ready',
    title: 'Move-In Ready Seven Oaks Home with Paid Solar, Views & Resort-Style Amenities',
    status: 'for-sale',
    price: '$1,100,000',
    beds: 3,
    baths: 2,
    sqft: 1926,
    address: '16172 Selva Dr, San Diego, CA 92128',
    date: 'June 22, 2026',
    image: '/images/hero-exterior.png',
    description:
      'Situated on a desirable corner lot, this beautiful 3-bedroom, 2-bath home captures scenic hilltop views from the backyard pergola and multiple bedrooms. Thoughtfully designed for comfort and functionality, the home features PAID OFF SOLAR and an oversized chef-inspired kitchen with abundant cabinetry and counter space. The resort-style community offers pools, spas, tennis courts, and miles of walking trails.',
  },
  {
    slug: 'cityfront-terrace-downtown-views',
    title: 'Resort-Style Luxury at City Front Terrace with Iconic Downtown Views',
    status: 'for-sale',
    price: '$975,000',
    beds: 2,
    baths: 2,
    sqft: 1184,
    address: '500 W Harbor Dr Unit 619, San Diego, CA 92101',
    date: 'June 22, 2026',
    image: '/images/hero-interior.png',
    description:
      'Experience resort-style living at the prestigious CityFront Terrace. From the moment you arrive, you are welcomed by valet service, a doorman, and attentive concierge staff creating an elevated, executive-style living experience. Located on the ideal 6th floor, this residence offers iconic downtown and bay views, floor-to-ceiling windows, and access to two pools, spas, and a fitness center.',
  },
  {
    slug: 'washington-ave-el-cajon-rental',
    title: 'Move-In Ready! Fully Upgraded Home with Storage & Utilities Included',
    status: 'for-rent',
    price: '$1,875/mo',
    beds: 1,
    baths: 1,
    sqft: 1008,
    address: '1260 E Washington Ave, Unit 8, El Cajon, CA 92019',
    date: 'June 11, 2026',
    image: '/images/hero-interior.png',
    description:
      'Remodeled unit ready for immediate move-in! This light and bright home features a spacious floor plan with new flooring throughout. The property has recently undergone a renovation including fresh paint, new flooring, new countertops, new cabinets and new appliances. Additional storage and utilities are included, making this an easy, worry-free rental.',
  },
]

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: { heading?: string; body: string[] }[]
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
          'Whether you are relocating or simply moving across town, the schools in our district are a major consideration for families. Reach out to us for detailed informational sheets on each of the elementary, middle, and high schools in PUSD.',
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
