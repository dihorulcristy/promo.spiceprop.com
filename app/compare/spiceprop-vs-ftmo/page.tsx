import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, Clock, TrendingUp, ChevronRight, Star, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "SpiceProp vs FTMO 2026: Honest Comparison | Which Prop Firm Wins?",
    description: "Compare SpiceProp and FTMO side-by-side. See pricing, rules, profit splits, and why traders are switching to SpiceProp's monthly free reset promotions.",
};

export default function ComparePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-[#0F172A] overflow-x-hidden bg-white">
            <Navbar />

            <main className="flex-grow pt-20">
                {/* HERO SECTION */}
                <section className="relative py-20 bg-hero-pattern hover:bg-hero-pattern-hover transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#FFF7ED] border border-[#F59E0B]/20 text-[#F59E0B] font-semibold text-sm animate-fade-in shadow-glow-gold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
                            </span>
                            Rated #1 FTMO Alternative 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
                            SpiceProp vs FTMO: <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E21D1D] to-[#F59E0B]">
                                Which Prop Firm Is Right For You?
                            </span>
                        </h1>
                        <p className="text-xl text-[#64748B] max-w-3xl mx-auto mb-10 leading-relaxed">
                            An honest comparison to help you make the best decision for your trading career.
                            Discover why traders are switching for <span className="font-semibold text-[#0F172A]">Monthly Free Resets</span> and <span className="font-semibold text-[#0F172A]">Better Flexibility</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                            <Link href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" className="relative group px-8 py-4 bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white font-bold rounded-xl shadow-lg hover:shadow-glow-red transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your SpiceProp Challenge
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#E21D1D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link href="#comparison" className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-xl border border-gray-200 hover:border-[#F59E0B]/50 shadow-sm hover:shadow-md transition-all duration-300">
                                View Comparison Table
                            </Link>
                        </div>
                    </div>
                </section>

                {/* COMPARISON TABLE SECTION */}
                <section id="comparison" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">The Breakdown</h2>
                            <p className="text-[#64748B]">See exactly how SpiceProp stacks up against the competition.</p>
                        </div>

                        <div className="overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-6 bg-gray-50/50 text-[#64748B] font-semibold w-1/3 min-w-[200px]">Feature</th>
                                            <th className="pt-12 pb-6 px-6 bg-[#FFFBEB]/30 border-t-4 border-[#F59E0B] relative w-1/3 min-w-[250px]">
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-3 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    Winner
                                                </div>
                                                <div className="text-2xl font-bold text-[#0F172A] mb-1">SpiceProp</div>
                                                <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                                                    <CheckCircle2 className="w-4 h-4" /> Recommended
                                                </div>
                                            </th>
                                            <th className="p-6 text-gray-400 font-semibold w-1/3 min-w-[200px]">
                                                <div className="text-xl">FTMO</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Challenge Types</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>Instant, 1-Step, 2-Step</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>2-Step only</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Monthly Promotions</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>3 promotions/month</span>
                                                </div>
                                                <p className="text-xs text-[#64748B] mt-1 ml-7">Always a deal available</p>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>Occasional discounts</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 3 - Highlighted */}
                                        <tr className="bg-[#FFF7ED]/20">
                                            <td className="p-6 font-bold text-[#0F172A] border-l-4 border-[#F59E0B]">Free Reset</td>
                                            <td className="p-6 bg-[#FFF7ED]/30">
                                                <div className="flex items-center gap-2 font-bold text-green-700">
                                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                    <span>YES - Monthly Promo</span>
                                                </div>
                                                <p className="text-xs text-green-800 mt-1 ml-7">One promo/month includes free reset</p>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                                    <span>NO - Must pay retries</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 4 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Consistency Rule</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>No complex rules</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>Strict consistency rule</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 5 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Profit Split</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>Up to 90%</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>80-90%</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 6 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Challenge Price (100K)</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>Competitive</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>~€540</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 7 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Payout Frequency</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>Within 24 Hours</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>Bi-weekly</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 8 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Platform</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>MT5</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">-</span>
                                                    <span>MT4, MT5, cTrader</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 9 */}
                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-medium text-[#0F172A]">Minimum Trading Days</td>
                                            <td className="p-6 bg-[#FFF7ED]/10">
                                                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span>No Time Limits</span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                                    <span>4 days</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY SWITCH SECTION */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#E21D1D] font-bold uppercase tracking-wider text-sm">Better Opportunities</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mt-2 mb-4">Why Traders Are Switching to SpiceProp</h2>
                            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">It&apos;s not just about price. It&apos;s about getting more chances to succeed.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Benefit 1 */}
                            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#E21D1D] group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#E21D1D] transition-colors">Free Reset Every Month</h3>
                                <p className="text-[#64748B] leading-relaxed">
                                    Failed your challenge? At SpiceProp, you get a second chance. Every month, one of our 3 promotions includes a <strong className="text-[#0F172A]">FREE reset</strong>. No extra cost, no questions asked.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-spice-gold group-hover:scale-110 transition-transform">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-spice-gold transition-colors">3 Monthly Promotions</h3>
                                <p className="text-[#64748B] leading-relaxed">
                                    Why pay full price? SpiceProp runs <strong className="text-[#0F172A]">3 different promotions</strong> every single month. Whether it&apos;s a discount, extra payout, or free reset, there&apos;s always a deal waiting for you.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">Flexibility That Fits You</h3>
                                <p className="text-[#64748B] leading-relaxed">
                                    Choose how you want to get funded: <strong className="text-[#0F172A]">Instant Funding</strong> for immediate access, <strong className="text-[#0F172A]">1-Step</strong> for fast-trackers, or <strong className="text-[#0F172A]">2-Step</strong> for a structured approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#E21D1D]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#F59E0B]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">What Traders Say</h2>
                            <p className="text-gray-400 text-lg">Real feedback from traders who made the switch.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "David M.", country: "UK", quote: "I was hesitant to leave FTMO, but the monthly free reset promo convinced me. It takes so much pressure off knowing I have a safety net.", prev: "Previously traded with FTMO" },
                                { name: "Sarah K.", country: "Germany", quote: "The payouts are incredibly fast. I got my withdrawal approved in under 4 hours. SpiceProp is definitely rising to the top.", prev: "Prop Trader since 2021" },
                                { name: "Michael R.", country: "Canada", quote: "I love the 1-Step challenge. It's straightforward and the rules are very fair. Much better than jumping through hoop after hoop.", prev: "Switched from FTMO" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                    <div className="flex gap-1 mb-4 text-[#F59E0B]">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <p className="text-gray-300 italic mb-6">"{item.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E21D1D] to-[#F59E0B] flex items-center justify-center font-bold text-white">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{item.name}</div>
                                            <div className="text-xs text-gray-400">{item.country} • {item.prev}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Common Questions When Switching</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "Is SpiceProp as reliable as FTMO?", a: "Yes. SpiceProp partners with regulated liquidity providers and has processed millions in payouts. We focus on transparency and speed, ensuring you get your funds usually within 24 hours." },
                                { q: "Can I use the same trading strategy I used at FTMO?", a: "Most likely, yes. Our rules are designed to be flexible. We support news trading, overnight holding, and weekend holding on swing accounts. There are no complex consistency rules to worry about." },
                                { q: "What if I fail my SpiceProp challenge?", a: "This is where we shine. If you wait for our monthly reset promotion, you can get a free retry included with your challenge purchase. It's a safety net you won't find at most other firms." },
                                { q: "How fast are payouts at SpiceProp?", a: "We pride ourselves on speed. While many firms profit from delaying payouts, we process them bi-weekly, and often approve them within 24 hours of the request." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-[#0F172A] mb-2 flex items-start gap-3">
                                        <HelpCircle className="w-5 h-5 text-[#64748B] mt-1 flex-shrink-0" />
                                        {item.q}
                                    </h3>
                                    <p className="text-[#64748B] ml-8">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-black pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E21D1D] via-[#F59E0B] to-[#E21D1D]"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Make the Switch?</h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Join thousands of traders who chose flexibility, value, and better opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                Get Started with SpiceProp
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-[#F59E0B] font-medium animate-pulse">
                                🎁 Check our homepage for this month&apos;s active promotions!
                            </p>
                        </div>
                    </div>
                </section>

                {/* TRADEMARK DISCLAIMER */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                    <p className="text-xs text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        FTMO is a registered trademark of FTMO s.r.o. SpiceProp is not affiliated, associated, authorized, endorsed by, or in any way officially connected with FTMO s.r.o. or any of its subsidiaries or its affiliates. The official FTMO website can be found at ftmo.com. The name "FTMO" as well as related names, marks, emblems and images are registered trademarks of their respective owners.
                    </p>
                </div>
            </main>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-5px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
                <Link href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" className="block w-full py-3 bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white font-bold text-center rounded-xl shadow-lg hover:shadow-glow-red transition-all duration-300">
                    Start Challenge - €6K Free
                </Link>
            </div>

            <Footer />
        </div >
    );
}
