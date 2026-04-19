#!/usr/bin/env ts-node
/**
 * GitHub 热门项目自动更新脚本
 * 
 * 使用方法:
 * 1. 手动运行: npx ts-node scripts/update-github-trending.ts
 * 2. 设置定时任务（如 GitHub Actions）每周自动运行
 * 
 * 功能:
 * - 抓取 GitHub Trending 页面数据
 * - 将上周数据归档
 * - 更新当前周热门项目
 */

import * as fs from 'fs';
import * as path from 'path';

// 配置
const CONFIG = {
  // 抓取数量
  FETCH_COUNT: 20,
  // 数据文件路径
  DATA_FILE: path.join(process.cwd(), 'src/lib/skills-data.ts'),
  // 最小 star 数
  MIN_STARS: 1000,
};

// 当前周信息
function getCurrentWeekInfo() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDays = (now.getTime() - startOfYear.getTime()) / 86400000;
  const weekNumber = Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
  
  return {
    year: now.getFullYear(),
    weekNumber,
    date: now.toISOString().split('T')[0],
  };
}

// 模拟抓取 GitHub Trending（实际使用时替换为真实 API 或爬虫）
async function fetchGitHubTrending(): Promise<any[]> {
  // TODO: 实现真实的 GitHub Trending 抓取
  // 可选方案:
  // 1. 使用 GitHub API 搜索最近创建的仓库
  // 2. 使用 Puppeteer 爬取 github.com/trending
  // 3. 使用第三方服务如 https://github.com/huchenme/github-trending-api
  
  console.log('⚠️  请实现真实的 GitHub Trending 抓取逻辑');
  console.log('建议方案:');
  console.log('  1. GitHub Search API: 按创建时间排序');
  console.log('  2. Puppeteer 爬虫: 爬取 github.com/trending');
  console.log('  3. 第三方 API: github-trending-api');
  
  return [];
}

// 读取现有数据文件
function readExistingData(): string {
  try {
    return fs.readFileSync(CONFIG.DATA_FILE, 'utf-8');
  } catch (error) {
    console.error('❌ 无法读取数据文件:', error);
    process.exit(1);
  }
}

// 更新数据文件
function updateDataFile(weekInfo: { year: number; weekNumber: number; date: string }, newProjects: any[]) {
  let content = readExistingData();
  
  // 1. 将当前热门移动到归档
  const currentWeekMatch = content.match(/export const currentGitHubTrending: Skill\[\] = ([\s\S]*?);\s*export/);
  if (currentWeekMatch) {
    const currentWeekData = currentWeekMatch[1];
    
    // 创建归档周数据
    const archiveEntry = `
  {
    weekNumber: ${weekInfo.weekNumber - 1},
    year: ${weekInfo.year},
    startDate: "${getWeekDateRange(weekInfo.year, weekInfo.weekNumber - 1).startDate}",
    endDate: "${getWeekDateRange(weekInfo.year, weekInfo.weekNumber - 1).endDate}",
    skills: ${currentWeekData},
  },`;
    
    // 添加到归档数组
    content = content.replace(
      /export const archivedGitHubTrending: GitHubTrendingWeek\[\] = \[/,
      `export const archivedGitHubTrending: GitHubTrendingWeek[] = [${archiveEntry}`
    );
  }
  
  // 2. 更新当前热门
  const newTrendingArray = `export const currentGitHubTrending: Skill[] = ${JSON.stringify(newProjects, null, 2)};`;
  content = content.replace(
    /export const currentGitHubTrending: Skill\[\] = [\s\S]*?;\s*export/,
    newTrendingArray + "\n\nexport"
  );
  
  // 写入文件
  fs.writeFileSync(CONFIG.DATA_FILE, content, 'utf-8');
  console.log('✅ 数据文件已更新');
}

// 获取周日期范围
function getWeekDateRange(year: number, weekNumber: number) {
  const startOfYear = new Date(year, 0, 1);
  const dayOffset = startOfYear.getDay();
  const startDate = new Date(year, 0, 1 + (weekNumber - 1) * 7 - dayOffset);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  
  return {
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
  };
}

// 主函数
async function main() {
  console.log('🚀 GitHub Trending 更新脚本');
  console.log('============================');
  
  const weekInfo = getCurrentWeekInfo();
  console.log(`📅 当前周: ${weekInfo.year}年第${weekInfo.weekNumber}周`);
  
  // 抓取新项目
  console.log(`🔍 正在抓取 ${CONFIG.FETCH_COUNT} 个热门项目...`);
  const newProjects = await fetchGitHubTrending();
  
  if (newProjects.length === 0) {
    console.log('⚠️  未获取到新项目，请检查抓取逻辑');
    return;
  }
  
  console.log(`✅ 成功抓取 ${newProjects.length} 个项目`);
  
  // 更新数据文件
  updateDataFile(weekInfo, newProjects);
  
  console.log('🎉 更新完成！');
  console.log('\n💡 提示: 请检查生成的数据，确保格式正确');
}

// 运行
main().catch(console.error);
