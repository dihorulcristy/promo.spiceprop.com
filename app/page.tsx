"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Clock, BarChart3, TrendingUp, Award, Users, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerChildren = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-spice-dark overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-hero-pattern">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gradient-radial from-spice-gold/20 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-spice-red/15 to-transparent rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-white shadow-lg shadow-black/5 border border-gray-100"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-600 font-semibold text-sm">Limited Time</span>
                </span>
                <span className="w-px h-4 bg-gray-200"></span>
                <span className="text-spice-dark font-bold text-sm">100% OFF 2-Step with code SPICEFREE</span>
              </motion.div>

              {/* Main Headline - SEO Optimized */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
              >
                <span className="text-spice-dark">Free Prop Firm Trial </span>
                <span className="relative inline-block">
                  <span className="gradient-text">€6,000</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#E21D1D" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="text-spice-dark">Demo Account – </span>
                <span className="text-green-500">100% FREE</span>
              </motion.h1>

              {/* Subheadline - SEO Optimized */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-spice-muted mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Get your <strong>prop trading demo account free</strong>. Use code{" "}
                <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg font-mono font-bold text-lg shadow-lg" style={{ backgroundColor: '#0F172A', color: '#ffffff' }}>
                  SPICEFREE
                </span>{" "}
                to <strong>test SpiceProp for free</strong>. Start your <strong>funded account free practice</strong> today!
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto px-10 py-5 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Claim Your €6K Challenge
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #E21D1D 100%)' }}></div>
                </a>
                <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-8 py-5 bg-white text-spice-dark border-2 border-gray-200 rounded-2xl font-bold text-lg hover:border-spice-red/30 hover:bg-spice-light transition-all duration-300 flex items-center justify-center">
                  View All Challenges
                  <ChevronRight className="inline w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-spice-muted"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Instant credentials
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  10,000+ traders
                </span>
              </motion.div>

              {/* Disclaimer - Google Ads Compliant */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-2xl mx-auto"
              >
                <p className="text-xs text-amber-800 text-center leading-relaxed">
                  <strong>⚠️ Important Notice:</strong> This is an educational simulation account for practice purposes only.
                  No real money is involved and no actual payouts are made. Trading CFDs and forex carries a high level of risk
                  and may not be suitable for all investors. Past performance is not indicative of future results.
                  Please ensure you fully understand the risks involved.
                </p>
              </motion.div>
            </div>
          </div>


        </section>

        {/* TRUST BAR */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: BarChart3, title: "Regulated Data Feeds", desc: "Tier-1 liquidity providers", color: "text-spice-red" },
                { icon: Zap, title: "Fast Payouts", desc: "Processed within 24 hours", color: "text-spice-gold" },
                { icon: ShieldCheck, title: "24/7 Support", desc: "Always here to help", color: "text-green-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-spice-dark text-lg">{item.title}</h3>
                    <p className="text-spice-muted text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section id="features" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="inline-block text-spice-red font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-spice-dark mb-6">
                Trading Made <span className="gradient-text">Simple</span>
              </h2>
              <p className="text-xl text-spice-muted max-w-2xl mx-auto">
                We've removed the barriers so you can focus on what matters most: becoming a profitable trader.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "No Time Limits", desc: "Trade at your own pace. No deadlines to hit your profit targets. Zero stress." },
                { icon: TrendingUp, title: "Raw Spreads", desc: "Enjoy the tightest spreads starting from 0.0 pips. Low commissions, zero hidden fees." },
                { icon: Award, title: "Simple Rules", desc: "No complex consistency rules or hidden traps. Straightforward rules designed for your success." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.15 }}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-spice-red/10 hover:border-spice-red/20 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-spice-gold/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-spice-light to-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-spice-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-spice-dark mb-4">{feature.title}</h3>
                    <p className="text-spice-muted leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE - SEO: Free Prop Firm Trial */}
        <section id="comparison" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="inline-block text-spice-red font-semibold text-sm uppercase tracking-wider mb-4">Free Prop Firm Trial</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-spice-dark mb-6">
                Why <span className="gradient-text">Test SpiceProp for Free</span>?
              </h2>
              <p className="text-xl text-spice-muted">Compare our FREE €6K prop trading demo account. No deposit required - start your funded account free practice!</p>
            </motion.div>

            <motion.div {...fadeInUp} className="overflow-hidden bg-white shadow-2xl shadow-gray-200/50 rounded-3xl border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="p-6 w-1/4"></th>
                      <th className="p-6 bg-gradient-to-b from-spice-light to-orange-50 border-t-4 border-t-spice-red w-1/4 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-spice-dark">SpiceProp</span>
                          <span className="text-xs text-white bg-spice-red px-3 py-1 rounded-full mt-2 font-bold uppercase tracking-wide">€6K FREE</span>
                        </div>
                      </th>
                      <th className="p-6 w-1/4 text-center font-bold text-gray-400">FTMO</th>
                      <th className="p-6 w-1/4 text-center font-bold text-gray-400">FundedNext</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { label: "Entry Cost", spice: "$0 (Free)", comp1: "$155+", comp2: "$129+" },
                      { label: "Time Limit", spice: "Unlimited", comp1: "30 Days", comp2: "Unlimited" },
                      { label: "Profit Target", spice: "7.5%", comp1: "10%", comp2: "8%" },
                      { label: "Platforms", spice: "MT5", comp1: "MT4, MT5", comp2: "MT4, MT5" },
                      { label: "Spreads", spice: "Low Spreads", comp1: "Standard", comp2: "Standard" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-6 font-semibold text-spice-dark">{row.label}</td>
                        <td className="p-6 text-center bg-spice-light/30">
                          <span className={`font-bold ${row.spice.includes('Free') || row.spice.includes('Unlimited') ? 'text-green-600' : 'text-spice-dark'}`}>
                            {row.spice}
                          </span>
                        </td>
                        <td className="p-6 text-center text-spice-muted">{row.comp1}</td>
                        <td className="p-6 text-center text-spice-muted">{row.comp2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="inline-block text-spice-red font-semibold text-sm uppercase tracking-wider mb-4">Getting Started</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-spice-dark mb-6">
                Start in <span className="gradient-text">3 Steps</span>
              </h2>
              <p className="text-xl text-spice-muted">Your journey to becoming a funded trader starts here.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-spice-red via-spice-gold to-spice-red"></div>

              {[
                { step: 1, title: "Sign Up & Use Code", desc: "Register and apply code SPICEFREE at checkout for 100% off." },
                { step: 2, title: "Get Credentials", desc: "Receive instant login details for your preferred trading platform." },
                { step: 3, title: "Show Your Skills", desc: "Trade the markets. Hit the target and unlock your funded account." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.2 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto w-20 h-20 bg-white border-4 border-spice-light rounded-full flex items-center justify-center mb-6 shadow-xl shadow-spice-red/10">
                    <span className="text-3xl font-bold gradient-text">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-spice-dark mb-3">{item.title}</h3>
                  <p className="text-spice-muted max-w-xs mx-auto">
                    {item.desc.includes('SPICEFREE') ? (
                      <>Register and apply code <span className="font-mono font-bold text-spice-red">SPICEFREE</span> at checkout for 100% off.</>
                    ) : item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section id="testimonials" className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
          <div className="absolute inset-0 opacity-50"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: 'rgba(226, 29, 29, 0.2)' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <span className="inline-block font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#F59E0B' }}>Social Proof</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Traders Love <span style={{ color: '#F59E0B' }}>SpiceProp</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Join a community of successful traders who are scaling their capital with us. We've paid out millions to traders worldwide.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { value: "$2.5M+", label: "Paid to Traders" },
                    { value: "4.8/5", label: "TrustPilot Score" },
                    { value: "10,000+", label: "Active Traders" },
                    { value: "24h", label: "Avg. Payout Time" },
                  ].map((stat, i) => (
                    <div key={i} className="p-5 backdrop-blur-sm rounded-2xl border border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#F59E0B' }}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
                {/* Testimonial Card */}
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl" style={{ color: '#1e293b' }}>
                  <div className="absolute -top-4 -left-4 text-6xl font-serif" style={{ color: 'rgba(226, 29, 29, 0.2)' }}>"</div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                      AM
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Alex M.</h4>
                      <div className="flex" style={{ color: '#F59E0B' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 text-lg leading-relaxed" style={{ color: '#64748b' }}>
                    "I was skeptical at first, but the free trial let me test their spreads without risking my own money. The execution is flawless. I purchased a challenge immediately after."
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      Funded Trader
                    </span>
                    <span className="text-sm" style={{ color: '#64748b' }}>$100k Account</span>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute top-6 -right-6 w-full h-full rounded-3xl -z-10 rotate-3" style={{ background: 'linear-gradient(135deg, rgba(226, 29, 29, 0.3) 0%, rgba(245, 158, 11, 0.3) 100%)' }}></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-spice-light">
          <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-spice-red font-semibold text-sm uppercase tracking-wider mb-4">Get Started Today</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-spice-dark mb-6 leading-tight">
                Turn Your Skills Into<br />
                <span className="gradient-text">Real Capital</span>
              </h2>
              <p className="text-xl text-spice-muted mb-10 max-w-2xl mx-auto">
                Start your FREE €6K Challenge today. No credit card. No risk. Just pure trading.
              </p>

              {/* Discount Code */}
              <div className="inline-flex flex-col items-center bg-white rounded-3xl p-6 shadow-xl shadow-spice-red/10 border border-gray-100 mb-10">
                <p className="text-spice-muted text-sm mb-2">Use this code at checkout:</p>
                <code className="text-4xl font-mono font-bold gradient-text tracking-widest">SPICEFREE</code>
                <p className="text-green-600 text-sm font-medium mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 100% Discount Applied
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto px-12 py-6 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Claim Your FREE €6K Challenge
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #E21D1D 100%)' }}></div>
                </a>
              </div>

              <p className="mt-6 text-sm text-spice-muted">
                Limited accounts available • Instant access
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
