# Nork
Simple node.js tool that extends express projects.

 - [About](#about)
 - [Installation](#installation)
 - [How to use](#how-to-use)

## About
The point of this tool is to add into express some feel of php framework Laravel. Primarily get simply express app into MVC architecture

## Installation
```
npm install -g nork
```
Tohle nainstaluje nork globálně. Pokud byste chtěli nainstalovat nork pouze pro jeden projekt, je možné ho nainstalovat i lokálně. 
 Pro lokální instalaci:
 ```
 npm install nork
```
## How to use
```
Usage: nork <command> [options]

Options:
  -v, --version                          output the version number
  -h, --help                             output usage information

Commands:
  create [app-name]                      create a new project
  make:controller                        create a new controller
  make:middleware                        create a new middleware
  make:model                             create a new model
  make:route                             create a new route
  make:test                              create a new test
  make:view                              create a new view
  setup                                  set up an existing project for nork
```
