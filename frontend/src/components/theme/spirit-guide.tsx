"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useResonator } from "@/components/theme/resonator-provider";
import { X } from "lucide-react";
import Image from "next/image";

export function SpiritGuide() {
  const { theme } = useResonator();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  // 自动轮播台词
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % theme.spirit.phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen, theme.spirit.phrases.length]);

  // 首次加载显示问候语
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // 判断是否使用图片（所有共鸣者主题）
  const useImage = theme.id === "feixue" || theme.id === "phoebe" || theme.id === "chisaki" || theme.id === "amethyst";

  return (
    <>
      {/* 精灵/角色按钮 - 响应式尺寸 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 
                    w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full 
                    flex items-center justify-center shadow-lg ${theme.colors.glow} 
                    border-2 border-white/30 transition-transform hover:scale-105 overflow-hidden bg-transparent`}
        animate={{
          y: [0, -5, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`打开${theme.spirit.name}对话面板`}
      >
        {useImage ? (
          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <Image
              src={theme.images.avatar}
              alt={theme.spirit.name}
              fill
              className={`object-cover transition-transform duration-300 ${
                theme.id === "feixue" ? 'scale-[1.8]' : 
                theme.id === "chisaki" ? 'scale-[1.2]' : 
                theme.id === "amethyst" ? 'scale-[1.8]' : 'scale-[1.4]'
              }`}
              style={{ objectPosition: theme.id === "feixue" || theme.id === "chisaki" || theme.id === "amethyst" ? '55% center' : 'center center' }}
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
            />
          </div>
        ) : (
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">{theme.spirit.emoji}</span>
        )}
        
        {/* 提示气泡 - 响应式 */}
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-10 sm:-top-12 right-0 bg-white/90 text-gray-800 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-lg"
          >
            点击我！
            <div className="absolute bottom-0 right-3 sm:right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-white/90" />
          </motion.div>
        )}
      </motion.button>

      {/* 对话面板 - 响应式 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />
            
            {/* 面板 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`fixed bottom-24 sm:bottom-28 md:bottom-32 right-4 sm:right-6 md:right-6 z-50 
                         w-[calc(100vw-2rem)] sm:w-80 md:w-80 max-w-sm
                         ${theme.colors.card} backdrop-blur-xl rounded-2xl border shadow-2xl overflow-hidden`}
            >
              {/* 头部 */}
              <div className={`p-3 sm:p-4 bg-gradient-to-r ${theme.colors.gradient}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {useImage ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/50 flex-shrink-0">
                        <Image
                          src={theme.images.avatar}
                          alt={theme.spirit.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl sm:text-3xl">{theme.spirit.emoji}</span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-sm sm:text-base truncate">{theme.spirit.name}</h3>
                      <p className="text-[10px] sm:text-xs text-white/70">{useImage ? `${theme.elementType}共鸣者` : `${theme.name}的向导`}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 sm:p-1 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                    aria-label="关闭对话"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* 对话内容 */}
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto">
                {/* 问候语 */}
                <motion.div
                  key="greeting"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2 sm:gap-3"
                >
                  {useImage ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0 border border-white/30">
                      <Image
                        src={theme.images.avatar}
                        alt={theme.spirit.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <span className="text-xl sm:text-2xl flex-shrink-0">{theme.spirit.emoji}</span>
                  )}
                  <div className={`flex-1 p-2.5 sm:p-3 rounded-2xl rounded-tl-none ${theme.colors.card} ${theme.colors.text} min-w-0`}>
                    <p className="text-xs sm:text-sm leading-relaxed">{theme.spirit.greeting}</p>
                  </div>
                </motion.div>

                {/* 随机台词 */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhrase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-2 sm:gap-3"
                  >
                    {useImage ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden flex-shrink-0 border border-white/30">
                        <Image
                          src={theme.images.avatar}
                          alt={theme.spirit.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <span className="text-xl sm:text-2xl flex-shrink-0">{theme.spirit.emoji}</span>
                    )}
                    <div className={`flex-1 p-2.5 sm:p-3 rounded-2xl rounded-tl-none ${theme.colors.card} ${theme.colors.text} min-w-0`}>
                      <p className="text-xs sm:text-sm leading-relaxed">{theme.spirit.phrases[currentPhrase]}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 主题信息 */}
                <div className={`mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-xl ${theme.colors.card}`}>
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${theme.colors.gradient} flex-shrink-0`} />
                    <span className={`text-xs sm:text-sm font-medium ${theme.colors.text} truncate`}>
                      当前共鸣者：{theme.name}
                    </span>
                  </div>
                  <p className={`text-[10px] sm:text-xs ${theme.colors.textMuted} line-clamp-2`}>{theme.description}</p>
                </div>
              </div>

              {/* 底部装饰 */}
              <div className={`h-1 bg-gradient-to-r ${theme.colors.gradient}`} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
