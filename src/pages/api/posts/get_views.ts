import { SupabaseAdmin } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { slug } = req.query;
    if (!slug) return res.status(404).json({});

    const { data, error } = await SupabaseAdmin.from('views')
        .select('view_count')
        .filter('slug', 'eq', slug);

    if (error || !data) return res.status(400).json({ error });

    return res.status(200).json({ views: data[0].view_count || 0 });

}