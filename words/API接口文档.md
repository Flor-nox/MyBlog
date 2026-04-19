# 花夜扁舟博客 - 数据接口文档

> 文档版本: v2.0  
> 更新日期: 2026-04-19  
> 适用前端版本: Next.js 14 + React + TypeScript

---

## 目录

1. [概述](#概述)
2. [Skills 数据接口](#skills-数据接口)
3. [文章数据接口](#文章数据接口)
4. [数据模型](#数据模型)
5. [自动更新机制](#自动更新机制)

---

## 概述

### 项目架构

本项目采用纯前端架构，所有数据通过 TypeScript 数据文件管理，无需后端 API 服务。

**数据管理方式**:
- 静态数据: TypeScript 数据文件 (`src/lib/skills-data.ts`)
- 内容数据: Markdown 文件 (`content/posts/`)
- 自动更新: GitHub Actions 定时任务

### 数据分层

```
数据层 (src/lib/)
├── skills-data.ts      # Skills 数据定义和存储
├── skills.ts           # Skills 数据导出
├── posts.ts            # 文章数据管理
└── utils.ts            # 工具函数

内容层 (content/)
└── posts/              # Markdown 文章

脚本层 (scripts/)
└── update-github-trending.ts  # 自动更新脚本
```

---

## Skills 数据接口

### 1. 获取所有实战技能

**函数**: `getAllPracticalSkills()`

**位置**: `src/lib/skills-data.ts`

**描述**: 获取所有实战技能，按更新时间倒序排列

**返回值**: `Skill[]`

```typescript
const skills = getAllPracticalSkills();
// 返回: [{ id: "superpowers", title: "Superpowers", ... }, ...]
```

---

### 2. 获取当前 GitHub 热门

**函数**: `getCurrentGitHubTrending()`

**位置**: `src/lib/skills-data.ts`

**描述**: 获取当前周的 GitHub 热门项目

**返回值**: `Skill[]`

```typescript
const trending = getCurrentGitHubTrending();
// 返回: [{ id: "pydantic-ai", title: "PydanticAI", weekNumber: 49, year: 2024, ... }, ...]
```

---

### 3. 获取往期热门归档

**函数**: `getArchivedTrending(weekNumber?, year?)`

**位置**: `src/lib/skills-data.ts`

**描述**: 获取历史归档的 GitHub 热门数据

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| weekNumber | number | 否 | 指定周数 |
| year | number | 否 | 指定年份 |

**返回值**: `GitHubTrendingWeek[]`

```typescript
// 获取所有历史数据
const allHistory = getArchivedTrending();

// 获取指定周数据
const week48 = getArchivedTrending(48, 2024);
```

---

### 4. 根据 ID 获取 Skill

**函数**: `getSkillById(id)`

**位置**: `src/lib/skills-data.ts`

**描述**: 根据 ID 获取单个 Skill 详情

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | Skill ID |

**返回值**: `Skill | null`

```typescript
const skill = getSkillById("superpowers");
// 返回: { id: "superpowers", title: "Superpowers", ... } 或 null
```

---

### 5. 获取相关 Skills

**函数**: `getRelatedSkills(id, limit?)`

**位置**: `src/lib/skills-data.ts`

**描述**: 根据标签匹配度获取相关 Skills

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | 当前 Skill ID |
| limit | number | 否 | 返回数量，默认 3 |

**返回值**: `Skill[]`

```typescript
const related = getRelatedSkills("superpowers", 3);
// 返回: [{ id: "agent-browser", ... }, ...]
```

---

### 6. 分页获取实战技能

**函数**: `getPracticalSkillsPaginated(page, pageSize?)`

**位置**: `src/lib/skills-data.ts`

**描述**: 分页获取实战技能列表

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | number | 是 | 页码，从 1 开始 |
| pageSize | number | 否 | 每页数量，默认 10 |

**返回值**:

```typescript
{
  skills: Skill[];      // 当前页数据
  total: number;        // 总数
  page: number;         // 当前页
  pageSize: number;     // 每页数量
  totalPages: number;   // 总页数
}
```

---

### 7. 分页获取 GitHub 热门

**函数**: `getGitHubTrendingPaginated(page, pageSize?)`

**位置**: `src/lib/skills-data.ts`

**描述**: 分页获取 GitHub 热门项目（包含当前和历史）

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| page | number | 是 | 页码，从 1 开始 |
| pageSize | number | 否 | 每页数量，默认 20 |

**返回值**: 同 `getPracticalSkillsPaginated`

---

### 8. 获取当前周信息

**函数**: `getCurrentWeekInfo()`

**位置**: `src/lib/skills-data.ts`

**描述**: 获取当前年份和周数

**返回值**:

```typescript
{
  year: number;        // 当前年份
  weekNumber: number;  // 当前周数
}
```

---

### 9. 获取周日期范围

**函数**: `getWeekDateRange(year, weekNumber)`

**位置**: `src/lib/skills-data.ts`

**描述**: 获取指定周的日期范围

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| year | number | 是 | 年份 |
| weekNumber | number | 是 | 周数 |

**返回值**:

```typescript
{
  startDate: string;   // 开始日期 (YYYY-MM-DD)
  endDate: string;     // 结束日期 (YYYY-MM-DD)
}
```

---

## 文章数据接口

### 1. 获取所有文章

**函数**: `getAllPosts()`

**位置**: `src/lib/posts.ts`

**描述**: 获取所有文章列表，按日期倒序排列

**返回值**: `Post[]`

```typescript
const posts = getAllPosts();
// 返回: [{ id: "hello-world", title: "Hello World", ... }, ...]
```

---

### 2. 根据 ID 获取文章

**函数**: `getPostById(id)`

**位置**: `src/lib/posts.ts`

**描述**: 根据 ID 获取单篇文章详情

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | 文章 ID |

**返回值**: `Post | null`

```typescript
const post = getPostById("hello-world");
// 返回: { id: "hello-world", title: "Hello World", content: "..." } 或 null
```

---

### 3. 获取文章分类

**函数**: `getCategories()`

**位置**: `src/lib/posts.ts`

**描述**: 获取所有文章分类

**返回值**: `string[]`

```typescript
const categories = getCategories();
// 返回: ["Java", "Agent", "AI编程", "随笔"]
```

---

### 4. 按分类获取文章

**函数**: `getPostsByCategory(category)`

**位置**: `src/lib/posts.ts`

**描述**: 根据分类筛选文章

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| category | string | 是 | 分类名称 |

**返回值**: `Post[]`

---

### 5. 搜索文章

**函数**: `searchPosts(keyword)`

**位置**: `src/lib/posts.ts`

**描述**: 根据关键词搜索文章

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| keyword | string | 是 | 搜索关键词 |

**返回值**: `Post[]`

---

## 数据模型

### Skill 模型

```typescript
interface Skill {
  // 基本信息
  id: string;                    // 唯一标识
  title: string;                 // 标题
  description: string;           // 简短描述
  category: "practical" | "github" | "community";  // 分类
  tags: string[];                // 标签数组
  
  // GitHub 信息
  githubUrl?: string;            // GitHub 链接
  author?: string;               // 作者
  stars?: number;                // Star 数
  
  // 安装信息
  installCommand?: string;       // 安装命令
  
  // 详细内容
  content: string;               // Markdown 格式内容
  
  // 视觉元素
  icon: string;                  // Lucide 图标名称
  color: string;                 // 主题色
  
  // 时间维度
  addedAt: string;               // 添加时间 (ISO 8601)
  updatedAt: string;             // 更新时间 (ISO 8601)
  
  // GitHub 热门专用
  isArchived?: boolean;          // 是否归档
  weekNumber?: number;           // 所属周数
  year?: number;                 // 所属年份
}
```

---

### GitHubTrendingWeek 模型

```typescript
interface GitHubTrendingWeek {
  weekNumber: number;            // 周数
  year: number;                  // 年份
  startDate: string;             // 开始日期 (YYYY-MM-DD)
  endDate: string;               // 结束日期 (YYYY-MM-DD)
  skills: Skill[];               // 该周的 Skills
}
```

---

### Post 模型

```typescript
interface Post {
  id: string;                    // 唯一标识（URL 友好格式）
  title: string;                 // 文章标题
  date: string;                  // 发布日期 (YYYY-MM-DD)
  category: string;              // 文章分类
  tags: string[];                // 标签数组
  excerpt: string;               // 文章摘要
  content: string;               // Markdown 格式正文
  readTime?: string;             // 预计阅读时间
}
```

---

## 自动更新机制

### GitHub Actions 工作流

**文件**: `.github/workflows/update-trending.yml`

**触发条件**:
- 每周一 UTC 00:00 自动触发
- 支持手动触发 (`workflow_dispatch`)

**执行流程**:
1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖
4. 运行更新脚本
5. 提交并推送更改

```yaml
name: Update GitHub Trending
on:
  schedule:
    - cron: '0 0 * * 1'  # 每周一 UTC 00:00
  workflow_dispatch:
```

---

### 更新脚本

**文件**: `scripts/update-github-trending.ts`

**功能**:
1. 获取当前周信息
2. 抓取 GitHub Trending 数据
3. 将上周数据归档
4. 更新当前周数据
5. 写入数据文件

**使用方法**:
```bash
# 手动运行
npx ts-node scripts/update-github-trending.ts
```

---

## 数据文件结构

### skills-data.ts

```typescript
// 实战技能数据
export const practicalSkills: Skill[] = [
  {
    id: "superpowers",
    title: "Superpowers",
    description: "...",
    category: "practical",
    tags: ["方法论", "TDD"],
    githubUrl: "https://github.com/obra/superpowers",
    author: "obra",
    installCommand: "/plugin install superpowers",
    content: "## 功能介绍\n...",
    icon: "Zap",
    color: "yellow",
    addedAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  // ...
];

// 当前周 GitHub 热门
export const currentGitHubTrending: Skill[] = [
  {
    id: "pydantic-ai",
    title: "PydanticAI",
    description: "...",
    category: "github",
    tags: ["Python", "Agent"],
    githubUrl: "https://github.com/pydantic/pydantic-ai",
    author: "pydantic",
    stars: 5200,
    content: "## 项目介绍\n...",
    icon: "Bot",
    color: "green",
    addedAt: "2024-12-01",
    updatedAt: "2024-12-01",
    weekNumber: 49,
    year: 2024,
  },
  // ...
];

// 往期热门归档
export const archivedGitHubTrending: GitHubTrendingWeek[] = [
  {
    weekNumber: 48,
    year: 2024,
    startDate: "2024-11-25",
    endDate: "2024-12-01",
    skills: [
      // ...
    ],
  },
];
```

---

## 使用示例

### 在页面中使用 Skills 数据

```typescript
// app/skills/page.tsx
import { 
  getAllPracticalSkills, 
  getCurrentGitHubTrending,
  getCurrentWeekInfo 
} from "@/lib/skills";

export default function SkillsPage() {
  const practicalSkills = getAllPracticalSkills();
  const githubSkills = getCurrentGitHubTrending();
  const weekInfo = getCurrentWeekInfo();
  
  return (
    <div>
      <h1>AI Skills 库</h1>
      <p>第 {weekInfo.weekNumber} 周</p>
      {/* 渲染技能列表 */}
    </div>
  );
}
```

### 在页面中使用文章数据

```typescript
// app/posts/page.tsx
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();
  
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

---

## 注意事项

1. **数据更新**: Skills 数据通过 GitHub Actions 自动更新，不要手动修改 `currentGitHubTrending`
2. **类型安全**: 所有数据接口都有完整的 TypeScript 类型定义
3. **静态导出**: 项目使用静态导出，数据在构建时确定
4. **缓存策略**: 静态资源使用长期缓存，数据更新需要重新构建部署

---

**文档结束**
