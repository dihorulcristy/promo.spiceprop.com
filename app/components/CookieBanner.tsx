"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/declined cookies
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Small delay to prevent flash on page load
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Icon and Text */}
                    <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-spice-light rounded-full flex items-center justify-center flex-shrink-0">
                            <Cookie className="w-6 h-6 text-spice-red" />
                        </div>
                        <div>
                            <h3 className="font-bold text-spice-dark mb-1">🍪 We use cookies</h3>
                            <p className="text-sm text-spice-muted leading-relaxed">
                                We use cookies and similar technologies to enhance your experience, analyze site traffic,
                                and for marketing purposes. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                                You can manage your preferences or decline non-essential cookies.
                                {" "}
                                <a
                                    href="https://spiceprop.com/about"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-spice-red hover:underline font-medium"
                                >
                                    Learn more
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={declineCookies}
                            className="px-6 py-3 text-spice-dark bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-sm transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-6 py-3 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                            style={{ background: 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)' }}
                        >
                            Accept All
                        </button>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={declineCookies}
                        className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close cookie banner"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
