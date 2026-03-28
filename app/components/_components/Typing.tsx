'use client';

import { Typewriter } from 'react-simple-typewriter';

interface TypingWord {
  words: string[];
  typingChar: string;
}

export default function TypingTitle({ words, typingChar }: TypingWord) {
  return (
    <span className="cyber-typing">
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle={typingChar}
        typeSpeed={110}
        deleteSpeed={70}
        delaySpeed={240}
      />
    </span>
  );
}
