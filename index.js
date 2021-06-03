// Required external modules
const fs = require('fs');
const inquirer = require('inquirer');
// Required internal modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Start by displaying instructions to user
console.log('Welcome to TeamView!\nStart by entering information about the manager of your team:');
//The first entry will be the manager
let employeeType = 'Add manager';

//Function that writes to the HTML file
function writeHtml(data) {
  fs.appendFile('index.html', data, (err) => {if (err) console.error(err)});
}

//Function that prompts for info, saves it, and eventually calls the function that writes to the HTML file
const askQuestions = () => {
  let newEmployee = {}
  let htmlString = '';
  // Prompt for questions  
  inquirer      
    .prompt([
      {
        type: 'input',
        message: "Name:",
        name: 'name',
        validate(value) {
          if (value.length){  // Validate that user entered something in this field
            return true;
          } else {
            console.log(" <- Entry invalid. Please enter name")
            return false;
          } 
        } 
      },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate(value) {
          if (!isNaN(value)) {   // Validate that input is a number
            return true;
          } else {
            console.log(" <- Entry invalid. Please enter a numeric employee ID")
            return false;
          } 
        }
      },
      {       
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: function (email) {  // From https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
                                      // Checks for valid email address
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
              return true;
          } else {
            console.log(" <- Entry invalid. Please enter a valid email address")
            return false;
          }
        }
      },
      {
        type: 'input',
        message: 'Office number:',
        name: 'officenum',
        when: employeeType==='Add manager',
        validate(value) {       // Validate that input is a number
          if (!isNaN(value)) {
            return true;
          } else {
            console.log(" <- Entry invalid. Please enter a numeric office number")
            return false;
          } 
        }
      },
      {
        type: 'input',
        message: 'GitHub:',
        name: 'github',
        when: employeeType==='Add engineer',
        validate(value) {
          if (value.length){   // Validate that user entered something in this field
            return true;
          } else {
            console.log(" <- Entry invalid. Please enter a GitHub account name")
            return false;
          } 
        }
      },
      {
        type: 'input',
        message: 'School:',
        name: 'school',
        when: employeeType==='Add intern',
        validate(value) {
          if (value.length){     // Validate that user entered something in this field
            return true;
          } else {
            console.log(" <- Entry invalid. Please enter a school")
            return false;
          } 
        }
      },
      //Menu question - user selects another team member type or opts 
      // to complete input
      {
        type: 'list',
        message: 'Add another team member?',  
        name: 'menu',
        choices: ['Add engineer', 'Add intern', 'No - input complete'],  
      },
    ])
    .then((data) => {
      switch(employeeType) {
        // This (Add manager) is the case for the first employee the user supplies information for...
        case 'Add manager':
          newEmployee = new Manager(data.name, data.id, data.email, data.officenum);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for manager
          htmlString =` 
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card">
                <h3 class="card-header bg-danger">${newEmployee.getName()}</h3>
                <div class="card-body">
                  <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                  <p class="card-text" style='line-height: 2;'>  
                    <b>ID:</b> ${newEmployee.getId()}<br>
                    <b>Email:</b> <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a><br>
                    <b>Office number:</b> ${newEmployee.getOfficeNum()}
                  </p>
                </div>
              </div>
            </div>
            `;
          break;
        // If the user chose "Add engineer"...
        case 'Add engineer':
          newEmployee = new Engineer(data.name, data.id, data.email, data.github);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for engineer
          htmlString = 
          `<div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header bg-info">${newEmployee.getName()}</h3>
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                <p class="card-text" style='line-height: 2;'>  
                  <b>ID:</b> ${newEmployee.getId()}<br>
                  <b>Email:</b> <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a><br>
                  <b>GitHub:</b> <a href="https://www.github.com/${newEmployee.getGithub()}">${newEmployee.getGithub()}</a>
                </p>
              </div>
            </div>
          </div>
          `;
          break;
        // If the user chose "Add intern"...
        case 'Add intern':
          newEmployee = new Intern(data.name, data.id, data.email, data.school);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for intern
          htmlString = 
          `<div class="col-12 col-sm-6 col-lg-4 mb-3">
             <div class="card">
             <h3 class="card-header bg-warning">${newEmployee.getName()}</h3>
             <div class="card-body">
                 <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                 <p class="card-text" style='line-height: 2;'>  
                  <b>ID:</b> ${newEmployee.getId()}<br>
                  <b>Email:</b> <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a><br>
                  <b>School:</b> ${newEmployee.getSchool()}
                 </p>
               </div>
             </div>
           </div>
          `;
          break;
      }
      // if the user's done adding team members, the final bits of HTML are added
      if (data.menu==='No - input complete') {
        htmlString += `
      </section>
      </div>
    </section>
    <hr />
  </main>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
</body>
</html>
        `;
        writeHtml(htmlString);
        console.log("Input complete! TeamView has been updated with the new team members.");
      } else {   // Else, the HTML for the entered team member is added to the file, 
                 //   and the user is prompted for the next team member
        writeHtml(htmlString);
        askQuestions();
      }
    });
};

askQuestions();