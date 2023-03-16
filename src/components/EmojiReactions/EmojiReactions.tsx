import React, { useEffect, useState } from 'react';
import EmojiButton from './EmojiButton';

interface EmojiReactionsProps {
    postSlug: string;
    userId: string;
}

const EmojiReactions: React.FC<EmojiReactionsProps> = ({ postSlug, userId }) => {

    const [reactions, setReactions] = useState<any[]>([]);
    const [userReaction, setUserReaction] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/api/posts/reactions/${postSlug}`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setReactions(data);
                    const userReactionFound = data.find((reaction: any) => reaction.user_id === userId);
                    setUserReaction(userReactionFound?.emoji || null);
                }
            });
    }, [postSlug, userId]);

    const handleEmojiClick = async (emoji: string) => {
        setUserReaction(emoji);

        const response = await fetch('/api/posts/reactions', {
            method: 'POST',
            body: JSON.stringify({
                post_slug: postSlug,
                emoji,
                user_id: userId,
            }),
        });

        if (response.ok) {
            const newReaction = await response.json();
            if (newReaction) {
                setReactions((prevReactions) => {
                    const updatedReactions = prevReactions.filter((reaction: any) => reaction && reaction.user_id !== userId);
                    updatedReactions.push(newReaction);
                    return updatedReactions;
                });
            }
        }
    };

    const getEmojiCount = (emoji: string) => {
        return reactions.filter((reaction: any) => reaction.emoji === emoji).length;
    };

    const emojis = ['👍', '❤️', '😂', '😲', '😢', '😡'];

    return (
        <div className='flex justify-center items-center gap-4 flex-wrap'>
            {emojis.map((emoji, index) => (
                <EmojiButton
                    key={index}
                    emoji={emoji}
                    selected={userReaction === emoji}
                    onClick={handleEmojiClick}
                    count={getEmojiCount(emoji)}
                />
            ))}

        </div>
    );
};

export default EmojiReactions;
