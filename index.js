//writing file
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// importing generate function 
const generateHtml = require('./src/layoutTemplate');

teamMembers = [];


  function generateTeam() {
    inquirer.prompt([{

      name: 'addEmployeePrompt',
      type: 'list',
      message: 'Add an employee to build team.',
      choices: ['Manager', 'Engineer', 'Intern', 'Finish building team.']

    }]

  function manager() {
    inquirer.prompt ([
    
    {
      name: 'managerName',
      type: 'input',
      message: 'Enter managers name.',
    },

    {
      name: 'managerId',
      type: 'number',
      message: 'Enter managers employee ID number.'
    },

    {
      name: 'managerEmail',
      type: 'input',
      message: 'Enter managers email address.'
    },

    {
      name: 'managerOfficeNumber',
      type: 'number',
      message: 'Enter managers office number.'
    }

    ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    generateTeam();
    });

  }


  function engineer() {
    inquirer.prompt([
      
      {
        name: 'engineerName',
        type: 'input',
        message: 'Enter engineers name.'
      },

      {
        name: 'engineerId',
        type: 'number',
        message: 'Enter engineers employee ID number.' 
      },

      {
        name: 'engineerEmail',
        type: 'input',
        message: 'Enter engineers email address.'
      },

      {
        name: 'engineerGithub',
        type: 'input',
        message: 'Enter engineers GitHub username.'
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      generateTeam();
    });

  }

  function intern() {
    inquirer.prompt([
      
      {
       name: 'internName',
        type: 'input',
        message: 'Enter interns name.'
      },

      {
        name: 'internId',
        type: 'number',
        message: 'Enter interns employee ID number.' 
      },

      {
        name: 'internEmail',
        type: 'input',
        message: 'Enter interns email address.'
      },

      {
        name: 'internSchool',
        type: 'input',
        message: 'What school does the intern attend.'
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      generateTeam();
    });

  }


  function writeHtml() {
    console.log('Team has been created!')

    fs.writeFileSync( generateHtml(teamMembers), 'utf-8');
  }


}
