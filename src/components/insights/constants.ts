export type Article = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  link: `/insights/${string}`;
  category: string[];
  body: string;
};

export function getAllArticleLinks() {
  return ARTICLES.map((a) => a.link); // e.g. "/articles/smart-procurement-savings"
}

export function getArticleBySlug(slug: string) {
  const path = `/insights/${slug}`;
  return ARTICLES.find((a) => a.link === path) ?? null;
}

export const ARTICLES: Article[] = [
  {
    title: "How Smart Energy Procurement Saves Businesses Thousands",
    description:
      "Discover how NGX Energy helped a mid-size manufacturing company reduce their annual energy bill by 27% through strategic contract negotiation and usage analytics.",
    image: "/services/powerLine.jpg",
    date: "2025-07-01",
    author: "NGX Energy Team",
    link: "/insights/smart-procurement-savings",
    category: ["Energy Strategy", "Case Study"],
    body: `
## The Challenge

For many mid-size manufacturers, energy is one of the most significant line items on the balance sheet. Yet because it’s viewed as a fixed cost, few companies take the time to examine whether their procurement strategy truly matches their operations. That was the situation facing a regional plastics manufacturer in Texas. Their existing supply contract locked them into flat rates that failed to account for seasonal production swings. During peak months, they paid heavily in demand charges; during slower periods, they were essentially paying for capacity they didn’t use. By the time their renewal date was approaching, the finance team was bracing for a double-digit increase in annual costs.

## Our Approach

NGX Energy began with a comprehensive review of the company’s past two years of usage data. Rather than focusing only on average monthly bills, we looked closely at how their energy demand rose and fell throughout the year and even week to week. This revealed a clear pattern: while baseline usage was relatively stable, production surges created costly spikes. That insight shaped our negotiation strategy. We benchmarked offers from dozens of suppliers, modeled various contract structures, and timed our entry into the market to take advantage of favorable wholesale prices. The key was to strike a balance between cost certainty and the flexibility the manufacturer needed.

## The Solution

The final agreement blended a long-term fixed block to cover steady baseline usage with a more flexible product that allowed the company to capture lower rates during off-peak periods. By renegotiating the treatment of pass-through charges, we also eliminated hidden fees that had quietly inflated their bills for years. Just as importantly, we built in new reporting tools, giving the operations team clear visibility into how daily production decisions affected monthly energy spend. Energy procurement, once treated as a passive renewal task, became an active part of financial planning.

## The Results

The outcome was immediate and measurable. In the first year alone, the manufacturer reduced its total energy costs by 27 percent—roughly one hundred eighty thousand dollars in savings. Those dollars were reinvested in new machinery upgrades that had been postponed for years. The CFO noted that what impressed her most was not just the savings, but the clarity: for the first time, she could explain to her board exactly how energy costs were being managed and why the company’s exposure to market volatility was under control.

## Conclusion

This case illustrates a broader truth: energy is not simply a utility expense but a lever for competitiveness. Companies that treat procurement strategically—grounded in data, tailored contracts, and market timing—can unlock savings that strengthen both their operations and their balance sheets. NGX Energy’s role is to make that process transparent, so that leadership teams can turn energy management from a hidden cost center into a source of advantage.

    `,
  },
  {
    title: "Understanding Deregulated Energy Markets in Texas",
    description:
      "A beginner-friendly guide to how deregulated electricity markets work — and how businesses can benefit by choosing the right supplier.",
    image: "/home/three-panel/engineer2.jpg",
    date: "2025-06-20",
    author: "John Mendez",
    link: "/insights/deregulated-markets-texas",
    category: ["Education", "Market Insights"],
    body: `
## Introduction

If you run a business in Texas, chances are you’ve heard the phrase “deregulated energy market.” But what does it really mean? And more importantly, how can it affect the way you purchase electricity for your facilities? Texas is unique in that much of the state operates under a competitive retail electricity market. Instead of being locked into a single utility, businesses have the power to choose their electricity supplier. This freedom creates opportunities for savings and flexibility, but it also introduces complexity for those unfamiliar with the system.

## What Deregulation Means

In a regulated electricity market, one company handles everything: generation, transmission, distribution, and billing. Rates are set by regulators, and customers have little choice but to accept them. By contrast, a deregulated market separates these roles. The wires and poles are still maintained by a utility (called a Transmission and Distribution Utility, or TDU), but the electricity itself can be purchased from any number of licensed Retail Electric Providers (REPs).  

For a Texas business, this means your utility remains the same when it comes to keeping the lights on, but you are free to shop around for who actually sells you the power.

## The Benefits for Businesses

The biggest advantage of deregulation is competition. Because multiple REPs are vying for your business, pricing structures and contract terms are negotiable. A manufacturer with high overnight usage might find a plan tailored to off-peak rates, while an office-based company may benefit more from a flat, predictable price. Beyond cost, some suppliers differentiate themselves with renewable energy options, flexible contract lengths, or enhanced account management services.  

This ability to align your electricity contract with your actual operational profile is where the real value lies. Businesses that treat energy procurement strategically often discover that even small adjustments in contract terms can translate into thousands of dollars in annual savings.

## Common Pitfalls

Of course, with choice comes responsibility. Many businesses make the mistake of renewing contracts blindly, assuming the rates they’re offered are competitive. Others sign agreements that look attractive on the surface but contain hidden fees or unfavorable pass-through charges. The complexity of energy usage data can also lead to misalignment between a contract’s assumptions and a company’s true demand profile. Without proper analysis, what seems like a good deal can end up costing far more than expected.

## Moving Forward

Understanding how deregulated markets work is the first step. The second is putting that knowledge into action. By analyzing your energy usage patterns, comparing supplier offers, and timing your procurement to market conditions, you can transform electricity from a fixed expense into a controllable cost. In Texas, where deregulation has created one of the most competitive markets in the country, businesses that take a proactive approach stand to gain the most.  

For companies that want to unlock these advantages but don’t have in-house energy expertise, working with an experienced procurement partner can provide the insight and leverage needed to secure the right deal.

## Conclusion

Deregulation in Texas isn’t just an industry buzzword — it’s a powerful opportunity for businesses. By understanding the rules of the market and engaging strategically, organizations can gain both cost savings and flexibility. In a landscape where every percentage point matters, energy procurement becomes not just a necessity but a competitive advantage.
    `,
  },
  {
    title: "3 Signs It's Time to Re-Evaluate Your Energy Contract",
    description:
      "Waiting for your renewal date could cost you. Learn how to spot when your current contract is no longer serving your business needs.",
    image: "/home/three-panel/windmill.jpg",
    date: "2025-05-28",
    author: "NGX Energy Team",
    link: "/insights/when-to-review-contract",
    category: ["Tips", "Procurement"],
    body: `
## Introduction

Most business leaders don’t think about their energy contract until renewal is around the corner. But waiting for that deadline can leave you locked into unfavorable terms or paying more than you should. Energy markets shift constantly, and the contract that made sense two years ago may not be the right fit today. Knowing when to revisit your agreement is key to avoiding unnecessary costs and securing a deal that actually supports your operations.

## Sign One: Your Business Has Changed

Growth, downsizing, or even changes in operating hours can all alter your energy profile. If your current contract was based on assumptions that no longer match reality, you may be paying for capacity you don’t use—or worse, racking up charges when demand exceeds what’s covered. A distribution center that expanded to a second shift or a manufacturer that introduced new equipment will almost certainly benefit from a reassessment. The contract should serve the business, not the other way around.

## Sign Two: Market Conditions Have Shifted

Energy prices are influenced by a host of factors—fuel costs, weather patterns, infrastructure investments, and regulatory changes. A contract signed during a high-price environment may now look expensive compared to current wholesale rates. Likewise, a plan that offered stability might be unnecessarily rigid if market volatility has eased. Businesses that keep an eye on market trends are better positioned to renegotiate when conditions are in their favor, rather than waiting passively for renewal.

## Sign Three: Hidden Costs Are Eroding Your Savings

Many contracts contain clauses that seem minor at first glance but can add up over time. Pass-through charges, minimum usage requirements, or penalties for exceeding demand thresholds often go unnoticed until bills are audited. If monthly invoices are creeping upward despite steady usage, your contract terms may be the culprit. Uncovering these hidden costs early allows you to negotiate more transparent agreements and regain control of your budget.

## Conclusion

The bottom line: your energy contract should evolve with your business and the market. If your operations have changed, if prices have shifted, or if hidden fees are eating into your savings, it’s a clear signal that it’s time to re-evaluate. Treating procurement as a strategic, ongoing process—rather than a one-time transaction—ensures your company isn’t leaving money on the table. A well-timed review can mean the difference between another year of inflated costs and a contract that truly supports your long-term goals.
    `,
  },
  {
    title: "The Future of Renewable Energy for Commercial Buildings",
    description:
      "Explore how commercial real estate owners are integrating solar and wind into their energy mix — and what incentives are available in 2025.",
    image: "/services/reit.jpg",
    date: "2025-05-10",
    author: "Sophia Nguyen",
    link: "/insights/renewables-commercial-buildings",
    category: ["Sustainability", "Technology"],
    body: `
## Introduction

Most business leaders don’t think about their energy contract until renewal is around the corner. But waiting for that deadline can leave you locked into unfavorable terms or paying more than you should. Energy markets shift constantly, and the contract that made sense two years ago may not be the right fit today. Knowing when to revisit your agreement is key to avoiding unnecessary costs and securing a deal that actually supports your operations.

## Sign One: Your Business Has Changed

Growth, downsizing, or even changes in operating hours can all alter your energy profile. If your current contract was based on assumptions that no longer match reality, you may be paying for capacity you don’t use—or worse, racking up charges when demand exceeds what’s covered. A distribution center that expanded to a second shift or a manufacturer that introduced new equipment will almost certainly benefit from a reassessment. The contract should serve the business, not the other way around.

## Sign Two: Market Conditions Have Shifted

Energy prices are influenced by a host of factors—fuel costs, weather patterns, infrastructure investments, and regulatory changes. A contract signed during a high-price environment may now look expensive compared to current wholesale rates. Likewise, a plan that offered stability might be unnecessarily rigid if market volatility has eased. Businesses that keep an eye on market trends are better positioned to renegotiate when conditions are in their favor, rather than waiting passively for renewal.

## Sign Three: Hidden Costs Are Eroding Your Savings

Many contracts contain clauses that seem minor at first glance but can add up over time. Pass-through charges, minimum usage requirements, or penalties for exceeding demand thresholds often go unnoticed until bills are audited. If monthly invoices are creeping upward despite steady usage, your contract terms may be the culprit. Uncovering these hidden costs early allows you to negotiate more transparent agreements and regain control of your budget.

## Conclusion

The bottom line: your energy contract should evolve with your business and the market. If your operations have changed, if prices have shifted, or if hidden fees are eating into your savings, it’s a clear signal that it’s time to re-evaluate. Treating procurement as a strategic, ongoing process—rather than a one-time transaction—ensures your company isn’t leaving money on the table. A well-timed review can mean the difference between another year of inflated costs and a contract that truly supports your long-term goals.
    `,
  },
  {
    title: "How NGX Audits Expose Hidden Energy Waste",
    description:
      "A behind-the-scenes look at our audit process — and how we identified $42K in savings for a regional grocery chain.",
    image: "/home/three-panel/construction.jpg",
    date: "2025-04-15",
    author: "NGX Energy Team",
    link: "/insights/ngx-audit-process",
    category: ["Case Study", "Energy Audit"],
    body: `
## Introduction

Most business leaders don’t think about their energy contract until renewal is around the corner. But waiting for that deadline can leave you locked into unfavorable terms or paying more than you should. Energy markets shift constantly, and the contract that made sense two years ago may not be the right fit today. Knowing when to revisit your agreement is key to avoiding unnecessary costs and securing a deal that actually supports your operations.

## Sign One: Your Business Has Changed

Growth, downsizing, or even changes in operating hours can all alter your energy profile. If your current contract was based on assumptions that no longer match reality, you may be paying for capacity you don’t use—or worse, racking up charges when demand exceeds what’s covered. A distribution center that expanded to a second shift or a manufacturer that introduced new equipment will almost certainly benefit from a reassessment. The contract should serve the business, not the other way around.

## Sign Two: Market Conditions Have Shifted

Energy prices are influenced by a host of factors—fuel costs, weather patterns, infrastructure investments, and regulatory changes. A contract signed during a high-price environment may now look expensive compared to current wholesale rates. Likewise, a plan that offered stability might be unnecessarily rigid if market volatility has eased. Businesses that keep an eye on market trends are better positioned to renegotiate when conditions are in their favor, rather than waiting passively for renewal.

## Sign Three: Hidden Costs Are Eroding Your Savings

Many contracts contain clauses that seem minor at first glance but can add up over time. Pass-through charges, minimum usage requirements, or penalties for exceeding demand thresholds often go unnoticed until bills are audited. If monthly invoices are creeping upward despite steady usage, your contract terms may be the culprit. Uncovering these hidden costs early allows you to negotiate more transparent agreements and regain control of your budget.

## Conclusion

The bottom line: your energy contract should evolve with your business and the market. If your operations have changed, if prices have shifted, or if hidden fees are eating into your savings, it’s a clear signal that it’s time to re-evaluate. Treating procurement as a strategic, ongoing process—rather than a one-time transaction—ensures your company isn’t leaving money on the table. A well-timed review can mean the difference between another year of inflated costs and a contract that truly supports your long-term goals.
    `,
  },
];
