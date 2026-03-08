"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Users, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import QuizFlow from "./QuizFlow";

export default function QuizLandingPage() {
    const [showSticky, setShowSticky] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Dacă secțiunea hero (cu quiz-ul) NU e pe ecran, arătăm sticky CTA.
                setShowSticky(!entry.isIntersecting);
            },
            { threshold: 0.1 } // Se declanșează când mai puțin de 10% din hero e vizibil
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" as const }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-spice-dark selection:bg-spice-red/20 selection:text-spice-dark">

            <header className="w-full bg-white border-b border-gray-100 py-1 md:py-2 px-4 flex justify-center sticky top-0 z-50">
                <a href="/" className="flex flex-col items-center group">
                    <div className="flex items-center gap-2">
                        <div className="relative w-32 h-10 md:w-40 md:h-12">
                            <Image
                                src="/images/spiceprop-logo.png"
                                alt="SpiceProp Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 128px, 160px"
                            />
                        </div>
                    </div>
                </a>
            </header>

            <main className="flex-grow">

                {/* HERO & QUIZ SECTION (Above the fold) */}
                <section ref={heroRef} className="relative pt-6 pb-20 md:pt-12 md:pb-32 overflow-hidden bg-white/50">
                    {/* Background Elements */}
                    <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-radial from-spice-red/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">

                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mb-4 tracking-tight leading-snug md:leading-normal">
                                Nu toate challenge-urile <br className="block md:hidden" /> sunt pentru toți. <br className="hidden md:block" />
                                <span className="text-red-600">Află care e pentru tine.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                                Răspunde la 3 întrebări scurte și primești recomandarea noastră personalizată instant, ca să nu pierzi timp analizând zeci de variante.
                            </p>

                            {/* Trust Indicators Above Quiz */}
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-sm text-gray-600 font-medium">
                                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                                    <Star className="w-4 h-4 text-[#00B67A] fill-[#00B67A]" />
                                    <span className="font-bold text-[#0F172A]">4.8/5</span> Trustpilot
                                </div>
                                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                                    <Users className="w-4 h-4 text-spice-red" />
                                    Peste 10k+ Traderi Finanțați
                                </div>
                            </div>
                        </motion.div>

                        {/* THE QUIZ COMPONENT */}
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                            <QuizFlow />
                        </motion.div>

                    </div>
                </section>


                {/* TESTIMONIALS (Moved up for social proof before USPs) */}
                <section className="py-20 bg-[#0F172A] text-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <motion.div {...fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Peste 10.000 de traderi au ales SpiceProp</h2>
                            <p className="text-gray-400">Verifică recenziile noastre reale pe Trustpilot ⭐️⭐️⭐️⭐️⭐️</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { name: "George T.", tag: "Funded $100K", quote: "Am terminat challenge-ul de evaluare într-o săptămână. Platforma funcționează perfect, iar payout-ul l-am primit a doua zi pe crypto.", avatar: "https://i.pravatar.cc/150?img=11" },
                                { name: "Marian P.", tag: "Funded $50K", quote: "După luni de zile pierdute cu alte firme care inventau reguli noi, la SpiceProp 1-Phase Challenge am găsit simplitatea pe care o căutam. Respect.", avatar: "https://i.pravatar.cc/150?img=68" },
                                { name: "Andrei D.", tag: "Funded $200K", quote: "Spread-uri excelente de 0 pips pe majore, iar split-ul de 80% din prima zi face toată diferența față de competiție.", avatar: "https://i.pravatar.cc/150?img=15" },
                            ].map((t, i) => (
                                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                                    </div>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{t.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-spice-gold shrink-0">
                                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">{t.name}</div>
                                            <div className="text-xs text-green-400 font-medium">{t.tag}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA After Testimonials */}
                        <motion.div {...fadeInUp} className="text-center">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F172A] font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all"
                            >
                                Găsește challenge-ul tău acum
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* TRUST USPs */}
                <section className="py-16 bg-white border-y border-gray-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                            {[
                                { icon: Zap, title: "Payouts în 24h", desc: "Banii tăi în cont în 24 de ore." },
                                { icon: ShieldCheck, title: "Fără Reguli Ascunse", desc: "Reguli clare, fără surprize la payout." },
                                { icon: Clock, title: "1-Step Fără Limită de Timp", desc: "Evoluezi în ritmul tău, fără presiune." },
                            ].map((item, i) => (
                                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-orange-50/30 transition-colors border border-gray-100">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-spice-red" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-gray-50 relative">
                    <div className="max-w-3xl mx-auto px-4 pb-12">
                        <motion.div {...fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-spice-dark mb-4">Întrebări Frecvente</h2>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                { q: "Ce este un 1-Phase Challenge?", a: "Este cel mai rapid mod de a fi finanțat. În loc de 2 faze complexe, la 1-Phase Challenge ai un singur profit target de 10% de atins, fără nicio limită de timp." },
                                { q: "Când primesc primul Payout?", a: "Poți face prima retragere de îndată ce ai generat profit eligibil conform termenilor, iar plățile noastre se procesează în medie în sub 24 de ore." },
                                { q: "Pot folosi Expert Advisors (EA) / Boți?", a: "Da, încurajăm orice stil de trading legal atâta timp cât se încadrează în regulile generale de drawdown." }
                            ].map((faq, i) => (
                                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA Strip */}
                    <div className="w-full bg-gradient-to-r from-spice-dark to-gray-900 py-16 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Începe cariera ta de trader finanțat azi.</h2>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-red-600 to-orange-500 font-bold text-lg rounded-xl shadow-lg hover:shadow-red-600/20 hover:-translate-y-1 transition-all"
                        >
                            Fă Quiz-ul și Află Contul Tău
                        </button>
                    </div>
                </section>
            </main>

            {/* MINIMALIST FOOTER */}
            <footer className="bg-white border-t border-gray-100 py-8 text-center px-4 mb-20 md:mb-0">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} SpiceProp. Toate drepturile rezervate. <br />
                    <span className="text-xs mt-2 block opacity-70">
                        Avertisment de risc: Tranzacționarea instrumentelor financiare implică riscuri.
                    </span>
                </p>
            </footer>

            {/* STICKY MOBILE CTA */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-50 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-[150%]'}`}>
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-red-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    Începe Quiz-ul Acum
                </button>
            </div>
        </div>
    );
}
