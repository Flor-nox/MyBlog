"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useResonator } from "@/components/theme/resonator-provider";
import { ResonatorSwitcher } from "@/components/theme/resonator-switcher";
import { Menu, X, Code2, BookOpen, Sparkles, Layers, Palette } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页", icon: null },
  { href: "/posts", label: "文章", icon: BookOpen },
  { href: "/lab", label: "组件实验室", icon: Layers },
  { href: "/skills", label: "AI Skills", icon: Sparkles },
];

// 默认颜色配置（菲比主题）
const defaultColors = {
  primary: "#fbbf24",
  secondary: "#3b82f6",
  accent: "#60a5fa",
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useResonator();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 获取安全的颜色值
  const colors = theme?.colors || defaultColors;
  const elementType = theme?.elementType || "衍射系";

  // 避免 hydration 不匹配
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 m-2 md:m-4">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white">花夜扁舟</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 m-2 md:m-4"
      >
        <nav 
          className="container mx-auto px-4 md:px-6 py-3 md:py-4 relative rounded-2xl transition-all duration-500"
          style={{ 
            border: `2px solid ${colors.primary}60`,
            background: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled 
              ? `0 4px 30px ${colors.primary}40, 0 0 0 1px rgba(255,255,255,0.05)` 
              : `0 4px 30px ${colors.primary}30`
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div 
                className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  boxShadow: `0 0 25px ${colors.primary}60`
                }}
              >
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white">
                  花夜扁舟
                </span>
                <span className="text-[10px] md:text-xs text-white/60 -mt-0.5 hidden sm:block">
                  {elementType}共鸣者
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-medium transition-all duration-200 flex items-center gap-2 group"
                >
                  {/* 活跃指示器 */}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -inset-3 rounded-xl"
                      style={{ background: `${colors.primary}20` }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span 
                    className={`absolute -inset-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${!isActive(item.href) ? 'blur-md' : ''}`}
                    style={{ background: !isActive(item.href) ? `${colors.primary}15` : 'transparent' }}
                  />
                  <span className={`relative flex items-center gap-2 transition-colors duration-200 ${
                    isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}>
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.label}
                  </span>
                  {/* 下划线指示器 */}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* 主题切换按钮 */}
              <button
                onClick={() => setShowThemePanel(!showThemePanel)}
                className="p-2 md:p-2.5 rounded-xl transition-all duration-200 border-2 hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)`,
                  borderColor: colors.primary,
                  color: colors.primary,
                  boxShadow: `0 0 20px ${colors.primary}60`
                }}
                title="切换共鸣者"
                aria-label="切换共鸣者主题"
              >
                <Palette className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 pt-4 border-t border-white/20"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative font-medium transition-all duration-200 flex items-center gap-3 py-3 px-4 rounded-xl ${
                        isActive(item.href) 
                          ? 'text-white' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                      style={isActive(item.href) ? { background: `${colors.primary}20` } : {}}
                    >
                      {isActive(item.href) && (
                        <span 
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full"
                          style={{ background: colors.primary }}
                        />
                      )}
                      {item.icon && <item.icon className="w-5 h-5" style={{ color: isActive(item.href) ? colors.primary : undefined }} />}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      setShowThemePanel(!showThemePanel);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 py-3 px-4 font-medium text-left rounded-xl hover:bg-white/5 transition-colors"
                    style={{ color: colors.primary }}
                  >
                    <Palette className="w-5 h-5" />
                    切换共鸣者
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* 主题切换面板 */}
      <AnimatePresence>
        {showThemePanel && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThemePanel(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="fixed top-[72px] md:top-[88px] right-4 md:right-8 z-50 w-full max-w-lg px-4"
            >
              <ResonatorSwitcher />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
