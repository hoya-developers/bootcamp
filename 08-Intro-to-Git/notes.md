## 08-Intro-to-Git

[Slides](https://docs.google.com/presentation/d/1H7M6nECtk9-LosmJbtCMbxXBNYhU57WxJJRbzE2BkuM/edit?usp=sharing)

### What is Git?

Git is a version control system that is used to track changes to files.
It makes it easy to work on large projects with multiple people and save your work in a way that you can go back to previous versions.

### How to use?

There are many ways to use Git - we will cover two: the command line and Github Desktop. VS code also has a built-in Git feature.
All integrations of Git accomplish the same thing, but the way you interact with them is different.

Below are a list and description of the most useful Git commands (the ones that you actually need to know!)

### Git Terminology

- **Repository** - a folder that is being tracked by Git
- **Commit** - a "snapshot" of the repository at a certain point in time. "This is what the repository looked like at this point in time"
- **Branch** - a separate line of development. You can have multiple branches in a repository, each with different commits. You can switch between branches.
- **Remote** - a repository that is not on your computer. This is usually a repository on Github or Gitlab.
- **Staging Area** - a place where you can put files before you commit them. This allows you to commit only certain files, and you can see what you are about to commit.

### Git Commands You Should Know

- `git init` - initializes a new git repository in the current directory
- `git status` - shows the status of the repository. This includes what files have been changed, what files are in the staging area, and what branch you are on.

To make a commit:

- `git add <filename>` - adds a file to the staging area. Files must be added to the staging area before they can be committed.
- `git commit -m "message"` - commits the files in the staging area. The message should be a short description of what changes were made.

To work with branches:

- `git branch` - shows a list of branches in the repository. The branch with the asterisk next to it is the branch you are currently on.
- `git branch <branchname>` - creates a new branch with the name `<branchname>`
- `git checkout <branchname>` - switches to the branch `<branchname>`
