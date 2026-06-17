# CI/CD Demo

一个完整的 CI/CD 流水线演示项目，使用 **GitHub Actions** 实现持续集成。

---

## 项目结构

```
ci-cd-demo/
├── .github/
│   └── workflows/
│       └── ci.yml          ← 核心：CI/CD 流水线配置
├── src/
│   ├── index.js            ← 业务代码（一个简单计算器）
│   └── index.test.js       ← 自动化测试（Jest）
├── package.json            ← 项目依赖和脚本
├── .eslintrc.json          ← 代码风格检查规则
└── .gitignore
```

## CI/CD 流水线做了什么？

```
git push → GitHub Actions 自动触发

1. 检出代码 (checkout)
2. 安装 Node.js 环境
3. npm install 装依赖
4. ESLint 代码风格检查
5. 项目构建
6. Jest 跑测试 + 生成覆盖率报告
7. 上传报告产物

任何一步失败 → 标记为红色 ×，通知开发者
全部通过 → 标记为绿色 ✓
```

## 本地运行

```bash
# 安装依赖
npm install

# 跑测试
npm test

# 代码检查
npm run lint

# 直接运行
npm start
```

## 亲自体验 CI/CD 流程

1. 把这个项目 push 到 GitHub
2. 打开仓库的 **Actions** 标签页
3. 你会看到流水线已经在自动运行了
4. 试着改一个源文件，再 push，观察变化
5. 试着写一个会失败的测试，看流水线如何拦截
