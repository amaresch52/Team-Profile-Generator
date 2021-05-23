function generateHTML(managers, engineers, interns) {
  managerArr = managers;
  engineerArr = engineers;
  internsArr = interns;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/ebca76b277.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    <body>
        <header class="header container-fluid">
            <h1>My Team</h1>
           
        </header>
        <section class="management container-fluid">
    
            <h2>Management</h2>
        </section>
        <div class="row">
        ${generateManagerCards(managerArr)}
        </div>
        <section class="engineers container-fluid">
        
            <h2>Engineers</h2>
        </section>
        <div class="row">
        ${generateEngineerCards(engineerArr)}
        </div>
        <section class="interns container-fluid">
            <h2>Interns</h2>
        </section>
        <div class="row">
        ${generateInternCards(internsArr)}
        </div>
    
    
    
    
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
    </body>
    </html>`;
}

function generateManagerCards(managersArr) {
  if (!managerArr) {
    return "";
  }
  const managerCardsArr = managersArr.map((managerData) => {
    return `
        <div class="card" style="width: 20rem;">
        <span style="font-size: 5em; color:";>
        <i class="card-img-top fab fa-black-tie"></i></span>
            <div class="card-body">
              <h5 class="card-title">${managerData.name}</h5>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${managerData.id}</li>
              <li class="list-group-item">Email: ${managerData.email}</li>
              <li class="list-group-item">Office No: ${managerData.officeNumber}</li>
              </ul>
            </div>
        </div>`;
  });
  return `
    ${managerCardsArr.join(`
    `)}
    `;
}

function generateEngineerCards(engineerArr) {
  if (!engineerArr) {
    return "";
  }
  const engineerCardsArr = engineerArr.map((engineerData) => {
    return `
    <div class="card bounce" style="width: 20rem;">
    <span style="font-size: 5em; color:";>
    <i class="card-img-top fas fa-hard-hat"></i></span>
        <div class="card-body">
            <h5 class="card-title">${engineerData.name}</h5>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${engineerData.id}</li>
               <li class="list-group-item">Email: ${engineerData.email}</li>
            </ul>
          <div class = "card-body"> 
            <a href="https://github.com/${engineerData.github}" class="btn btn-primary">GitHub: ${engineerData.github}</a>
          </div>  
          
        </div>
    </div>`;
  });
  return `
    ${engineerCardsArr.join(`
    `)}
    `;
}

function generateInternCards(internsArr) {
  if (!internsArr) {
    return "";
  }
  const internCardsArr = internsArr.map((internData) => {
    return `
    <div class="card bounce" style="width: 20rem;">
    <span style="font-size: 5em; color:";>
    <i class="card-img-top fas fa-graduation-cap"></i></span>
        <div class="card-body">
            <h5 class="card-title">${internData.name}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internData.id}</li>
            <li class="list-group-item">Email: ${internData.email}</li>
            <li class="list-group-item">School: ${internData.school}</li>
            </ul>
        </div>
    </div>`;
  });
  return `
    ${internCardsArr.join(`
    `)}
    `;
}

module.exports = generateHTML;
