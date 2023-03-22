import React, { useEffect, useState } from 'react';
import EmojiButton from './EmojiButton';

interface EmojiReactionsProps {
  postSlug: string;
  userId: string;
}

const EmojiReactions: React.FC<EmojiReactionsProps> = ({
  postSlug,
  userId,
}) => {
  const [reactions, setReactions] = useState<any[]>([]);
  const [userReaction, setUserReaction] = useState<string | null>(null);

  const fetchReactions = async () => {
    const response = await fetch(`/api/posts/reactions/${postSlug}`);
    const data = await response.json();
    if (Array.isArray(data)) {
      setReactions(data);
      const userReactionFound = data.find(
        (reaction: any) => reaction.user_id === userId
      );
      setUserReaction(userReactionFound?.emoji || null);
    }
  };

  useEffect(() => {
    fetchReactions();
  }, [postSlug, userId, fetchReactions]);

  const handleEmojiClick = async (emoji: string) => {
    const response = await fetch('/api/posts/reactions', {
      method: 'POST',
      body: JSON.stringify({
        post_slug: postSlug,
        emoji,
        user_id: userId,
      }),
    });

    setUserReaction(emoji);

    if (response.ok) {
      // Refetch the reactions to update the counts
      fetchReactions();
    }
  };

  const getEmojiCount = (emoji: string) => {
    return reactions.filter((reaction: any) => reaction.emoji === emoji).length;
  };

  const emojis = ['👍', '❤️', '😂', '😲', '😢', '😡'];

  return (
    <div className="grid grid-cols-3 items-center justify-items-center gap-4">
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
