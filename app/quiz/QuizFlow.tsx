"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Star, Clock, Zap, Target, Users, Tag, Copy, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper for GTM DataLayer
const pushToDataLayer = (data: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer) {
        (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push(data);
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
    
    // FOMO Elements State
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
    const [showCopied, setShowCopied] = useState(false);
    const [viewers, setViewers] = useState(18);

    useEffect(() => {
        if (step === 5 && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [step, timeLeft]);

    useEffect(() => {
        if (step === 5) {
            // Randomize viewers slightly for realism
            const viewerInterval = setInterval(() => {
                setViewers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
            }, 15000);
            return () => clearInterval(viewerInterval);
        }
    }, [step]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleCopyPromo = () => {
        navigator.clipboard.writeText("Promo30");
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        pushToDataLayer({ event: 'promo_copied' });
    };

    // Fixed High-Converting Recommendation
    const getRecommendation = () => {
        return {
            name: "Sweet Pepper (2-Phase) Challenge",
            type: "Prop Trading Fund Top Tier",
            size: "€100,000",
            originalPrice: "€470.00",
            promoPrice: "€335.30",
            savings: "€134.70",
            promoCode: "Promo30",
            link: "https://my.spiceprop.com/registration" // Assuming standard reg flow
        };
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
        pushToDataLayer({ event: 'cta_click', product: 'sweet_pepper_100k' });
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
                                Găsește challenge&apos;ul perfect pentru tine în 30 de secunde
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

                    {/* STEP 5: HIGH CONVERTING RESULT */}
                    {step === 5 && (
                        <motion.div key="step5" {...fadeIn} className="text-center">
                            {/* Urgent Top Bar */}
                            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-6 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                                    <Clock className="w-4 h-4 animate-pulse" />
                                    <span>Oferta expiră în:</span>
                                </div>
                                <div className="font-mono text-xl font-bold text-red-600 bg-white px-3 py-1 rounded shadow-inner">
                                    {formatTime(timeLeft)}
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-spice-dark mb-3 leading-tight">
                                Perfect Match: Drumul tău spre <span className="text-spice-red">$100,000</span> începe aici.
                            </h2>
                            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                                Pe baza analizei tale, profilul tău se aliniază cu <strong>prop trading</strong>-ul orientat pe scalare. Ca una dintre selecțiile <strong>top funding prop firms</strong>, am identificat calea cea mai eficientă pentru tine.
                            </p>

                            <div className="bg-white p-1 rounded-3xl border-2 border-spice-gold shadow-2xl relative mb-8">
                                {/* Social Proof Badge */}
                                <div className="absolute -top-4 -right-2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-gray-700 z-10">
                                    <Users className="w-3 h-3 text-spice-gold" />
                                    {viewers} traderi vizualizează asta
                                </div>
                                
                                {/* Limited Spots Indicator */}
                                <div className="absolute -top-4 -left-2 bg-white text-red-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-red-200 z-10">
                                    <Target className="w-3 h-3" />
                                    3/5 conturi promoționale acordate
                                </div>

                                <div className="bg-gradient-to-b from-orange-50 to-white rounded-t-2xl p-6 border-b border-gray-100">
                                    <div className="text-sm font-bold text-spice-red uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
                                        <CheckCircle2 className="w-4 h-4" /> {rec.type}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-extrabold text-spice-dark mb-4 drop-shadow-sm">
                                        {rec.name}
                                    </div>
                                    
                                    {/* Pricing Block */}
                                    <div className="flex flex-col items-center justify-center my-6">
                                        <div className="text-gray-400 line-through text-2xl font-semibold mb-1">
                                            {rec.originalPrice}
                                        </div>
                                        <div className="flex items-end justify-center gap-2">
                                            <span className="text-6xl font-black text-spice-red tracking-tight">{rec.promoPrice}</span>
                                        </div>
                                        <div className="text-green-600 font-bold text-sm mt-2 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                                            Economisești instant {rec.savings}
                                        </div>
                                    </div>

                                    {/* Promo Code Box */}
                                    <div className="max-w-xs mx-auto mb-2">
                                        <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Folosește codul la checkout:</p>
                                        <div 
                                            onClick={handleCopyPromo}
                                            className="bg-gray-900 text-white rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-800 transition-colors border border-gray-700 group shadow-md"
                                        >
                                            <span className="font-mono font-bold text-lg text-spice-gold tracking-widest">{rec.promoCode}</span>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-xs font-bold ${showCopied ? 'text-green-400' : 'text-gray-400 group-hover:text-white'}`}>
                                                    {showCopied ? 'Copiat!' : 'Copiază'}
                                                </span>
                                                <Copy className={`w-4 h-4 ${showCopied ? 'text-green-400' : 'text-gray-400 group-hover:text-white'}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-b-2xl">
                                    <div className="text-left space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-orange-100 p-1.5 rounded-lg shrink-0 mt-0.5">
                                                <Star className="w-4 h-4 text-spice-gold fill-spice-gold" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm">De ce acest cont?</h4>
                                                <p className="text-gray-600 text-xs leading-relaxed mt-1">
                                                    Ideal pentru reducerea riscului emoțional. <strong>Finanțarea traderilor</strong> prinde avânt când ai un cont masiv care îți permite să scalezi repede cu reguli generoase de drawdown.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href={rec.link}
                                        onClick={handleCTAClick}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block px-8 py-5 bg-[#E21D1D] text-white font-black text-xl rounded-xl shadow-xl shadow-red-500/30 hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl transition-all relative overflow-hidden group animate-pulse-glow"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Asigură Contul de {rec.size} Acum
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        {/* Shine Effect */}
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                                    </a>
                                    
                                    <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold text-gray-400 grayscale opacity-70">
                                        <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Plată Securizată</span>
                                        <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> Garanție Cel Mai Bun Preț</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
