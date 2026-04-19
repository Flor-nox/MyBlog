"use client";

import { motion } from "framer-motion";
import { useResonator } from "@/components/theme/resonator-provider";
import { getAllResonators } from "@/lib/resonator-themes";
import { Check } from "lucide-react";
import Image from "next/image";

export function ResonatorSwitcher() {
  const { currentResonator, setResonator, theme } = useResonator();
  const resonators = getAllResonators();

  // 判断是否使用图片的主题
  const useImageThemes = ["feixue", "phoebe", "chisaki", "amethyst"];

  return (
    <div className="glass-card p-6" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(20px)" }}>
      <h3 className="text-lg font-bold mb-4 text-center">选择共鸣者</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {resonators.map((resonator) => {
          const isActive = currentResonator === resonator.id;
          const useImage = useImageThemes.includes(resonator.id);
          return (
            <motion.button
              key={resonator.id}
              onClick={() => setResonator(resonator.id)}
              className="relative p-4 rounded-xl border-2 transition-all duration-300"
              style={{
                borderColor: isActive ? resonator.colors.primary : "rgba(255,255,255,0.1)",
                background: isActive 
                  ? `linear-gradient(135deg, ${resonator.colors.primary}20, ${resonator.colors.secondary}20)`
                  : "rgba(255,255,255,0.05)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* 选中标记 */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: resonator.colors.primary }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}

              {/* 角色头像/表情 */}
              <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden flex items-center justify-center">
                {useImage ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={resonator.images.avatar}
                      alt={resonator.name}
                      fill
                      className={`object-cover ${resonator.id === "feixue" ? 'scale-[1.5]' : resonator.id === "chisaki" ? 'scale-[1.1]' : resonator.id === "amethyst" ? 'scale-[1.5]' : 'scale-[1.1]'}`}
                      style={{ objectPosition: resonator.id === "feixue" || resonator.id === "chisaki" || resonator.id === "amethyst" ? '55% center' : 'center center' }}
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <span className="text-3xl">{resonator.spirit.emoji}</span>
                )}
              </div>

              {/* 角色名 */}
              <div className="text-sm font-bold mb-1" style={{ color: isActive ? resonator.colors.primary : "#ccc" }}>
                {resonator.name}
              </div>
              <div className="text-xs mb-2" style={{ color: isActive ? resonator.colors.secondary : "#888" }}>
                {resonator.elementType}
              </div>

              {/* 配色预览 */}
              <div className="flex gap-1 justify-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: resonator.colors.primary }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: resonator.colors.secondary }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: resonator.colors.accent }}
                />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 当前主题信息 */}
      <div 
        className="mt-6 p-4 rounded-xl"
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`,
          border: `1px solid ${theme.colors.primary}30`
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
            {useImageThemes.includes(theme.id) ? (
              <Image
                src={theme.images.avatar}
                alt={theme.name}
                fill
                className={`object-cover ${theme.id === "feixue" ? 'scale-[1.5]' : theme.id === "chisaki" ? 'scale-[1.1]' : theme.id === "amethyst" ? 'scale-[1.5]' : 'scale-[1.1]'}`}
                style={{ objectPosition: theme.id === "feixue" || theme.id === "chisaki" || theme.id === "amethyst" ? '55% center' : 'center center' }}
                sizes="48px"
              />
            ) : (
              <span className="text-4xl">{theme.spirit.emoji}</span>
            )}
          </div>
          <div>
            <h4 className="font-bold" style={{ color: theme.colors.primary }}>
              {theme.name} · {theme.title}
            </h4>
            <p style={{ color: theme.colors.textMuted }}>{theme.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
