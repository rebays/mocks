// ─── Navigation ───────────────────────────────────────────────────────────────

export const nav = [
  {
    label: "About",
    items: [
      { label: "About Parliament", href: "/about" },
      { label: "Standing Orders", href: "/about" },
      { label: "Speaker's Office", href: "/about" },
      { label: "Corporate Services", href: "/about" },
      { label: "Departments", href: "/about" },
      { label: "Vacancies", href: "/about" },
      { label: "Contact Us", href: "/about" },
    ],
  },
  {
    label: "Members",
    items: [
      { label: "Current Members", href: "/members" },
      { label: "Past Members", href: "/members" },
    ],
  },
  {
    label: "Committees",
    items: [
      { label: "Committees Overview", href: "/committees" },
      { label: "Chairpersons", href: "/committees" },
      { label: "Committee Reports", href: "/committees" },
    ],
  },
  {
    label: "Business",
    items: [
      { label: "Overview", href: "/business" },
      { label: "Acts", href: "/business" },
      { label: "Bills", href: "/business" },
      { label: "Hansard", href: "/business" },
      { label: "Minutes", href: "/business" },
      { label: "Order Papers", href: "/business" },
    ],
  },
  {
    label: "Media",
    items: [
      { label: "Press Releases", href: "/media" },
      { label: "Photo Gallery", href: "/media" },
      { label: "Video Gallery", href: "/media" },
    ],
  },
];

// ─── Quick Links ──────────────────────────────────────────────────────────────

export const quickLinks = [
  { label: "Watch Live", icon: "Video", href: "/media" },
  { label: "Order Papers", icon: "FileText", href: "/business" },
  { label: "Hansard", icon: "BookOpen", href: "/business" },
  { label: "Committee Reports", icon: "ClipboardList", href: "/committees" },
  { label: "Vacancies", icon: "Briefcase", href: "/about" },
  { label: "Minutes", icon: "Clock", href: "/business" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "50", label: "Members of Parliament", sub: "Elected across 50 constituencies" },
  { value: "9", label: "Provinces", sub: "Plus Honiara Capital Territory" },
  { value: "10", label: "Standing Committees", sub: "Overseeing all government portfolios" },
  { value: "10th", label: "Parliament", sub: "Current session in progress" },
];

// ─── News / Press Releases ────────────────────────────────────────────────────

export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Parliament Passes Constitutional Amendment Bill 2026",
    excerpt:
      "The National Parliament has passed the Constitutional Amendment Bill by a majority vote, introducing key reforms to electoral representation and provincial governance.",
    category: "Legislation",
    date: "15 May 2026",
    href: "/business",
  },
  {
    id: 2,
    title: "Professional Development Programme for MPs on the Committee System",
    excerpt:
      "Members of Parliament participated in a structured professional development programme focused on strengthening the effectiveness of the committee system.",
    category: "Events",
    date: "10 May 2026",
    href: "/media",
  },
  {
    id: 3,
    title: "Parliamentary Resource Book Training Concludes Successfully",
    excerpt:
      "A comprehensive training programme using the newly developed Parliamentary Resource Book has concluded, equipping MPs with improved legislative skills.",
    category: "Events",
    date: "5 May 2026",
    href: "/media",
  },
  {
    id: 4,
    title: "Taking Parliament to the People Initiative Launched",
    excerpt:
      "The National Parliament launches its community outreach programme, bringing parliamentary proceedings and civic education directly to rural constituencies.",
    category: "Community",
    date: "28 Apr 2026",
    href: "/media",
  },
  {
    id: 5,
    title: "Public Accounts Committee Tables 2025 Audit Report",
    excerpt:
      "The Public Accounts Committee has tabled its annual report following a review of the 2025 government accounts, making 24 recommendations to the Ministry of Finance.",
    category: "Committees",
    date: "22 Apr 2026",
    href: "/committees",
  },
  {
    id: 6,
    title: "National Fisheries Amendment Bill 2026 Introduced",
    excerpt:
      "The Minister of Fisheries introduced the National Fisheries Amendment Bill, seeking to update licensing frameworks and strengthen conservation provisions.",
    category: "Legislation",
    date: "14 Apr 2026",
    href: "/business",
  },
];

// ─── Members ─────────────────────────────────────────────────────────────────

export type Member = {
  id: number;
  name: string;
  constituency: string;
  province: string;
  party: string;
  role?: string;
};

export const provinces = [
  "All Provinces",
  "Choiseul",
  "Western",
  "Isabel",
  "Central Islands",
  "Rennell & Bellona",
  "Malaita",
  "Makira-Ulawa",
  "Guadalcanal",
  "Temotu",
  "Honiara City",
];

