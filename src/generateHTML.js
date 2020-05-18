//creates the full html page
const generateHTMLPage = function(employeeHTMLString) {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
  <body>
      <header>
            <div class="jumbotron align-middle">
                <div class="container">
                    <h1 class="display-6 font-weight-bold">My Team</h1>
                </div>
            </div>
      </header>
        <main>
            <div class="container" >
            <div class="row" id="employees">
                    <!-- Employee Cards -->
                    ${employeeHTMLString}
            </div>
            </div>
        </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
  </html>`;
}

//adds the Manager card
const addManager = function(manager) {
    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
            <img src="images/manager.png" />
            <h3 class="card-title">${manager.name} </h3>   
            <h5>Manager</h5>   
        </div>
            <div>
                <h6>Id: ${manager.id} </h6>
                <a href="mailto:${manager.email}">${manager.email}</a>
                <h6>Office #: ${manager.officeNumber} </h6>
            </div>
        </div>
    </div>`;
}

//adds the card for the Engineer
const addEngineer = function(engineer) {
    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/engineer.png" />
                <h3 class="card-title">${engineer.name} </h3>  
                <h5>Engineer </h5>
            </div>
            <div>
                <h6>Id: ${engineer.id} </h6>
                <a href="mailto:${engineer.email}">${engineer.email}</a>
                <div>
                <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                </div>
            </div>
        </div>
    </div>`;
}

//adds the info for the Intern
const addIntern = function(intern) {
    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/intern.png" />
                <h3 class="card-title">${intern.name}</h3>
                <h5>Intern</h5>
             </div>
            <div id="engineer">
                <h6>Id: ${intern.id}</h6>
                <a href="mailto:${intern.email}">${intern.email}</a>
                <h6>School: ${intern.school} </h6>
            </div>
        </div>
    </div>
    `;
}

//this function creates an array to store the data from each card and join them together
function generateHTML (data) {
    HTMLArray = [];

    for (let i = 0; i < data.length; i++) {
        const newEmp = data[i];
        const role = newEmp.getRole();

        if (role === 'Manager') {
            const managerCard = addManager(newEmp);
            HTMLArray.push(managerCard);
        }

        if (role === 'Intern') {
            const internCard = addIntern(newEmp);
            HTMLArray.push(internCard);
        }

        if (role === 'Engineer') {
            const engineerCard = addEngineer(newEmp);
            HTMLArray.push(engineerCard);
        }
    }
    const HTMLString = HTMLArray.join('')

    //the string of all the cards is pushed into the generateHTMLPage function, and added to the final HTML page
    finalHTMLString = generateHTMLPage(HTMLString);
    return finalHTMLString;
}

module.exports = generateHTML;