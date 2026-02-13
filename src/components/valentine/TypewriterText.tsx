import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  trigger?: boolean;
}

const TypewriterText = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  onComplete,
  trigger = true,
}: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [trigger, delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [started, displayed, text, speed, onComplete]);

  if (!trigger) return null;

  return (
    <motion.span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
          style={{ animation: "blink-cursor 0.8s infinite" }}
        />
      )}
    </motion.span>
  );
};

export default TypewriterText;
