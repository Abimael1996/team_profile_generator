class Template {
    constructor(){

    }

    manager(name, id, email) {
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
            
            <main>
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <h4 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h4>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>`
    }

}

module.exports = Template;