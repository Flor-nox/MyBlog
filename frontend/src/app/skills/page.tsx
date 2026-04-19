"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Globe,
  Palette,
  Sparkles,
  Bot,
  MousePointer,
  Workflow,
  Code,
  MessageSquare,
  Brain,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  History,
} from "lucide-react";
import {
  getAllPracticalSkills,
  getCurrentGitHubTrending,
  getCurrentWeekInfo,
  getWeekDateRange,
  Skill,
} from "@/lib/skills";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Globe,
  Palette,
  Sparkles,
  Bot,
  MousePointer,
  Workflow,
  Code,
  MessageSquare,
  Brain,
};

const colorMap: Record<string, string> = {
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  pink: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
  orange: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

// GitHub 官方 SVG 图标组件
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

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] || Zap;
  const colorClass = colorMap[skill.color] || colorMap.blue;
  const [isExpanded, setIsExpanded] = useState(false);

  // 判断描述是否需要展开（超过50个字符）
  const needsExpansion = skill.description.length > 50;

  return (
    <Card className="h-full group overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${colorClass}`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white group-hover:text-wuthering-accent transition-colors truncate">
                {skill.title}
              </h3>
              {skill.stars && (
                <div className="flex items-center gap-1 text-yellow-400 text-sm shrink-0">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span>{skill.stars >= 1000 ? `${(skill.stars / 1000).toFixed(1)}k` : skill.stars}</span>
                </div>
              )}
            </div>

            {/* 描述区域 - 支持展开 */}
            <div className="relative">
              <AnimatePresence initial={false}>
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : "2.5rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-400">
                    {skill.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* 展开/收起按钮 */}
              {needsExpansion && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors mt-1"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      收起
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      展开
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {skill.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link href={`/skills/${skill.id}/`} className="flex-1">
                <Button size="sm" className="w-full">
                  查看详情
                </Button>
              </Link>
              {skill.githubUrl && (
                <a
                  href={skill.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                  title="访问 GitHub"
                >
                  <GitHubIcon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsPage() {
  const practicalSkills = getAllPracticalSkills();
  const githubSkills = getCurrentGitHubTrending();
  const weekInfo = getCurrentWeekInfo();
  const dateRange = getWeekDateRange(weekInfo.year, weekInfo.weekNumber);

  // 只显示前几个
  const displayPracticalCount = 4;
  const displayGithubCount = 6;
  const displayedPractical = practicalSkills.slice(0, displayPracticalCount);
  const displayedGithub = githubSkills.slice(0, displayGithubCount);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            AI Skills 库
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            收集实战验证的 AI 技能和 GitHub 热门项目，助力开发效率提升
          </p>
        </div>

        {/* 实战 Skill 区域 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">实战技能</h2>
                <p className="text-sm text-gray-500">项目中实际使用的 Skill</p>
              </div>
            </div>
            <Link href="/skills/practical/">
              <Button variant="ghost" className="gap-2 group">
                查看全部
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedPractical.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>

        {/* GitHub 热门 Skill 区域 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10">
                <GitHubIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">GitHub 热门</h2>
                <p className="text-sm text-gray-500">
                  {weekInfo.year}年第{weekInfo.weekNumber}周 · {dateRange.startDate} 至 {dateRange.endDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/skills/trending/history/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <History className="w-4 h-4" />
                  往期热门
                </Button>
              </Link>
              <Link href="/skills/trending/">
                <Button variant="ghost" className="gap-2 group">
                  查看全部
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedGithub.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
