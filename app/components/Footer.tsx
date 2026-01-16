"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-spice"></div>

            {/* Back to Top Button */}
            <div className="flex justify-center -mt-6">
                <button
                    onClick={scrollToTop}
                    className="bg-white p-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    <ArrowUp className="w-5 h-5 text-spice-red group-hover:text-spice-gold transition-colors" />
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="relative h-10 w-28 mb-4">
                            <Image
                                src="/images/spiceprop-logo.png"
                                alt="SpiceProp Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-spice-muted text-sm leading-relaxed mb-6 max-w-sm">
                            Experience institutional-grade trading conditions with our free €6K demo challenge. Join thousands of traders mastering the markets with SpiceProp.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm text-green-700 font-medium">Free Accounts Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-spice-dark mb-5 text-sm uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://spiceprop.com/comparsion-of-programmes" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Trading Rules</a></li>
                            <li><a href="https://spiceprop.com/jalapeno" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Challenges</a></li>
                            <li><a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Free €6K Trial</a></li>
                            <li><a href="https://spiceprop.com/payouts" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Payouts</a></li>
                            <li><Link href="/affiliates" className="text-spice-muted hover:text-spice-red transition-colors">Affiliates</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-spice-dark mb-5 text-sm uppercase tracking-wider">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://spiceprop.com/qa" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Help Center</a></li>
                            <li><a href="https://spiceprop.com/about" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Contact Us</a></li>
                            <li><a href="https://spiceprop.com/qa" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">FAQ</a></li>
                            <li><a href="https://spiceprop.com/blog" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-spice-dark mb-5 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://spiceprop.com/about" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Privacy Policy</a></li>
                            <li><a href="https://spiceprop.com/about" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Terms of Service</a></li>
                            <li><a href="https://spiceprop.com/about" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Risk Disclosure</a></li>
                            <li><a href="https://spiceprop.com/about" target="_blank" rel="noopener noreferrer" className="text-spice-muted hover:text-spice-red transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <p className="text-spice-muted text-sm">
                            © 2024 SpiceProp. All rights reserved.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 text-sm text-spice-muted">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                SSL Secured
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                24/7 Support
                            </span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                        <p className="text-xs text-gray-600 text-center leading-relaxed">
                            <strong className="text-gray-700">⚠️ Risk Warning:</strong> Trading foreign exchange (Forex) and Contracts for Difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. You could sustain a loss of some or all of your invested capital. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
                        </p>
                    </div>
                    <p className="text-xs text-spice-muted/70 text-center leading-relaxed max-w-4xl mx-auto">
                        <strong className="text-spice-muted">Educational Disclaimer:</strong> This €6K practice challenge is for educational and simulation purposes only. No real funds are deposited, traded, or paid out. This platform provides a risk-free environment to learn trading strategies. SpiceProp is a simulation platform and does not provide financial advice. Past performance in simulation does not guarantee future results in live trading. Please consult a qualified financial advisor before making any investment decisions.
                    </p>
                </div>
            </div>
        </footer>
    );
}
