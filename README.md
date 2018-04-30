
# Project Name
Book App

**Author**: Emery Parks, Jason Burns
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
The book app was built to provide a platform for users to easily search for and learn about books they may want to read. 

## Getting Started
Typically, a user would paste the following URL in their browser and access the site: https://emery-jason-book-app.github.io/book-list-client/. However, until this point we have been unable to get our remote client and server talking so it will require more work to get to that point. 

For now you'll have to clone both client and server repos to your local machine. Once cloned, open the code, do an "npm i" to install the dependent node.js packages. 

Once installed, paste the following commands into your terminal window for testing locally, replacing variables where necessary:
export PORT=3000
export CLIENT_URL=http://localhost:8080
Mac:     export DATABASE_URL=postgres://localhost:5432/books_app
Windows: export DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/books_app

Once this is complete, from your terminal window run live-server while in your client side folder and nodemon while in your server side folder.

You'll also have to install the books data to your local postgres database as well from our database so in that case it may be best to ask me if I can show the project to you.

## Architecture

The book app is an app that can function locally on a users machine as well as can run remotely using GitHub Pages as the client host and Heroku as the Server host. It's architecture is such to enable anybody to use it from their browser.

Tools and technologies used include: 
Languages: CSS, HTML, JavaScript
Libraries: Handlebars.js, jQuery, Page.js, Node.js(express, postgres, cors)
Hosting: Live Server hosts local client, Postgres hosts local database, GitHub Pages hosts remote client, Heroku hosts remote database

## Change Log

4/24/2018 12:00pm: Deployed GH Pages, setup remote database on Heroku. 

4/24/2018 2:00pm: Server and client side scaffolded and a start to the code base was created. 

4/25/2018 2:00pm: Coded the book.js page on the client side

4/26/2018 11:00am: Coded routes.js, pageView.js, added handlebars templates to index.html. 

4/26/2018 2:00pm: Worked out bugs in newly coded pages.
 
4/28/2018 7:30pm: CSS added, detail page view functioning properly.

## Credits and Collaborations
The 301 instructional staff and TA's John, Sam, Nicholas, Melanie, Noah

Multiple resources from the internet, to name a few:

https://developer.mozilla.org/en-US/

https://handlebarsjs.com/

https://oscarotero.com/jquery/

https://www.w3schools.com/

