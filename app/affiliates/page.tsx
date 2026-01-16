import { Metadata } from 'next';
import AffiliatePageContent from './AffiliatePageContent';

export const metadata: Metadata = {
    title: 'Top Prop Firm Affiliate Program | Join SpiceProp Partners',
    description: 'Become a SpiceProp affiliate partner and earn industry-leading commissions. 12% CPA + 8% recurring monthly revenue. Join the fastest-growing prop firm program.',
    keywords: 'prop firm affiliate, best prop firm affiliate program, forex affiliate, trading affiliate program, passive income, recurring commission, spiceprop, spiceprop affiliates',
    openGraph: {
        title: 'Join the SpiceProp Affiliate Program - Top Commissions',
        description: 'Earn 12% CPA and 8% Recurring Lifetime Commissions with SpiceProp. Monthly payouts, real-time tracking, and high conversion rates.',
        url: 'https://spiceprop.com/affiliates',
        siteName: 'SpiceProp',
        images: [
            {
                url: '/images/best-affiliate-program.jpg',
                width: 1200,
                height: 630,
                alt: 'SpiceProp Affiliate Program',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join the SpiceProp Affiliate Program',
        description: 'Earn 12% CPA and 8% Recurring Lifetime Commissions. Join now!',
        images: ['/images/best-affiliate-program.jpg'],
    },
};

export default function AffiliatePage() {
    return <AffiliatePageContent />;
}
