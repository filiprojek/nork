#!/usr/bin/env node
const inquirer = require('inquirer')
const path = require('path')

const main = async () => {
    if (process.argv[ 2 ] == 'create')
    {
        const data = {}
        const questions = [
            {
                type: 'input',
                name: 'project_name',
                message: 'Enter project name:',
            },
            {
                type: 'list',
                message: "Pick the technology you're using:",
                name: 'lang',
                choices: [
                    { name: 'Typescript', value: 'ts' },
                    { name: 'Javascript', value: 'js' },
                ],
            },
            {
                type: 'input',
                name: 'author',
                message: 'Enter your name:',
            },
        ]

        if (process.argv[ 3 ]) {
            questions.shift()
        }

        let answers = await inquirer.prompt(questions)
        data.project_name = answers.project_name ? answers.project_name : process.argv[3]
		data.lang = answers.lang
        data.author = answers.author
        
        console.log(data)
    }

    if (process.argv[ 2 ] == 'make')
    {
        const component = process.argv[ 3 ]
        
    }
}
main()

