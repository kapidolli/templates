# Templates

This repo is build to create projects from template with already set up configurations

## Install

Install the template cli using npm 
```bash
npm i -g project-template-cli
```

## Configure

Configure the template cli with the commands
```bash
template config -o
```
and change the json object to 
```json 
{
  "githubToken": "",
  "gitlabToken": "",
  "localTemplates": [],
  "remoteTemplates": [
    {
      "owner": "kapidolli",
      "repo": "templates",
      "path": "",
      "type": "github"
    }
  ],
  "npmDependeniesInstall": {
    "auto": true,
    "silent": false,
    "manager": "npm"
  },
  "git": {
    "init": true,
    "firstCommit": ""
  },
  "editorOpen": {
    "name": "vscode",
    "command": "code",
    "enable": false
  }
}
```
## Run
Navigate to a specific folder location where you want to create project using the template and from a cli run
```bash
template init
```
