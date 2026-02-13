import { useEffect, useState } from "react";

interface Oink {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingOinks = ({ active = true }: { active?: boolean }) => {
  const [oinks, setOinks] = useState<Oink[]>([]);

  useEffect(() => {
    if (!active) return;
    const generated: Oink[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      top: Math.random() * 60 + 20,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 6,
      size: Math.random() * 20 + 20,
    }));
    setOinks(generated);
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {oinks.map((o) => (
        <span
          key={o.id}
          className="absolute"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            fontSize: `${o.size}px`,
            animation: `float-oink ${o.duration}s ease-in-out ${o.delay}s infinite`,
          }}
        >
          🐷
        </span>
      ))}
    </div>
  );
};

export default FloatingOinks;
