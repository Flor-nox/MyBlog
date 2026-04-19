"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Palette, Zap, LayoutGrid, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const components = [
  {
    id: "button",
    name: "Button",
    description: "多种样式的按钮组件，支持不同变体和尺寸",
    icon: Zap,
    category: "基础组件",
    color: "blue" as const,
  },
  {
    id: "card",
    name: "Card",
    description: "卡片容器组件，支持悬停效果和链接",
    icon: LayoutGrid,
    category: "布局组件",
    color: "purple" as const,
  },
  {
    id: "modal",
    name: "Modal",
    description: "模态对话框组件，支持动画和遮罩",
    icon: MessageSquare,
    category: "反馈组件",
    color: "green" as const,
  },
  {
    id: "theme",
    name: "Theme",
    description: "共鸣者主题切换系统，支持多种配色",
    icon: Palette,
    category: "主题组件",
    color: "orange" as const,
  },
];

const colorVariants = {
  blue: "from-blue-500 to-cyan-500",
  purple: "from-purple-500 to-pink-500",
  green: "from-green-500 to-emerald-500",
  orange: "from-orange-500 to-yellow-500",
};

const bgColorVariants = {
  blue: "from-blue-500/20 to-cyan-500/20",
  purple: "from-purple-500/20 to-pink-500/20",
  green: "from-green-500/20 to-emerald-500/20",
  orange: "from-orange-500/20 to-yellow-500/20",
};

const iconColors = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-green-400",
  orange: "text-orange-400",
};

export function ComponentShowcase() {
  return (
    <section className="section-container">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
          <h2 className="section-title mb-0">组件实验室</h2>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-wuthering-accent hover:text-wuthering-cyan transition-colors duration-200 group"
          >
            进入实验室
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 组件卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {components.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card href={`/lab/${component.id}`} className="h-full group">
                <CardContent className="p-0">
                  {/* 图标和分类 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorVariants[component.color]} flex items-center justify-center shadow-lg`}>
                      <component.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{component.category}</Badge>
                  </div>

                  {/* 标题 */}
                  <h3 className={`text-lg font-bold mb-2 ${iconColors[component.color]} group-hover:text-white transition-colors duration-200`}>
                    {component.name}
                  </h3>

                  {/* 描述 */}
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {component.description}
                  </p>

                  {/* 预览区域 */}
                  <div className={`h-20 rounded-xl bg-gradient-to-br ${bgColorVariants[component.color]} border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300`}>
                    <span className={`text-xs ${iconColors[component.color]} font-medium`}>
                      点击预览
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
