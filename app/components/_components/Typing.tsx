'use client';

import { Typewriter } from 'react-simple-typewriter';
interface TypingWord {
    words: string[];
    typingChar: string;
}

export default function TypingTitle({ words, typingChar }: TypingWord) {
    return (
        <h2 className=" text-2xl md:text-4xl font-semibold text-blue-400 mb-5">
            {' '}
            <span className="text-current">
                <Typewriter
                    words={words}
                    loop={0}
                    cursor
                    cursorStyle={typingChar}
                    typeSpeed={120}
                    deleteSpeed={70}
                    delaySpeed={200}
                />
            </span>
        </h2>
    );
}
