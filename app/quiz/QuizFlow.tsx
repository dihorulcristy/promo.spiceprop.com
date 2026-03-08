"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Clock, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Helper for GTM DataLayer
const pushToDataLayer = (data: any) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push(data);
    } else {
        // Fallback/log for development
        console.log("DataLayer Push:", data);
    }
};

type QuizState = {
    experience: string;
    capital: string;
    style: string;
};

export default function QuizFlow() {
    const [step, setStep] = useState(0); // 0 = hook, 1-4 = questions, 5 = email, 6 = result
    const [answers, setAnswers] = useState<QuizState>({
        experience: "",
        capital: "",
        style: "",
    });
    const [lead, setLead] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Recommendations Logic
    const getRecommendation = () => {
        // Simple logic
        const isOneStep = answers.style === "Scalping" || answers.style === "Day trading" || answers.experience === "3+ ani";

        let price = "€540";
        let accountSize = answers.capital.includes("$100K") ? "€100,000" : (answers.capital.includes("$200K+") ? "€200,000" : (answers.capital.includes("$50K") ? "€50,000" : "€25,000"));

        // Naive mapping based on general prop firm pricing
        if (accountSize === "€25,000") price = "€145";
        if (accountSize === "€50,000") price = "€265";
        if (accountSize === "€100,000") price = "€540";
        if (accountSize === "€200,000") price = "€1,080";

        if (isOneStep) {
            return {
                name: "1-Phase Challenge",
                type: "1-Step",
                size: accountSize,
                price: price,
                why: "Ideal pentru scalperi și day traders. Câștigi o finanțare mai rapid, cu o singură țintă de atins.",
                perk: "10% Profit Target • Fără limite de timp",
                link: "https://my.spiceprop.com/agent_pp.html?agent_pp=28203897"
            };
        } else {
            return {
                name: "2-Phase Challenge",
                type: "2-Step",
                size: accountSize,
                price: price,
                why: "Perfect pentru swing traders și cei cu o abordare mai conservatoare. Ai un drawdown general mai mare.",
                perk: "Limits relaxate • Scalare permisă",
                link: "https://my.spiceprop.com/agent_pp.html?agent_pp=28203897"
            };
        }
    };

    const handleStart = () => {
        pushToDataLayer({ event: 'quiz_start' });
        setStep(1);
        pushToDataLayer({ event: 'quiz_step', step_number: 1 });
    };

    const answerQuestion = (field: keyof QuizState, value: string) => {
        setAnswers({ ...answers, [field]: value });
        const nextStep = step + 1;
        setStep(nextStep);

        if (nextStep <= 3) {
            pushToDataLayer({ event: 'quiz_step', step_number: nextStep });
        }
    };

    const handleSubmitEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const rec = getRecommendation();

            // Save lead to Supabase via API route
            await fetch('/api/quiz-leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: lead.name,
                    email: lead.email,
                    experience: answers.experience,
                    capital: answers.capital,
                    style: answers.style,
                    recommendedPlan: `${rec.name} ${rec.size}`
                }),
            });

            pushToDataLayer({ event: 'quiz_complete' });
            setStep(5); // Show results
        } catch (e) {
            console.error(e);
            // Failsafe: still show results even if DB insert fails
            pushToDataLayer({ event: 'quiz_complete', status: 'error_db' });
            setStep(5);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCTAClick = () => {
        pushToDataLayer({ event: 'cta_click' });
    };

    const rec = getRecommendation();

    // Animations
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.4 }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[450px] relative">
            {/* Progress Bar (only visible during questions 1-4) */}
            {step >= 1 && step <= 4 && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-10">
                    <div
                        className="h-full bg-gradient-to-r from-spice-gold to-spice-red transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>
            )}

            <div className="p-8 md:p-12 relative z-20">
                <AnimatePresence mode="wait">

                    {/* STEP 0: HOOK */}
                    {step === 0 && (
                        <motion.div key="step0" {...fadeIn} className="text-center py-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-spice-light to-orange-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm">
                                <Zap className="w-10 h-10 text-spice-red" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-spice-dark mb-4">
                                Găsește challenge-ul perfect pentru tine în 30 de secunde
                            </h2>
                            <p className="text-spice-muted text-lg font-medium mb-10 max-w-md mx-auto">
                                Fără card. Fără obligații.
                            </p>

                            <button
                                onClick={handleStart}
                                className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto group"
                            >
                                Începe Quiz-ul
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
                                <Clock className="w-4 h-4" />
                                Durează doar 30 de secunde
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 1: EXPERIENCE */}
                    {step === 1 && (
                        <motion.div key="step1" {...fadeIn}>
                            <span className="text-spice-red font-bold text-sm tracking-wider uppercase mb-2 block">Întrebarea 1 din 3</span>
                            <h2 className="text-3xl font-bold text-spice-dark mb-8">De cât timp faci trading?</h2>

                            <div className="space-y-3">
                                {["Sub 6 luni", "6-12 luni", "1-3 ani", "3+ ani"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => answerQuestion('experience', option)}
                                        className="w-full text-left p-6 rounded-2xl border-2 border-gray-300 hover:border-red-600 bg-white transition-all font-bold text-xl text-black flex items-center justify-between group shadow-sm hover:shadow-md hover:bg-red-50"
                                    >
                                        <span className="text-black font-bold block">{option}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-red-600 flex items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: CAPITAL */}
                    {step === 2 && (
                        <motion.div key="step2" {...fadeIn}>
                            <span className="text-spice-red font-bold text-sm tracking-wider uppercase mb-2 block">Întrebarea 2 din 3</span>
                            <h2 className="text-3xl font-bold text-spice-dark mb-8">Ce cont funded ți-ai dori?</h2>

                            <div className="space-y-3">
                                {["$10K - $25K", "$50K", "$100K", "$200K+"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => answerQuestion('capital', option)}
                                        className="w-full text-left p-6 rounded-2xl border-2 border-gray-300 hover:border-red-600 bg-white transition-all font-bold text-xl text-black flex items-center justify-between group shadow-sm hover:shadow-md hover:bg-red-50"
                                    >
                                        <span className="text-black font-bold block">{option}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-red-600 flex items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: STYLE */}
                    {step === 3 && (
                        <motion.div key="step3" {...fadeIn}>
                            <span className="text-spice-red font-bold text-sm tracking-wider uppercase mb-2 block">Întrebarea 3 din 3</span>
                            <h2 className="text-3xl font-bold text-spice-dark mb-8">Cum tranzacționezi de obicei?</h2>

                            <div className="space-y-3">
                                {["Scalping", "Day trading", "Swing trading", "Mix"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => answerQuestion('style', option)}
                                        className="w-full text-left p-6 rounded-2xl border-2 border-gray-300 hover:border-red-600 bg-white transition-all font-bold text-xl text-black flex items-center justify-between group shadow-sm hover:shadow-md hover:bg-red-50"
                                    >
                                        <span className="text-black font-bold block">{option}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-red-600 flex items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: EMAIL GATE */}
                    {step === 4 && (
                        <motion.div key="step4" {...fadeIn} className="text-center py-4">
                            <div className="w-16 h-16 bg-green-50 rounded-full mx-auto flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-spice-dark mb-3">Analizăm rezultatele tale...</h2>
                            <p className="text-spice-muted mb-8">
                                Am găsit challenge-ul perfect pentru tine. Unde îți trimitem recomandarea personalizată?
                            </p>

                            <form onSubmit={handleSubmitEmail} className="max-w-md mx-auto space-y-4 text-left">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Prenume (opțional)</label>
                                    <input
                                        type="text"
                                        placeholder="ex: Alex"
                                        value={lead.name}
                                        onChange={e => setLead({ ...lead, name: e.target.value })}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-spice-gold focus:ring-4 focus:ring-spice-gold/10 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Adresa de Email *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="emailul.tau@gmail.com"
                                        value={lead.email}
                                        onChange={e => setLead({ ...lead, email: e.target.value })}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-spice-gold focus:ring-4 focus:ring-spice-gold/10 outline-none transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-4 px-8 py-5 bg-[#0F172A] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Se generează...' : 'Vezi recomandarea mea'}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                </button>
                                <div className="text-center mt-4">
                                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                                        Păstrăm datele tale în siguranță. Fără spam.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {/* STEP 5: FINAL RESULT */}
                    {step === 5 && (
                        <motion.div key="step5" {...fadeIn} className="text-center">
                            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 font-bold rounded-full text-sm mb-6 animate-pulse">
                                Potrivire 98% cu profilul tău
                            </span>

                            <h2 className="text-4xl font-extrabold text-spice-dark mb-2">Recomandarea Ta:</h2>
                            <div className="text-xl text-spice-muted mb-8">
                                Contul <span className="font-bold text-spice-dark">{rec.size} {rec.name}</span>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-spice-gold/20 mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-spice-gold/10 rounded-full blur-2xl"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-end mb-6 border-b border-spice-gold/20 pb-6">
                                        <div className="text-left">
                                            <div className="text-xs font-bold text-spice-red uppercase tracking-wider mb-1">{rec.type}</div>
                                            <div className="text-3xl font-extrabold text-spice-dark">{rec.size}</div>
                                        </div>
                                    </div>

                                    <div className="text-left space-y-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                <Star className="w-5 h-5 text-spice-gold fill-spice-gold" />
                                                De ce ți se potrivește:
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {rec.why}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5 text-spice-gold" />
                                                Avantaj principal:
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {rec.perk}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={rec.link}
                                onClick={handleCTAClick}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block px-8 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-red-600/20 hover:-translate-y-1 transition-all relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Vezi Oferta Ta
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <p className="mt-4 text-sm font-bold text-spice-red flex items-center justify-center gap-2 cursor-pointer hover:underline decoration-2 underline-offset-4" onClick={handleCTAClick}>
                                <Zap className="w-4 h-4" />
                                Promoție activă – vezi prețul special →
                            </p>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
