import Link from "next/link";
import { notFound } from "next/navigation";

const CASE_STUDIES_DETAILS = {
    "mortgage-cpl-optimization": {
        title: "Performance Marketing Case Study",
        subtitle: "Cutting CPL from $70–80 to $25–35 While Scaling Lead Quality & Volume",
        category: "Performance Marketing",
        context: "Mortgage customer acquisition is one of the most expensive digital advertising categories due to high competition from banks, brokers, and fintechs, rising ad platform costs, and long decision cycles.",
        baseline: [
            "Cost Per Lead: $70–80 per lead (monthly average)",
            "No Conversions API implementation",
            "No structured audience testing",
            "No creative variation strategy",
            "Basic lead capture without quality feedback loop"
        ],
        problem: "The platforms lacked clean conversion signals, audiences were broad and fatigued, the funnel didn't filter serious borrowers, and creatives didn't address buyer psychology.",
        objective: "Rebuild the entire acquisition system for efficiency, improve algorithm optimisation signals, increase quality of incoming borrowers, and create scalable growth without rising CPL.",
        execution: [
            {
                title: "Tracking & Attribution Infrastructure",
                description: "Implemented Meta Pixel optimisation, Conversions API (CAPI) integration, and Lead data syncing into Google Sheets CRM for accurate signals."
            },
            {
                title: "Audience Strategy Redesign",
                description: "Built diversified audience layers and tested intent-based segments to allow consistent scaling without CPL inflation."
            },
            {
                title: "Funnel & Lead Qualification Logic",
                description: "Refined form structure and question sequencing to filter serious borrowers and higher loan sizes, reducing wasted sales calls."
            },
            {
                title: "Psychological Creative Strategy",
                description: "Introduced multiple creative variations focusing on pain-points and trust-based framing to improve CTR and algorithm learning."
            },
            {
                title: "Continuous Optimisation Framework",
                description: "Weekly performance reviews, creative rotation, audience pruning, and budget reallocation to evolve with the data."
            }
        ],
        results: [
            { label: "CPL Reduction", value: "$70–80 → $25–35" },
            { label: "Lead Growth", value: "100%+" },
            { label: "Efficiency", value: "Sustained" }
        ],
        impact: [
            "Marketing spend became predictable",
            "Efficiency-first scaling (Startup Budget)",
            "Sales efficiency improved",
            "Customer acquisition became repeatable"
        ],
        insight: "For startups, growth is not about spending more — it's about engineering a system where every dollar works 2x harder through signal accuracy.",
        proofs: [
            {
                title: "Efficiency Timeline: System Readiness",
                description: "Sustainable CPL reduction achieved through technical signal stability. While leads are managed against a startup budget, the acquisition efficiency has improved by over 60%.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771684617/Junjuly-report-2025_i4ftpz.png",
                        label: "Phase 01: Baseline Acquisition (June / July 2025)"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771684867/oct-report_2025_lbaybr.png",
                        label: "Phase 02: Tracking & Signal Optimization (Oct 2025)"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771684868/Nov_report_2025_yfzdmp.png",
                        label: "Phase 03: Performance & Quality Pass (Nov 2025)"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771684867/dec-report_2025_uq1eod.png",
                        label: "Phase 04: CPL Stabilization (Dec 2025)"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771685179/After_report_jan_rnaf9f.png",
                        label: "Phase 05: Foundation Ready for Scale (Jan 2026)"
                    }
                ]
            },
            {
                title: "Technical Implementation Proof",
                description: "Verification of Conversion API (CAPI) and Meta Pixel integration, ensuring the algorithm receives high-quality signals for lead quality optimization.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771664320/CPAI_yxkaej.png",
                        label: "Conversions API (CAPI) Integration"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771664320/meta-pixel_setup_bxv204.png",
                        label: "Meta Pixel & Website Event Setup"
                    }
                ]
            }
        ]
    },
    "seo-scaling": {
        title: "Organic Growth Case Study",
        subtitle: "Scaling Organic Traffic ~1,900% to Build a Sustainable Lead Engine from Zero",
        category: "Organic Growth",
        context: "In financial services, paid acquisition is expensive and volatile. The long-term objective was to build a sustainable inbound acquisition channel that reduces dependence on paid ads.",
        baseline: [
            "Near-zero organic traffic at launch",
            "No keyword rankings or technical SEO structure",
            "No internal linking system or content framework",
            "No search visibility in competitive mortgage space"
        ],
        problem: "Finance keywords are dominated by banks and large portals. Ranking requires strong technical foundations, high-intent content, and structured internal linking.",
        objective: "Capture high-intent mortgage search demand, structure the site for long-term authority, and convert visitors into qualified leads.",
        execution: [
            {
                title: "Technical Foundation First",
                description: "Structured the website for clean URL hierarchy, crawl efficiency, fast load performance, and schema-ready pages."
            },
            {
                title: "High-Intent Keyword Architecture",
                description: "Focused on mortgage calculators, refinancing queries, and decision-stage search intent keywords ready for action."
            },
            {
                title: "Content Optimisation for Conversion",
                description: "Built pages to answer user intent clearly, remove confusion, and build trust to guide users toward lead actions."
            },
            {
                title: "Internal Linking System",
                description: "Rebuilt over 50+ pages to pass authority strategically and strengthen ranking clusters across related topics."
            },
            {
                title: "Continuous SEO Optimisation Loop",
                description: "Monthly ranking performance reviews, content refresh, CTR optimisation, and expansion of high-performing topics."
            }
        ],
        results: [
            { label: "Organic Growth", value: "~1,900%" },
            { label: "Rankings", value: "Page 1" },
            { label: "Lead Flow", value: "Sustainable" }
        ],
        impact: [
            "Lower blended acquisition cost",
            "Continuous lead flow without ad spend",
            "Higher trust from organic users",
            "Improved long-term marketing stability"
        ],
        insight: "SEO is not about content volume — it’s about system design around user intent and authority.",
        proofs: [
            {
                title: "Google Search Console: Organic Growth Curve",
                description: "Sustainable 1,900% growth in organic impressions and clicks from launch to scale. Built a consistent lead engine without recurring ad spend.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670911/SEO_organic_report_hzl1pq.png",
                        label: "Search Console Performance Report"
                    }
                ]
            },
            {
                title: "12-Month Performance: Clicks & Impressions",
                description: "Consistent high-volume delivery over the last 12 months, achieving 1.36M impressions and 10.5K organic clicks through sustained authority.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672577/last_12_months_traffic_impresions_m9frpr.png",
                        label: "Past 12 Months: 1.36M Impressions | 10.5K Clicks"
                    }
                ]
            },
            {
                title: "Domain Authority Building: Before vs After",
                description: "Transformed a new domain into a niche authority. Significant growth in referring domains, organic keywords, and overall domain strength.",
                type: "comparison",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670911/Before_domain_pehgrh.png",
                        label: "Initial Domain State (Launch Phase)"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670911/after_doamin_gkylxw.png",
                        label: "Transformed Domain Authority (Scale Phase)"
                    }
                ]
            },
            {
                title: "Authoritative Backlink Profile",
                description: "Strategic link building and authority passed through internal linking systems, securing high-quality referring domains.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670911/reffering_domain_mecpy3.png",
                        label: "Referring Domain Distribution Sample"
                    }
                ]
            },
            {
                title: "SERP Domination: Top 3 Commercial Rankings",
                description: "Acquiring high-intent commercial keywords on Page 1, capturing users at the decision stage of the mortgage cycle.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771671818/SEO_1to3_positions_11_moec7x.png",
                        label: "Commercial Intent Ranking #1"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670841/SEO_1to3_positions_2_ao5hz7.png",
                        label: "Commercial Intent Ranking #3"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670841/SEO_1to3_positions_1_ditzfl.png",
                        label: "Commercial Intent Ranking #1"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670860/SEO_1to3_positions_10_fhj2r3.png",
                        label: "Commercial Intent Ranking #3"
                    }
                ]
            },
            {
                title: "SERP Domination: Product & Utility Rankings",
                description: "Ranking #1 for high-volume mortgage calculators and tools, establishing top-of-funnel authority and recurring user visits.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670860/SEO_1to3_positions_9_o9zlnb.png",
                        label: "Product / Calculator Ranking #2"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670860/SEO_1to3_positions_8_toiqaz.png",
                        label: "Product / Calculator Ranking #2"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670861/SEO_1to3_positions_5_1_mhgann.png",
                        label: "Product / Calculator Ranking #1"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670861/SEO_1to3_positions_7_qgd6se.png",
                        label: "Product / Calculator Ranking #1"
                    }
                ]
            },
            {
                title: "SERP Domination: Editorial & Blog Authority",
                description: "Consistent Page 1 presence for long-form educational content, building trust and guiding users through the informational decision journey.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771670862/SEO_1to3_positions_6_kmihph.png",
                        label: "Editorial Content Ranking #1"
                    }
                ]
            }
        ]
    },
    "lead-automation-pipeline": {
        title: "Martech & Systems Case Study",
        subtitle: "Automating Lead Operations & Building Internal Growth Systems for Speed, Accuracy, and Scale",
        category: "Martech & Systems",
        context: "As lead volume increased, the lack of systems created chaos: leads were scattered, manual follow-ups were slow, and reporting lacked accuracy.",
        baseline: [
            "Leads from Meta Ads and website forms lived separately",
            "Manual data transfer into spreadsheets",
            "No real-time visibility or quality feedback loop",
            "Slow response to high-intent customers"
        ],
        problem: "The bottleneck was no longer traffic, but lead operations efficiency. Growth without automation created slower conversions and missed opportunities.",
        objective: "Build a scalable internal growth infrastructure that centralises lead data, improves response speed, and enables real-time reporting.",
        execution: [
            {
                title: "Automated Lead Pipeline",
                description: "Captured leads from Meta Ads and website forms, consolidating them into a structured CRM with real-time updates."
            },
            {
                title: "Quality Feedback Loop",
                description: "Included source and campaign metadata in each lead to feed back into performance marketing optimisation."
            },
            {
                title: "Internal CRM & Sales Tools",
                description: "Designed a custom CRM, rate package management system, and lead tracking dashboards using Next.js and Supabase."
            },
            {
                title: "Real-Time Reporting",
                description: "Created automated performance dashboards for ROI visibility, live CPL tracking, and lead quality trends."
            }
        ],
        results: [
            { label: "Response Time", value: "Faster" },
            { label: "Data Entry", value: "0 Manual" },
            { label: "Operations", value: "Streamlined" }
        ],
        impact: [
            "Higher conversion rates from faster response",
            "Better marketing ROI from quality-based optimisation",
            "Reduced operational overhead",
            "Improved team productivity"
        ],
        insight: "Scaling acquisition without systems creates diminishing returns. Real growth happens when traffic, data, and operations are connected.",
        proofs: [
            {
                title: "Internal CRM: Growth & Operations Dashboard",
                description: "A centralized command center providing real-time visibility into lead flow, conversion rates, and operational bottlenecks. Built using Next.js and Supabase.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672150/3_crm_internal_dashborad_iw6jtm.png",
                        label: "Main Operations Dashboard"
                    }
                ]
            },
            {
                title: "Structured Lead & Case Management",
                description: "Moving away from fragmented spreadsheets to a structured PostgreSQL database. Every lead is tracked through its entire lifecycle with full audit trails.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672130/3_crm_cases_jup3gz.png",
                        label: "Active Case Management Interface"
                    }
                ]
            },
            {
                title: "Automated Rate & Package Management",
                description: "Dynamic rate package management tool that allows for real-time updates across the platform, ensuring sales accuracy.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672130/3_crm_rates_a4doae.png",
                        label: "Rate & Product Management Unit"
                    }
                ]
            },
            {
                title: "Enterprise-Grade User & Role Management",
                description: "Secure access control for admin and employee roles, ensuring data integrity and restricted specialized views for different departments.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672129/3_crm_user_omgh0o.png",
                        label: "Administrative User Management"
                    }
                ]
            },
            {
                title: "Intelligent Sales Assistant",
                description: "Built-in tools to help sales agents prioritize high-intent leads and manage follow-ups with automated reminders and lead scoring.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672130/3_crm_salesassistent_ak7i63.png",
                        label: "Sales Agent Workflow Assistant"
                    }
                ]
            },
            {
                title: "360-Degree Client & Conversion View",
                description: "Granular client detail pages that capture meta-data from the ad click all the way to the final sale closing, closing the loop for marketing.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672129/3_crm_client_dkx3cz.png",
                        label: "Client Profile & Interaction History"
                    },
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672128/3_crm_caseclosed_fyb5bb.png",
                        label: "Closed Won Data Capture & Feedback"
                    }
                ]
            },
            {
                title: "Martech Stack: Lead Data & CAPI Pipeline",
                description: "Automated workflow connecting Meta Ads leads to the internal database with simultaneous CAPI feedback to optimize ad algorithm performance.",
                type: "grid",
                images: [
                    {
                        url: "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771672129/3_lead_crm_integration_pbnfwv.png",
                        label: "Meta Lead → CRM → CAPI Integration Architecture"
                    }
                ]
            }
        ]
    }
};

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = CASE_STUDIES_DETAILS[slug as keyof typeof CASE_STUDIES_DETAILS];

    if (!study) {
        notFound();
    }

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href="/case-studies" className="text-primary font-medium mb-12 inline-flex items-center hover:translate-x-[-4px] transition-transform">
                    &larr; Back to Case Studies
                </Link>

                <header className="mb-20">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded mb-6 inline-block">
                        {study.category}
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">{study.title}</h1>
                    <p className="text-xl lg:text-2xl text-muted mb-12 max-w-3xl leading-relaxed">
                        {study.subtitle}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {study.results.map((result, i) => (
                            <div key={i} className="bg-white border border-border p-6 rounded-2xl shadow-sm">
                                <p className="text-sm font-medium text-muted uppercase tracking-wider">{result.label}</p>
                                <p className="text-3xl font-bold mt-1 text-slate-900">{result.value}</p>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Sticky Navigation Header */}
                <nav className="sticky top-16 z-40 -mx-4 px-4 py-4 bg-background/95 backdrop-blur-md border-b border-border mb-16 hidden lg:block">
                    <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
                        {[
                            { label: "Business Context", target: "#context" },
                            { label: "Execution Strategy", target: "#strategy" },
                            { label: "Success Impact", target: "#impact" },
                            { label: "Project Breakdown", target: "#breakdown" }
                        ].map((item) => (
                            <a
                                key={item.target}
                                href={item.target}
                                className="text-sm font-black text-slate-500 uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <section id="context" className="mb-16 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6">Business Context</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                {study.context}
                            </p>

                            <div className="bg-slate-50 border border-border rounded-2xl p-8 mb-8">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500" />
                                    Initial Problem
                                </h3>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "{study.problem}"
                                </p>
                            </div>
                        </section>

                        <section id="strategy" className="mb-16 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8">Execution & System Strategy</h2>
                            <div className="space-y-6">
                                {study.execution.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 border border-border flex items-center justify-center font-bold text-primary">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="impact" className="mb-16 pt-16 border-t border-border scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8">Business Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {study.impact.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-900 font-medium">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-8 space-y-8">
                            <div className="p-8 bg-slate-900 text-white rounded-3xl">
                                <h2 className="text-lg font-bold mb-6 text-primary uppercase tracking-widest">Initial Situation</h2>
                                <ul className="space-y-4">
                                    {study.baseline.map((item, i) => (
                                        <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                                            <span className="text-red-400 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 bg-primary rounded-3xl text-white relative overflow-hidden">
                                <h2 className="text-lg font-bold mb-4 relative z-10">Key Business Insight</h2>
                                <p className="text-white/90 leading-relaxed italic relative z-10">
                                    "{study.insight}"
                                </p>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            </div>

                            <div className="p-8 border border-border rounded-3xl">
                                <h2 className="text-lg font-bold mb-4">Objective</h2>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {study.objective}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {(study as any).proofs && (
                    <section id="breakdown" className="mt-24 pt-24 border-t border-border scroll-mt-32">
                        <h2 className="text-3xl lg:text-5xl font-black mb-4 text-slate-900 tracking-tight">Project Breakdown & Results</h2>
                        <p className="text-xl text-muted mb-16 max-w-3xl leading-relaxed">
                            A deep dive into the underlying metrics and technical execution that powered these results.
                        </p>
                        <div className="space-y-32">
                            {(study as any).proofs.map((proof: any, i: number) => (
                                <div key={i} className="">
                                    <div className="mb-12">
                                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-4 uppercase tracking-widest">
                                            Project Insight 0{i + 1}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{proof.title}</h3>
                                        <p className="text-lg lg:text-xl text-muted leading-relaxed max-w-4xl">{proof.description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-16">
                                        {proof.images.map((img: any, j: number) => (
                                            <div key={j} className="space-y-8">
                                                <div className="bg-white p-3 lg:p-6 border border-border rounded-[2rem] lg:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] group overflow-hidden">
                                                    <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] border border-border/50">
                                                        <img
                                                            src={img.url}
                                                            alt={img.label}
                                                            className="w-full h-auto block transform group-hover:scale-[1.005] transition-transform duration-1000 ease-in-out"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6 px-4">
                                                    <div className="h-px flex-grow bg-slate-200" />
                                                    <p className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] whitespace-nowrap">{img.label}</p>
                                                    <div className="h-px flex-grow bg-slate-200" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <footer className="mt-32 pt-16 border-t border-border text-center">
                    <h3 className="text-3xl font-bold mb-6">Ready to scale your systems?</h3>
                    <p className="text-muted mb-10 max-w-xl mx-auto text-lg">
                        Let's discuss how we can build similar high-efficiency acquisition and operational engines for your business.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                        Get in Touch
                    </Link>
                </footer>
            </div>
        </div>
    );
}
