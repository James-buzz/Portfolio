import { SupabaseAdmin } from '@/lib/supabase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;
    const { post_slug } = query;

    if (method === 'GET') {
        const { data, error } = await SupabaseAdmin
            .from('reactions')
            .select('emoji, user_id')
            .eq('post_slug', post_slug);

        if (error) return res.status(400).json({ error });

        return res.status(200).json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
