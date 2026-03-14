"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Clock, Zap, ChevronRight, Copy, Check, Users, AlertCircle, Shield, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Helper for GTM DataLayer
const pushToDataLayer = (data: any) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push(data);
    } else {
        console.log("DataLayer Push:", data);
    }
};

type QuizState = {
    experience: string;
    capital: string;
    style: string;
};

// Sweet Pepper fixed recommendation — always the best match
const SWEET_PEPPER_RECOMMENDATION = {
    name: "Sweet Pepper 100K (2-Step)",
    type: "2-Step Challenge",
    size: "€100,000",
    originalPrice: "€470",
    discountedPrice: "€335.30",
    savings: "€134.70",
    promoCode: "Promo30",
    why: "As one of the top funding prop firms, our trading fund is designed to empower funding traders like you. The Sweet Pepper 2-Step prop trading model gives you a higher drawdown allowance and a lower-risk path to consistent payouts — perfectly aligned with your profile.",
    perk: "Higher Drawdown Allowance • Scalable Capital • Lifetime Funding",
    link: "https://my.spiceprop.com/agent_pp.html?agent_pp=28203897",
    features: [
        "10% Phase 1 Profit Target (lower risk entry)",
        "5% Phase 2 Profit Target (faster funding)",
        "12% Max Overall Drawdown (most lenient in prop trading)",
        "No Time Limits — trade at your own pace",
        "80% Profit Split from Day 1"
    ]
};

// Countdown timer hook
function useCountdown(initialSeconds: number) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return { mins, secs, expired: seconds === 0 };
}

