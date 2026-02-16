"use client";

import { ArrowRight, CheckCircle2, Quote, TrendingUp, Shield, Clock, AlertTriangle, Target, DollarSign, BarChart3, Zap, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdvertorialPage() {
    const affiliateLink = "https://promo.spiceprop.com/";

    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar - Confidential Journal Style */}
            <div className="bg-gray-900 border-b border-gray-700 py-2 px-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-gray-400">
                    <span className="uppercase tracking-widest font-semibold text-amber-400">CONFIDENȚIAL: JURNALUL UNUI TRADER</span>
                    <span>16 Februarie 2026</span>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
                {/* Category Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block bg-spice-red/10 text-spice-red px-3 py-1 rounded-full text-sm font-medium">
                        Analiză Financiară Independentă
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-spice-dark leading-tight mb-6"
                >
                    Un Veteran al Piețelor Financiare Rupe Tăcerea: „De Ce Ești Programat Să Rămâi Sărac Chiar Dacă Ești Un Trader Profitabil"
                </motion.h1>

                {/* Author Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 pb-8 border-b border-gray-200 mb-8"
                >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spice-red to-spice-gold flex items-center justify-center text-white font-bold">
                        AM
                    </div>
                    <div>
                        <p className="font-semibold text-spice-dark">De Adrian Marin, Analist Financiar Independent</p>
                        <p className="text-sm text-spice-muted">Actualizat: 16 Februarie 2026</p>
                    </div>
                </motion.div>

                {/* Main Image 1 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative w-full h-auto rounded-2xl overflow-hidden mb-8 shadow-lg"
                >
                    <Image
                        src="/images/advertorial/man_worrying.png"
                        alt="Trader concentrat pe grafice"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        placeholder="empty"
                    />
                    <p className="text-sm text-gray-500 italic mt-2 text-center">
                        Alexandru avea disciplina unui călugăr. Dar contul lui bancar spunea altceva.
                    </p>
                </motion.div>

                {/* Article Body */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="prose prose-lg max-w-none"
                >
                    {/* Opening */}
                    <p className="text-xl leading-relaxed text-spice-dark mb-6">
                        <strong>Alexandru ar fi trebuit să fie milionar.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Avea disciplina unui călugăr. Avea strategia unui lunetist. Nu făcea greșeli de începător, nu vâna &quot;pomparea&quot; criptomonedelor și nu risca niciodată mai mult de 1% pe o tranzacție.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong className="text-spice-red">În schimb, la vârsta de 34 de ani, Alexandru câștiga mai puțin din trading decât un casier de la supermarket.</strong>
                    </p>

                    {/* Emotional Hook */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                        <p className="text-amber-900 leading-relaxed mb-3">
                            Dacă te uiți la grafice mai mult decât la familia ta...
                        </p>
                        <p className="text-amber-900 leading-relaxed mb-3">
                            Dacă ai un jurnal de tranzacționare plin de intrări perfecte, dar contul tău bancar este gol...
                        </p>
                        <p className="text-amber-900 leading-relaxed mb-3">
                            Dacă simți că muncești de două ori mai mult decât prietenii tăi pentru jumătate din banii lor...
                        </p>
                        <p className="text-amber-900 leading-relaxed mb-3">
                            Sau dacă te-ai întrebat vreodată <strong>&quot;De ce strategia mea funcționează, dar viața mea nu se schimbă?&quot;</strong>...
                        </p>
                        <p className="text-amber-900 leading-relaxed mt-4 mb-0 font-semibold">
                            Atunci ceea ce urmează să citești îți va salva nu doar banii, ci și anii de viață pe care ești pe cale să îi irosești.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Există o <strong>&quot;epidemie invizibilă&quot;</strong> care afectează peste 90% dintre traderii de retail disciplinați.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu vorbim despre cei care pierd bani la noroc. Vorbim despre profesioniști ca tine, care fac totul corect, dar care sunt prinși într-o <strong>capcană matematică</strong> despre care nimeni nu vorbește.
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Dar aceasta nu este o problemă de strategie.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Majoritatea credem că, dacă nu facem bani serioși, înseamnă că nu suntem suficient de buni. Că trebuie să învățăm mai mult. Că trebuie să fim mai răbdători.
                    </p>

                    <div className="bg-gradient-to-r from-spice-red/10 to-spice-gold/10 p-8 rounded-2xl my-8 border-2 border-spice-gold/30">
                        <p className="text-xl font-bold text-spice-dark leading-relaxed mb-0">
                            Realitatea este șocantă: <span className="text-spice-red">Sistemul clasic de tranzacționare individuală este proiectat astfel încât, cu cât ești mai disciplinat pe un cont mic, cu atât &quot;salariul tău orar&quot; scade spre zero.</span>
                        </p>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-red/20">
                        15 Ani De Piețe Financiare Nu M-au Pregătit Pentru Acel Excel
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Numele meu este <strong>Adrian Marin</strong>. Am petrecut ultimii 15 ani în tranșeele piețelor financiare. Am văzut totul: de la prăbușirea din 2008, la raliurile nebune din crypto. Am antrenat sute de traderi.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dar cazul care m-a făcut să regândesc totul nu a fost un faliment spectaculos. A fost <strong>&quot;succesul&quot; tragic al lui Alexandru</strong>, unul dintre cei mai buni studenți ai mei.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Alexandru a venit la mine după un an &quot;perfect&quot;. Îmi arăta raportul lui de performanță. <strong>Era o operă de artă.</strong> Pierderi mici. Câștiguri constante. Un randament lunar mediu de 6%.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Pentru context: Cei mai buni manageri de fonduri de investiții din lume se luptă să facă 20% pe an. Alexandru făcea <strong>72% pe an</strong>. Era, tehnic vorbind, un geniu.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dar când l-am întrebat ce mașină și-a luat cu profitul, a lăsat capul în jos.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl my-8 border-l-4 border-gray-400">
                        <p className="text-gray-800 italic mb-0">
                            &quot;Nu mi-am luat mașină, Adrian. Abia mi-am plătit întreținerea.&quot;
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Avea un cont de <strong>3.000 de dolari</strong> – toate economiile lui. 6% din 3.000$ înseamnă <strong>180 de dolari pe lună</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        În acel moment, am simțit o furie rece. M-am uitat la cearcănele lui. Știam cât muncea. Se trezea la 6 dimineața. Analiza piețele 10 ore pe zi.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am făcut un calcul rapid pe un șervețel. 180 de dolari împărțit la 200 de ore de muncă.
                    </p>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <p className="text-lg leading-relaxed mb-2">Rezultatul:</p>
                        <p className="text-3xl font-bold text-spice-gold mb-2">0,90 dolari pe oră.</p>
                        <p className="text-gray-300 mb-0">
                            Alexandru, un trader de elită, câștiga <strong className="text-spice-gold">mai puțin de 5 lei pe oră</strong>.
                        </p>
                    </div>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Era sclavul propriei pasiuni.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Atunci am realizat că tot ce am fost învățați despre &quot;creșterea conturilor mici&quot; este o minciună periculoasă. <strong>Mi-am făcut o misiune personală din a găsi ieșirea din acest labirint.</strong>
                    </p>

                    {/* Main Image 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative w-full h-auto rounded-2xl overflow-hidden mb-8 shadow-lg"
                    >
                        <Image
                            src="/images/advertorial/chart_despair.png"
                            alt="Calcule pe grafice de trading"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            placeholder="empty"
                        />
                        <p className="text-sm text-gray-500 italic mt-2 text-center">
                            Cifrele nu mint: un cont mic transformă profitabilitatea în sărăcie.
                        </p>
                    </motion.div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-red/20">
                        Cercetarea A Scos La Iveală O Eroare Matematică Fatală
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        M-am scufundat în date. Am vrut să văd de ce traderii retail eșuează să facă tranziția către un venit full-time, chiar și când sunt profitabili.
                    </p>

                    <p className="text-xl text-spice-red font-bold mb-6">
                        Cifrele au fost devastatoare.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Studiile arată că un trader are nevoie de un capital de minim <strong>50.000$</strong> pentru a genera un venit de subzistență respectând regulile stricte de risc (1-2%).
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dar media conturilor de retail din România? <strong className="text-spice-red">Sub 1.500$.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Aici apare deconectarea brutală. Am fost mințiți să credem că tradingul este despre &quot;procente&quot;. Că dacă faci 10%, ești bogat.
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Dar procente nu plătesc facturile.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Aceasta m-a condus la descoperirea <strong>Mecanismului Unic al Problemei</strong>:
                    </p>

                    <div className="bg-gradient-to-r from-spice-red/10 to-spice-gold/10 p-8 rounded-2xl my-8 border-2 border-spice-red/30">
                        <h3 className="text-xl font-bold text-spice-red mb-4">Asimetria Efort-Recompensă (Input-Output Disconnect)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            În trading, &quot;costul&quot; tău nu este reprezentat de banii pierduți, ci de <strong>TIMPUL și EFORTUL COGNITIV</strong> investit.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Analiza unui grafic EUR/USD necesită aceeași concentrare, aceeași disciplină și același stres, indiferent dacă tranzacționezi un lot de 0.01 sau un lot de 10.00.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-0">
                            <strong>Efortul este fix.</strong> Este o constantă uriașă. Dar recompensa ta este variabilă, limitată strict de mărimea contului tău.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Când tranzacționezi un cont mic, ești prins într-o anomalie economică: <strong>Cu cât ești mai profesionist (adică îți gestionezi riscul corect), cu atât ești plătit mai prost.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Instinctul tău de a te simți frustrat nu este &quot;lăcomie&quot;. Este creierul tău care realizează că ești într-o afacere proastă. <strong>Ești un chirurg care este plătit cu prețul unui frizer, doar pentru că operezi într-un spital mic.</strong>
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-gold/40">
                        De Ce Soluțiile Tradiționale Sunt Doar &quot;Bandaje Pe O Rană Deschisă&quot;
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Odată ce am înțeles Asimetria Efort-Recompensă, am realizat de ce toate sfaturile pe care le dădeam studenților mei eșuau.
                    </p>

                    {/* Solutions Grid */}
                    <div className="space-y-6 my-8">
                        <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-spice-red text-xl mt-0.5">❌</span>
                                <h4 className="font-bold text-gray-900 text-lg">Soluția 1: &quot;Ai răbdare și folosește Dobânda Compusă&quot;</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                Acesta este cel mai mare mit vândut de industria de retail. Matematic, funcționează. Practic, este imposibil.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                Ca să transformi 3.000$ într-un venit full-time prin dobândă compusă, ai nevoie de <strong>12 până la 15 ani de performanță perfectă</strong>, fără să retragi niciun leu.
                            </p>
                            <p className="text-gray-600 italic mb-0">
                                Viața reală intervine. Se strică mașina. Ai nevoie de bani. Retragi profitul. Și resetezi ceasul compunerii la zero. Ești un hamster pe o roată.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-spice-red text-xl mt-0.5">❌</span>
                                <h4 className="font-bold text-gray-900 text-lg">Soluția 2: &quot;Mărește riscul (Levierul)&quot;</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                Majoritatea traderilor, frustrați de câștigurile mici, încep să riște 5%, 10% sau 50% pe tranzacție.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-0">
                                Aceasta nu rezolvă asimetria. Doar transformă tradingul în joc de noroc. În final, toți acești traderi pierd totul. <strong>Levierul pe conturi mici este doar o &quot;sinucidere financiară accelerată&quot;.</strong>
                            </p>
                        </div>

                        <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-spice-red text-xl mt-0.5">❌</span>
                                <h4 className="font-bold text-gray-900 text-lg">Soluția 3: &quot;Învață o strategie mai bună&quot;</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-0">
                                Poți avea o rată de câștig de 90%. Dacă contul tău este de 500$, tot vei câștiga bani de buzunar. <strong>Problema nu este cum conduci mașina, ci faptul că încerci să câștigi Formula 1 cu o bicicletă.</strong>
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Eram blocat. Părea că nu există ieșire pentru omul de rând.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Până când am vorbit cu un fost coleg care lucra la un Hedge Fund în Londra.</strong>
                    </p>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <Quote className="w-8 h-8 text-spice-gold mb-4" />
                        <p className="text-lg leading-relaxed mb-0">
                            &quot;Adrian, tu crezi că noi tranzacționăm cu banii noștri? <strong className="text-spice-gold">Niciun profesionist nu își riscă propriile economii. Noi vindem abilitatea, nu capitalul.</strong>&quot;
                        </p>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-green-500/30">
                        Secretul Instituțional Pe Care Retail-ul Abia Acum Îl Descoperă
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am înțeles că profesioniștii folosesc un model complet diferit. <strong>Ei nu încearcă să construiască capitalul de la zero. Ei îl închiriază.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Aceasta ne aduce la <strong>Mecanismul Unic al Soluției</strong>:
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl my-8 border-2 border-green-300">
                        <h3 className="text-xl font-bold text-green-800 mb-4">Decuplarea Capitalului (Capital Decoupling)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Este tehnologia financiară care separă <strong>Abilitatea</strong> (Traderul) de <strong>Fonduri</strong> (Investitorul).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-0">
                            Până recent, acest model era rezervat doar elitei bancare. Trebuia să ai licențe, diplome și relații pentru a gestiona banii altora. Dar tehnologia a democratizat acest proces prin apariția <strong>Firmelor de Prop Trading Online</strong>.
                        </p>
                    </div>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Iată exact cum funcționează pentru a rezolva Asimetria Efort-Recompensă:
                    </p>

                    <div className="grid gap-4 my-8">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Eliminarea Barierei de Intrare</h4>
                                <p className="text-gray-600 mb-0">Nu mai ai nevoie de 15 ani de economisire. Firma îți pune la dispoziție un &quot;depozit de capital&quot; (de exemplu, 100.000$).</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Pârghia Fără Datorie</h4>
                                <p className="text-gray-600 mb-0">Spre deosebire de un împrumut bancar, dacă pierzi banii firmei (în limitele stabilite), <strong>nu le datorezi nimic</strong>. Riscul este al lor. Abilitatea este a ta.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <BarChart3 className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Simetria Recompensei</h4>
                                <p className="text-gray-600 mb-0">Deoarece tranzacționezi un cont de 100.000$, un profit &quot;plictisitor&quot; și sigur de 3% devine <strong>3.000$</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <p className="text-lg leading-relaxed mb-2">Dintr-o dată, efortul tău de analiză este plătit corect.</p>
                        <p className="text-lg leading-relaxed mb-2">
                            Ora ta de muncă nu mai valorează <span className="text-red-400 line-through">0,90$</span>, ci <strong className="text-spice-gold text-2xl">50$ sau 100$</strong>.
                        </p>
                        <p className="text-gray-300 mb-0">Ecuația matematică se reechilibrează.</p>
                    </div>

                    {/* Mid-Article CTA */}
                    <div className="my-10 bg-gradient-to-r from-[#E21D1D]/5 to-[#F59E0B]/5 border border-[#E21D1D]/20 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ești gata să fii plătit corect pentru abilitățile tale?</h3>
                        <p className="mb-6 text-gray-600">Verifică dacă te califici pentru un cont finanțat de până la 200.000$ și scapă de capcana contului mic.</p>
                        <a
                            href={affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#E21D1D] text-white py-3 px-8 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
                        >
                            VERIFICĂ DISPONIBILITATEA ACUM
                        </a>
                    </div>

                    {/* Main Image 3 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative w-full h-auto rounded-2xl overflow-hidden mb-8 shadow-lg"
                    >
                        <Image
                            src="/images/advertorial/success_relaxed.png"
                            alt="Trader relaxat și profitabil"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            placeholder="empty"
                        />
                        <p className="text-sm text-gray-500 italic mt-2 text-center">
                            Rezultatele au sfidat orice logică anterioară.
                        </p>
                    </motion.div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-green-500/30">
                        Rezultatele Au Fost Vizibile Într-o Singură Lună
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am știut că trebuie să testez acest lucru cu Alexandru. Era sceptic. Îi era frică de &quot;țepe&quot;. L-am îndrumat către o firmă reputată de Prop Trading. A plătit o taxă de evaluare modică (mai puțin decât pierdea într-o zi proastă de tranzacționare emoțională).
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Rezultatele au sfidat orice logică anterioară.
                    </p>

                    <div className="bg-white border-2 border-green-200 rounded-2xl p-6 my-8 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                            <p className="text-gray-700 mb-0"><strong>Săptămâna 1:</strong> Alexandru a tranzacționat relaxat. Știind că nu își riscă banii de chirie, frica a dispărut. A tranzacționat exact ca un robot.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                            <p className="text-gray-700 mb-0"><strong>Săptămâna 3:</strong> A trecut evaluarea.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-spice-gold text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                            <p className="text-gray-700 mb-0"><strong>Săptămâna 6:</strong> A primit prima plată (Payout).</p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        M-a sunat plângând.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                        <p className="text-green-800 text-xl font-semibold mb-0">
                            &quot;Adrian, tocmai mi-au intrat 4.200 de dolari în cont. E mai mult decât am câștigat în ultimii doi ani la un loc.&quot;
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Și partea cea mai șocantă? <strong>Nu și-a schimbat strategia.</strong> Nu a devenit mai deștept peste noapte. Nu a riscat mai mult (a riscat tot 1%).
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-8">
                        Doar a aplicat aceeași strategie pe un volum corect.
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-[#F59E0B]/40">
                        Ce Spun Alții Care Au Făcut Schimbarea
                    </h2>

                    {/* First Testimonials */}
                    <div className="space-y-6 mb-10">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 italic mb-4">
                                &quot;Mă chinuiam să cresc un cont de 1.000 Euro de 3 ani. Îl duceam la 1.500, apoi scădeam. Eram blocat. După ce am trecut pe un cont finanțat, fac aceleași mișcări, dar <strong>luna trecută am scos 3.500 Euro. Mi-am dat demisia de la job.</strong>&quot;
                            </p>
                            <p className="text-sm text-gray-500 font-semibold mb-0">— Mihai, 32 ani, Inginer</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 italic mb-4">
                                &quot;Credeam că tradingul e o minciună. Dar problema era că încercam să fac bani din nimic. <strong>Cu capitalul firmei, stresul a dispărut. Dorm liniștită noaptea pentru că nu sunt banii mei în joc.</strong>&quot;
                            </p>
                            <p className="text-sm text-gray-500 font-semibold mb-0">— Elena, 45 ani, Contabil</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 italic mb-4">
                                &quot;Toți prietenii mei râdeau că stau pe grafice degeaba. <strong>Când le-am arătat prima retragere de 8.000 de lei pentru două săptămâni de muncă, s-a făcut liniște.</strong>&quot;
                            </p>
                            <p className="text-sm text-gray-500 font-semibold mb-0">— George, 24 ani, Student</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl my-8 border border-green-200">
                        <p className="text-green-800 font-semibold text-lg mb-0">
                            <TrendingUp className="inline w-5 h-5 mr-2" />
                            Datele recente arată că traderii care trec la modelul Prop Trading își cresc venitul mediu lunar cu <strong>1.200%</strong> în primele 6 luni, comparativ cu tranzacționarea capitalului propriu.
                        </p>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-spice-red/20">
                        Am Acceptat Sărăcia Ca Fiind &quot;Parte Din Proces&quot;. Am Greșit.
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ani de zile, comunitatea de trading ne-a spus că trebuie &quot;să suferim&quot; ca să reușim. Că trebuie să mâncăm orez și să tranzacționăm conturi de 100$ până devenim milionari.
                    </p>

                    <p className="text-xl text-spice-red font-bold mb-6">
                        Aceasta este o minciună care servește doar brokerilor (care vor să depui banii tăi și să îi pierzi).
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu trebuie să aștepți 20 de ani. Nu trebuie să fii sărac în timp ce ești profitabil.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Gândește-te la timpul pe care l-ai pierdut deja. Gândește-te la toate tranzacțiile bune pe care le-ai făcut, care ți-au adus doar câțiva dolari. <strong>Acele tranzacții ar fi putut plăti o rată la casă.</strong>
                    </p>

                    <div className="bg-gradient-to-r from-spice-red/10 to-spice-gold/10 p-8 rounded-2xl my-8 border-2 border-spice-gold/30">
                        <p className="text-xl font-bold text-spice-dark leading-relaxed mb-0">
                            Gap-ul dintre unde ești și unde ai putea fi nu este de &quot;ani de experiență&quot;. <span className="text-spice-red">Este un gap de Capital. Și acum poate fi închis instantaneu.</span>
                        </p>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-spice-gold/40">
                        De Ce Publicul Larg Nu Are Acces Nelimitat
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        S-ar putea să te întrebi: &quot;Dacă e așa simplu, de ce nu o fac toți?&quot;
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Răspunsul este simplu: <strong>Firmele de Prop Trading au nevoie de calitate, nu de cantitate.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ele pun banii reali la bătaie. Nu își pot permite să finanțeze jucători de noroc. De aceea, există un proces de evaluare. Și de aceea, locurile sunt limitate la nivel de alocare de capital.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ei au eliminat regulile absurde (cum ar fi limitele de timp) și au creat un mediu unde traderul real poate prospera.
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#E21D1D] mt-12 mb-6">
                        Nu Mai Fi Propriul Tău Angajat Prost Plătit
                    </h2>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Ai două opțiuni în fața ta.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 my-8">
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" />
                                Opțiunea 1
                            </h4>
                            <p className="text-gray-700 mb-0">
                                Continui să tranzacționezi contul tău mic. Te bucuri la un profit de 50$. Te stresezi când pierzi 20$. Aștepți 15 ani sperând la o minune, în timp ce inflația îți mănâncă economiile.
                            </p>
                        </div>
                        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                Opțiunea 2
                            </h4>
                            <p className="text-gray-700 mb-2">
                                <strong>Faci pasul către profesioniști.</strong> Încerci o evaluare complet lipsită de riscul falimentului personal.
                            </p>
                            <p className="text-gray-700 mb-0">
                                Dacă treci, ai acces la capitalul care îți poate schimba viața. Dacă nu treci, ai pierdut doar o taxă mică, dar ai câștigat experiență valoroasă.
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                        <p className="text-green-800 font-semibold mb-0">
                            <CheckCircle2 className="inline w-5 h-5 mr-2" />
                            <strong>Garanția de Rambursare:</strong> Dacă treci evaluarea și primești prima plată, îți returnează taxa de înscriere. Practic, riscul tău este ZERO odată ce demonstrezi că ești bun.
                        </p>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                        <p className="text-amber-900 leading-relaxed mb-0 font-semibold">
                            <Zap className="inline w-5 h-5 mr-2" />
                            În acest moment, ei au deschis o fereastră de oportunitate cu o <strong>REDUCERE DE 20%</strong> pentru noii aplicanți, dar oferta este valabilă doar pentru o perioadă scurtă, din cauza cererii imense.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Nu lăsa talentul tău să moară pe un cont de 500$.</strong>
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-8">
                        Abilitatea ta valorează mii de dolari. Nu o mai vinde pe mărunțiș.
                    </p>

                    {/* Add a button here to ensure visibility before the very end */}
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block sm:hidden w-full text-center bg-[#E21D1D] text-white py-4 px-6 rounded-xl font-bold text-lg mb-8"
                    >
                        APLICĂ REDUCEREA DE 20% ȘI VERIFICĂ ELIGIBILITATEA &gt;&gt;
                    </a>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Nu poți cumpăra timpul înapoi. Dar poți fi plătit corect pentru timpul tău începând de azi.</strong>
                    </p>

                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 mb-8"
                >
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full text-center bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="flex items-center justify-center gap-3">
                            APLICĂ REDUCEREA DE 20% ȘI VERIFICĂ ELIGIBILITATEA PENTRU CONTUL FINANȚAT
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-3">
                        (Locuri limitate – oferta expiră în curând)
                    </p>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center mb-12"
                >
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-900 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
                    >
                        ÎNCEPE EVALUAREA ACUM
                    </a>
                </motion.div>

                {/* Reader Testimonials */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Ce Spun Cititorii Noștri:</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <p className="text-gray-700 italic mb-3 text-sm">
                                &quot;Am fost sceptic. Am ars 3 conturi personale încercând să mă îmbogățesc rapid. Prop trading-ul m-a obligat să fiu disciplinat. <strong>Luna trecută am scos 2.800$ lucrând 2 ore pe zi. E ireal.</strong>&quot;
                            </p>
                            <p className="text-xs text-gray-500 font-semibold mb-0">— Radu V.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <p className="text-gray-700 italic mb-3 text-sm">
                                &quot;Nu credeam că o să văd ziua în care tradingul îmi plătește ratele. După 4 luni de chin pe cont propriu cu profituri de 10$, am trecut pe un cont de 50k. <strong>Prima retragere a fost un șoc pozitiv. Recomand oricui are habar de trading.</strong>&quot;
                            </p>
                            <p className="text-xs text-gray-500 font-semibold mb-0">— Sorin A.</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <p className="text-gray-700 italic mb-3 text-sm">
                                &quot;Soția mea îmi spunea să mă las. Că pierd timpul. <strong>Când i-am pus pe masă banii de vacanță făcuți într-o săptămână pe contul firmei, nu a mai zis nimic.</strong> Mulțumesc pentru articol.&quot;
                            </p>
                            <p className="text-xs text-gray-500 font-semibold mb-0">— Vlad P.</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white py-4 px-10 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        CLICK AICI PENTRU A REVENDICA OFERTA →
                    </a>
                </motion.div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-100 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 leading-relaxed mb-0">
                        <strong>Disclaimer:</strong> Tranzacționarea implică riscuri. Rezultatele prezentate sunt ale unor traderi care au trecut procesul de evaluare. Performanța trecută nu garantează rezultate viitoare. Acest articol conține link-uri afiliate. Tranzacționarea CFD-urilor și forex implică un nivel ridicat de risc și poate să nu fie potrivită pentru toți investitorii. Asigurați-vă că înțelegeți pe deplin riscurile implicate înainte de a tranzacționa. Conținutul este furnizat doar în scopuri informaționale și nu constituie sfaturi financiare.
                    </p>
                </div>
            </article>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 sm:hidden z-50">
                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white py-4 px-6 rounded-xl font-bold text-base shadow-lg animate-pulse-glow"
                >
                    APLICĂ REDUCEREA DE 20% →
                </a>
            </div>

            {/* Bottom spacing for sticky CTA on mobile */}
            <div className="h-20 sm:hidden"></div>
        </div>
    );
}
