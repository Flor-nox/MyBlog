"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Star,
  User,
  Tag,
  Terminal,
  Copy,
  Check,
  BookOpen,
  Lightbulb,
  Code,
  ExternalLink,
  FileText,
  Clock,
  Shield,
  Zap,
  Globe,
  Palette,
  Sparkles,
  Bot,
  MousePointer,
  Workflow,
  Brain,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill } from "@/lib/skills";
import { useState } from "react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Globe,
  Palette,
  Sparkles,
  Bot,
  MousePointer,
  Workflow,
  Code,
  Brain,
  MessageSquare,
};

const colorMap: Record<string, string> = {
  yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
  blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  pink: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  green: "text-green-500 bg-green-500/10 border-green-500/20",
  orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  cyan: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  red: "text-red-500 bg-red-500/10 border-red-500/20",
  indigo: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
};

// GitHub 官方 SVG 图标
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-8 w-8 p-0"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}

function RelatedSkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] || Zap;
  const colorClass = colorMap[skill.color] || colorMap.yellow;

  return (
    <Link href={`/skills/${skill.id}/`}>
      <Card className="p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group cursor-pointer">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
              colorClass
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
              {skill.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
              {skill.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

// 解析 Markdown 内容为结构化数据
function parseContent(content: string) {
  const sections: Record<string, string[]> = {
    功能介绍: [],
    核心特性: [],
    使用场景: [],
    快速开始: [],
    文档链接: [],
  };

  let currentSection = "";

  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      currentSection = trimmed.replace("## ", "").trim();
      if (!sections[currentSection]) {
        sections[currentSection] = [];
      }
    } else if (trimmed.startsWith("- ")) {
      if (currentSection) {
        sections[currentSection].push(trimmed.replace("- ", "").trim());
      }
    } else if (currentSection) {
      sections[currentSection].push(trimmed);
    }
  });

  return sections;
}

interface SkillDetailClientProps {
  skill: Skill;
  relatedSkills: Skill[];
}

export default function SkillDetailClient({ skill, relatedSkills }: SkillDetailClientProps) {
  const Icon = iconMap[skill.icon] || Zap;
  const colorClass = colorMap[skill.color] || colorMap.yellow;
  const contentSections = parseContent(skill.content);

  // 生成文档链接
  const docLinks = [
    {
      title: "官方文档",
      url: skill.githubUrl ? `${skill.githubUrl}#readme` : "#",
      icon: BookOpen,
    },
    {
      title: "GitHub 仓库",
      url: skill.githubUrl || "#",
      icon: GitHubIcon,
    },
    {
      title: "Issue 反馈",
      url: skill.githubUrl ? `${skill.githubUrl}/issues` : "#",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/skills/">
            <Button variant="ghost" className="mb-6 -ml-4 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              返回技能列表
            </Button>
          </Link>
        </motion.div>

        {/* 技能头部信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* 图标 */}
            <div
              className={cn(
                "w-24 h-24 rounded-2xl flex items-center justify-center shrink-0",
                colorClass
              )}
            >
              <Icon className="w-12 h-12" />
            </div>

            {/* 标题和描述 */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {skill.title}
                </h1>
                <Badge
                  variant="secondary"
                  className={cn(
                    "text-xs",
                    skill.category === "practical"
                      ? "bg-primary/10 text-primary"
                      : "bg-blue-500/10 text-blue-500"
                  )}
                >
                  {skill.category === "practical" ? "实战技能" : "GitHub 热门"}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* 元信息 */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {skill.author && (
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{skill.author}</span>
                  </div>
                )}
                {skill.stars !== undefined && skill.stars > 0 && (
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{skill.stars.toLocaleString()} stars</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>持续更新</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {skill.githubUrl && (
            <a
              href={skill.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <GitHubIcon className="w-4 h-4" />
                访问 GitHub
              </Button>
            </a>
          )}
          {skill.installCommand && (
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              安装技能
            </Button>
          )}
        </motion.div>

        {/* 标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">标签</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* 安装命令 */}
        {skill.installCommand && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                安装命令
              </span>
            </div>
            <div className="relative">
              <pre className="bg-muted rounded-lg p-4 pr-12 text-sm font-mono text-foreground overflow-x-auto">
                <code>{skill.installCommand}</code>
              </pre>
              <div className="absolute top-2 right-2">
                <CopyButton text={skill.installCommand} />
              </div>
            </div>
          </motion.div>
        )}

        {/* 主要内容区域 - 使用 Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="usage">使用指南</TabsTrigger>
              <TabsTrigger value="docs">文档链接</TabsTrigger>
            </TabsList>

            {/* 概览 Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* 功能介绍 */}
              {contentSections["功能介绍"]?.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      功能介绍
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {contentSections["功能介绍"].map((item, index) => (
                        <p key={index} className="text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* 核心特性 */}
              {contentSections["核心特性"]?.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="w-5 h-5 text-blue-500" />
                      核心特性
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {contentSections["核心特性"].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* 使用指南 Tab */}
            <TabsContent value="usage" className="space-y-6">
              {/* 使用场景 */}
              {contentSections["使用场景"]?.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Lightbulb className="w-5 h-5 text-green-500" />
                      适用场景
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {contentSections["使用场景"].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* 快速开始 */}
              {contentSections["快速开始"]?.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Terminal className="w-5 h-5 text-purple-500" />
                      快速开始
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contentSections["快速开始"].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* 文档链接 Tab */}
            <TabsContent value="docs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="w-5 h-5 text-primary" />
                    相关链接
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {docLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                      >
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground">
                          {link.title}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 额外资源提示 */}
              <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  提示：访问官方文档可以获取更详细的使用说明、API 参考和示例代码。
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* 相关技能 */}
        {relatedSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              相关技能
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedSkills.map((relatedSkill) => (
                <RelatedSkillCard key={relatedSkill.id} skill={relatedSkill} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
