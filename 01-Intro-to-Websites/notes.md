## 01 Intro to Websites

#### [Class Slides] https://docs.google.com/presentation/d/12_Tc78IVTKkzgWUnjLySDej1MJJjSFYrKJtY0U3Rjuw/edit?usp=sharing

Welcome back! We hope you enjoyed our launch event last Thursday and are excited to learn more!

### Git & GitHub Setup

#### What is Git?

Git is a version control system (VCS) that allows you to work on coding projects and save your changes in an organized, safe manner. It allows teams to code collaboratively without messing up what others are working on.

A **repository (or repo)** is a folder containing your code. Think of it as a directory that can contain code, images, folders, etc.
Generally, a repository contains all of the files of single coding project.

#### GitHub Setup

If you're reading this, it means you've successfully created a github account and are looking through the course repo. Nice work!

Now, [click here](https://education.github.com/discount_requests/application) to apply for GitHub's student developer pack, which will grant free access to additonal GitHub features like GitHub CoPilot (which we will be using throughout the course).

Note: This approval process usually takes 2-3 days.

#### Git Setup

For Windows:

1. Follow this link to download the Windows installer. https://git-scm.com/download/win
2. Complete the setup instructions as directed.

For Mac:

1. Open the terminal and run the command `git --version`. If you do not have git already installed, this will prompt you to install the xcode command line tools.
2. Follow the instructions provided in the installer.

After following the installation guide, run `git --version` to confirm you've properly installed git.

### Figma Setup

#### What is Figma?

Figma is a design prototyping tool that lets you drag and drop shapes, images, etc. to get a better idea of what you want to eventually code.
Think of it as a cross between powerpoint and photoshop tailored to developing websites and apps.

#### Set up Figma

1. Create a Figma account using your personal email by [clicking here](https://www.figma.com/signup) if you don't already have an account.
2. Verify your new account as an education account by [clicking here](https://www.figma.com/education/).
3. Install Figma for Desktop by [clicking here](https://www.figma.com/downloads/). Once downloaded, follow the installation instructions provided.

### Setup VSCode

#### What is VSCode?

VSCode is the most popular text editor used for a wide variety of development projects.

#### Installation Instructions

1. For Mac & Windows users, [click here](https://code.visualstudio.com/download) to download the latest VSCode version.
2. Follow the installation prompts, keeping all defaults selected.

#### Useful VSCode Plugins

- **Prettier** is one of the most commonly used code formatters. Every time you save your file, it will automatically format your code to be readable, evenly spaced, etc.
- **Live Server** launches a preview server of the current folder you are working in. It is very helpful when working on static websites and you want to see your changes updated live in the browser without refreshing.
- **Github Copilot** is an AI pair-programmer that will generate suggestions for what to type. It is _extremely_ powerful and will be incredibly helpful throughout this course.
- **Material Theme** (Optional) VSCode allows you to customize your IDE editor. For this course, we'll use the Material Theme, but feel free to explore and pick whichever theme suits you best.
- **NPM Intellisense** Helps to autosuggest javascript imports (will be useful when we get to the Javascript portion of the course)

### Setup NodeJS

#### What is NodeJS?

Node is a Javascript runtime environment that allows us to write and compile javascript outside of a browser - like on a server! In fact, its built on the same V8 engine that Chrome uses.

We'll make extensive use of Node throughout the course, both in compiling React apps as well as writing our own mini back-end in Node.

#### Installing Node

1. For Mac & Windows users, [click here](https://nodejs.org/en/download) to be redirected to the official Node installer. Download the LTS version for your operating system.
2. Follow the default installation instructions given by the installation prompt.

After following the installation guide, run `node -v` to confirm you've properly installed Node.
