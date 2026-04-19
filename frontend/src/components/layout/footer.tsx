"use client";

import Link from "next/link";
import { Github, Twitter, Mail, Heart, Code2, BookOpen, Layers, Sparkles } from "lucide-react";
import { useResonator } from "@/components/theme/resonator-provider";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/posts", label: "文章" },
  { href: "/lab", label: "组件实验室" },
  { href: "/skills", label: "AI Skills" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:flornox@example.com", icon: Mail, label: "Email" },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

export function Footer() {
  const { theme } = useResonator();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* 品牌区域 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                  boxShadow: `0 0 20px ${theme.colors.primary}40`
                }}
              >
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">花夜扁舟</span>
                <span className="block text-xs text-white/50">Flor_nox</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              探索 Java 后端、Agent 开发与 AI 辅助编程的技术世界。
            </p>
            {/* 社交链接 */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 interactive"
                >
                  <item.icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              快速链接
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 技术栈 */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              技术栈
            </h3>
            <ul className="space-y-2">
              {techStack.map((tech) => (
                <li key={tech} className="text-sm text-gray-400">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* 共鸣者主题 */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              当前共鸣者
            </h3>
            <div 
              className="p-4 rounded-xl border border-white/10"
              style={{ background: `${theme.colors.primary}10` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ background: theme.colors.primary }}
                />
                <span className="text-white font-medium">{theme.name}</span>
              </div>
              <p className="text-xs text-gray-400">{theme.elementType}</p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{theme.description}</p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {currentYear} 花夜扁舟. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
