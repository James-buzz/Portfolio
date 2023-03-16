import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface EmojiButtonProps {
    emoji: string;
    selected: boolean;
    onClick: (emoji: string) => void;
    count: number;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ count, emoji, selected, onClick }) => {
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(true);
        setTimeout(() => {
            setPressed(false);
        }, 300);
        onClick(emoji);
    };

    const buttonStyle = selected
        ? 'bg-transparent border-none cursor-pointer text-2xl opacity-100 transform'
        : 'bg-transparent border-none cursor-pointer text-2xl opacity-50 transform';

    const pressedStyle = pressed ? 'scale-120' : '';

    const bounceAnimation = useSpring({
        transform: selected ? 'scale(1.4)' : 'scale(1)',
        config: {
            tension: 200,
            friction: 10,
        },
    });


    return (
        <div className="flex items-center">
            <animated.button
                style={bounceAnimation}
                className={`${buttonStyle} ${pressedStyle}`}
                onClick={handleClick}
            >
                {emoji}
            </animated.button>
        </div>
    );
};

export default EmojiButton;