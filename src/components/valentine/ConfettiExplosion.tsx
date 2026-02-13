import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
}

const colors = [
  "hsl(0, 72%, 51%)",
  "hsl(0, 60%, 70%)",
  "hsl(40, 70%, 55%)",
  "hsl(0, 72%, 40%)",
  "hsl(0, 40%, 80%)",
  "hsl(350, 80%, 60%)",
];

const ConfettiExplosion = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<Confetti[]>([]);

  useEffect(() => {
    if (!active) return;
    const generated: Confetti[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 1,
    }));
    setPieces(generated);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            top: "-10px",
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            backgroundColor: p.color,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
      {/* Floating hearts burst */}
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={`heart-${i}`}
          className="absolute text-primary"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
            animation: `float-heart ${Math.random() * 3 + 2}s ease-out ${Math.random() * 0.5}s forwards`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default ConfettiExplosion;
