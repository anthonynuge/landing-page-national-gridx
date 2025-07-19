import { Handshake, BarChart3, FileText, TrendingUp, Leaf } from "lucide-react";

export const faqItems = [
  {
    question: "What does NGX Energy do?",
    answer:
      "NGX Energy is a licensed energy brokerage that helps businesses and residents secure competitive electricity and natural gas rates through trusted supplier partnerships.",
  },
  {
    question: "How does the energy brokerage process work?",
    answer:
      "We analyze your usage data and current contract terms, then source real-time pricing from top energy providers to find a plan that fits your needs and budget.",
  },
  {
    question: "Is there a cost to work with NGX Energy?",
    answer:
      "There is no direct cost to you. Our compensation typically comes from the energy supplier, allowing us to provide guidance and rate comparisons at no charge to you.",
  },
  {
    question: "Can you help with both commercial and residential accounts?",
    answer:
      "Yes. We specialize in commercial energy solutions but also assist residents in deregulated markets who want better control over their electricity plans.",
  },
  {
    question: "What utilities and markets do you support?",
    answer:
      "We currently serve customers across deregulated markets in Texas and other U.S. states, working with all major utilities and licensed retail energy providers.",
  },
];

export const SERVICES = [
  {
    title: "Custom Energy Procurement",
    summary:
      "Secure cost-effective and reliable energy contracts tailored to your business goals.",
    description:
      "Our procurement experts work directly with leading energy suppliers to negotiate contracts specifically aligned with your usage patterns, risk tolerance, and budgetary needs. We leverage market timing, competitive bids, and forward pricing strategies to lock in favorable rates while protecting against market volatility. Whether you operate across multiple states or under a single meter, we customize your energy buying approach for maximum long-term savings and stability.",
    icon: Handshake,
    image: "/services/energy-procurement.jpg",
  },
  {
    title: "Usage & Spend Analytics",
    summary:
      "Transform raw energy data into actionable insights for smarter energy decisions.",
    description:
      "Gain visibility into your energy consumption and costs with detailed analytics tools that track usage trends, billing anomalies, and peak demand periods. Our platform offers real-time monitoring, usage forecasts, and customizable reports to help you optimize operational efficiency and reduce waste. With these insights, you can identify inefficiencies, verify utility invoices, and make strategic decisions around equipment, schedules, and energy behavior.",
    icon: BarChart3,
    image: "/services/solar.jpg",
  },
  {
    title: "Contract Management",
    summary:
      "Stay ahead of contract expirations, market shifts, and renegotiation windows.",
    description:
      "We offer comprehensive oversight of your energy contracts, including automated alerts for renewal deadlines, performance tracking, and risk analysis. Our system ensures you never miss an opportunity to renegotiate, rebid, or adapt to changing market conditions. By proactively managing each contract, we help you maintain favorable terms, avoid costly rollovers, and respond strategically to utility rate adjustments or regulatory changes.",
    icon: FileText,
    image: "/services/power.jpg",
  },
  {
    title: "Market Intelligence",
    summary:
      "Make informed decisions with forward-looking energy market data and expert insight.",
    description:
      "Our team provides access to up-to-date market reports, tariff forecasts, and regulatory developments that impact energy pricing and strategy. We interpret complex data into practical guidance tailored to your industry and region, empowering you to hedge effectively, time renewals, and identify emerging opportunities. From natural gas price movements to ISO updates, we help you navigate the energy landscape with confidence.",
    icon: TrendingUp,
    image: "/services/usage-analytics.jpg",
  },
  {
    title: "Sustainability Planning",
    summary:
      "Build a greener future with customized ESG strategies and renewable solutions.",
    description:
      "We guide businesses through every step of their sustainability journey — from setting achievable ESG goals to integrating renewable energy sources and tracking carbon performance. Our services include sourcing green power, implementing energy efficiency upgrades, and creating detailed sustainability roadmaps that align with your brand and regulatory commitments. Through transparent reporting and actionable steps, we turn your sustainability vision into measurable impact.",
    icon: Leaf,
    image: "/services/sustainability.jpg",
  },
];
