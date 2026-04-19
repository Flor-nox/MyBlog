# 花夜扁舟个人博客 (Flornox Blog)

一个基于 Next.js + TypeScript + Tailwind CSS 构建的个人技术博客。

## 特性

- 🎨 **鸣潮主题** - 独特的二次元风格设计
- 🌙 **深色模式** - 支持多种主题切换
- 📚 **AI Skills 库** - 收集实战验证的 AI 技能和 GitHub 热门项目
- 📝 **Markdown 支持** - 文章使用 Markdown 编写
- ⚡ **静态导出** - 高性能静态站点生成
- 📱 **响应式设计** - 完美适配各种设备

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **动画**: Framer Motion
- **图标**: Lucide React

## 项目结构

```
MyBolg/
├── frontend/          # 前端项目
│   ├── src/
│   │   ├── app/      # Next.js 页面
│   │   ├── components/ # React 组件
│   │   └── lib/      # 工具函数和数据
│   ├── content/      # Markdown 内容
│   └── public/       # 静态资源
├── words/            # 项目文档
└── content/          # 博客文章
```

## 本地开发

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署

项目已配置 Vercel 和 GitHub Pages 部署：

- **Vercel**: 自动部署，访问 `vercel.json` 查看配置
- **GitHub Pages**: 通过 GitHub Actions 自动部署

## Skills 库

博客包含一个 AI Skills 库，展示：

- **实战技能** - 项目中实际使用的 Skill
- **GitHub 热门** - 每周更新的热门 AI 开源项目
- **往期归档** - 历史热门项目记录

## 文档

- [PRD](./words/PRD.md) - 产品需求文档
- [技术方案](./words/技术方案.md) - 技术架构说明
- [代码审查报告](./words/代码审查报告.md) - 代码质量报告
- [API 接口文档](./words/API接口文档.md) - 数据接口说明

## 许可证

MIT License

---

Made with ❤️ by Flor-nox