export const members: Member[] = [
  { id: 1, name: "Hon. Jeremiah Manele", constituency: "Gela", province: "Central Islands", party: "OUR Party", role: "Prime Minister" },
  { id: 2, name: "Hon. Peter Kenilorea Jr.", constituency: "East Are'are", province: "Malaita", party: "Democratic Party" },
  { id: 3, name: "Hon. David Deve", constituency: "North Guadalcanal", province: "Guadalcanal", party: "Independent" },
  { id: 4, name: "Hon. Matthew Wale", constituency: "Aoke-Langalanga", province: "Malaita", party: "Independent" },
  { id: 5, name: "Hon. Lanelle Tanangada", constituency: "North West Guadalcanal", province: "Guadalcanal", party: "OUR Party", role: "Deputy Speaker" },
  { id: 6, name: "Hon. Gordon Darcy Lilo", constituency: "Gizo-Kolombangara", province: "Western", party: "Independent" },
  { id: 7, name: "Hon. Silas Taro", constituency: "North Isabel", province: "Isabel", party: "OUR Party" },
  { id: 8, name: "Hon. Commins Aston Mewa", constituency: "North Malaita", province: "Malaita", party: "Independent" },
  { id: 9, name: "Hon. Bradley Tovosia", constituency: "Rendova-Tetepari", province: "Western", party: "OUR Party" },
  { id: 10, name: "Hon. Augustine Auga", constituency: "East Kwaio", province: "Malaita", party: "Independent" },
  { id: 11, name: "Hon. Abraham Voagai", constituency: "East Makira", province: "Makira-Ulawa", party: "Democratic Party" },
  { id: 12, name: "Hon. Rexson Ramofafia", constituency: "Small Malaita", province: "Malaita", party: "Independent" },
  { id: 13, name: "Hon. Duddley Kopu", constituency: "Langa Langa", province: "Malaita", party: "OUR Party" },
  { id: 14, name: "Hon. Patrick Vaqara", constituency: "Choiseul Bay", province: "Choiseul", party: "OUR Party" },
  { id: 15, name: "Hon. John Maneniaru", constituency: "West Are'are", province: "Malaita", party: "Independent" },
  { id: 16, name: "Hon. Fred Sade", constituency: "Temotu Nende", province: "Temotu", party: "OUR Party" },
  { id: 17, name: "Hon. Christopher Laore", constituency: "East Choiseul", province: "Choiseul", party: "Independent" },
  { id: 18, name: "Hon. Nestor Sanga", constituency: "Central Kwara'ae", province: "Malaita", party: "OUR Party" },
  { id: 19, name: "Hon. Andrew Maelea", constituency: "South Guadalcanal", province: "Guadalcanal", party: "Independent" },
  { id: 20, name: "Hon. Douglas Ete", constituency: "Central Honiara", province: "Honiara City", party: "OUR Party" },
  { id: 21, name: "Hon. Patteson Oti", constituency: "East Honiara", province: "Honiara City", party: "Democratic Party" },
  { id: 22, name: "Hon. Rickson Mua", constituency: "West Honiara", province: "Honiara City", party: "Independent" },
  { id: 23, name: "Hon. Manasseh Maelanga", constituency: "North Vella Lavella", province: "Western", party: "OUR Party" },
  { id: 24, name: "Hon. Paul Tozaka", constituency: "South Choiseul", province: "Choiseul", party: "Independent" },
];

// ─── Committees ───────────────────────────────────────────────────────────────

export type Committee = {
  id: number;
  name: string;
  chair: string;
  memberCount: number;
  description: string;
  recentReport?: string;
};

export const committees: Committee[] = [
  {
    id: 1,
    name: "Public Accounts Committee",
    chair: "Hon. Matthew Wale",
    memberCount: 7,
    description: "Examines the accounts of government ministries and ensures public funds are spent appropriately and in accordance with parliamentary appropriation.",
    recentReport: "Annual Audit Review Report 2025",
  },
  {
    id: 2,
    name: "Natural Resources Committee",
    chair: "Hon. Silas Taro",
    memberCount: 6,
    description: "Oversees government policies relating to natural resources including forestry, mining, and land use across the Solomon Islands.",
    recentReport: "Forestry Licensing Review 2025",
  },
  {
    id: 3,
    name: "Constitutional Matters Committee",
    chair: "Hon. Peter Kenilorea Jr.",
    memberCount: 9,
    description: "Reviews proposed constitutional amendments and advises Parliament on matters of constitutional interpretation and reform.",
    recentReport: "Electoral Boundaries Review 2025",
  },
  {
    id: 4,
    name: "Foreign Relations Committee",
    chair: "Hon. Gordon Darcy Lilo",
    memberCount: 6,
    description: "Scrutinises international agreements, diplomatic relations and foreign policy matters that come before Parliament.",
    recentReport: "PACER Plus Implementation Report 2025",
  },
  {
    id: 5,
    name: "Public Finance Committee",
    chair: "Hon. David Deve",
    memberCount: 7,
    description: "Examines national budget proposals, supplementary appropriations, and oversees macroeconomic fiscal policy and public debt management.",
    recentReport: "Mid-Year Budget Review 2026",
  },
  {
    id: 6,
    name: "Laws and Justice Committee",
    chair: "Hon. Abraham Voagai",
    memberCount: 6,
    description: "Reviews proposed legislation, examines law reform proposals, and scrutinises the performance of the justice system.",
    recentReport: "Criminal Procedures Review 2025",
  },
  {
    id: 7,
    name: "Social Services Committee",
    chair: "Hon. Lanelle Tanangada",
    memberCount: 7,
    description: "Oversees education, health, welfare, women's affairs, and community development policies and their implementation.",
    recentReport: "Health Infrastructure Report 2025",
  },
  {
    id: 8,
    name: "Economic Reforms Committee",
    chair: "Hon. Patteson Oti",
    memberCount: 6,
    description: "Examines economic development policies, investment frameworks, and trade agreements affecting the Solomon Islands economy.",
    recentReport: "FDI Framework Review 2026",
  },
  {
    id: 9,
    name: "Government Oversight Committee",
    chair: "Hon. Christopher Laore",
    memberCount: 7,
    description: "Monitors the performance of government ministries, statutory bodies and state-owned enterprises in implementing approved policies.",
    recentReport: "SOE Performance Review 2025",
  },
  {
    id: 10,
    name: "Fisheries & Environment Committee",
    chair: "Hon. Bradley Tovosia",
    memberCount: 6,
    description: "Oversees sustainable fisheries management, environmental protection, and climate change adaptation policies.",
    recentReport: "Tuna Licensing Framework 2026",
  },
];

