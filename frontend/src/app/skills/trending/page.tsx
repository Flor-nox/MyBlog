"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
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
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getCurrentGitHubTrending,
  getCurrentWeekInfo,
  getWeekDateRange,
  Skill,
} from "@/lib/skills";

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

const ITEMS_PER_PAGE = 12;
const MAX_TRENDING_ITEMS = 20; // 只显示前 20 个热门项目

function SkillCard({ skill, rank }: { skill: Skill; rank: number }) {
  const Icon = iconMap[skill.icon] || Zap;
  const colorClass = colorMap[skill.color] || colorMap.blue;

  // 根据排名设置不同的徽章样式
  const getRankStyle = (rank: number) => {
    if (rank === 1) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    if (rank === 2) return "bg-gray-400/20 text-gray-300 border-gray-400/30";
    if (rank === 3) return "bg-orange-600/20 text-orange-400 border-orange-600/30";
    return "bg-gray-700/50 text-gray-500 border-gray-600/30";
  };

  return (
    <Card className="h-full group overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* 排名徽章 */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center border text-sm font-bold shrink-0 ${getRankStyle(rank)}`}
          >
            {rank}
          </div>
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

            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {skill.tags.slice(0, 3).map((tag) => (
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

export default function TrendingSkillsPage() {
  const allSkills = getCurrentGitHubTrending();
  const weekInfo = getCurrentWeekInfo();
  const dateRange = getWeekDateRange(weekInfo.year, weekInfo.weekNumber);
  const [currentPage, setCurrentPage] = useState(1);

  // 只取前 20 个热门项目
  const topSkills = allSkills.slice(0, MAX_TRENDING_ITEMS);

  const totalPages = Math.ceil(topSkills.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedSkills = topSkills.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10">
              <GitHubIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">GitHub 热门</h1>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {weekInfo.year}年第{weekInfo.weekNumber}周 · {dateRange.startDate} 至 {dateRange.endDate}
              </p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl">
            每周更新，精选 GitHub 上最热门的 AI 开源项目，追踪技术趋势。本周展示前 {MAX_TRENDING_ITEMS} 个热门项目。
          </p>
        </motion.div>

        {/* 技能列表 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedSkills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                rank={startIndex + index + 1}
              />
            ))}
          </div>

          {/* 分页 */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <span className="text-sm text-gray-400 px-4">
                第 {currentPage} 页，共 {totalPages} 页
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
