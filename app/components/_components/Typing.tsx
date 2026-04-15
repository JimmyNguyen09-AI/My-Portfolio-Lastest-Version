"use client";

import { Typewriter } from "react-simple-typewriter";

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
        typeSpeed={100}
        deleteSpeed={60}
        delaySpeed={300}
      />
    </span>
  );
}
