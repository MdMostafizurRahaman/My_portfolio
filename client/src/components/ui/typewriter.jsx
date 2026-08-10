import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";

export default function Typewriter({ words, className, typingSpeed = 80, deletingSpeed = 40, pause = 1800 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={cn("inline-flex", className)}>
      <span>{text}</span>
      <span className="ml-0.5 inline-block w-[2px] self-stretch animate-pulse bg-current" aria-hidden="true" />
    </span>
  );
}