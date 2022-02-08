# nest-ssr-redis-firebase

This template is for creating Angular project with all things set up using SSR based on NEST.js, redis for data and firebase for authentication

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

