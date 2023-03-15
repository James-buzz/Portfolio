import { SupabaseAdmin } from '@/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { slug } = req.query;
    if (!slug) return res.status(404).json({});

    let { error, data } = await SupabaseAdmin.rpc('increment_page_view', { page_slug: slug });

    if (error) return res.status(400).json({ error });

    return res.status(200).json({ data });

}