# Contributing

__Table of contents__

- [Setup dev server](#setup-dev-server)
  - [Getting Started](#getting-started)
  - [Running server](#running-server)
- [Coding](#coding)
  - [Standards](#standards)
  - [Resources](#resources)
- [Resource compiling](#resource-compiling)
- [Folder structure](#folder-structure)


## Setup dev server

To get started contributing in this app, let's setup your local development enviroment.

### Getting started

Check if main dependencies are installed:

- [Node.js](http://nodejs.org/download/)
- [Bundler](http://bundler.io/bundle_install.html) (`gem install bundler`)

Install [package dependencies](https://github.com/x-team/remember/blob/master/package.json) in the app [root folder](https://github.com/x-team/remember), run:

- `npm install`
- `bundle install`

Check next step and pick a way to start the server.


### Running server

There is currently three layers (and ways) from which you can run the server, each depends on the previous, and can be called leaving the next layer functionality aside.

- `node app.js` - Run the app through the official node app, no fancy stuff here.
- `npm start` or `nodemon app.js` - Runs the app using _nodemon_ node library, which is configured to restart the server once any (executable JS) file has been changed on disk. So you don't need to restart after changing app files, it does it automatically for you.
- `gulp` - Runs the app, using _nodemon_ internally (just like above), with the added value of watching for resources changes, like (S)CSS or (Coffee)Scripts, and compile them, and do any needed processing automatically

You should be able to visit [`http://localhost:3000`](http://localhost:3000) in your browser and be greeted with the app landing page.


## Coding

Frontend sandbox: [HTML (Jade) + CSS (Sass) + JS (CoffeeScript)](http://codepen.io/anon/pen/xvCdh)

### Standards

This project follows the [X-Team Standards](https://github.com/x-team/standards)

### Resources

Workflow

- [Node.js](http://nodejs.org/) - the actual server
- [Express](http://expressjs.com/) - web application framework for node
- [Nodemon](http://nodemon.io/) - auto reload server on document saving
- [Gulp](http://gulpjs.com/) - assets compiler

Database

- [NoSQL](http://nosql-database.org/)
- [MongoDB](http://www.mongodb.org/)
- [Monk](https://github.com/LearnBoost/monk)

Assets

- [Jade](http://jade-lang.com/) - node template engine, compiles html
- [Sass](http://sass-lang.com/) - css preprocessor
- [CoffeeScript](http://coffeescript.org/) - javascript compiler
- [Underscore.js](http://underscorejs.org/) - javascript lib

Documentation

- [Markdown](http://daringfireball.net/projects/markdown/) - mostly used on docs, compiles html

Testing

- 

> _need more information, thanks_

## Resource compiling

- Run `gulp` to compile resources and start the server.

The default task will be watching for document changes, recompiling assets and reloading server on file save.

## Folder structure

    - docs           | Acceptance Tests & Documents
    - includes       | Includes and Helpers
    - public         | Public app directory from which static files are
                     | served, you should not need to edit any files in here,
                     | see `\src` instead
    - routes         | Routes of the app, each responsible for a specific
                     | end-point, ie: / => index.js, /user => user.js
    - src            | Front-end files, stylesheet are written in SCSS, 
                     | JS can be written in .js files or .coffee files
    - views          | Views folder, written in .jade files
