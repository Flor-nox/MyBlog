"use client";

import { motion } from "framer-motion";
import { useResonator } from "@/components/theme/resonator-provider";

// 预定义的粒子位置（避免 hydration 不匹配）
const particlePositions = Array.from({ length: 30 }, (_, i) => ({
  left: (i * 3.33) % 100,
  top: (i * 7.77) % 100,
  duration: 3 + (i % 3),
  delay: (i % 5) * 0.5,
}));

// 千咲 - 湮灭系背景
function ChisakiBackground() {
  return (
    <>
      <div className="absolute top-1/4 right-1/4 w-96 h-96">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26,26,46,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
            boxShadow: "0 0 100px rgba(45,45,68,0.5)",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {particlePositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gray-600"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-700"
          style={{ width: 200 + i * 150, height: 200 + i * 150 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </>
  );
}

// 爱弥斯 - 热熔系背景
function AmethystBackground() {
  const colors = ["#dc2626", "#7c3aed", "#f59e0b"];
  return (
    <>
      {particlePositions.slice(0, 25).map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: (i % 8) + 2,
            height: (i % 8) + 2,
            left: `${p.left}%`,
            bottom: `${(i * 2.4) % 60}%`,
            background: `radial-gradient(circle, ${colors[i % 3]} 0%, transparent 70%)`,
          }}
          animate={{ y: [-100, -400], opacity: [0, 1, 0], scale: [0.5, 2, 0] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: (i % 6) * 0.5 }}
        />
      ))}
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 300 300" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="amethyst-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="150"
              cy="150"
              rx="12"
              ry="50"
              fill="url(#amethyst-gradient)"
              opacity="0.5"
              transform={`rotate(${angle} 150 150) translate(0, -70)`}
            />
          ))}
        </svg>
      </motion.div>
    </>
  );
}

// 菲比 - 衍射系背景
function PhoebeBackground() {
  const colors = ["#fbbf24", "#3b82f6", "#60a5fa"];
  return (
    <>
      {particlePositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: (i % 4) + 1,
            height: (i % 4) + 1,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, ${colors[i % 3]} 0%, transparent 70%)`,
            boxShadow: "0 0 10px currentColor",
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.5, 0.8] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i % 4) * 0.5 }}
        />
      ))}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-25">
          <defs>
            <linearGradient id="phoebe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#phoebe-gradient)" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#phoebe-gradient)" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#phoebe-gradient)" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </>
  );
}

// 绯雪 - 冷凝系背景
function FeixueBackground() {
  const colors = ["#e2e8f0", "#3b82f6", "#06b6d4"];
  const snowflakePositions = Array.from({ length: 30 }, (_, i) => ({
    left: (i * 3.33) % 100,
    size: (i % 6) + 2,
    duration: 5 + (i % 5),
    delay: (i % 10) * 0.5,
    color: colors[i % 3],
  }));

  return (
    <>
      {snowflakePositions.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${s.left}%`, top: "-10px", width: s.size, height: s.size }}
          animate={{ y: [0, 800], x: [0, (i % 20) * 5 - 50], rotate: [0, 360], opacity: [0, 0.8, 0] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
              stroke={s.color}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80"
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 300 300" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="feixue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 150 150)`}>
              <path d="M150 50 L150 150 L130 120 M150 150 L170 120" fill="none" stroke="url(#feixue-gradient)" strokeWidth="2" />
            </g>
          ))}
          <circle cx="150" cy="150" r="80" fill="none" stroke="url(#feixue-gradient)" strokeWidth="1" opacity="0.3" />
          <circle cx="150" cy="150" r="50" fill="none" stroke="url(#feixue-gradient)" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{ background: "linear-gradient(to top, rgba(59, 130, 246, 0.3) 0%, transparent 100%)" }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </>
  );
}

const gradients: Record<string, string> = {
  chisaki: "bg-gradient-to-br from-black via-gray-900 to-slate-950",
  amethyst: "bg-gradient-to-br from-red-950 via-purple-950 to-orange-950",
  phoebe: "bg-gradient-to-br from-yellow-950/50 via-blue-950 to-slate-950",
  feixue: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950",
};

const backgrounds: Record<string, React.FC> = {
  chisaki: ChisakiBackground,
  amethyst: AmethystBackground,
  phoebe: PhoebeBackground,
  feixue: FeixueBackground,
};

export function ResonatorBackground() {
  const { currentResonator, mounted } = useResonator();
  const theme = currentResonator || "feixue";
  const BackgroundComponent = backgrounds[theme];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className={`absolute inset-0 transition-all duration-1000 ${gradients[theme]}`} />
      {mounted && <BackgroundComponent />}
      {mounted && (
        <div className="absolute inset-0 opacity-30">
          {particlePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
