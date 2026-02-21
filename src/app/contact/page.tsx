
export default function ContactPage() {
    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="max-w-3xl mb-24">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">
                        Get in Touch
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight text-slate-900 leading-[0.95]">
                        Let's connect & <br />
                        <span className="text-primary italic font-serif">build something.</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-muted leading-relaxed">
                        Whether you're looking to scale your technical growth systems, optimize your acquisition funnel, or just want to talk shop about martech—I'm always open to new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-slate-900 transition-all duration-500">
                        <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Email</p>
                        <a href="mailto:ciranjivigokul@gmail.com" className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors block break-words">
                            ciranjivigokul@gmail.com
                        </a>
                    </div>

                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-slate-900 transition-all duration-500">
                        <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Professional</p>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/in/ciranjivi-balu-a78208191/" target="_blank" className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">LinkedIn &rarr;</a>
                            <a href="https://github.com/ciran541" target="_blank" className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">GitHub &rarr;</a>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] group hover:bg-slate-900 transition-all duration-500">
                        <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Resume</p>
                        <a href="/resume.pdf" download className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors block">
                            Download CV (PDF) &rarr;
                        </a>
                    </div>
                </div>

                <div className="mt-24 p-12 lg:p-20 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Based in Singapore.</h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                            Available for remote projects and local technical consulting in the APAC region.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
