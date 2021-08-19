# Nork
Simple node.js tool that extends express projects.

 - [About](#about)
 - [Installation](#installation)
 - [How to use](#how-to-use)

## About
The point of this tool is to add to express some feeling of php framework Laravel. Primarily get simply express app into MVC architecture.

## Installation
```
npm install -g nork
```
This will install nork globally. If you would like to install nork for only one project, you can also install it locally. For local installation:
 ```
 npm install nork
```
## How to use
```
Usage: nork <command> [options]

Options:
  -v, --version                  output the version number
  -h, --help                     output usage information

Commands:
  create [app-name]              create a new project
  make controller [name]         create a new controller
  make middleware [name]         create a new middleware
  make model [name]              create a new model
  make route [name]              create a new route
  make test [name]               create a new test
  make view [name]               create a new view
  setup                          set up an existing project for nork
```
