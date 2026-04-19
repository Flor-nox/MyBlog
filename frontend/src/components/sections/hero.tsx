"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { useResonator } from "@/components/theme/resonator-provider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { theme } = useResonator();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 默认样式（避免 hydration 不匹配）
  if (!mounted) {
    return (
      <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              花夜扁舟
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              探索 Java 后端、Agent 开发与 AI 辅助编程的技术世界
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 开发者标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary}20, ${theme.colors.secondary}20, ${theme.colors.accent}20)`,
              border: `1px solid ${theme.colors.primary}40`
            }}
          >
            <span className="text-sm text-gray-200">Java & Agent Developer</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
          >
            <span 
              className="bg-clip-text text-transparent drop-shadow-lg"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
              }}
            >
              花夜扁舟
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl mt-3 md:mt-4 text-gray-300 font-light tracking-wider">
              Flor_nox
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            探索 Java 后端、Agent 开发与 AI 辅助编程的技术世界
            <br className="hidden sm:block" />
            <span 
              className="bg-clip-text text-transparent text-base sm:text-lg mt-2 block"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
              }}
            >
              {theme.description}
            </span>
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12"
          >
            <Link href="/posts">
              <Button 
                size="lg"
                className="w-full sm:w-auto min-w-[140px]"
                style={{
                  background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                }}
              >
                浏览文章
              </Button>
            </Link>
            <Link href="/lab">
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto min-w-[140px]"
              >
                组件实验室
              </Button>
            </Link>
          </motion.div>

          {/* 社交链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 md:gap-6"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Mail, href: "mailto:flornox@example.com", label: "Email" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="p-3 rounded-full transition-all duration-200 border border-white/10 hover:border-white/30 hover:scale-110 interactive"
                style={{
                  background: `linear-gradient(to bottom right, ${theme.colors.primary}20, ${theme.colors.secondary}20)`
                }}
              >
                <item.icon className="w-5 h-5 text-gray-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500 hover:text-gray-400 transition-colors cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
          }}
        >
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
