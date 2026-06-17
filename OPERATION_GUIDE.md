# CI/CD 演示项目 — 完整操作规程

> 项目已在本地准备好：`ci-cd-demo/`
> GitHub MCP 无仓库创建权限，需手动创建仓库后推送。

---

## 第一步：在 GitHub 创建远程仓库

1. 打开浏览器访问：**https://github.com/new**
2. Repository name 填：**ci-cd-demo**
3. 保持 **Public**（公开）
4. **不要勾选** "Add a README file"（本地已有了）
5. 点击 **Create repository** 创建

---

## 第二步：推送本地代码到 GitHub

创建完仓库后，GitHub 会跳转到一个页面，页面上有一个"push an existing repository"区域，里面显示了命令行指令。

就在你本地项目的终端里依次执行：

```bash
# 1. 进入项目目录
cd C:\Users\magic\WorkBuddy\2026-06-17-09-59-29\ci-cd-demo

# 2. 添加远程仓库地址（把下面这行换成你自己的地址）
git remote add origin https://github.com/magicrain1979/ci-cd-demo.git

# 3. 推送到 GitHub
git push -u origin master
```

推送成功后，刷新 GitHub 页面就能看到所有文件了。

---

## 第三步：查看 CI/CD 流水线运行

代码 push 上去的那一刻，GitHub Actions 已经自动触发了！

- 查看地址：**https://github.com/magicrain1979/ci-cd-demo/actions**
- 点击最新的 workflow run，可以看到每一步的实时日志
- 绿色 ✓ = 全部通过，红色 ✕ = 有失败

流水线做的事情（对应 `.github/workflows/ci.yml`）：

```
Checkout Code → Setup Node.js → npm install → Lint → Build → Test → 上传报告
```

---

## 第四步：修改代码，看流水线重新跑

**正常操作（可以看到绿色 ✓）：**

1. 打开 `src/index.test.js`，随便改个测试用例的值（比如把 `expect(add(2, 3)).toBe(5)` 改成 `toBe(6)`）
2. 保存文件
3. 提交并推送：
   ```bash
   git add .
   git commit -m "test: 修改测试用例"
   git push
   ```
4. 去 **https://github.com/magicrain1979/ci-cd-demo/actions** 看新的流水线 —— 这次会**红色失败**，因为测试跑了但结果不对

**修复后推送：**

5. 把刚才改错的值改回来，再次 commit + push
6. 流水线恢复绿色 ✓

---

## 第五步：项目的所有文件

都在这个目录下：
```
C:\Users\magic\WorkBuddy\2026-06-17-09-59-29\ci-cd-demo\
```

| 文件 | 说明 |
|---|---|
| `.github/workflows/ci.yml` | **核心**：CI/CD 流水线配置，GitHub Actions 就靠这个文件工作 |
| `src/index.js` | 业务代码（一个简单的加减乘除计算器） |
| `src/index.test.js` | 测试代码（Jest），流水线会跑它 |
| `package.json` | 项目配置，定义了 npm install、npm test 等命令 |
| `.eslintrc.json` | 代码风格检查规则 |
| `README.md` | 项目说明 |

---

## 关键网址汇总

| 用途 | 地址 |
|---|---|
| 创建 GitHub 仓库 | https://github.com/new |
| 你的仓库首页 | https://github.com/magicrain1979/ci-cd-demo |
| CI/CD 运行日志 | https://github.com/magicrain1979/ci-cd-demo/actions |
| 你的 GitHub 主页 | https://github.com/magicrain1979 |
| GitHub Actions 文档 | https://docs.github.com/actions |

---

## 核心概念一句话总结

> **把 `.github/workflows/ci.yml` 写好，push 上去，GitHub 就免费帮你跑构建、测试、检查。失败就拦截，通过就放行。**

这就是 CI/CD 最基本的玩法。
