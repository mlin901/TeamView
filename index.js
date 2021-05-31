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
  inquirer                // ******Add more validation
    .prompt([
      {
        type: 'input',
        message: "Name:",
        name: 'name',
        validate(value) {
          if (value.length){
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
          // if (Number.isInteger(value)){
          if (!isNaN(value)) {
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
        validate(value) {
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
          if (value.length){
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
          if (value.length){
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
        message: 'Add another team member?',    // *************
        name: 'menu',
        choices: ['Add engineer', 'Add intern', 'No - input complete'],  // *********
      },
    ])
    .then((data) => {
      switch(employeeType) {
        case 'Add manager':
          newEmployee = new Manager(data.name, data.id, data.email, data.officenum);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for manager
          htmlString =` 
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
              <div class="card">
                <h3 class="card-header">${newEmployee.name}</h3>
                <div class="card-body">
                  <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                  <p class="card-text" style='line-height: 2;'>  
                    <b>ID:</b> ${newEmployee.id}<br>
                    <b>Email:</b> <a href="mailto:${newEmployee.email}">${newEmployee.email}</a><br>
                    <b>Office number:</b> ${newEmployee.officenum}
                  </p>
                </div>
              </div>
            </div>
            `;
          break;
        case 'Add engineer':
          newEmployee = new Engineer(data.name, data.id, data.email, data.github);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for engineer
          htmlString = 
          `<div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header">${newEmployee.name}</h3>
              <div class="card-body">
                <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                <p class="card-text" style='line-height: 2;'>  
                  <b>ID:</b> ${newEmployee.id}<br>
                  <b>Email:</b> <a href="mailto:${newEmployee.email}">${newEmployee.email}</a><br>
                  <b>GitHub:</b> <a href="https://www.github.com/${newEmployee.github}">${newEmployee.github}</a>
                </p>
              </div>
            </div>
          </div>
          `;
          break;
        case 'Add intern':
          newEmployee = new Intern(data.name, data.id, data.email, data.school);
          employeeType = data.menu;
          // Add Bootstrap card with info/styling for intern
          htmlString = 
          `<div class="col-12 col-sm-6 col-lg-4 mb-3">
             <div class="card">
             <h3 class="card-header">${newEmployee.name}</h3>
             <div class="card-body">
                 <h4 class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</h4>
                 <p class="card-text" style='line-height: 2;'>  
                  <b>ID:</b> ${newEmployee.id}<br>
                  <b>Email:</b> <a href="mailto:${newEmployee.email}">${newEmployee.email}</a><br>
                  <b>School:</b> ${newEmployee.school}
                 </p>
               </div>
             </div>
           </div>
          `;
          break;
        // default:
        //   console.error('HOW DID THIS HAPPEN!!!!'); // *******
      }
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

      } else {
        writeHtml(htmlString);
        askQuestions();
      }
    });
  
};

askQuestions();