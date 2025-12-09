import { useState, useEffect } from 'react';

import type { TypewriterProps } from "../../types/typewriter";

const Typewriter = ({ texts, delay = 50 }: TypewriterProps) => {
  const [displayedParts, setDisplayedParts] = useState<{ text: string; className?: string }[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex].text;
      
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedParts(prev => {
            const newParts = [...prev];
            const lastIndex = newParts.length - 1;
            
            // Check if we should add to existing part or create new one
            if (lastIndex >= 0 && newParts[lastIndex].className === texts[currentTextIndex].className) {
              // Add to existing part
              newParts[lastIndex] = {
                ...newParts[lastIndex],
                text: newParts[lastIndex].text + currentText[currentCharIndex]
              };
            } else {
              // Create new part
              newParts.push({ 
                text: currentText[currentCharIndex], 
                className: texts[currentTextIndex].className 
              });
            }
            return newParts;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentCharIndex, currentTextIndex, delay, texts]);

  return (
    <>
      {displayedParts.map((part, index) => (
        <span key={index} className={part.className}>
          {part.text}
        </span>
      ))}
      {currentTextIndex < texts.length && (
        <span className="animate-pulse">|</span>
      )}
    </>
  );
};

export default Typewriter;