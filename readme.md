# Make Me Read

Utilizing the Node JS Inquirer Library we can generate a readMe.md using prompted questions from the computer terminal.
[YouTube Walkthrough Video](https://youtu.be/NqB2akz2az8)

## Table of Contents:
* [Installation](#installation)
* [Summary](#summary)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation

[Node JS](https://nodejs.org/en/download/) needs to be installed on your computer.

**DEPENDANCIES:**

In order to install the necessary dependencies, open the console/terminal, and get inside project folder. Verify that The file folder contains the package.json file. The file lets the initail installation know what additional/necessary libraies are needed to fun the program. Instal with the following comand:

```javascript
npm install
```

If the package.json file isn't availbe then verify that you have Node JS on your computer byt checking for the node version with the command:

```javascript
node -v
```

The response should be or simmilar:

```javascript
v15.2.0
```

From the project folder location us the command:

```javascript
npm init -y
```

This will create the package.json file.
Check the declared required files and install the acccordingly.
For Example"

If a required library is mentions in the JS file simply us the command:

```javascript
npm install inquirer
```

Once your libraries are installed you can run the file with the command:

```javascript
node index.js
```

## Usage:

Once the file has been run through Terminal the user will be prompted to ask some information about the project to build ou the project.

```javascript
const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
```

I used a template to fill in the informations I needed for the page badges.

```javascript
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
```

You can find my project repository [Here](https://github.com/gcvarela21/Make_Me_Read/)

### License:
This project is licensed under:
MIT
### Contributing:
There are no contributions at this time
### Tests:
In order to test open the console and run the following:
```javascript
there are no tests at this time
```
### Questions:
If you have any questions contact me on [GitHub](https://github.com/gcvarela21) or contact 
Gloria Varela at varela_gloria@yahoo.com  