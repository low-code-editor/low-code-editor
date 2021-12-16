# 贡献指南

嗨！我很高兴您有兴趣为此项目做贡献。 在您的贡献代码之前，请务必花一点时间通读以下准则：

- [问题报告准则](#问题报告准则)
- [贡献代码准则](#贡献代码准则)

## 问题报告准则

- 始终使用 [issue 模版](https://github.com/vuejs/vue/blob/main/.github/ISSUE_TEMPLATE/issue_template.md) 中的清单创建新问题（通常 Maintainer 已经为您配置完成，在创建 issue 页面输入标题时可选择模版）

## 贡献代码准则

#### Fork 方式

1. Fork foo/bar 项目到您的 github 库

2. 克隆您 fork 的代码仓库到您本地

```bash
git clone https://git.iflytek.com/[username]/bar.git
```

3. 添加 foo/bar 仓库为 upstream 仓库

```bash
git remote add upstream https://git.iflytek.com/foo/bar.git

git remote -v
    origin	  https://git.iflytek.com/[username]/bar.git (fetch)
    origin	  https://git.iflytek.com/[username]/bar.git (push)
    upstream	https://git.iflytek.com/foo/bar.git (fetch)
    upstream	https://git.iflytek.com/foo/bar.git (push)

git fetch origin
git fetch upstream
```

4. 基于 main branch 创建一个新的分支进行开发

```bash
# 从远程仓库拉取分支到本地，此分支随时可以同步 upstream 远程库最新代码
git checkout -b upstream-main upstream/main

# 从本地分支创建开发分支，通常以 issue 号作为本地开发分支名。请保证该分支上的修改仅和 issue 相关，并尽量细化，做到一个分支只修改一件事，一个 PR 只修改一件事。
git checkout -b issue-123456
```

5. Rebase 开发分支

您修改的时候，可能别人的修改已经提交并被合并，此时可能会有冲突，这里请使用rebase命令进行合并解决，主要有2个好处：

  a) 您的提交记录将会非常优雅，不会出现 Merge xxxx branch 等字样<br>
  b) rebase 后您分支的提交日志也是一条单链，基本不会出现各种分支交错的情况，回查时更轻松

```bash
git fetch upstream
git checkout issue-123456
git rebase -i upstream/main
```

6. 将您开发完成 rebase 后的分支，上传到您 fork 的 origin 远程仓库

```bash
# 如果通过 rebase 合并了 commit 需要加上 -f 参数强行覆盖提交
git push origin issue-123456
```

7. 按照 [PR 模版](https://github.com/vuejs/vue/blob/main/.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) 中的清单创建 PR（通常 Maintainer 已经为您配置完成，在创建 PR 页面输入标题时可选择模版）

8. 如果没有问题，维护人员将会把您的修改合并到 main 分支中

#### Merge 方式

1. Clone 代码仓库到您本地

```bash
git clone https://git.iflytek.com/foo/bar.git
```

2. 切换到维护人员为您创建的开发分支，通常命名为 dev-*

```bash
git fetch # git fetch origin
git checkout dev-next-release # git checkout -b dev-next-release origin/dev-next-release
```

3. 在本地分支上编写相关代码

4. Rebase 开发分支

您修改的时候，可能别人的修改已经提交并被合并，这里请使用rebase命令进行合并解决，主要有2个好处：

  a) 您的提交记录将会非常优雅，不会出现 Merge xxxx branch 等字样<br>
  b) rebase 后您分支的提交日志也是一条单链，基本不会出现各种分支交错的情况，回查时更轻松

```bash
git fetch # git fetch origin
git rebase -i origin/dev-next-release # 本地分支和远程分支差异 commits 进行操作
```

5. 将您 rebase 后的分支，上传到您远程的仓库

```bash
git push origin dev-next-release
```

6. 按照 [PR 模版](https://github.com/vuejs/vue/blob/main/.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) 中的清单创建 PR（通常 Maintainer 已经为您配置完成，在创建 PR 页面输入标题时可选择模版）

7. 如果没有问题，维护人员将会把您的修改合并到 main 分支中
