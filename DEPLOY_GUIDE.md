# GitHub Actions 自动部署指南

## 已配置的内容

项目已配置 GitHub Actions 工作流，文件位置：`.github/workflows/deploy.yml`

## 启用 GitHub Pages 步骤

### 1. 推送最新代码

在 Git Bash 中执行：

```bash
cd /e/workplace_ai/MyBolg

git add .

git commit -m "Update deploy workflow to support master branch"

git push origin master
```

### 2. 在 GitHub 上启用 Pages

1. 访问 https://github.com/Flor-nox/MyBlog/settings/pages
2. **Source** 选择："GitHub Actions"
3. 保存

### 3. 触发部署

推送代码后会自动触发部署，或者手动触发：

1. 访问 https://github.com/Flor-nox/MyBlog/actions
2. 点击 "Deploy to GitHub Pages"
3. 点击 "Run workflow"

### 4. 查看部署结果

- 部署完成后，访问 https://flor-nox.github.io/MyBlog/
- 在 Actions 页面查看部署日志

## 自动部署触发条件

- 每次推送到 `master` 或 `main` 分支
- 手动触发（在 Actions 页面点击 Run workflow）

## 部署流程

1. 检出代码
2. 安装 Node.js 依赖
3. 构建 Next.js 项目（生成静态文件到 `frontend/dist`）
4. 部署到 GitHub Pages

## 常见问题

### Q: 部署失败怎么办？
A: 访问 Actions 页面查看错误日志

### Q: 如何更新网站内容？
A: 修改代码后推送即可自动重新部署

### Q: 部署后页面样式丢失？
A: 检查 `next.config.mjs` 中的 `basePath` 配置

---

## 备选方案：Vercel 部署

如果 GitHub Pages 有问题，推荐使用 Vercel：

1. 访问 https://vercel.com/new
2. 导入 GitHub 仓库
3. 自动部署

Vercel 优势：
- 更快的部署速度
- 自动 HTTPS
- 全球 CDN
