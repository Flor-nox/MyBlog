"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Bot, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    id: "prompt-engineering",
    title: "Prompt 工程",
    description: "编写高效提示词的技巧和模板",
    icon: Terminal,
    count: 12,
    color: "blue" as const,
  },
  {
    id: "rag",
    title: "RAG 实战",
    description: "检索增强生成的实现方法",
    icon: Brain,
    count: 8,
    color: "purple" as const,
  },
  {
    id: "agent",
    title: "Agent 开发",
    description: "智能体构建的核心技术",
    icon: Bot,
    count: 15,
    color: "green" as const,
  },
  {
    id: "mcp",
    title: "MCP 协议",
    description: "模型上下文协议详解",
    icon: Sparkles,
    count: 6,
    color: "orange" as const,
  },
];

const colorVariants = {
  blue: "from-blue-500 to-cyan-500",
  purple: "from-purple-500 to-pink-500",
  green: "from-green-500 to-emerald-500",
  orange: "from-orange-500 to-yellow-500",
};

const iconColors = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-green-400",
  orange: "text-orange-400",
};

export function SkillLibrary() {
  return (
    <section className="section-container">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
          <h2 className="section-title mb-0">AI Skills 库</h2>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-wuthering-accent hover:text-wuthering-cyan transition-colors duration-200 group"
          >
            查看全部
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Skills 卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card href={`/skills/${skill.id}`} className="h-full group">
                <CardContent className="p-0">
                  {/* 图标和数量 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorVariants[skill.color]} flex items-center justify-center shadow-lg`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{skill.count} 个技巧</Badge>
                  </div>

                  {/* 标题 */}
                  <h3 className={`text-lg font-bold mb-2 ${iconColors[skill.color]} group-hover:text-white transition-colors duration-200`}>
                    {skill.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
