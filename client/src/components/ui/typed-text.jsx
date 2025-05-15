import { useState, useEffect } from "react";

export default function TypedText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setSpeed(deletingSpeed);
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setSpeed(typingSpeed);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        setSpeed(pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setSpeed(typingSpeed);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime, speed]);

  return <span className="typing-text">{displayedText}</span>;
}