export default function QuizFlow() {
    const [step, setStep] = useState(0); // 0 = hook, 1-3 = questions, 4 = email, 5 = result
    const [answers, setAnswers] = useState<QuizState>({
        experience: "",
        capital: "",
        style: "",
    });
    const [lead, setLead] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);
    const { mins, secs, expired } = useCountdown(15 * 60); // 15-minute countdown

    const rec = SWEET_PEPPER_RECOMMENDATION;

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
            setStep(5);
        } catch (e) {
            console.error(e);
            pushToDataLayer({ event: 'quiz_complete', status: 'error_db' });
            setStep(5);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCTAClick = () => {
        pushToDataLayer({ event: 'cta_click', plan: rec.name, promo: rec.promoCode });
    };

    const handleCopyPromo = () => {
        navigator.clipboard.writeText(rec.promoCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    // Animations
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.4 }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[450px] relative">
            {/* Progress Bar (only visible during questions 1-3) */}
            {step >= 1 && step <= 3 && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-10">
                    <div
                        className="h-full bg-gradient-to-r from-spice-gold to-spice-red transition-all duration-500 ease-out"
                        style={{ width: `${(step / 3) * 100}%` }}
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

                    {/* STEP 5: FINAL RESULT — Sweet Pepper Conversion Page */}
                    {step === 5 && (
                        <motion.div key="step5" {...fadeIn} className="text-center">

                            {/* Match Badge */}
                            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 font-bold rounded-full text-sm mb-4 animate-pulse">
                                ✓ Potrivire 98% cu profilul tău
                            </span>

                            {/* Headline */}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-spice-dark mb-3 leading-tight">
                                Perfect Match Found: Your{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                                    $100,000 Road
                                </span>{" "}
                                to Professional Funding Starts Here.
                            </h2>

                            {/* Sub-headline */}
                            <p className="text-spice-muted text-base mb-6 max-w-lg mx-auto leading-relaxed">
                                We&apos;ve analyzed your profile. Based on your goals, the{" "}
                                <strong className="text-spice-dark">Sweet Pepper 100K (2-Step)</strong> is your most
                                efficient path to a payout — from one of the{" "}
                                <strong className="text-spice-dark">top funding prop firms</strong>.
                            </p>

                            {/* Live Social Proof Bar */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    18 other traders are viewing this right now
                                </div>
                                <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    <AlertCircle className="w-4 h-4" />
                                    3/5 subsidized accounts claimed today
                                </div>
                            </div>

                            {/* Countdown Timer */}
                            <div className={`mb-6 p-4 rounded-2xl border-2 ${expired ? 'border-gray-300 bg-gray-50' : 'border-red-200 bg-red-50'}`}>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Clock className={`w-5 h-5 ${expired ? 'text-gray-400' : 'text-red-600'}`} />
                                    <span className={`font-bold text-sm ${expired ? 'text-gray-500' : 'text-red-700'}`}>
                                        {expired ? 'Oferta a expirat — Reîncarcă pentru o nouă sesiune' : 'Discount "Promo30" expiră în:'}
                                    </span>
                                </div>
                                {!expired && (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="bg-red-600 text-white font-extrabold text-3xl px-4 py-2 rounded-xl min-w-[60px] text-center tabular-nums">
                                            {mins}
                                        </div>
                                        <span className="text-red-600 font-extrabold text-3xl">:</span>
                                        <div className="bg-red-600 text-white font-extrabold text-3xl px-4 py-2 rounded-xl min-w-[60px] text-center tabular-nums">
                                            {secs}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Product Card */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-3xl border border-spice-gold/20 mb-6 relative overflow-hidden text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-spice-gold/10 rounded-full blur-2xl"></div>

                                {/* Product Header */}
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4 pb-4 border-b border-spice-gold/20">
                                        <div>
                                            <div className="text-xs font-bold text-spice-red uppercase tracking-wider mb-1">{rec.type}</div>
                                            <div className="text-2xl font-extrabold text-spice-dark">{rec.name}</div>
                                            <div className="text-sm text-spice-muted mt-1">Account Size: <strong className="text-spice-dark">{rec.size}</strong></div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-400 line-through font-medium">{rec.originalPrice}</div>
                                            <div className="text-3xl font-extrabold text-red-600">{rec.discountedPrice}</div>
                                            <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full inline-block mt-1">
                                                Save {rec.savings}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Why it fits */}
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Star className="w-5 h-5 text-spice-gold fill-spice-gold" />
                                            Why this is your perfect match:
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{rec.why}</p>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-5 h-5 text-spice-gold" />
                                            Sweet Pepper advantage:
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {rec.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="flex flex-wrap gap-2 pt-3 border-t border-spice-gold/20">
                                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-white rounded-full px-3 py-1 border">
                                            <Shield className="w-3 h-3 text-green-500" /> Secure checkout
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-white rounded-full px-3 py-1 border">
                                            <Award className="w-3 h-3 text-spice-gold" /> Top funding prop firm
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-500 bg-white rounded-full px-3 py-1 border">
                                            <Users className="w-3 h-3 text-blue-500" /> 10,000+ funded traders
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Code Box */}
                            <div className="mb-5 p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl">
                                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                                    Apply your exclusive promo code at checkout:
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 bg-white border-2 border-dashed border-amber-400 rounded-xl px-5 py-3 font-extrabold text-2xl text-spice-dark tracking-widest text-center select-all">
                                        {rec.promoCode}
                                    </div>
                                    <button
                                        onClick={handleCopyPromo}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                                            copied
                                                ? 'bg-green-500 text-white'
                                                : 'bg-amber-400 hover:bg-amber-500 text-amber-900'
                                        }`}
                                    >
                                        {copied ? (
                                            <><Check className="w-4 h-4" /> Copied!</>
                                        ) : (
                                            <><Copy className="w-4 h-4" /> Copy</>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-amber-600 mt-2 text-center">
                                    30% OFF — saves you <strong>{rec.savings}</strong> instantly
                                </p>
                            </div>

                            {/* CTA Button with pulse animation */}
                            <a
                                href={rec.link}
                                onClick={handleCTAClick}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block px-8 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-xl rounded-2xl shadow-xl hover:shadow-red-600/30 hover:-translate-y-1 transition-all relative overflow-hidden group animate-pulse-glow"
                                style={{
                                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Secure My $100K Account Now
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            {/* Scarcity reminder */}
                            <p className="mt-3 text-sm font-semibold text-red-600 flex items-center justify-center gap-2">
                                <Zap className="w-4 h-4" />
                                Limited: only 5 subsidized accounts available per day
                            </p>

                            <p className="mt-2 text-xs text-gray-400 text-center">
                                Use code <strong className="text-spice-dark">{rec.promoCode}</strong> at checkout to apply your 30% discount
                            </p>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
