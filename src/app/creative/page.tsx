
export default function CreativePage() {
    const row1 = [
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673884/Singapore_s_Lowest_Mortgage_Rates_5_wo3rsm.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673896/Most_homeowners_don_t_overspend._They_overpay_interest._16_ljiimw.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673870/Free_Conversion_ev68ok.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673786/Got_a_bank_offer_Don_t_settle_yet._4_dneezh.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673908/Most_homeowners_don_t_overspend._They_overpay_interest._15_kpc8g5.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673920/Singapore_s_Lowest_Mortgage_Rates_1080_x_1350_px_9_dqcwww.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673786/static_interest_rate_c5nrzz.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673960/Most_homeowners_don_t_overspend._They_overpay_interest._13_uy04yl.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673932/Singapore_s_Lowest_Mortgage_Rates_1_drzzv1.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771673977/2-year_fixed_fjmbqi.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674006/Singapore_s_Lowest_Mortgage_Rates_1080_x_1350_px_6_wjlfvb.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674016/Most_homeowners_don_t_overspend._They_overpay_interest._12_wiw2vp.png"
    ];

    const row2 = [
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674051/Gemini_Generated_Image_kavtr3kavtr3kavt_flgxzn.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674085/Heading_1080_x_1350_px_1080_x_1350_px_8_k8rkoj.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674070/Would_you_pay_364_more_interest_to_free_up_1_085_every_month_2_qfqlez.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674102/Loan_Amount_7_x3q1au.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674119/Mortgage_rates_from_5_qcgjmi.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674134/A_lower_mortgage_rate_makes_a_bigger_difference_than_it_seems._hsoora.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674147/Most_homeowners_don_t_overspend._They_overpay_interest._11_wxby6d.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674165/Current_interest_rate_3_zko0ai.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674179/Red_and_Blue_Modern_Brand_Awareness_vs_Lead_Generation_Comparison_Chart_Graph_1080_x_1920_px_1080_x_1350_px_4_bxbpuk.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674258/THE_RATE_DROP_SINGAPORE_HOMEOWNERS_WERE_WAITING_FOR_2_m2rrls.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674272/Plan_First_Buy_Later_1_vcgmyv.png",
        "https://res.cloudinary.com/dheuvrpwd/image/upload/v1771674447/Blue_And_White_Modern_Mobile_App_Promotion_Instagram_Post_1080_x_1350_px_5_jctctz.png"
    ];

    return (
        <div className="py-20 lg:py-32 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }

                .animate-marquee-reverse {
                    animation: marquee-reverse 60s linear infinite;
                }

                .marquee-container:hover .animate-marquee,
                .marquee-container:hover .animate-marquee-reverse {
                    animation-play-state: paused;
                }
            `}} />

            <div className="container mx-auto px-4 max-w-6xl mb-20 text-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                    Portfolio
                </div>
                <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight text-slate-900 leading-[1.1]">
                    Creative & <span className="text-primary italic font-serif">Campaign</span> Work
                </h1>
                <p className="text-xl lg:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
                    Performance-driven ad creatives designed for high-intent mortgage and refinance acquisition funnels.
                </p>
            </div>

            <div className="space-y-8 marquee-container">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden relative border-y border-slate-100 py-4 bg-slate-50/30">
                    <div className="flex animate-marquee gap-6 whitespace-nowrap">
                        {[...row1, ...row1, ...row1].map((img, i) => (
                            <div key={i} className="flex-shrink-0 w-56 lg:w-72 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border bg-white group hover:scale-105 transition-transform duration-500">
                                <img src={img} alt={`Creative ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden relative border-y border-slate-100 py-4 bg-slate-50/30">
                    <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap">
                        {[...row2, ...row2, ...row2].map((img, i) => (
                            <div key={i} className="flex-shrink-0 w-56 lg:w-72 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border bg-white group hover:scale-105 transition-transform duration-500">
                                <img src={img} alt={`Creative ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl mt-32">
                <div className="p-12 lg:p-20 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Creative Strategy for Scale</h2>
                        <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            These assets aren't just visuals—they are part of a technical growth loop. Every creative hook is tested against CPA targets and audience cohorts.
                        </p>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                            Discuss Creative Strategy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
