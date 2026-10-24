### check changes and repo status:
- git status => show changes staged and untracked file
- git status -sb => show status with branch information
- git diff => show unstaged changes
- git diff --staged => show staged changes
- git diff file.js => shows unstaged changes in one
- git show => display the lates commit and its changes
- git ls-files => lists tracked files


### pull,push,fetch and sync with github
- git fetch => Downloads remote updates without integrating them into your current branch
- git fetch origin => fetches updates from origin
- git pull fetches updates and integrates them into your current branch
- git push => Uploads local commits to the configured upstream
- git push -u origin feature/auth => Pushes a branch and configures its upstream
- git push origin main => Pushes local main to remote main
- git remote -v => Shows remote URLs



### fetch and pull:
- Suppose your teammate pushed new code to GitHub. You download the updates and inspect incoming commits without integrating them into your current branch.

- git fetch origin
- git log --oneline HEAD..origin/main



- Then, if you want to integrate them into your local main:
- git switch main
- git pull --ff-only origin main



### merge , rebase and resolve conflicts
- merge branches:
- git switch main
- git git merge feature/auth


- git merge --no-ff feature/auth
- git merge --abort 
--no-ff forces a merge commit when possible.
--abort attempts to cancel an in-progress merge and return to the pre-merge state.



### rebase a feature branch: 
- git switch feaure/auth
- git fetch origin
- git rebase origin/main


- Rebase replays your branch's commits on top of the updated base, creating new commit hashes.

### if conflicts occurs:
- git status
- edit conflicted files
- git add <resolved-file>
- git rebase --continue

### to cancel the rebase
- git rebase --abort




### undo uncommited changes:
- git restore app.js
- git restore .

- to unstages a file but keep its changes
- git restore --staged app.js => this removes the file from the staging area while preserving the working copy.



### view commit history and compare version:
git log
git log --oneline
git log --oneline --graph --all
git log -5
git log --author="Your Name"
git log --since="1 week ago"
git log -- src/routes/user.js

git show HEAD
git show HEAD~1
git diff main..feature/auth
git diff main...feature/auth

git log --oneline displays compact commit history.
git log --oneline --graph --all visualizes branches and commits.
git show HEAD~1 inspects the commit before HEAD.
git diff main..feature/auth compares the two branch tips' file trees.
git diff main...feature/auth compares the merge base of the branches against the feature branch tip. This is often useful when reviewing a feature's changes against its base.


### cherry pick - take commit from another branch
- Suppose a bug fix exists on another branch, but you don't want to merge that entire branch.
- git switch main
- git cherry-pick <commit-hash>


