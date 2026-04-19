# 花夜扁舟个人博客 - 产品需求文档 (PRD)

## 1. 项目概述

### 1.1 项目信息
- **项目名称**: 花夜扁舟个人博客 (Flornox Blog)
- **项目目标**: 打造个人技术博客，分享 Java、Agent 开发和 AI 辅助编程经验
- **目标用户**: 技术开发者、AI 爱好者
- **开发周期**: 持续迭代

### 1.2 核心定位
- 视觉风格：高级感 + 流动感 + 二次元风格
- 主题元素：《鸣潮》游戏元素点缀
- 技术栈：Next.js + React + TypeScript + Tailwind CSS

---

## 2. 功能需求

### 2.1 核心功能模块

#### 2.1.1 博客系统 ✅
- [x] 文章列表展示（卡片式网格布局）
- [x] 文章详情页（Markdown 渲染）
- [x] 文章分类/标签筛选
- [x] 代码高亮显示
- [x] 文章搜索功能

#### 2.1.2 组件实验室 (Component Lab) ✅
- [x] 组件展示页面
- [ ] 实时预览功能
- [ ] 代码复制功能
- [ ] 组件分类管理
- [ ] Props 文档说明

#### 2.1.3 AI Skills 库 ✅
- [x] Skill 分类展示（实战技能、GitHub 热门）
- [x] Skill 详情页（功能介绍、使用指南、文档链接）
- [x] 卡片展开/收起功能
- [x] 相关技能推荐
- [x] 分页展示
- [x] 往期热门归档
- [ ] 代码片段管理
- [ ] 搜索和筛选
- [ ] 收藏功能

#### 2.1.4 主题系统 ✅
- [x] 深色/浅色模式切换
- [x] 鸣潮主题配色（4个共鸣者主题）
- [x] 主题切换动画
- [ ] 主题自定义

### 2.2 页面结构

```
/
├── 首页 (Hero + 最新文章 + 组件展示 + Skills)
├── /posts
│   ├── 文章列表页
│   └── /[slug] 文章详情页
├── /lab
│   └── 组件实验室首页
├── /skills
│   ├── Skills 库首页（分类展示）
│   ├── /[id] Skill 详情页
│   ├── /practical 实战技能列表
│   ├── /trending GitHub 热门列表
│   └── /trending/history 往期热门
└── /about 关于页面
```

---

## 3. 技术架构

### 3.1 前端架构
```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React 组件
│   │   ├── ui/          # UI 基础组件
│   │   ├── layout/      # 布局组件
│   │   ├── sections/    # 页面区块
│   │   ├── effects/     # 特效组件
│   │   └── theme/       # 主题组件
│   ├── lib/             # 工具函数和数据
│   └── styles/          # 全局样式
├── content/             # Markdown 内容
└── public/              # 静态资源
```

### 3.2 技术栈
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **动画**: Framer Motion
- **主题**: 自定义共鸣者主题系统
- **图标**: Lucide React
- **Markdown**: remark + rehype

### 3.3 项目结构
```
MyBolg/
├── frontend/        # 前端项目
├── backend/         # 后端/API (预留)
├── docs/            # 设计文档/API文档
├── words/           # PRD/技术方案/代码审查
└── resources/       # 资源文件
```

---

## 4. 视觉设计

### 4.1 配色方案
```css
/* 鸣潮主题配色 */
--wuthering-dark: #0a0a0f;    /* 深色背景 */
--wuthering-navy: #1a1a2e;    /* 海军蓝 */
--wuthering-blue: #16213e;    /* 深蓝 */
--wuthering-accent: #4a9eff;  /* 亮蓝强调 */
--wuthering-gold: #ffd700;    /* 金色点缀 */
--wuthering-purple: #8b5cf6;  /* 紫色 */
--wuthering-cyan: #06b6d4;    /* 青色 */
```

### 4.2 共鸣者主题系统
| 主题 | 主色调 | 背景色 | 适用场景 |
|------|--------|--------|----------|
| 漂泊者 | 蓝色 | 深蓝渐变 | 默认主题 |
| 秧秧 | 青色 | 青色渐变 | 清新风格 |
| 炽霞 | 红色 | 红色渐变 | 热情风格 |
| 白莲 | 白色 | 白色渐变 | 明亮风格 |

### 4.3 设计原则
- **高级感**: 毛玻璃效果、渐变背景、微妙阴影
- **流动感**: 浮动动画、渐变流动、光晕效果
- **二次元**: 圆角设计、明亮配色、角色元素点缀

### 4.4 动画效果
- 页面加载动画
- 滚动触发动画
- 悬停交互效果
- 主题切换过渡
- 卡片展开/收起动画

---