// ─── Bills ────────────────────────────────────────────────────────────────────

export type Bill = {
  id: number;
  number: string;
  title: string;
  stage: string;
  stageColor: string;
  introduced: string;
  minister: string;
};

export const bills: Bill[] = [
  { id: 1, number: "Bill 12/2026", title: "Constitutional Amendment Bill 2026", stage: "Royal Assent", stageColor: "green", introduced: "14 Mar 2026", minister: "Attorney General" },
  { id: 2, number: "Bill 11/2026", title: "National Fisheries Amendment Bill 2026", stage: "Third Reading", stageColor: "blue", introduced: "14 Apr 2026", minister: "Fisheries" },
  { id: 3, number: "Bill 10/2026", title: "Public Service Amendment Bill 2026", stage: "Committee Stage", stageColor: "amber", introduced: "2 Apr 2026", minister: "Public Service" },
  { id: 4, number: "Bill 9/2026", title: "Customs and Excise Amendment Bill 2026", stage: "Second Reading", stageColor: "amber", introduced: "18 Mar 2026", minister: "Finance" },
  { id: 5, number: "Bill 8/2026", title: "Land and Titles Amendment Bill 2026", stage: "First Reading", stageColor: "gray", introduced: "5 Mar 2026", minister: "Lands" },
  { id: 6, number: "Bill 7/2026", title: "Telecommunications Amendment Bill 2026", stage: "First Reading", stageColor: "gray", introduced: "28 Feb 2026", minister: "Communications" },
];

export type Act = {
  id: number;
  number: string;
  title: string;
  enacted: string;
  commencement: string;
};

export const acts: Act[] = [
  { id: 1, number: "Act 8/2025", title: "National Fisheries Act 2025", enacted: "22 Oct 2025", commencement: "1 Jan 2026" },
  { id: 2, number: "Act 7/2025", title: "Taxation Administration Act 2025", enacted: "15 Sep 2025", commencement: "1 Oct 2025" },
  { id: 3, number: "Act 6/2025", title: "Environment and Conservation Act 2025", enacted: "3 Aug 2025", commencement: "3 Aug 2025" },
  { id: 4, number: "Act 5/2025", title: "Financial Institutions (Amendment) Act 2025", enacted: "17 Jun 2025", commencement: "1 Jul 2025" },
  { id: 5, number: "Act 4/2025", title: "Mines and Minerals (Amendment) Act 2025", enacted: "4 May 2025", commencement: "4 May 2025" },
  { id: 6, number: "Act 3/2025", title: "Public Finance and Audit Act 2025", enacted: "20 Mar 2025", commencement: "1 Apr 2025" },
];

export const hansard = [
  { date: "15 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 28", href: "/business" },
  { date: "14 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 27", href: "/business" },
  { date: "13 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 26", href: "/business" },
  { date: "8 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 25", href: "/business" },
  { date: "7 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 24", href: "/business" },
  { date: "6 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 23", href: "/business" },
];

export const upcomingSittings = [
  { date: "Tue 27 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 29" },
  { date: "Wed 28 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 30" },
  { date: "Thu 29 May 2026", session: "10th Parliament – 3rd Session", sitting: "Sitting 31" },
];

// ─── Press Releases ───────────────────────────────────────────────────────────

export const pressReleases: NewsItem[] = [
  ...news,
  {
    id: 7,
    title: "Parliament Celebrates 48th Anniversary of Independence",
    excerpt:
      "The National Parliament marked Solomon Islands' 48th anniversary of independence with a special commemorative sitting, reflecting on the nation's democratic journey since 1978.",
    category: "General",
    date: "7 Jul 2026",
    href: "/media",
  },
  {
    id: 8,
    title: "New Parliamentary Website Launched",
    excerpt:
      "The Clerk of Parliament announced the launch of a modernised parliamentary website, improving public access to Hansard, committee reports, and legislative documents.",
    category: "General",
    date: "1 Mar 2026",
    href: "/media",
  },
];
