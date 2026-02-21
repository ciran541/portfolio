import Link from "next/link";

const CASE_STUDIES = [
    {
        slug: "mortgage-cpl-optimization",
        title: "Performance Marketing Case Study",
        category: "Performance Marketing",
        metrics: "CPL $80 → $25",
        description: "Cutting acquisition costs by 60%+ while scaling lead quality through system-level funnel optimisation and CAPI integration.",
        color: "bg-blue-50"
    },
    {
        slug: "seo-scaling",
        title: "Organic Growth Case Study",
        category: "Organic Growth",
        metrics: "~1,900% Traffic Increase",
        description: "Building a sustainable inbound lead engine from zero through high-intent keyword architecture and technical SEO systems.",
        color: "bg-emerald-50"
    },
    {
        slug: "lead-automation-pipeline",
        title: "Martech & Systems Case Study",
        category: "Martech & Systems",
        metrics: "Zero Manual Data Entry",
        description: "Automating lead operations and building custom internal CRM systems to connect marketing data to sales outcomes.",
        color: "bg-slate-50"
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Case Studies</h1>
                    <p className="text-xl text-muted">
                        In-depth breakdowns of growth strategies, marketing systems, and measurable business results.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {CASE_STUDIES.map((study) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="group block"
                        >
                            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all p-4 lg:p-8">
                                <div className={`w-full lg:w-1/3 aspect-video lg:aspect-square ${study.color} rounded-2xl flex items-center justify-center border border-border/50 relative overflow-hidden group-hover:scale-[0.98] transition-all duration-500`}>
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] [background-size:24px_24px]" />

                                    {study.category === 'Performance Marketing' && (
                                        <svg className="w-20 h-20 text-blue-600 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    )}
                                    {study.category === 'Organic Growth' && (
                                        <svg className="w-20 h-20 text-emerald-600 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    )}
                                    {study.category === 'Martech & Systems' && (
                                        <svg className="w-20 h-20 text-slate-800 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    )}
                                </div>
                                <div className="w-full lg:w-2/3 py-4 text-left px-4 lg:px-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                                            {study.category}
                                        </span>
                                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
                                            {study.metrics}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors leading-[1.1]">
                                        {study.title}
                                    </h2>
                                    <p className="text-lg text-muted mb-8 leading-relaxed max-w-2xl">
                                        {study.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300 uppercase text-xs tracking-widest">
                                        Full Case Study Analysis <span>&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
