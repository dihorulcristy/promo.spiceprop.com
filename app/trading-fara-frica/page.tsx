"use client";

import {
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Shield,
    Clock,
    AlertTriangle,
    Brain,
    Lock,
    Unlock,
    Zap,
    Target,
    Users,
    ChevronRight,
    Play
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TradingFaraFricaPage() {
    const affiliateLink = "https://promo.spiceprop.com/";
    const currentDate = new Date().toLocaleDateString('ro-RO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const listItems = [
        {
            id: 1,
            title: "Nu Strategia E Problema — Și Probabil Ai Știut Asta Tot Timpul",
            icon: <Target className="w-6 h-6 text-[#E21D1D]" />,
            content: (
                <>
                    <p>Primul lucru pe care trebuie să-l înțelegi este că instinctul tău a fost corect. Dacă ai simțit vreodată că problema nu e strategia ta (setup-ul), ci altceva — ai avut dreptate.</p>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl my-6">
                        <p className="font-bold text-[#0F172A] mb-4 text-sm uppercase tracking-wider">Studiu realizat pe 2,777 de traderi a arătat că doar 12,3% au identificat „lipsa unei strategii bune" ca principală provocare:</p>
                        <div className="space-y-4">
                            {[
                                { label: "Lipsă de disciplină sau autocontrol", value: "37.8%" },
                                { label: "Trading emoțional după pierderi", value: "37.5%" },
                                { label: "Presiuni financiare", value: "35.0%" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.value }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className="h-full bg-[#E21D1D]"
                                        />
                                    </div>
                                    <span className="font-bold text-[#0F172A] w-12">{stat.value}</span>
                                    <span className="text-sm text-gray-600 flex-1">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p>Observi pattern-ul? Trei din patru probleme majore sunt psihologice, nu tehnice. Diferența nu e în setup-uri. E în ce se întâmplă în capul lor când apasă butonul.</p>
                </>
            )
        },
        {
            id: 2,
            title: "„Demo Trading” Nu Te Pregătește Pentru Nimic — Iată De Ce",
            icon: <Brain className="w-6 h-6 text-[#E21D1D]" />,
            content: (
                <>
                    <p>Probabil ai auzit sfatul: „Tranzacționează pe demo până devii profitabil, apoi treci pe live.” Pare logic. Dar e complet greșit.</p>
                    <div className="relative w-full aspect-video my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                        <Image src="/images/advertorial/man_worrying.png" alt="Stressful trading" fill className="object-cover" />
                    </div>
                    <p>Tradingul pe demo nu activează aceleași circuite neurale ca cel pe live. În momentul în care introduci bani reali, mai ales bani pe care nu-ți permiți să-i pierzi, se activează <strong>amigdala</strong> — partea primitivă a creierului responsabilă de răspunsul fight-or-flight.</p>
                    <div className="my-6 p-6 bg-amber-50 rounded-xl border-l-4 border-amber-400">
                        <p className="italic text-amber-900 mb-0">
                            "Știu ce am de făcut. Pur și simplu nu pot să execut când banii sunt reali. Fac exact ce știu că nu trebuie. Parcă ceva mă posedă, arunc planul pe geam, iar apoi văd clar în retrospectivă că am luat-o razna."
                        </p>
                    </div>
                    <p>Nu pentru că ești slab sau indisciplinat. Ci pentru că biologia ta nu-ți permite.</p>
                </>
            )
        },
        {
            id: 3,
            title: "„Scared Money” Nu E O Slăbiciune — E Un Răspuns Biologic",
            icon: <AlertTriangle className="w-6 h-6 text-[#E21D1D]" />,
            content: (
                <>
                    <p>Există o vorbă veche în trading: „Scared money doesn't make money.” (Banii fricoși nu fac bani).</p>
                    <p>Când mintea ta știe că sunt banii TĂI pe masă — bani câștigați prin muncă grea — instinctul de supraviețuire intră în alertă. Creierul tău nu face diferența între un leu care te atacă în savană și pierderea economiilor tale pe grafic.</p>
                    <p>Când ești în modul de supraviețuire, faci lucruri iraționale:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                        {[
                            "Închizi profiturile prea devreme",
                            "Lași pierderile să crească",
                            "Faci revenge trading",
                            "Muți stop-loss-ul constant"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                <AlertTriangle className="w-4 h-4 text-[#E21D1D] flex-shrink-0" />
                                <span className="text-red-900 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )
        },
        {
            id: 4,
            title: "DESCOPERIREA CARE A SCHIMBAT TOTUL",
            icon: <Zap className="w-6 h-6 text-[#F59E0B]" />,
            content: (
                <>
                    <p className="text-xl font-bold text-[#0F172A]">Diferența e SURSA CAPITALULUI.</p>
                    <div className="relative w-full aspect-[16/6] my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-md grayscale hover:grayscale-0 transition-all duration-700">
                        <Image src="/images/advertorial/chart_despair.png" alt="Market analysis" fill className="object-cover" />
                    </div>
                    <p>Un mentor mi-a spus: "Traderii mei de succes tranzacționează cu bani care nu sunt AI LOR. Când pierzi un trade cu banii fondului, nu simți că ți-ai pierdut mâncarea de pe masă."</p>
                    <div className="my-8 p-8 bg-[#0F172A] text-white rounded-2xl relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Shield className="w-32 h-32" />
                        </div>
                        <p className="text-2xl font-bold mb-4 leading-tight">Mecanismul ascuns al eșecului:</p>
                        <p className="text-[#F59E0B] text-lg lg:text-xl leading-relaxed">
                            Este presiunea psihologică a banilor proprii care activează răspunsul de supraviețuire și face execuția corectă imposibilă biologic.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 5,
            title: "De Ce Soluțiile „Tradiționale” Nu Funcționează",
            icon: <Lock className="w-6 h-6 text-[#E21D1D]" />,
            content: (
                <>
                    <p>Industria educațională de trading face miliarde. Toate promit același lucru: „Învață strategia corectă și vei fi profitabil.” Dar 94% din traderii retail pierd bani — indiferent câte cursuri au cumpărat.</p>
                    <p>E ca și cum ai lua lecții de condus de la cei mai buni piloți... dar de fiecare dată când te urci la volan, ai un pistol îndreptat spre tâmplă. Nu aveam nevoie de MAI MULTĂ educație. Aveam nevoie de o altă sursă de capital.</p>
                </>
            )
        },
        {
            id: 6,
            title: "Singura Soluție Care Rezolvă ADEVĂRATA Problemă",
            icon: <Unlock className="w-6 h-6 text-green-600" />,
            content: (
                <>
                    <p>Trebuie să tranzacționezi cu capital care nu e al tău. Aici intervin <strong>prop trading firms</strong> — companii care finanțează traderi talentați.</p>
                    <div className="relative w-full aspect-video my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                        <Image src="/images/advertorial/success_relaxed.png" alt="Relaxed trader" fill className="object-cover" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="bg-white border-2 border-[#E21D1D] rounded-xl p-6 shadow-lg">
                            <h4 className="font-bold text-[#E21D1D] mb-2">Trading Proprietar</h4>
                            <p className="text-sm">Riscă banii tăi reali. Simte frică. Greșește. Pierde tot.</p>
                        </div>
                        <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
                            <h4 className="font-bold mb-2">Trading Funded</h4>
                            <p className="text-sm">Riscă capitalul lor. Păstrează 80-90% din profit. Pace mentală totală.</p>
                        </div>
                    </div>
                    <p>Beneficiul principal nu e capitalul mare. E <strong>ELIBERAREA PSIHOLOGICĂ.</strong></p>
                </>
            )
        },
        {
            id: 7,
            title: "Cum Să Alegi Un Prop Firm Care Chiar Vrea Să Reușești",
            icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
            content: (
                <>
                    <p>Trebuie să fiu sincer: nu toate firmele de prop trading sunt la fel. Firmele serioase fac bani când TU faci bani (din split-ul de profit).</p>
                    <ul className="space-y-3 my-4">
                        {[
                            "Transparență totală în reguli",
                            "Istoric dovedit de plăți (Trustpilot)",
                            "Challenge fee refundabil după primul payout",
                            "Reguli de profit target realiste (8-10%)",
                            "Drawdown calculat corect (fără trailing agresiv)"
                        ].map((check, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{check}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#E21D1D] selection:text-white">
            {/* News Bar */}
            <div className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-50 shadow-sm">
                <div className="max-w-5xl mx-auto flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E21D1D] rounded-full animate-pulse" />
                        Authority Listicle Series
                    </span>
                    <span>{currentDate}</span>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
                {/* Hero */}
                <header className="mb-16 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight mb-8"
                    >
                        Un Trader Funded Cu Peste $2.3 Milioane În Retrageri Dezvăluie: <span className="text-[#E21D1D]">7 Motive Reale</span> Pentru Care „Scared Money" Te Sabotează (Și Singura Soluție Care Funcționează)
                    </motion.h1>

                    <div className="relative w-full aspect-[21/9] mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                        <Image
                            src="/images/trading_hero_main.png"
                            alt="Professional Trading Setup"
                            fill
                            className="object-cover"
                            priority
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/advertorial/success_relaxed.png";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-spice-dark/60 via-transparent to-transparent" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl border-l-4 border-[#F59E0B] pl-6 py-2"
                    >
                        De ce traderii inteligenți pierd bani chiar și cu strategii profitabile — și cum să scapi din capcana psihologică în care te-ai blocat fără să știi.
                    </motion.p>
                </header>

                {/* Author Intro */}
                <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full" />
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-spice-red to-spice-gold overflow-hidden shadow-lg shadow-spice-red/20 transform hover:rotate-2 transition-transform">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
                                alt="Andrei - Professional Trader"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"
                                unoptimized
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://ui-avatars.com/api/?name=Andrei&background=E21D1D&color=fff&size=128";
                                }}
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-2xl font-bold text-[#0F172A] mb-4">Mă numesc Andrei și în ultimii 8 ani am tranzacționat pentru 4 firme de prop trading diferite, acumulând peste $2.3 milioane în payouts (retrageri).</p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Dar nu pentru asta scriu acest articol.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Scriu pentru că în primii 5 ani de trading, <strong>am pierdut $47,000 din economii proprii</strong> — bani strânși în 3 ani de muncă într-o corporație pe care o uram.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Și scriu pentru că știu EXACT ce simți tu în acest moment. Știu cum e să ai o strategie care rupe pe demo, să vezi rezultatele, să știi matematic că poți fi profitabil... și apoi să deschizi contul live, să apeși Buy și să simți cum te blochezi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Listicle Content */}
                <section className="space-y-12">
                    {listItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group"
                        >
                            <div className="flex items-start gap-4 md:gap-8 transition-transform duration-300 group-hover:translate-x-1">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center text-2xl font-black text-[#0F172A] shadow-sm group-hover:border-[#E21D1D] transition-colors">
                                        #{item.id}
                                    </div>
                                    {index !== listItems.length - 1 && (
                                        <div className="w-0.5 h-full bg-gray-200 mt-4 min-h-[50px]" />
                                    )}
                                </div>
                                <div className="flex-1 pt-2">
                                    <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-6 flex items-center gap-3">
                                        {item.icon}
                                        {item.title}
                                    </h2>
                                    <div className="prose prose-lg lg:prose-xl text-gray-600 leading-relaxed max-w-none prose-strong:text-[#0F172A] prose-strong:font-bold">
                                        {item.content}
                                    </div>

                                    {/* Sub-CTA (Mid-article) */}
                                    {item.id === 4 && (
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="mt-12 mb-8 bg-gradient-to-r from-spice-gold to-spice-gold/80 p-8 rounded-2xl shadow-xl shadow-spice-gold/20"
                                        >
                                            <h3 className="text-2xl font-black text-[#0F172A] mb-4">Elimină sursa fricii.</h3>
                                            <p className="text-[#0F172A]/80 mb-6 font-medium">Banii de la o entitate profesională sunt cheia execuției fără presiune. Treci la tradingul funded în mai puțin de 30 de zile.</p>
                                            <a
                                                href={affiliateLink}
                                                className="inline-flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors"
                                            >
                                                Verifică Eligibilitatea
                                                <ArrowRight className="w-5 h-5" />
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Final Decision Section */}
                <section className="mt-24 pt-20 border-t border-gray-200">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#0F172A] mb-6">Ce Se Întâmplă Dacă Nu Faci Nimic?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Am pierdut 5 ani din viață în această capcană. 5 ani în care aș fi putut fi funded, profitabil, liber. Nu lăsa timpul să se scurgă printre degete.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl opacity-60">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-gray-400">01</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Opțiunea 1</h3>
                            <p className="text-gray-600 mb-0 leading-relaxed">
                                Continui ca până acum. Tragi de conturi mici, te stresezi, speri că „data viitoare va fi altfel” și repeți ciclul.
                            </p>
                        </div>
                        <div className="bg-[#0F172A] text-white p-8 rounded-3xl shadow-2xl relative">
                            <div className="absolute top-0 right-0 bg-[#E21D1D] text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-widest">
                                Recomandat
                            </div>
                            <div className="w-12 h-12 bg-[#E21D1D] rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold">02</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Opțiunea 2</h3>
                            <p className="text-gray-200 mb-0 leading-relaxed font-medium">
                                Elimini sursa problemei. Obții acces la capital funded și în sfârșit tranzacționezi cu mintea clară, exact cum o faci pe demo.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-spice-red to-spice-gold" />

                        <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-8 leading-tight">
                            Ești Gata Să Tranzacționezi <br className="hidden md:block" /> <span className="text-[#E21D1D]">Fără Frică?</span>
                        </h2>

                        <div className="flex justify-center">
                            <a
                                href={affiliateLink}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E21D1D] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-500/20 hover:bg-red-700 transition-all hover:translate-y-[-2px]"
                            >
                                Începe Trial-ul Gratuit Acum
                                <ArrowRight className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-6">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-black text-[#0F172A]">$400k+</span>
                                <span className="text-sm text-gray-500 font-medium">Capital Maxim</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-black text-[#0F172A]">90%</span>
                                <span className="text-sm text-gray-500 font-medium">Profit Split</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div className="flex flex-col items-center">
                                <span className="text-2xl font-black text-[#0F172A]">Instant</span>
                                <span className="text-sm text-gray-500 font-medium">Payouts</span>
                            </div>
                        </div>

                        <p className="mt-12 text-gray-400 text-sm font-medium">
                            *Nu este necesară nicio investiție proprie dincolo de taxa de evaluare (refundabilă).
                        </p>
                    </motion.div>
                </section>
            </main>

            {/* Footer-ish Disclaimer */}
            <footer className="bg-white border-t border-gray-100 py-12 px-4 mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-8 opacity-70">
                        <div className="flex gap-12">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0F172A]">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">SSL Secured</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0F172A]">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Data Privacy</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0F172A]">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Verified Payouts</span>
                            </div>
                        </div>
                        <p className="text-xs text-center text-gray-500 leading-relaxed">
                            <strong>NOTĂ IMPORTANTĂ:</strong> Rezultatele descrise mai sus sunt rezultate individuale ale unui trader profesionist (peste $2.3 milioane în retrageri).
                            Rezultatele individuale pot varia. Majoritatea traderilor își pierd banii atunci când tranzacționează fără un management adecvat al riscului sau folosind capital pe care nu își permit să îl piardă.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden z-[100]">
                <a
                    href={affiliateLink}
                    className="flex items-center justify-center gap-3 bg-[#E21D1D] text-white py-4 px-6 rounded-xl font-black text-base shadow-lg animate-pulse-glow"
                >
                    VEZI DACĂ EȘTI ELIGIBIL →
                </a>
            </div>

            {/* Add extra bottom space for mobile sticky bar */}
            <div className="h-20 md:hidden" />
        </div>
    );
}
