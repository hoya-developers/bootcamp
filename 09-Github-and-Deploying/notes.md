## 09-Github-and-Deploying

[Slides](https://docs.google.com/presentation/d/1vFVetodVutZaHnhp8K8UhxaKRg3traj7ZyZrantsP4o/edit?usp=sharing)

### Git Terminology Review

- **Repository** - a folder that is being tracked by Git
- **Commit** - a "snapshot" of the repository at a certain point in time. "This is what the repository looked like at this point in time"
- **Branch** - a separate line of development. You can have multiple branches in a repository, each with different commits. You can switch between branches.
- **Remote** - a repository that is not on your computer. This is usually a repository on Github or Gitlab.
- **Staging Area** - a place where you can put files before you commit them. This allows you to commit only certain files, and you can see what you are about to commit.
- **Pull Request** - a request to merge changes from one branch into another. This is how you make changes to a repository on Github.
- **Clone** - to copy a repository from a remote to your local machine

### Some additional Git commands

Clone a repository:

- `git clone <url>` - clones a repository from the url `<url>`. This will create a new folder with the repository in it.

Working with remotes:

- `git remote add origin <url>` - adds a remote repository with the name `origin` and the url `<url>`
- `git push origin <branchname>` - pushes the branch `<branchname>` to the remote repository. Note: you may get an error if the remote repository doesn't have this branch (it will tell you to include the --set-upstream flag.)
- `git pull origin <branchname>` - pulls the branch `<branchname>` from the remote repository

### Git/GitHub Exercise

1. Clone this repository to your local machine: https://github.com/hoya-developers/f24-bootcamp-github-exercise.git
2. Create a new branch with the name `<yourname>-changes`
3. Add a file to the repository called `<yourname>.txt` with some text in it - whatever you want!
4. Commit the file
5. Push the branch to the remote repository
6. Create a pull request to merge your branch into the main branch

### Deploying a Website using Github Pages

Github Pages is a free service that allows you to host a website directly from a Github repository. This is a great way to host a personal website, a portfolio, or a project website.

To deploy a website using Github Pages:

1. Navigate to the folder that contains your website files from the mini project. This should include an `index.html` file and any other files (like CSS or images) that are needed for your website.
2. Run `git status` to check the status of your repository. If you get a 'fatal: not a git repository' error, you need to initialize a new git repository in this folder using `git init`.
3. Add all the files to the staging area using `git add .`
4. Commit the files using `git commit -m "Initial commit"`
5. Create a new repository on Github.
6. Add the remote repository to your local repository using `git remote add origin <url>`. Github will provide you the code to do this.
7. Push the files to the remote repository.
8. Navigate to the repository on Github and go to the settings tab.
9. Scroll down to the Github Pages section.
10. Select the branch you want to deploy from (usually the main branch) and the folder that contains your website files.
11. Click save and your website will be live at the URL provided! It might take a few minutes to update.
