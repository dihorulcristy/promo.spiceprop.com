"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, DollarSign, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AffiliatePage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" as const }
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spice-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-spice-gold"></span>
                                    </span>
                                    <span className="text-spice-gold font-bold text-sm uppercase tracking-wide">Join Our Partner Program</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                                    Become a <span className="gradient-text">SpiceProp</span> Affiliate
                                </h1>

                                <p className="text-xl text-spice-muted mb-8 leading-relaxed">
                                    Join the fastest-growing prop firm affiliate program. Earn industry-leading commissions with our transparent and rewarding partnership model.
                                </p>

                                {/* Commission Highlights */}
                                <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full">
                                    <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-spice-red/30 transition-all duration-300">
                                        <div className="text-4xl font-extrabold gradient-text mb-2">12%</div>
                                        <div className="text-spice-dark font-bold text-lg">First Order CPA</div>
                                        <p className="text-sm text-spice-muted">Earn big on every new trader you refer.</p>
                                    </div>
                                    <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-spice-gold/30 transition-all duration-300">
                                        <div className="text-4xl font-extrabold gradient-text mb-2">8%</div>
                                        <div className="text-spice-dark font-bold text-lg">Recurring Lifetime</div>
                                        <p className="text-sm text-spice-muted">Passive income from all future orders.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5 w-full justify-center lg:justify-start">
                                    <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28257763" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Start Earning Now
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #E21D1D 100%)' }}></div>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative flex justify-center"
                            >
                                <div className="relative w-full max-w-md aspect-square">
                                    <div className="absolute inset-0 bg-gradient-radial from-spice-gold/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                                    <div className="relative z-10 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl">
                                        <Image
                                            src="/images/best-affiliate-program.jpg"
                                            alt="Best Affiliate Programme Award"
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Floating badge */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-spice-muted font-semibold uppercase">Payouts</div>
                                            <div className="text-lg font-bold text-spice-dark">Monthly</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <span className="inline-block text-spice-red font-semibold text-sm uppercase tracking-wider mb-4">Why Partner With Us</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-spice-dark mb-6">
                                The <span className="gradient-text">SpiceProp Advantage</span>
                            </h2>
                            <p className="text-xl text-spice-muted max-w-2xl mx-auto">
                                We provide the tools, transparency, and payouts you need to succeed as an affiliate partner.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Award, title: "Top Commissions", desc: "Earn up to 12% CPA on initial orders and 8% on all recurring payments." },
                                { icon: TrendingUp, title: "High Conversion", desc: "Our competitive pricing and excellent trading conditions ensure high conversion rates." },
                                { icon: CheckCircle2, title: "Monthly Payouts", desc: "Get paid on time, every time. Reliable monthly payouts for all our partners." },
                                { icon: Users, title: "Real-Time Tracking", desc: "Advanced dashboard to track your clicks, conversions, and earnings in real-time." },
                                { icon: DollarSign, title: "No Cap on Earnings", desc: "The sky is the limit. The more you refer, the more you earn. No maximum limits." },
                                { icon: Award, title: "Dedicated Support", desc: "Get dedicated support from our affiliate team to help you maximize your earnings." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeInUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-spice-red/5 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-7 h-7 text-spice-red" />
                                    </div>
                                    <h3 className="text-xl font-bold text-spice-dark mb-3 group-hover:text-spice-red transition-colors">{item.title}</h3>
                                    <p className="text-spice-muted leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-br from-spice-dark to-slate-900 text-white">
                    <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-spice-red/10 rounded-full blur-[120px]"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                                Ready to Start <span className="text-spice-gold">Earning?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                Join the SpiceProp affiliate program today and start generating passive income from your traffic.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28257763" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center group relative" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Join Program Now
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #E21D1D 100%)' }}></div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
