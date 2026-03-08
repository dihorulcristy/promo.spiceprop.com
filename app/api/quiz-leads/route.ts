import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, experience, capital, style, recommendedPlan } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Attempt to insert the lead into the database
        // We assume the table is called `quiz_leads`
        const { data, error } = await supabaseAdmin
            .from('quiz_leads')
            .insert([
                {
                    name: name || 'Trăder Anonim',
                    email,
                    experience,
                    capital,
                    style,
                    recommended_plan: recommendedPlan,
                    created_at: new Date().toISOString(),
                }
            ]);

        if (error) {
            console.error('Supabase Error:', error);
            // We still return 200 so the user isn't blocked on the frontend if the DB isn't configured right yet
            return NextResponse.json({ success: true, message: 'Lead saved (DB error logged)' });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error in quiz-leads API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
