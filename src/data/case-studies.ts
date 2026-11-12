import type { ImageMetadata } from 'astro';
import case1Intro from '../assets/images/case-1-intro.png';
import case1WhatChanged from '../assets/images/case-1-what-changed.png';
import case2Intro from '../assets/images/case-2-intro.png';
import case2WhatChanged from '../assets/images/case-2-what-changed.png';
import case3Intro from '../assets/images/case-3-intro.png';
import case3WhatChanged from '../assets/images/case-3-what-changed.png';

export interface CaseStudy {
  client: string;
  disciplines: string;
  headline: string;
  /** Fields below marked "HTML" are rendered as markup, so <br> and <strong> work. */
  intro: string;
  introImage: ImageMetadata;
  challenge: string;
  challengeHeadline: string;
  whatWeDid: string;
  steps: { title: string; text: string }[];
  whatChangedHeadline: string;
  whatChanged: string;
  whatChangedImage: ImageMetadata;
  quote: string;
  attribution: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Love, Bonito',
    disciplines: 'CRM & Loyalty · Customer Strategy · Organisation',
    headline: 'Turning CRM\u00a0& Loyalty into growth engines.',
    intro:
      "Love, Bonito already had strong foundations: a loved brand, an engaged community and ambitious plans for growth.<br><br>The question wasn't whether CRM and loyalty were working. It was whether they were ready for what came next.",
    introImage: case1Intro,
    challenge:
      'As the business scaled, CRM needed to evolve beyond campaign execution. Loyalty needed a clearer role in the customer proposition. And the team needed the structure, talent and measures to make both commercially meaningful.<br>',
    challengeHeadline: 'Take something good<br>and make it&nbsp;<span class="text-span-2">growth-ready.</span>',
    whatWeDid:
      'We started with a 360° Customer Health Check across CRM, loyalty, analytics, customer experience and organisation — combining leadership interviews, programme audits, data and technology assessments, and external benchmarks.<br><br>That diagnosis became the blueprint for a broader reset. We redesigned the customer organisation around <strong>Customer Growth &amp; Loyalty</strong>, established North Star KPIs, supported the hiring of key talent and reframed CRM from campaign support into a strategic growth function.<br><br>For loyalty, we shifted the conversation beyond discounts and transactions toward exclusivity, experience and community.<br><br>',
    steps: [
      { title: 'DIAGNOSE', text: 'Assessed current state across people, process, data and programmes.' },
      { title: 'RESET', text: 'Redesigned the organisational setup and operating model for growth.' },
      { title: 'PRIORITISE', text: 'Defined a clear roadmap, North Star KPIs, and key initiatives.' },
      { title: 'BUILD', text: 'Supported talent hiring, capability building, change activation.' },
    ],
    whatChangedHeadline: 'A clearer growth agenda.<br>A stronger team. <br>A more ambitious role for CRM and loyalty.',
    whatChanged:
      'The work gave Love, Bonito a prioritised roadmap spanning immediate fixes - from email governance to frontline activation - and longer-term opportunities including predictive analytics and loyalty monetisation.',
    whatChangedImage: case1WhatChanged,
    quote:
      "Customerist gave us the reset we needed...<br>Today, we're clearer, bolder, and better equipped to build the kind of customer love that sets Love, Bonito apart.",
    attribution: '<strong>Dione Song</strong><br>CEO, Love, Bonito',
  },
  {
    client: "Mozilla Foundation's MozFest",
    disciplines: 'Customer Strategy · Audience Segmentation · Market Prioritisation · Partnerships',
    headline: 'Turning years of research into a festival growth plan.',
    intro:
      "MozFest, Mozilla's flagship gathering of technologists, activists, educators and creators shaping a healthier internet — was returning to Barcelona in 2025 with a bold ambition: grow 10x and attract more diverse, mission-aligned audiences.<br><br>The question wasn't whether Mozilla understood its community. It was whether all that understanding could become a plan in time for the festival.",
    introImage: case2Intro,
    challenge:
      'Past surveys and studies abounded. What was missing was a clear, actionable audience strategy — one that could drive growth, diversity and partnerships on a festival timeline, without commissioning yet another survey.<br>',
    challengeHeadline: 'Make sense of what you already know.',
    whatWeDid:
      'We synthesised years of existing research into three actionable MetaSegments, blending attitudinal and behavioural insight.<br><br>Then we built a data-driven model ranking 80+ cities on tech maturity, education clusters, cost efficiency and travel accessibility — and turned it into a roadmap for where to invest ad spend, where to lean on CRM, and where to rely on PR and partnerships.<br><br>Finally, we mapped an ecosystem of 100+ potential partners, from NGOs to conferences to ethical brands, and recommended tactical opportunities to embed MozFest in Barcelona and beyond.<br><br>',
    steps: [
      { title: 'SYNTHESISE', text: 'Reframed broad survey data into three Meta Segments.' },
      { title: 'PRIORITISE', text: 'Ranked 80+ cities and defined which channel leads where.' },
      { title: 'CONNECT', text: 'Curated 100+ potential partners across NGOs, events and ethical brands.' },
      { title: 'ACTIVATE', text: 'Recommended local tactics to embed MozFest in Barcelona and globally.' },
    ],
    whatChangedHeadline: 'A decision-ready strategy in under six weeks. <br>A clearer path to growth. <br>A stronger story to tell.',
    whatChanged:
      'Mozilla knew who to target, where to find them and how to reach them — with a sharper case for mission-aligned sponsors and collaborators.<br><br>MozFest was reframed from an event into a platform for growing a diverse, engaged community, while staying true to its purposeful DNA.',
    whatChangedImage: case2WhatChanged,
    quote:
      "<strong>Customerist helped us make sense of years of research and turn it into something immediately actionable… We're entering MozFest 2025 with a growth strategy that feels both ambitious and achievable.</strong>",
    attribution: '<strong>Lauren Hendry Parsons</strong><br>Director of Communications, Mozilla Foundation',
  },
  {
    client: "Mozilla Foundation's Content",
    disciplines: 'Audience Strategy · Market Prioritisation · Engagement Planning',
    headline: 'Turning insight into market focus.',
    intro:
      "A year after MozFest, Mozilla came back with a bigger question. They already had great data: rich audience insight and a solid editorial strategy.<br><br>The question wasn't who to talk to. It was where to double down — so their content actually moved the needle, rather than preaching to the choir.",
    introImage: case3Intro,
    challenge:
      'Convert rich audience insight into clear distribution priorities, smart geographic focus, resource discipline — and decisions teams could actually execute.<br><br>Without commissioning another survey. Without another persona deck. Without slowing momentum.<br>',
    challengeHeadline: 'Focus is a growth strategy.',
    whatWeDid:
      "We built an <strong>Audience-to-Market</strong> decision framework designed for action.<br><br>Starting from Mozilla's three core audiences, we mapped 14 subsegments against real-world tech tensions — from parental data privacy to AI-driven creative 'extraction'.<br><br>Then we ran 150+ global cities through a simple filter: can we reach them, is it feasible on language and access, and what does attention cost? Every city was tiered, so the team knew exactly where to lead and where to just keep a light on.<br><br>For each subsegment, we built the playbook: what to say, how to say it, and which channels actually matter.<br><br>",
    steps: [
      { title: 'DEFINE', text: 'Mapped 14 subsegments against real-world tech tensions.' },
      { title: 'FILTER', text: 'Evaluated 150+ cities on reach, feasibility and cost of attention.' },
      { title: 'TIER', text: 'Built Tier 1 shortlists: where to lead, where to keep a light on.' },
      { title: 'ENGAGE', text: 'Playbooks for message, tone and channels per subsegment.' },
    ],
    whatChangedHeadline: 'From broad ambition to precise execution. From "global reach" to knowing exactly where to stand.',
    whatChanged:
      'Mozilla now has specific cities per audience, clear tiering logic, defined engagement modes and a shared language across strategy, editorial and distribution — plus a defensible rationale for 2026 investment decisions.<br><br>Most importantly, they know where <strong>not</strong> to spend energy.',
    whatChangedImage: case3WhatChanged,
    quote:
      '<strong>Re-engaging Customerist for a second project was an easy decision. They bring structure, sharp thinking, and a genuine understanding of how movements grow — not just how campaigns run.</strong>',
    attribution: 'VP Strategic Communications, Mozilla Foundation',
  },
];
