
export default function AboutPage() {
    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header Section */}
                <div className="mb-20">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">
                        The Specialist
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight text-slate-900 leading-[0.95]">
                        Growth Systems & <br />
                        <span className="text-primary italic font-serif">Revenue Engineering</span>
                    </h1>
                    <p className="text-xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl font-medium">
                        I am a Growth Marketing and Marketing Technology specialist who designs and scales customer acquisition systems that directly drive revenue, improve operational efficiency, and reduce acquisition costs in competitive markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Hybrid Background Section */}
                        <section className="p-8 lg:p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem]">
                            <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium">
                                With a hybrid background in growth strategy and system development, I focus on building <span className="text-primary underline decoration-2 underline-offset-4">repeatable growth engines</span> — not isolated campaigns.
                            </p>
                        </section>

                        {/* Growth Philosophy Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary" />
                                The Growth Philosophy
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl text-muted leading-relaxed">
                                    I treat growth as a business system, not a set of marketing channels.
                                </p>
                                <p className="text-xl text-muted leading-relaxed">
                                    Every paid campaign, SEO initiative, and funnel is designed as part of a connected revenue engine, where data flows seamlessly from acquisition to conversion to optimisation.
                                </p>
                                <p className="text-xl lg:text-2xl font-bold text-slate-900 leading-relaxed">
                                    My goal is to create predictable, scalable customer acquisition — not short-term traffic spikes.
                                </p>
                            </div>
                        </section>

                        {/* The Systems Advantage Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary" />
                                The Systems Advantage
                            </h2>
                            <p className="text-xl text-muted leading-relaxed mb-10">
                                Most growth problems are not creative problems — they are system problems.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {[
                                    "automated lead pipelines",
                                    "tracking and attribution infrastructure",
                                    "internal CRM systems",
                                    "conversion-focused growth tools",
                                    "performance reporting frameworks"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-muted leading-relaxed">
                                using modern technologies such as <span className="text-slate-900 font-bold">Next.js, SQL, Python, and API integrations.</span>
                            </p>
                            <p className="text-lg text-muted leading-relaxed mt-4">
                                This allows teams to operate faster, make better decisions, and scale efficiently.
                            </p>
                        </section>

                        {/* How I Work Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary" />
                                How I Work
                            </h2>
                            <div className="space-y-12">
                                {[
                                    {
                                        title: "Data-Led Growth Decisions",
                                        desc: "Every optimisation is guided by real performance data, funnel metrics, and ROI analysis — not assumptions."
                                    },
                                    {
                                        title: "Scalable Growth Infrastructure",
                                        desc: "I focus on building long-term systems that continue generating leads and revenue without increasing complexity or cost."
                                    },
                                    {
                                        title: "Business & Technology Bridge",
                                        desc: "I connect marketing execution with engineering systems so growth efforts translate directly into measurable business outcomes."
                                    }
                                ].map((step, i) => (
                                    <div key={i} className="group">
                                        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors flex items-center gap-4">
                                            <span className="text-slate-200 font-black text-4xl italic group-hover:text-primary/20 transition-colors">0{i + 1}</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-muted leading-relaxed max-w-2xl pl-12 lg:pl-16">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Core Focus Column */}
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="p-8 bg-slate-900 text-white rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:24px_24px]" />
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-10 relative z-10">Core Focus Areas</h2>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Performance & Growth Marketing",
                                    "Marketing Automation & Lead Operations",
                                    "CRM Systems & Funnel Infrastructure",
                                    "SEO & Organic Growth Architecture",
                                    "Conversion Rate Optimisation (CRO)",
                                    "Tracking & Attribution Systems",
                                    "Growth Analytics & ROI Optimisation",
                                    "API Integrations & Data Pipelines"
                                ].map((focus, i) => (
                                    <li key={i} className="text-sm font-bold text-slate-300 flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors flex-shrink-0" />
                                        <span className="group-hover:text-white transition-colors leading-tight">{focus}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 p-8 border border-primary/20 bg-primary/5 rounded-[2rem] text-center">
                            <h3 className="text-slate-900 font-bold mb-4">Ready to build your growth engine?</h3>
                            <a href="/contact" className="inline-block px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-all uppercase text-xs tracking-widest">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
