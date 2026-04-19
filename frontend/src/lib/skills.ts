// 导出类型
export type { Skill, GitHubTrendingWeek } from "./skills-data";

// 导出数据和函数
export {
  practicalSkills,
  currentGitHubTrending,
  archivedGitHubTrending,
  getAllPracticalSkills,
  getCurrentGitHubTrending,
  getArchivedTrending,
  getAllTrendingHistory,
  getSkillById,
  getRelatedSkills,
  getPracticalSkillsPaginated,
  getGitHubTrendingPaginated,
  getCurrentWeekInfo,
  getWeekDateRange,
} from "./skills-data";

// 为了保持向后兼容，保留旧的导出名称
export {
  getAllPracticalSkills as getPracticalSkills,
  currentGitHubTrending as githubTrendingSkills,
} from "./skills-data";

// 辅助函数：获取所有技能（用于 generateStaticParams）
export function getAllSkills() {
  const { practicalSkills, currentGitHubTrending } = require("./skills-data");
  return [...practicalSkills, ...currentGitHubTrending];
}
