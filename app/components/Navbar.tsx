"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative h-10 w-28 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/spiceprop-logo.png"
                                alt="SpiceProp Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <Link href="#features" className="text-spice-dark/70 hover:text-spice-red transition-all duration-300 font-medium animated-underline">
                            Why Us
                        </Link>
                        <Link href="#comparison" className="text-spice-dark/70 hover:text-spice-red transition-all duration-300 font-medium animated-underline">
                            Compare
                        </Link>
                        <Link href="#how-it-works" className="text-spice-dark/70 hover:text-spice-red transition-all duration-300 font-medium animated-underline">
                            How it Works
                        </Link>
                        <Link href="#testimonials" className="text-spice-dark/70 hover:text-spice-red transition-all duration-300 font-medium animated-underline">
                            Reviews
                        </Link>
                        <Link href="/affiliates" className="text-spice-dark/70 hover:text-spice-red transition-all duration-300 font-medium animated-underline">
                            Affiliates
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="text-spice-dark font-semibold hover:text-spice-red transition-colors px-4 py-2">
                            Login
                        </a>
                        <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden text-white px-7 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex items-center" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                            <span className="relative z-10 flex items-center gap-2">
                                Get €6K FREE
                                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            </span>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #E21D1D 100%)' }}></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            <Link href="#features" className="text-spice-dark font-medium py-2">Why Us</Link>
                            <Link href="#comparison" className="text-spice-dark font-medium py-2">Compare</Link>
                            <Link href="#how-it-works" className="text-spice-dark font-medium py-2">How it Works</Link>
                            <Link href="#testimonials" className="text-spice-dark font-medium py-2">Reviews</Link>
                            <hr className="border-gray-100" />
                            <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="w-full text-white py-3 rounded-full font-bold text-center block" style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}>
                                Get €6K FREE
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
