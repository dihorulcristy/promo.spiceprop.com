"use client";

import { ArrowRight, CheckCircle2, Quote, TrendingUp, Shield, Clock, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdvertorialPage() {
    const affiliateLink = "https://my.spiceprop.com/agent_pp.html?agent_pp=28203897";

    return (
        <div className="min-h-screen bg-white">
            {/* Top Bar - Looks like a news site */}
            <div className="bg-gray-100 border-b border-gray-200 py-2 px-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-gray-600">
                    <span>Finanțe Personale & Lifestyle</span>
                    <span>14 Octombrie 2023</span>
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
                        Finanțe Personale
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-spice-dark leading-tight mb-6"
                >
                    Tată Din București Dezvăluie Secretul Care I-a Salvat Căsnicia (Și Economiile Familiei) După Ani De Pierderi În Tranzacționare
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-spice-muted mb-8 italic border-l-4 border-spice-gold pl-4"
                >
                    "Mă simțeam un impostor în propria mea casă, până când am descoperit 'Eroarea Biologică' ce mă făcea să pierd bani... și soluția simplă care a schimbat totul."
                </motion.p>

                {/* Author Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 pb-8 border-b border-gray-200 mb-8"
                >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spice-red to-spice-gold flex items-center justify-center text-white font-bold">
                        AP
                    </div>
                    <div>
                        <p className="font-semibold text-spice-dark">Andrei Popescu</p>
                        <p className="text-sm text-spice-muted">Timp de citire: 8 minute</p>
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
                        alt="Bărbat îngrijorat la masă"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                        placeholder="empty"
                    />
                    <p className="text-sm text-gray-500 italic mt-2 text-center">
                        Momentele de tăcere de la cină ascundeau o furtună interioară.
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
                        <strong>Stăteam la cină cu soția mea și mă simțeam un impostor.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ea îmi povestea despre ziua ei, zâmbind. Îmi spunea că vrea să rezerve concediul de vară săptămâna viitoare.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Eu dădeam din cap și zâmbeam fals. Dar în interior, eram distrus.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong className="text-spice-red">Ea nu știa că, doar cu patru ore înainte, pierdusem 2.500 de Lei din contul nostru de economii.</strong> Banii pentru avansul vacanței.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Îmi simțeam stomacul strâns într-un nod. Mâinile îmi tremurau ușor sub masă.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <em>Îmi venea să vărs.</em>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu era prima dată. De doi ani de zile, trăiam o viață dublă.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Ziua eram "traderul" care încerca să construiască un viitor mai bun pentru familie. Seara, eram soțul mincinos care încerca să acopere pierderile înainte ca cineva să observe.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        <strong>Mă simțeam ca o fantomă în propria mea viață.</strong>
                    </p>

                    {/* Important Section */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                        <p className="text-amber-900 leading-relaxed mb-0">
                            Dacă ai simțit vreodată <strong>acel gol în stomac când deschizi platforma de tranzacționare</strong>... sau frica de a-i spune partenerului adevărul despre finanțe...
                        </p>
                        <p className="text-amber-900 leading-relaxed mt-4 mb-0 font-semibold">
                            Atunci ceea ce urmează să îți spun îți poate salva nu doar contul bancar, ci și viața de familie.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Există o <strong>"epidemie tăcută"</strong> care afectează mii de bărbați inteligenți și muncitori.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu pierzi bani pentru că nu ești deștept. Și nu pierzi pentru că nu ai "disciplină".
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Pierzi din cauza unei reacții biologice pe care nu o poți controla.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Dar vestea bună? <strong>Am descoperit o modalitate de a o opri instantaneu.</strong> Și nu implică să citești mai multe cărți sau să meditezi.
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-red/20">
                        Ziua În Care Am Atins Fundul Sacului
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Numele meu este <strong>Andrei Popescu</strong>. Am 34 de ani și lucrez în vânzări.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am început să fac trading pentru că voiam libertate. Voiam să îi ofer soției mele, Elena, o casă a noastră, fără rate la bancă.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am început bine. Am studiat graficele. Am învățat strategiile. Pe contul Demo (cu bani virtuali), <strong>eram un zeu</strong>. Făceam profit săptămână după săptămână.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong className="text-spice-red">Dar în secunda în care am pus banii noștri reali... totul s-a schimbat.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        De fiecare dată când intram într-o tranzacție, inima începea să-mi bată nebunește.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dacă prețul se mișca puțin împotriva mea, intram în panică.
                    </p>

                    <div className="bg-gray-100 p-6 rounded-xl my-8 border-l-4 border-gray-400">
                        <p className="text-gray-800 italic mb-0">
                            "Nu pot pierde banii ăștia," îmi spunea creierul. "Sunt banii de chirie."
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Așa că închideam tranzacția pe pierdere, doar ca să scap de stres. Apoi, inevitabil, prețul se ducea exact unde anticipasem eu.
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Aveam dreptate în analiză, dar pierdeam bani.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Mă simțeam un ratat.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Punctul critic a fost într-o marți. Pierdusem o sumă mare dimineața. Eram disperat să o recuperez. Am mărit miza. Am pierdut din nou.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        <strong>M-am trezit în mașină, în fața blocului, plângând.</strong> Nu aveam curajul să intru în casă și să mă uit în ochii Elenei.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        <em>Mă simțeam un hoț. Îi furasem viitorul.</em>
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
                            alt="Despair over stock chart"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            placeholder="empty"
                        />
                        <p className="text-sm text-gray-500 italic mt-2 text-center">
                            Frica de a pierde bani îți întunecă judecata, indiferent cât de bun ești.
                        </p>
                    </motion.div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-red/20">
                        De Ce Sfaturile "Experților" Nu Funcționează
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am căutat ajutor pe forumuri și grupuri de Facebook. Toți "guru" îmi spuneau același lucru:
                    </p>

                    <ul className="list-none space-y-3 mb-6 pl-0">
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-spice-red mt-1">❌</span>
                            <span>"Trebuie să îți controlezi emoțiile."</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-spice-red mt-1">❌</span>
                            <span>"Ai nevoie de mai multă disciplină."</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <span className="text-spice-red mt-1">❌</span>
                            <span>"Detașează-te de bani."</span>
                        </li>
                    </ul>

                    <p className="text-xl text-spice-red font-bold mb-6">
                        Asta e o prostie.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Cum să te "detașezi" de bani când acei bani sunt chiria ta? Sau viitorul copilului tău?
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am încercat totul. Am meditat. Mi-am lipit bilețele pe monitor cu "NU INTRA ÎN PANICĂ".
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Nimic nu a funcționat.</strong> În momentul în care banii mei erau în pericol, corpul meu prelua controlul.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Eram gata să renunț. Să recunosc înfrângerea, să îi spun soției totul și să accept că voi munci 40 de ani într-un job pe care îl urăsc.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        <strong>Dar apoi, am dat peste un podcast obscur cu un fost trader de pe Wall Street.</strong>
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-8">
                        Ceea ce a spus el m-a lovit ca un tren.
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-spice-gold/40">
                        Descoperirea: "Reflexul Banilor Speriați"
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        El a explicat că problema mea nu era psihologică. <strong className="text-spice-red">Era biologică.</strong>
                    </p>

                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                        <Quote className="w-8 h-8 text-spice-gold mb-4" />
                        <p className="text-lg leading-relaxed mb-0">
                            "Când tranzacționezi cu banii de care depinde supraviețuirea ta, creierul tău reptilian percepe pierderea financiară exact ca pe o amenințare fizică. <strong className="text-spice-gold">Ca și cum ai fi atacat de un tigru.</strong>"
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Asta se numește <strong className="text-spice-red">Reflexul Banilor Speriați</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        În acel moment, amigdala (centrul fricii din creier) îți deturnează cortexul prefrontal (partea logică).
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Fizic, nu poți lua decizii raționale.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        De aceea tremuram. De aceea îmi era greață. Corpul meu era în modul "luptă sau fugi".
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Apoi a spus secretul pe care nimeni nu ți-l spune:
                    </p>

                    <div className="bg-gradient-to-r from-spice-red/10 to-spice-gold/10 p-8 rounded-2xl my-8 border-2 border-spice-gold/30">
                        <p className="text-xl font-bold text-spice-dark leading-relaxed mb-0">
                            "Profesioniștii NU tranzacționează niciodată cu banii lor personali. Ei tranzacționează cu banii firmei. De aceea sunt calmi. <span className="text-spice-red">De aceea câștigă.</span>"
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Când nu riști banii tăi de mâncare, frica dispare. Reflexul nu se activează.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am rămas șocat.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Eu încercam să joc un joc profesionist cu un handicap uriaș. <strong>Încercam să fiu chirurg în timp ce cineva îmi ținea pistolul la tâmplă.</strong>
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-spice-dark mt-12 mb-6 pb-2 border-b-2 border-green-500/30">
                        Soluția: Cum Am Început Să Tranzacționez Fără Să Risc Niciun Leu
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am început să caut imediat: "Cum pot tranzacționa banii altcuiva?"
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Așa am descoperit lumea Firmelor de Prop Trading.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Acesta este un model pe care băncile îl folosesc de zeci de ani, dar care abia acum a devenit accesibil oamenilor obișnuiți ca mine și ca tine.
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-6">
                        Ideea este simplă și genială:
                    </p>

                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 my-8 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-spice-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                            <p className="text-gray-700 mb-0">O companie cu mult capital caută traderi talentați.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-spice-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                            <p className="text-gray-700 mb-0">Tu plătești o taxă mică pentru o evaluare (un test).</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-spice-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                            <p className="text-gray-700 mb-0">Dacă demonstrezi că știi să tranzacționezi responsabil, ei îți finanțează un cont.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-spice-gold text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                            <p className="text-gray-700 mb-0"><strong>Ei pun banii</strong> (5.000$, 10.000$ sau chiar 100.000$).</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                            <p className="text-gray-700 mb-0"><strong>Dacă pierzi, pierderea este a lor, nu a ta.</strong></p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                            <p className="text-gray-700 mb-0"><strong>Dacă câștigi, împarți profitul cu ei</strong> (de obicei tu păstrezi 80-90%).</p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Suna prea frumos să fie adevărat. Dar am verificat. Există firme legitime, verificate, care fac asta de ani de zile.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Mi-am dat seama că aceasta era singura mea scăpare.
                    </p>

                    <p className="text-xl text-spice-dark font-semibold mb-8">
                        Nu trebuia să devin un "robot" fără emoții. Trebuia doar să elimin sursa fricii: <span className="text-spice-red">Riscul Personal.</span>
                    </p>

                    {/* Mid-Article CTA (Added for visibility) */}
                    <div className="my-10 bg-gradient-to-r from-[#E21D1D]/5 to-[#F59E0B]/5 border border-[#E21D1D]/20 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Vrei să tranzacționezi fără riscuri?</h3>
                        <p className="mb-6 text-gray-600">Verifică dacă te califici pentru un cont finanțat de până la 200.000$ și scapă de stresul pierderii banilor tăi.</p>
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
                            alt="Relaxed trader"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            placeholder="empty"
                        />
                        <p className="text-sm text-gray-500 italic mt-2 text-center">
                            Așa arată tradingul când elimini frica.
                        </p>
                    </motion.div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-green-500/30">
                        Momentul În Care Mâinile Nu Mi-au Mai Tremurat
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am ales o firmă de încredere și am început evaluarea.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Îmi amintesc prima tranzacție pe contul finanțat. Am văzut semnalul. Am apăsat "Cumpără".
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Și am așteptat...
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am așteptat nodul în gât. Am așteptat transpirația.
                    </p>

                    <p className="text-xl text-green-600 font-bold mb-6">
                        Dar nu s-a întâmplat nimic.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Inima mea bătea normal. De ce? Pentru că economiile mele erau în siguranță la bancă. Nu riscam vacanța. Nu riscam încrederea soției.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Riscam doar banii firmei.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dintr-o dată, am putut vedea piața clar. Fără ceața fricii.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Am lăsat tranzacția să meargă. A atins profitul maxim.
                    </p>

                    <p className="text-xl text-gray-900 font-semibold mb-6">
                        În acea lună, am făcut mai mulți bani decât făcusem în doi ani de chin pe contul meu personal.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dar cea mai mare victorie nu au fost banii.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        A fost seara în care am scos primul profit. M-am așezat la cină cu Elena. Ea m-a întrebat: "Cum a fost ziua ta?"
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Pentru prima dată în doi ani, am putut să o privesc în ochi și să îi spun adevărul:
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                        <p className="text-green-800 text-xl font-semibold mb-0">
                            "A fost o zi foarte bună. Chiar foarte bună."
                        </p>
                    </div>

                    <p className="text-xl text-gray-900 font-semibold mb-8">
                        Nu mai eram un impostor. <span className="text-green-600">Eram liber.</span>
                    </p>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-[#F59E0B]/40">
                        De Ce Această Soluție Schimbă Totul
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Tranzacționarea printr-o firmă de Prop Trading (cont finanțat) îți oferă <strong>trei avantaje</strong> pe care nu le vei avea niciodată pe cont propriu:
                    </p>

                    <div className="grid gap-4 my-8">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Protecție Totală</h4>
                                <p className="text-gray-600 mb-0">Nu îți vei mai pierde niciodată economiile. Capitalul tău personal este neatins.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Putere de Cumpărare</h4>
                                <p className="text-gray-600 mb-0">Primești acces la conturi mari (10.000$ - 200.000$). Un profit de 5% pe un cont mare înseamnă o sumă serioasă, nu doar bani de buzunar.</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Pace Mentală</h4>
                                <p className="text-gray-600 mb-0">"Reflexul Banilor Speriați" este dezactivat. Poți tranzacționa disciplinat, așa cum ai știut mereu că poți.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-[#E21D1D]/20">
                        Ce Spun Alții Care Au Făcut Schimbarea
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Nu sunt singurul care a descoperit această portiță de scăpare. Mii de traderi români renunță la riscul personal.
                    </p>

                    {/* Testimonials */}
                    <div className="space-y-6 mb-10">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 italic mb-4">
                                "Îmi era frică să îi spun soțului meu câți bani pierdusem. Eram paralizată. Când am trecut pe un cont finanțat, presiunea a dispărut instant. <strong>Acum tranzacționez relaxată și sunt profitabilă de 6 luni.</strong>"
                            </p>
                            <p className="text-sm text-gray-500 font-semibold mb-0">— Maria T., 29 ani, Cluj</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 italic mb-4">
                                "M-am chinuit 3 ani cu un cont de 500 de dolari. Munceam mult pentru profituri de nimic. Acum gestionez un cont de 50.000$ finanțat. <strong>Diferența este cer și pământ.</strong> Nu aș mai risca niciodată banii mei."
                            </p>
                            <p className="text-sm text-gray-500 font-semibold mb-0">— George I., 41 ani, Timișoara</p>
                        </div>
                    </div>

                    {/* Section Header */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-green-500/30">
                        Cum Poți Începe Și Tu Astăzi
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dacă te-ai săturat să ascunzi ecranul când intră cineva în cameră...
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Dacă te-ai săturat de acel sentiment de greață când piața se mișcă împotriva ta...
                    </p>

                    <p className="text-xl text-gray-900 font-semibold mb-6">
                        Trebuie să știi că există o cale de ieșire. Nu trebuie să renunți la visul tău de a fi trader. Trebuie doar să schimbi banii pe care îi folosești.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Firma pe care am descoperit-o caută activ traderi noi chiar acum.</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu ai nevoie de experiență pe Wall Street. Ai nevoie doar să treci o evaluare simplă pentru a demonstra că poți gestiona riscul.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                        <p className="text-green-800 font-semibold mb-0">
                            <CheckCircle2 className="inline w-5 h-5 mr-2" />
                            <strong>Garanția Lor:</strong> Dacă treci evaluarea, primești capitalul. Este scris în contract. Nu există riscuri ascunse pentru banii tăi personali.
                        </p>
                    </div>

                    {/* Final Warning */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#E21D1D] mt-12 mb-6">
                        Nu Mai Aștepta Până Când E Prea Târziu
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>Fiecare zi în care tranzacționezi cu economiile familiei este o zi în care riști o catastrofă.</strong> O singură greșeală emoțională poate șterge ani de muncă.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nu lăsa să se întâmple asta.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Poți verifica chiar acum dacă ești eligibil pentru un cont finanțat. Durează mai puțin de 2 minute.
                    </p>

                    <p className="text-xl text-gray-900 font-semibold mb-8">
                        Nu ai nimic de pierdut, dar ai liniștea sufletească de câștigat.
                    </p>
                    {/* Add a button here to ensure visibility before the very end */}
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block sm:hidden w-full text-center bg-[#E21D1D] text-white py-4 px-6 rounded-xl font-bold text-lg mb-8"
                    >
                        VERIFICĂ DACĂ TE CALIFICI &gt;&gt;
                    </a>


                    <p className="text-gray-700 leading-relaxed mb-10">
                        <strong>Fă-o pentru tine. Fă-o pentru familia ta. Nu mai fi un "impostor" la masa de seară.</strong>
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
                            APASĂ AICI PENTRU A VEDEA DACĂ TE CALIFICI PENTRU UN CONT FINANȚAT
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-3">
                        (Locuri limitate pentru evaluările din această lună)
                    </p>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                >
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-900 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
                    >
                        VERIFICĂ DISPONIBILITATEA ȘI ÎNCEPE EVALUAREA
                    </a>
                </motion.div>

                {/* Disclaimer */}
                <div className="mt-16 p-6 bg-gray-100 rounded-xl border border-gray-200">
                    <p className="text-xs text-gray-500 leading-relaxed mb-0">
                        <strong>Disclaimer:</strong> Acest articol conține link-uri afiliate. Tranzacționarea CFD-urilor și forex implică un nivel ridicat de risc și poate să nu fie potrivită pentru toți investitorii. Performanțele anterioare nu sunt indicative pentru rezultatele viitoare. Asigurați-vă că înțelegeți pe deplin riscurile implicate înainte de a tranzacționa. Conținutul este furnizat doar în scopuri informaționale și nu constituie sfaturi financiare.
                    </p>
                </div>
            </article>

            {/* Sticky Mobile CTA (Now also visible effectively on Desktop by being cleaner and always available) 
                Actually, making it visible on all screens (removing sm:hidden) might be too intrusive on desktop if it spans full width.
                Let's keep it mobile-only sticky, but I've added more inline buttons for desktop.
                However, to be safe, let's make it appear on desktop too? No, usually sticky footers on desktop are annoying.
                I'll stick to 'sm:hidden' for now, but I ALREADY added a mid-article CTA and a pre-footer CTA for desktop visibility.
            */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 sm:hidden z-50">
                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-[#E21D1D] to-[#F59E0B] text-white py-4 px-6 rounded-xl font-bold text-base shadow-lg animate-pulse-glow"
                >
                    VEZI DACĂ TE CALIFICI →
                </a>
            </div>

            {/* Bottom spacing for sticky CTA on mobile */}
            <div className="h-20 sm:hidden"></div>
        </div>
    );
}
