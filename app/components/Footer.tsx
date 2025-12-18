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
                            Experience institutional-grade trading conditions with our free $5K demo challenge. Join thousands of traders mastering the markets with SpiceProp.
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
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Trading Rules</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Challenges</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Free $5K Trial</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Payouts</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-spice-dark mb-5 text-sm uppercase tracking-wider">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Discord</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-spice-dark mb-5 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Risk Disclosure</Link></li>
                            <li><Link href="#" className="text-spice-muted hover:text-spice-red transition-colors">Refund Policy</Link></li>
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
                    <p className="text-xs text-spice-muted/70 text-center leading-relaxed max-w-4xl mx-auto">
                        <strong className="text-spice-muted">Disclaimer:</strong> This account is for educational and demo purposes only. No real funds or payouts are associated with this specific $5k practice challenge. Trading involves significant risk, and you should only trade with capital you can afford to lose. Past performance is not indicative of future results.
                    </p>
                </div>
            </div>
        </footer>
    );
}
