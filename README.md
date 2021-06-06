# TeamView

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Installation](#installation)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Usage](#usage)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[License](#license)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#contributing)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tests](#tests)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)<br/>

## Description

TeamView is a Node.js command-line application that prompts for information about team members on a software engineering team and then generates an HTML webpage that displays summaries for each team member. You can see 

- this app and its unit testing in action in [this video](https://drive.google.com/file/d/1pXUBh4TZovhNx-MBD-pnDCqFcWd6Y5DL/view?usp=sharing).
- a generated TeamView at [./dist/index.html](./dist/index.html).
- a sample HTML file that's been generated by the TeamView app at [./resources/sample_index.html](./resources/sample_index.html).

The TeamView application uses the following technologies:

- Node.js (the start command is 'node index.js')
- Jest for unit testing
- Inquirer to prompt for information (includes validation of input data)
- Node.js's file system (fs) to write to an HTML file (/dist/index.html)
- Bootstrap layout and colors

The code includes the Manager, Engineer, and Intern classes, which are all subclasses of the Employee class and inherit its properties and methods. They include their own properties and methods as well, adhering to the instructions in the readme file for this assignment: 

```md
The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`
* `id`
* `email`
* `getName()`
* `getId()`
* `getEmail()`
* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`
* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username
* `getGithub()`
* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`
* `getSchool()`
* `getRole()`&mdash;overridden to return `'Intern'`
```

## Installation

To install, clone this repository and then enter the following command in the root directory for the project:

  npm install    

This will install the Inquire package, which this app uses to get user input, and the Jest package, which is used for unit testing.

## Usage

To run, enter the following at the command line:

  node index.js

## License

The TeamView project is covered under The MIT License. Click the license badge below for information on this license:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

In general, outside contributions are not being accepted since this is a UCD Coding Bootcamp assignment. 

## Tests

To test, use the following command:

  npm run test

## Questions
Send questions to mjlinder218@gmail.com. 
For more information about the developer, see https://github.com/mlin901.