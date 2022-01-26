class Template {
  constructor(){
    
  }

  css() {
    return `header {
      text-align: center;
      background-color: red;
      color: white;
      padding: 40px 0 40px 0;
  }
  
  main {
      display: flex;
      flex-wrap: wrap;
      margin: 20px 10% 0 10%;
      width: 80%;
      justify-content: center;
  }
  
  .card-body {
      background-color: blue;
      color: white;
  }
  
  ul {
      color: black;
  }
  
  .card {
      margin-right: 20px;
      margin-top: 20px;
      border-width: 4px;
  }`
  }

  openHtml() {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
      </head>
    
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        
        <main>`
  }

  employee(name, id, email, unique, role) {
    return `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h4 class="card-title">${role}</h4>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">${unique}</li>
                </ul>
              </div>`
  }

  closeHtml() {
    return `
      </main>
    </body>
  </html>`

  }

}

module.exports = Template;