## 5. 内容管理

### 5.1 文章格式
- 使用 Markdown 格式
- 存储路径: `frontend/content/posts/`
- Frontmatter 元数据: title, date, category, tags, excerpt

```markdown
---
title: "文章标题"
date: "2024-01-15"
category: "Java"
tags: ["Spring Boot", "Java"]
excerpt: "文章摘要"
---

文章内容...
```

### 5.2 Skills 管理
- 数据文件: `frontend/src/lib/skills-data.ts`
- 分类: 实战技能、GitHub 热门
- 自动更新: GitHub Actions 每周更新
- 归档机制: 往期热门自动归档

### 5.3 Skills 数据结构
```typescript
interface Skill {
  id: string;
  title: string;
  description: string;
  category: "practical" | "github";
  tags: string[];
  githubUrl?: string;
  author?: string;
  stars?: number;
  installCommand?: string;
  content: string;      // Markdown 格式
  icon: string;
  color: string;
  addedAt: string;
  updatedAt: string;
  weekNumber?: number;  // GitHub 热门用
  year?: number;
}
```

---

## 6. 功能详细说明

### 6.1 Skills 库功能

#### 6.1.1 首页展示
- 分类展示：实战技能、GitHub 热门
- 显示当前周信息（年、周数、日期范围）
- "查看全部"按钮链接到完整列表
- "往期热门"按钮链接到历史归档

#### 6.1.2 列表页
- 分页展示（每页 12 项）
- 卡片布局（响应式：1/2/3 列）
- 显示：图标、标题、描述、标签、Star 数

#### 6.1.3 详情页
- Tabs 组织内容：概览、使用指南、文档链接
- 概览：功能介绍、核心特性
- 使用指南：适用场景、快速开始
- 文档链接：官方文档、GitHub、Issue
- 相关技能推荐（基于标签匹配）

#### 6.1.4 卡片交互
- 描述展开/收起（超过 50 字符时）
- 平滑动画过渡
- GitHub 图标链接

### 6.2 自动更新机制

#### 6.2.1 更新流程
1. GitHub Actions 每周一 UTC 00:00 触发
2. 运行更新脚本抓取 GitHub Trending
3. 将上周数据归档
4. 更新当前周数据
5. 自动提交并推送

#### 6.2.2 数据归档
- 每期抓取 20 个项目
- 自动归档到历史记录
- 支持查看往期热门

---

## 7. 部署方案

### 7.1 部署平台
- **首选**: Vercel (Next.js 官方推荐)
- **备选**: GitHub Pages / Netlify / Cloudflare Pages

### 7.2 部署流程
1. 代码推送到 GitHub
2. 自动触发构建部署
3. 自定义域名配置

### 7.3 构建配置
```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};
```

---

## 8. 开发计划

### Phase 1: 基础搭建 ✅
- [x] 项目结构搭建
- [x] 基础配置 (Next.js, Tailwind, TypeScript)
- [x] 主题系统实现
- [x] 首页布局

### Phase 2: 核心功能 ✅
- [x] 文章系统完善
- [x] Markdown 渲染
- [x] 代码高亮
- [x] 响应式优化

### Phase 3: Skills 库 ✅
- [x] Skills 数据架构
- [x] Skills 列表页
- [x] Skills 详情页
- [x] 自动更新机制
- [x] 往期热门归档
- [x] 分页功能

### Phase 4: 高级功能
- [ ] 组件实验室完善
- [ ] 搜索功能
- [ ] 动画优化
- [ ] 收藏功能

### Phase 5: 优化迭代
- [ ] SEO 优化
- [ ] 性能优化
- [ ] 内容填充
- [ ] 测试覆盖

---

## 9. 注意事项

### 9.1 性能要求
- 首屏加载 < 3s
- Lighthouse 评分 > 90
- 支持静态导出

### 9.2 兼容性
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 响应式设计 (Mobile, Tablet, Desktop)
- 无障碍支持

### 9.3 维护要求
- 每周更新 GitHub 热门数据
- 定期更新依赖包
- 持续优化性能

---

## 10. 附录

### 10.1 相关文档
- [技术方案](./技术方案.md)
- [代码审查报告](./代码审查报告.md)
- [API 接口文档](./API接口文档.md)

### 10.2 关键文件
| 文件 | 用途 |
|------|------|
| `src/lib/skills-data.ts` | Skills 数据定义 |
| `src/app/skills/page.tsx` | Skills 首页 |
| `scripts/update-github-trending.ts` | 自动更新脚本 |
| `.github/workflows/update-trending.yml` | CI/CD 工作流 |

---

*文档版本: v2.0*
*更新日期: 2026-04-19*
*作者: Flornox*
