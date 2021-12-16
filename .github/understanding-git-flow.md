# 认识 Git Flow

## Git Flow 是什么？

Git Flow 是优秀的团队轻量级**合作方式**，基于 Branch 共同解决问题，提出想法并在过程中互相学习的**工作流**。

## Create a branch

从事一个项目时，您将拥有许多不同的 features、ideas 和 bugs。

项目中 Create a branch，就是在创建尝试环境。您在尝试环境中所做的更改不会影响 main branch，因此您可以自由地进行试验和提交更改，因为您可以知道当前环境不会被合并，**直到 Maintainer 审核为止**，这是安全的。

#### ProTip

Branch 是 Git 中的核心概念，整个 Git flow 都以此为基础。 **只有一条规则：main branch 中的任何内容始终都是可部署** 的。

因此，在处理 feature 或 fix 时，要从 main branch 之外 Create a branch 是非常重要的。您的分支名称应该是描述性的（例如，refactor-authentication, user-content-cache-key, make-retina-avatars），以便其他人可以从名称中看到正在处理的内容。

## Add commits

创建分支后，就该开始进行更改了。 无论何时添加，编辑或删除文件，都在进行 Commit，并将其添加到分支中。 添加 Commit 的过程会跟踪您在功能分支上工作的进度。

Commits 还会为您的工作创建一个透明的历史记录，其他人可以遵循该历史记录来了解您的工作以及原因。 每个提交都有一个关联的提交消息，该消息是说明为什么进行特定更改的说明。此外，每次提交都被视为一个单独的变更单元。**如果发现错误或决定朝其他方向前进，则可以回滚更改**。

#### ProTip

Commit messages 非常重要，特别是因为 Git 会跟踪您的更改，然后将它们显示为提交（一旦将其推送到服务器）。 通过编写清晰的 commit messages，您可以使其他人更容易跟进并提供反馈。

Nodejs 研发人员建议使用 [Commitlint](https://commitlint.js.org) 和 [Husky](https://typicode.github.io/husky) 来管理和检查提交消息。

## Open a Pull Request

Pull Request 引发有关 Commit 的讨论，由于它与基础 Git 存储库紧密集成，任何人都可以确切的看到要合并的更改

您可以在开发过程中的任何时候打开 Pull Requests 例如：

- 当您陷入困境并需要帮助或建议时
- 当您准备好让他人查看您的工作时

#### ProTip

Fork a repo 可以帮助您创建个人尝试环境，您随时可以用仅包含自己的 Changes 代码 Open a Pull Request 合并到 main Branch。而不会像 Create a branch 那样等待其他人的代码稳定。

通过在 Pull Requests 消息中使用 @user 系统，您可以要求特定人员或团队提供反馈。

## Discuss and review your code

打开 Pull Request 后，审阅您的 Changes 的 Maintainer/Team 可能会有疑问或意见。 可能是编码风格与项目指南不符，缺少单元测试，或者看起来一切都很好，并且井井有条。Pull Requests **鼓励和捕获这种类型的对话**。

您还可以根据有关提交的讨论和反馈中直接把修改推送到分支。如果有人评论您忘记做某事，或者代码中有错误，您可以在 branch 中对其进行 fix，并 push 更改。Github 将在统一的 Pull Request 视图中显示您的新提交以及您可能收到的任何其他反馈。

#### ProTip

GitHub 结合了用于格式化文字的语法，称为 [GitHub Flavored Markdown](https://github.github.com/gfm/)，具有一些独特的写作功能。例如，您可以引用项目中的问题，提交，团队成员，甚至整个团队。 GFM会将引用转换为链接，以便您可以在它们之间进行导航。使用＃123 引用问题将把输出格式化为带有文本 ＃123 的发布编号123的链接。

## Deploy

您可以随时从 Branch 部署到研发环境进行测试

一旦 Maintainer 审核完您的 Pull Requests ，您可以从 Branch 部署到测试环境中进行最终测试。如果是 Branch 引起了问题，您可以用现有的 main branch 回滚部署恢复测试环境。

#### ProTip

测试环境中通过测试，需要升级版本号，例如：[Standard Version](https://github.com/conventional-changelog/standard-version) 可以帮助前端团队自动完成 `升级版本号` `创建 Tag` `更新 CHANGELOG.md` 等工作。

## Merge

现在您的 Changes 已在测试环境中得到验证，是时候让 Maintainer **审核通过 MR** 将代码合并到 main branch 中，好让测试人员在测试环境中验收。

#### ProTip

合并后，Pull Requests 将保留代码历史更改的记录。 因为它们是可搜索的，可以让任何人回到过去，了解做出决定的原因和方式。
