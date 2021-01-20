const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title or Name for your project?"
        },
        {
            type: "input",
            name: "author",
            message: "What is the Author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project:"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
        },
        {
            type: "input",
            name: "installations",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "installNotes",
            message: "Is there any details the user needs in regard to the installation?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo? please write a detailed summary"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?",
        },
        {
            type: "input",
            name: "imgURL",
            message: "Please provide and image URL that shows some detail about the project",
        },
        {
            type: "input",
            name: "repo",
            message: "Please provide a URL link for your GitHub Reopsitory.",
        },
        {
            type: "input",
            name: "live",
            message: "Please provide a URL link for this project's GitHub Page or live site URL.",
        },
    ]);


function generateMD(data){
    let badge = "";
    if(data.license == "MIT"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
    }else if (data.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (data.license == "GPL 3.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
    }else if (data.license == "BSD 3"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
    }
    
    

return`# ${data.title}  
${badge}
${data.description}
[pageImage](${data.imgURL})
## Table of Contents:
* [Installation](#installation)
* [Summary](#summary)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
Notes About the Install: ${data.installNotes}
In order to install the necessary dependencies, open the console opem the project folder and run the following:
\`\`\`${data.installations}\`\`\`
### Summary:
You can find my project repository [Here](${data.repo})
The Live Page for my site is [Here](${data.live})
${data.usage}
### License:
This project is licensed under:
${data.license}
### Contributing:
${data.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.username}) or contact 
${data.author} at ${data.email}  
 `
}


questions()
.then((data) => writeFileAsync('generatedREADME.md', generateMD(data)))
    .then(() => console.log('Successfully created/wrote to generateReadMe.md'))
    .catch((err) => console.error(err));
    
