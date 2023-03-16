import { SupabaseAdmin } from '@/lib/supabase';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;

    if (method === 'POST') {
        const { post_slug, emoji, user_id } = JSON.parse(body);

        // Delete existing reaction (if any) for the same user and post_slug
        await SupabaseAdmin.from('reactions')
            .delete()
            .eq('post_slug', post_slug)
            .eq('user_id', user_id);

        // Insert the new reaction
        const { data, error } = await SupabaseAdmin.from('reactions')
            .insert([{ post_slug, emoji, user_id }])
            .single();

        if (error) return res.status(400).json({ error });

        return res.status(200).json(data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}