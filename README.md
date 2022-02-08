# Templates

This repo is build to create projects from template with already set up configurations

## To use

Install the template cli using npm 
```bash
npm i -g project-template-cli
```

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
and run `template init`
