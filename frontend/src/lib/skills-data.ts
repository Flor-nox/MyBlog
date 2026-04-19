// Skill 数据管理架构
// 支持：实战技能管理、GitHub 热门周更、往期热门归档

export interface Skill {
  id: string;
  title: string;
  description: string;
  category: "practical" | "github" | "community";
  tags: string[];
  githubUrl?: string;
  author?: string;
  stars?: number;
  installCommand?: string;
  content: string;
  icon: string;
  color: string;
  // 新增字段
  addedAt: string; // ISO 日期格式
  updatedAt: string;
  isArchived?: boolean; // 是否归档
  weekNumber?: number; // 所属周数（GitHub热门用）
  year?: number; // 所属年份
}

// GitHub 热门周归档
export interface GitHubTrendingWeek {
  weekNumber: number;
  year: number;
  startDate: string;
  endDate: string;
  skills: Skill[];
}

// 当前周信息
export function getCurrentWeekInfo() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDays = (now.getTime() - startOfYear.getTime()) / 86400000;
  const weekNumber = Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
  
  return {
    year: now.getFullYear(),
    weekNumber,
  };
}

// 获取周日期范围
export function getWeekDateRange(year: number, weekNumber: number) {
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

// 实战技能 - 从 JSON 文件或 API 加载
export const practicalSkills: Skill[] = [
  {
    id: "superpowers",
    title: "Superpowers",
    description: "完整的软件开发方法论，提供 Brainstorming、TDD、代码审查等工作流",
    category: "practical",
    tags: ["方法论", "TDD", "代码审查", "工作流"],
    githubUrl: "https://github.com/obra/superpowers",
    author: "obra",
    installCommand: "/plugin install superpowers@claude-plugins-official",
    content: `## 功能介绍

Superpowers 是一个完整的软件开发方法论技能，专为 AI 辅助编程设计。

## 核心特性

- **Brainstorming**: 系统化的头脑风暴工作流，帮助快速探索解决方案
- **TDD 支持**: 测试驱动开发的最佳实践指导
- **代码审查**: 标准化的代码审查流程和检查清单
- **子代理管理**: 智能任务分解和子代理协调

## 使用场景

适用于大型项目开发、团队协作、代码重构等场景，能够显著提升开发效率和代码质量。`,
    icon: "Zap",
    color: "yellow",
    addedAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "agent-browser",
    title: "Agent Browser",
    description: "浏览器自动化 CLI 工具，支持导航、交互、截图和可访问性树提取",
    category: "practical",
    tags: ["浏览器", "自动化", "CLI", "测试"],
    githubUrl: "https://github.com/vercel-labs/agent-browser",
    author: "vercel-labs",
    installCommand: "npm install -g agent-browser",
    content: `## 功能介绍

Agent Browser 是一个强大的浏览器自动化工具，让 AI 能够像人类一样与网页交互。

## 核心特性

- **页面导航**: 支持 URL 访问、前进、后退、刷新等操作
- **元素交互**: 点击、输入、滚动、拖拽等常见交互
- **截图功能**: 全页面或特定元素的屏幕捕获
- **可访问性树**: 提取页面的 ARIA 结构和语义信息
- **控制台日志**: 捕获浏览器控制台的输出信息

## 使用场景

适用于网页测试、数据抓取、自动化操作、无障碍性检查等场景。`,
    icon: "Globe",
    color: "blue",
    addedAt: "2024-02-01",
    updatedAt: "2024-02-01",
  },
  {
    id: "frontend-design",
    title: "Frontend Design",
    description: "生成创意、精致的前端代码，避免通用 AI 美学，注重设计细节",
    category: "practical",
    tags: ["前端", "设计", "UI/UX", "创意"],
    githubUrl: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
    author: "anthropics",
    content: `## 功能介绍

Frontend Design 技能专注于生成具有独特视觉风格的前端代码，避免千篇一律的 AI 设计。

## 核心特性

- **创意布局**: 非传统的页面布局方案
- **精致细节**: 注重微交互和视觉层次
- **色彩系统**: 专业的配色方案生成
- **组件设计**: 独特的组件样式和动效
- **响应式**: 优雅的移动端适配

## 使用场景

适用于个人作品集、创意网站、品牌展示页面等需要独特视觉风格的场景。`,
    icon: "Palette",
    color: "purple",
    addedAt: "2024-02-10",
    updatedAt: "2024-02-10",
  },
  {
    id: "ui-ux-pro-max",
    title: "UI/UX Pro Max",
    description: "专业的 UI/UX 设计智能和设计系统生成，提供 161 条设计决策规则",
    category: "practical",
    tags: ["UI/UX", "设计系统", "组件", "样式"],
    githubUrl: "https://uupm.cc",
    author: "nextlevelbuilder",
    content: `## 功能介绍

UI/UX Pro Max 是一个专业级的设计智能技能，提供全面的 UI/UX 设计指导和设计系统生成。

## 核心特性

- **设计审查**: 161 条设计决策规则进行全面审查
- **设计系统**: 自动生成完整的设计系统规范
- **组件建议**: 智能组件选择和样式建议
- **色彩方案**: 专业的配色和主题生成
- **排版指导**: 字体选择和排版布局建议

## 使用场景

适用于网站重构、设计系统搭建、UI 优化等需要专业设计指导的场景。`,
    icon: "Sparkles",
    color: "pink",
    addedAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
];

// 当前周 GitHub 热门（每周更新）
export const currentGitHubTrending: Skill[] = [
  {
    id: "pydantic-ai",
    title: "PydanticAI",
    description: "使用 Pydantic 构建生产级 AI Agent 的 Python 框架，类型安全、结构化输出",
    category: "github",
    tags: ["Python", "Agent", "Pydantic", "类型安全"],
    githubUrl: "https://github.com/pydantic/pydantic-ai",
    author: "pydantic",
    stars: 5200,
    content: `## 项目介绍

PydanticAI 是一个用于构建生产级 AI Agent 的 Python 框架，由 Pydantic 团队开发。

## 核心特性

- **类型安全**: 完整的类型提示支持
- **结构化输出**: 基于 Pydantic 模型的输出验证
- **流式响应**: 支持流式处理和增量输出
- **依赖注入**: 灵活的依赖管理系统
- **多模型支持**: 支持 OpenAI、Anthropic、Gemini 等

## 适用场景

适合需要强类型保证和结构化输出的 AI 应用开发。`,
    icon: "Bot",
    color: "green",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  {
    id: "browser-use",
    title: "Browser Use",
    description: "让 AI 像人类一样使用浏览器，自动化网页交互任务",
    category: "github",
    tags: ["浏览器", "自动化", "AI", "Python"],
    githubUrl: "https://github.com/browser-use/browser-use",
    author: "browser-use",
    stars: 28000,
    content: `## 项目介绍

Browser Use 是一个让 AI Agent 能够像人类一样使用浏览器的开源项目。

## 核心特性

- **自然交互**: 模拟人类浏览行为
- **视觉理解**: 基于视觉的页面元素识别
- **任务规划**: 自动分解复杂任务
- **多步骤执行**: 支持长序列操作
- **错误恢复**: 智能错误处理和重试

## 适用场景

适合网页自动化测试、数据采集、表单填写等浏览器自动化任务。`,
    icon: "MousePointer",
    color: "orange",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  {
    id: "mastra",
    title: "Mastra",
    description: "TypeScript AI Agent 框架，支持工作流、RAG、集成测试",
    category: "github",
    tags: ["TypeScript", "Agent", "工作流", "RAG"],
    githubUrl: "https://github.com/mastra-ai/mastra",
    author: "mastra-ai",
    stars: 8900,
    content: `## 项目介绍

Mastra 是一个现代化的 TypeScript AI Agent 框架，专注于开发者体验和生产可靠性。

## 核心特性

- **工作流引擎**: 可视化工作流设计和执行
- **RAG 支持**: 内置检索增强生成功能
- **集成测试**: 完整的测试工具和模拟环境
- **可观测性**: 内置日志、追踪和监控
- **类型安全**: 完整的 TypeScript 支持

## 适用场景

适合企业级 AI 应用开发、复杂工作流自动化、RAG 应用构建。`,
    icon: "Workflow",
    color: "indigo",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  {
    id: "cline",
    title: "Cline",
    description: "VS Code 中的自主编码 Agent，可创建/编辑文件、执行命令、使用浏览器",
    category: "github",
    tags: ["VS Code", "Agent", "编码", "自动化"],
    githubUrl: "https://github.com/cline/cline",
    author: "cline",
    stars: 35000,
    content: `## 项目介绍

Cline 是 VS Code 中的一个自主编码 Agent，能够理解自然语言指令并执行复杂的开发任务。

## 核心特性

- **文件操作**: 自动创建、编辑、删除文件
- **命令执行**: 在终端中执行命令并分析输出
- **浏览器集成**: 使用浏览器进行测试和验证
- **上下文感知**: 理解项目结构和代码上下文
- **多模型支持**: 支持多种 LLM 提供商

## 适用场景

适合日常编码辅助、代码重构、功能开发、Bug 修复等开发任务。`,
    icon: "Code",
    color: "cyan",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  {
    id: "aider",
    title: "Aider",
    description: "AI 结对编程工具，支持多文件编辑、Git 集成、多种 LLM",
    category: "github",
    tags: ["编程", "Git", "多文件", "LLM"],
    githubUrl: "https://github.com/Aider-AI/aider",
    author: "Aider-AI",
    stars: 32000,
    content: `## 项目介绍

Aider 是一个 AI 结对编程工具，让你能够与 AI 一起编写代码，支持多文件同时编辑。

## 核心特性

- **多文件编辑**: 同时修改多个相关文件
- **Git 集成**: 自动提交和版本管理
- **代码审查**: AI 辅助的代码审查功能
- **测试驱动**: 支持测试驱动的开发流程
- **语音输入**: 支持语音指令输入

## 适用场景

适合结对编程、代码审查、功能开发、学习编程等场景。`,
    icon: "MessageSquare",
    color: "blue",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  {
    id: "letta",
    title: "Letta",
    description: "构建有状态 LLM Agent 的框架，支持记忆管理和多 Agent 系统",
    category: "github",
    tags: ["Agent", "记忆", "状态管理", "Python"],
    githubUrl: "https://github.com/letta-ai/letta",
    author: "letta-ai",
    stars: 15000,
    content: `## 项目介绍

Letta（原 MemGPT）是一个用于构建有状态 LLM Agent 的框架，专注于记忆管理和长期上下文。

## 核心特性

- **记忆管理**: 分层记忆系统（工作记忆、外部记忆）
- **长期上下文**: 突破上下文长度限制
- **多 Agent**: 支持多 Agent 协作系统
- **持久化**: Agent 状态持久化存储
- **自编辑**: Agent 能够修改自己的提示词

## 适用场景

适合需要长期记忆的对话系统、个人助手、知识管理应用。`,
    icon: "Brain",
    color: "purple",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
];

// 往期 GitHub 热门归档（示例数据）
export const archivedGitHubTrending: GitHubTrendingWeek[] = [
  {
    weekNumber: 48,
    year: 2024,
    startDate: "2024-11-25",
    endDate: "2024-12-01",
    skills: [
      {
        id: "openai-agents",
        title: "OpenAI Agents SDK",
        description: "OpenAI 官方发布的 Agent 开发 SDK，支持多 Agent 协作和工具调用",
        category: "github",
        tags: ["Python", "Agent", "OpenAI", "SDK"],
        githubUrl: "https://github.com/openai/openai-agents-python",
        author: "openai",
        stars: 15000,
        content: "OpenAI 官方 Agent SDK",
        icon: "Bot",
        color: "green",
        addedAt: "2024-11-25",
        updatedAt: "2024-11-25",
        weekNumber: 48,
        year: 2024,
        isArchived: true,
      },
      // ... 更多历史数据
    ],
  },
  {
    weekNumber: 47,
    year: 2024,
    startDate: "2024-11-18",
    endDate: "2024-11-24",
    skills: [
      {
        id: "copilot-studio",
        title: "Copilot Studio",
        description: "微软 Copilot 自定义 Agent 构建平台",
        category: "github",
        tags: ["Microsoft", "Copilot", "Agent", "低代码"],
        githubUrl: "https://github.com/microsoft/copilot-studio",
        author: "microsoft",
        stars: 8500,
        content: "微软 Copilot Studio",
        icon: "Bot",
        color: "blue",
        addedAt: "2024-11-18",
        updatedAt: "2024-11-18",
        weekNumber: 47,
        year: 2024,
        isArchived: true,
      },
    ],
  },
];

// 数据获取函数
export function getAllPracticalSkills(): Skill[] {
  return practicalSkills.sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getCurrentGitHubTrending(): Skill[] {
  return currentGitHubTrending;
}

export function getArchivedTrending(weekNumber?: number, year?: number): GitHubTrendingWeek[] {
  if (weekNumber && year) {
    return archivedGitHubTrending.filter(
      (week) => week.weekNumber === weekNumber && week.year === year
    );
  }
  return archivedGitHubTrending.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.weekNumber - a.weekNumber;
  });
}

export function getAllTrendingHistory(): Skill[] {
  const allSkills: Skill[] = [];
  archivedGitHubTrending.forEach((week) => {
    allSkills.push(...week.skills);
  });
  return allSkills;
}

export function getSkillById(id: string): Skill | null {
  // 搜索实战技能
  const practical = practicalSkills.find((s) => s.id === id);
  if (practical) return practical;
  
  // 搜索当前热门
  const current = currentGitHubTrending.find((s) => s.id === id);
  if (current) return current;
  
  // 搜索历史归档
  for (const week of archivedGitHubTrending) {
    const archived = week.skills.find((s) => s.id === id);
    if (archived) return archived;
  }
  
  return null;
}

export function getRelatedSkills(id: string, limit: number = 3): Skill[] {
  const currentSkill = getSkillById(id);
  if (!currentSkill) return [];

  const allSkills = [...practicalSkills, ...currentGitHubTrending];
  const related = allSkills
    .filter((skill) => skill.id !== id)
    .map((skill) => {
      const commonTags = skill.tags.filter((tag) =>
        currentSkill.tags.includes(tag)
      );
      return {
        skill,
        score: commonTags.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.skill);

  return related;
}

// 分页获取技能
export function getPracticalSkillsPaginated(page: number = 1, pageSize: number = 10) {
  const allSkills = getAllPracticalSkills();
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    skills: allSkills.slice(start, end),
    total: allSkills.length,
    page,
    pageSize,
    totalPages: Math.ceil(allSkills.length / pageSize),
  };
}

export function getGitHubTrendingPaginated(page: number = 1, pageSize: number = 20) {
  const allSkills = [...currentGitHubTrending, ...getAllTrendingHistory()];
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    skills: allSkills.slice(start, end),
    total: allSkills.length,
    page,
    pageSize,
    totalPages: Math.ceil(allSkills.length / pageSize),
  };
}
