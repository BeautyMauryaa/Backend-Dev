# Git Interview Questions and Answers

### 1. What is Git?

Git is a distributed version control system used to track changes in source code, maintain project history, and enable multiple developers to collaborate on the same project.

### 2. What is the difference between Git and GitHub?

Git is a version control system that runs locally and tracks code changes. GitHub is a cloud-based platform that hosts Git repositories and provides collaboration features such as pull requests, code reviews, issues, and project management.

### 3. What is the difference between `git commit` and `git push`?

`git commit` saves staged changes as a commit in the local repository. `git push` uploads local commits to a remote repository, such as GitHub.

### 4. What is the difference between `git fetch` and `git pull`?

`git fetch` downloads updates from a remote repository without integrating them into the current branch. `git pull` fetches remote updates and integrates them into the current branch through a merge or rebase, depending on the configuration and command used.

### 5. What is the difference between `git merge` and `git rebase`?

`git merge` integrates changes from one branch into another while preserving the existing branch history. It may create a merge commit.

`git rebase` replays commits from one branch onto another base, creating new commit hashes and generally producing a more linear history.

### 6. What is the difference between `git reset` and `git revert`?

`git reset` moves the current branch reference to another commit and can also change the staging area or working directory, depending on the option used.

`git revert` creates a new commit that reverses the changes introduced by an earlier commit.

For shared branches, `git revert` is generally safer because it preserves existing commit history.

### 7. What is HEAD in Git?

`HEAD` is a reference to the currently checked-out commit. In a normal branch checkout, it points symbolically to the current branch, which points to the latest commit on that branch.

### 8. What is a merge conflict in Git?

A merge conflict occurs when Git cannot automatically reconcile changes from different branches, such as when both branches modify the same part of a file.

To resolve a conflict, inspect the affected files, choose the correct changes, remove conflict markers, test the code, stage the resolved files, and complete the merge or rebase.

### 9. What is a detached HEAD in Git?

A detached HEAD state occurs when HEAD points directly to a commit rather than a branch. You can inspect code and even create commits in this state, but those commits may become difficult to find if no branch or reference retains them.

To preserve work, create a branch with `git switch -c branch-name`.

### 10. How do you safely undo a commit that has already been pushed?

Use `git revert` to create a new commit that reverses the changes, then push the new commit.

Example:

```bash
git revert <commit-hash>
git push
```

This is generally preferable for shared branches because it doesn't rewrite the existing published history.

### 11. What is a pull request (PR)?

A pull request is a collaboration feature provided by platforms such as GitHub. It allows developers to propose merging changes from one branch into another, review code, discuss improvements, run automated checks, and approve changes before merging.

### 12. What is the difference between a local branch and a remote-tracking branch?

A local branch is a branch in your local repository that you can work on and commit to.

A remote-tracking branch, such as `origin/main`, records the state of a branch as last observed on the remote. It is updated through commands such as `git fetch`.

### 13. What is the staging area in Git?

The staging area, also called the index, is where you select changes to include in your next commit. The `git add` command stages changes, and `git commit` records the staged snapshot.

### 14. What is the difference between `git restore` and `git reset`?

`git restore` is primarily used to restore file contents in the working directory or staging area.

`git reset` moves the current branch reference and, depending on the mode, can also update the staging area and working directory.

### 15. What is `git stash`?

`git stash` temporarily saves eligible uncommitted changes so you can switch tasks or branches without committing unfinished work.

Common commands:

```bash
git stash
git stash list
git stash apply
git stash pop
```

`git stash apply` reapplies changes but keeps the stash entry. `git stash pop` reapplies changes and normally removes the entry if the application succeeds.

### 16. What is `git cherry-pick`?

`git cherry-pick` applies the changes introduced by a specific commit onto the current branch, creating a new commit.

It is useful when you need a particular bug fix from another branch without merging the entire branch.

### 17. What is `git reflog`?

`git reflog` records recent updates to local references such as HEAD and branch pointers. It can help locate previous commits after operations such as resets, rebases, or branch changes.

### 18. What is `.gitignore`?

`.gitignore` is a file containing patterns that tell Git which untracked files and directories to ignore. It is commonly used for dependencies, generated files, logs, and environment files.

For example:

```gitignore
node_modules/
.env
dist/
coverage/
*.log
```

Adding a file to `.gitignore` does not automatically stop tracking a file that Git already tracks.

### 19. What is the difference between a fast-forward merge and a three-way merge?

A fast-forward merge moves the current branch pointer forward when the current branch has no new commits diverging from the branch being merged.

A three-way merge uses the common ancestor and the two branch tips to combine changes. It may create a merge commit.

### 20. What is the difference between `git add .` and `git add -A`?

`git add .` stages additions, modifications, and deletions under the current directory.

`git add -A` stages additions, modifications, and deletions across the working tree, regardless of the current subdirectory.

### 21. What is the difference between `git reset --soft`, `git reset --mixed`, and `git reset --hard`?

- `--soft`: Moves the branch reference but keeps changes staged.
- `--mixed`: Moves the branch reference and resets the staging area, leaving working files unchanged by the reset.
- `--hard`: Moves the branch reference and resets the staging area and tracked working files to the target commit. Uncommitted changes can be lost.

### 22. What is the difference between a lightweight tag and an annotated tag?

A lightweight tag is a simple reference to a commit.

An annotated tag is a separate Git object containing metadata such as the tagger, date, message, and optionally a cryptographic signature. Annotated tags are commonly preferred for releases.

### 23. What is `git bisect`?

`git bisect` uses binary search to identify the commit that introduced a bug. You mark a known-good commit and a known-bad commit, then test the intermediate commits until Git narrows down the likely source of the regression.

### 24. What is the difference between `git clone` and `git init`?

`git clone` creates a local copy of an existing repository, including its history and configured remote.

`git init` initializes a new local Git repository in a directory.

### 25. How do you resolve a merge conflict during a rebase?

First, inspect the conflicted files using `git status`. Edit the files to resolve the conflicts, remove the conflict markers, and stage the resolved files.

Then continue the rebase:

```bash
git add <resolved-file>
git rebase --continue
```

To cancel the rebase and return to its original state:

```bash
git rebase --abort
```

### 26. What is the difference between a fork and a clone?

A fork is a separate copy of a repository hosted under another account or organization on a platform such as GitHub.

A clone is a local copy of a repository on your computer.

Forking is commonly used when contributing to repositories you don't have permission to modify directly.

### 27. What is a bare repository in Git?

A bare repository contains Git version-control data without a checked-out working directory. It is commonly used as a central remote repository for collaboration.

### 28. What is the difference between `git diff` and `git diff --staged`?

`git diff` shows changes in the working directory that have not been staged.

`git diff --staged` shows changes that are staged for the next commit compared with the current commit.

### 29. How can you recover a commit after accidentally resetting a branch?

Use `git reflog` to find the previous commit reference, inspect the commit, and create a recovery branch if needed.

Example:

```bash
git reflog
git switch -c recovery-branch <commit-hash>
```

This creates a branch at the recovered commit without moving your existing branch.

### 30. What are the best practices for working with Git in a team?

- Create feature branches instead of working directly on shared branches.
- Write meaningful commit messages.
- Pull or fetch updates regularly.
- Review staged changes before committing.
- Use pull requests and code reviews.
- Resolve merge conflicts carefully and test the result.
- Never commit secrets, passwords, API keys, or `.env` files.
- Avoid rewriting published shared history without team agreement.
- Keep commits focused and use `.gitignore` appropriately.