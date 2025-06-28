// import { useState, useEffect } from "react";

// export function useTypingEffect(text: string, speed: number = 60) {
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     let current = 0;
//     setDisplayed("");
//     if (!text) return;
//     const interval = setInterval(() => {
//       if (current < text.length) {
//         setDisplayed((prev) => prev + text[current]);
//         current++;
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);
//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return displayed;
// }

import { useEffect, useState } from 'react';

export const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (!text || currentIndex >= text.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  return displayedText;
};