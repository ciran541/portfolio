import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
                Growth & Revenue Engineering
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-slate-900">
                <span className="whitespace-nowrap">Growth & Martech</span> <span className="text-primary italic font-serif">Specialist</span>
              </h1>
              <p className="text-xl text-muted mb-10 leading-relaxed max-w-2xl">
                I build scalable customer acquisition systems and internal growth tools that combine performance marketing strategy with technical engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200">
                  View Case Studies
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:border-primary hover:text-primary transition-all">
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block scale-90 origin-right translate-x-12">
              {/* Dashboard Mockup */}
              <div className="relative z-10 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-4 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                {/* Browser Header */}
                <div className="flex items-center gap-1.5 mb-4 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                {/* Content Mockup */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-slate-800/50 rounded-xl border border-white/5 p-4">
                      <div className="w-12 h-1 bg-primary/30 rounded mb-2" />
                      <div className="w-20 h-4 bg-white/10 rounded" />
                    </div>
                    <div className="h-32 bg-slate-800/50 rounded-xl border border-white/5 p-4">
                      <div className="w-12 h-1 bg-emerald-500/30 rounded mb-2" />
                      <div className="w-20 h-4 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="h-48 bg-slate-800/50 rounded-xl border border-white/5 p-6 flex flex-col justify-end">
                    <div className="flex items-end gap-1 h-32">
                      <div className="flex-1 bg-primary/20 rounded-t h-[40%]" />
                      <div className="flex-1 bg-primary/40 rounded-t h-[60%]" />
                      <div className="flex-1 bg-primary/20 rounded-t h-[30%]" />
                      <div className="flex-1 bg-primary/60 rounded-t h-[80%]" />
                      <div className="flex-1 bg-primary/30 rounded-t h-[50%]" />
                      <div className="flex-1 bg-primary/80 rounded-t h-[95%]" />
                      <div className="flex-1 bg-primary/40 rounded-t h-[70%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metric Card */}
              <div className="absolute -bottom-6 -left-12 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 transform rotate-[4deg] animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth ROI Today</p>
                    <p className="text-2xl font-black text-slate-900">$4,820.00</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Metrics Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="metric-card">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">CPL Reduction</span>
              <p className="text-4xl font-bold mt-2">75–85%</p>
              <p className="text-sm text-muted mt-2">Reduction in Cost Per Lead across campaigns.</p>
            </div>
            <div className="metric-card">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Organic Growth</span>
              <p className="text-4xl font-bold mt-2">~1,900%</p>
              <p className="text-sm text-muted mt-2">Growth in organic traffic from launch to scale.</p>
            </div>
            <div className="metric-card">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Lead Quality</span>
              <p className="text-4xl font-bold mt-2">100%+</p>
              <p className="text-sm text-muted mt-2">Improvement in lead quality and volume.</p>
            </div>
            <div className="metric-card">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Systems Built</span>
              <p className="text-4xl font-bold mt-2">Multiple</p>
              <p className="text-sm text-muted mt-2">Internal growth tools and automation systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Case Studies</h2>
              <p className="text-muted">Real-world examples of growth and technical implementation.</p>
            </div>
            <Link href="/case-studies" className="text-primary font-medium hover:underline hidden sm:block">
              View all projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mortgage CPL Optimization",
                desc: "Reducing CPL by 80% through advanced funnel tracking and lead scoring automation.",
                tag: "Performance Marketing",
                color: "bg-blue-50",
                slug: "mortgage-cpl-optimization"
              },
              {
                title: "SEO Scaling: From 0 to 1M+",
                desc: "Building a content engine and technical SEO foundation for 1,900% traffic growth.",
                tag: "Organic Growth",
                color: "bg-emerald-50",
                slug: "seo-scaling"
              },
              {
                title: "Lead Automation Pipeline",
                desc: "Connecting disparate tools into a unified CRM system for seamless lead flow.",
                tag: "Martech & Systems",
                color: "bg-slate-50",
                slug: "lead-automation-pipeline"
              }
            ].map((study, i) => (
              <Link key={i} href={`/case-studies/${study.slug}`} className="group block h-full">
                <div className="flex flex-col h-full bg-white border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                  <div className={`h-48 ${study.color} flex items-center justify-center border-b border-border/50 relative overflow-hidden group-hover:scale-[0.98] transition-all duration-500`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] [background-size:20px_20px]" />

                    {study.tag === 'Performance Marketing' && (
                      <svg className="w-16 h-16 text-blue-600 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {study.tag === 'Organic Growth' && (
                      <svg className="w-16 h-16 text-emerald-600 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    )}
                    {study.tag === 'Martech & Systems' && (
                      <svg className="w-16 h-16 text-slate-800 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 bg-primary/5 px-3 py-1 rounded-full w-fit">{study.tag}</span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-[1.1] mb-3">{study.title}</h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-6">{study.desc}</p>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest">
                      Explore Case Study &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-8">Growth & Martech Capabilities</h2>
              <ul className="space-y-4">
                {[
                  "Performance Marketing (Meta Ads, Google Ads)",
                  "Funnel Strategy & CRO",
                  "Customer Acquisition Systems",
                  "SEO & Organic Growth Architecture",
                  "Tracking & Attribution (Pixel, CAPI)",
                  "Marketing Automation & Lead Operations",
                  "CRM Systems & Workflow Automation",
                  "Growth Analytics & ROI Optimisation",
                  "API Integrations & Data Pipelines"
                ].map((cap, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-lg text-slate-300 group-hover:text-white transition-colors">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-8">Technical Stack</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Frontend & Core</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Next.js", "React", "TypeScript"].map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Backend & Data</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "SQL (PostgreSQL)", "Supabase"].map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "I don't just manage marketing budgets; I build the technical infrastructure that makes growth measurable and operations scalable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 italic font-serif tracking-tight">Ready to scale your marketing performance?</h2>
          <p className="text-lg text-muted mb-10">
            Let's discuss how customized martech systems and data-driven growth strategies can impact your bottom line.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
