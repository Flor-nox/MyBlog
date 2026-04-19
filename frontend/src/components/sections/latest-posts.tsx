"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    id: 1,
    title: "Spring Boot 3.0 新特性详解",
    excerpt: "深入探讨 Spring Boot 3.0 带来的重大更新，包括 Jakarta EE 迁移、Native Image 支持等...",
    date: "2024-01-15",
    readTime: "8 分钟",
    category: "Java",
    tags: ["Spring Boot", "Java"],
  },
  {
    id: 2,
    title: "构建你的第一个 AI Agent",
    excerpt: "从零开始构建一个基于 LLM 的智能 Agent，了解 ReAct 模式和工具调用...",
    date: "2024-01-10",
    readTime: "12 分钟",
    category: "Agent",
    tags: ["AI", "LLM", "Agent"],
  },
  {
    id: 3,
    title: "Cursor AI 编程最佳实践",
    excerpt: "分享使用 Cursor AI 辅助编程的经验和技巧，提高开发效率...",
    date: "2024-01-05",
    readTime: "6 分钟",
    category: "AI编程",
    tags: ["Cursor", "AI", "效率"],
  },
];

const categoryColors: Record<string, "default" | "purple" | "secondary"> = {
  "Java": "default",
  "Agent": "purple",
  "AI编程": "secondary",
};

export function LatestPosts() {
  return (
    <section className="section-container">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
          <h2 className="section-title mb-0">最新文章</h2>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-wuthering-accent hover:text-wuthering-cyan transition-colors duration-200 group"
          >
            查看全部
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 文章卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card href={`/posts/${post.id}`} glow className="h-full group">
                <CardContent className="p-0">
                  {/* 分类标签 */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant={categoryColors[post.category] || "default"}>
                      {post.category}
                    </Badge>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-wuthering-accent transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* 摘要 */}
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* 元信息 */}
                  <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 hover:text-wuthering-accent transition-colors duration-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
