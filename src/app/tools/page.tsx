export default function ToolsPage() {
    const TOOLS = [
        {
            title: "Mortgage Calculators",
            type: "Lead Gen Tool",
            description: "Interactive tools for eligibility, refinancing, stamp duty, equity loans, and decoupling to educate users and improve lead quality.",
            impact: "Educated users and significantly improved lead qualification before sales contact.",
            features: ["Dynamic LTV calculation", "Stamp duty logic", "Refinancing eligibility"]
        },
        {
            title: "Custom CRM",
            type: "Internal Platform",
            description: "Internal platform for managing leads, follow-ups, and conversion tracking across the entire growth funnel.",
            impact: "Centralized lead operations and provided real-time conversion insights.",
            features: ["Lead status tracking", "Automated follow-up alerts", "Conversion reporting"]
        },
        {
            title: "Lead Automation Pipelines",
            type: "Automation",
            description: "Automated syncing of paid traffic and website leads into structured data systems without manual intervention.",
            impact: "Eliminated manual data entry and reduced lead response times.",
            features: ["Meta Ads integration", "Webform syncing", "Structured data mapping"]
        },
        {
            title: "Rate Management Tool",
            type: "Sales Tool",
            description: "Dynamic system for managing financial product packages used by sales teams for real-time client quoting.",
            impact: "Streamlined sales operations and ensured accuracy in product offerings.",
            features: ["Package versioning", "Real-time rate updates", "Sales team permissions"]
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Tools & Systems</h1>
                    <p className="text-xl text-muted leading-relaxed">
                        I build the infrastructure that makes growth sustainable. Here are the core internal tools and automation systems I've developed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {TOOLS.map((tool, i) => (
                        <div key={i} className="flex flex-col border border-border rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 group">
                            <div className="h-64 bg-slate-50 border-b border-border/50 flex items-center justify-center p-12 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,1)_1px,transparent_0)] [background-size:32px_32px]" />

                                <div className="relative z-10 p-8 bg-white border border-border/50 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-700">
                                    {tool.title === 'Mortgage Calculators' && (
                                        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    {tool.title === 'Custom CRM' && (
                                        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )}
                                    {tool.title === 'Lead Automation Pipelines' && (
                                        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    )}
                                    {tool.title === 'Rate Management Tool' && (
                                        <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold">{tool.title}</h2>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded">
                                        {tool.type}
                                    </span>
                                </div>
                                <p className="text-muted mb-6 leading-relaxed">
                                    {tool.description}
                                </p>

                                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl mb-6">
                                    <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1 leading-none">Business Impact</p>
                                    <p className="text-emerald-900 font-semibold">{tool.impact}</p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key Technical Features</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {tool.features.map((feature, j) => (
                                            <li key={j} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
