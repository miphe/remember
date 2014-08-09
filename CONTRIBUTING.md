# Coding Standards
?

# Getting Started

To get started using this, you need to install dependencies by issuing `npm install` command in the root of the repo, then you should pick a way to start the server ( see next ).

# Running the server

There is currently three layers ( and ways ) from which you can run the server, each depends on the previous, and can be called leaving the next layer functionality aside.

- `node app.js` Run the app through the official node app, no fancy stuff here.
- `npm start` or `nodemon app.js` Runs the app using `nodemon` node library, which is configured to restart the server once any ( executable JS ) file has been changed on disk. So you don't need to restart after changing app files, it does it automatically for you
- `gulp` Runs the app, using `nodemon` internally ( just like above ), with the added value of watching for resources changes, like (S)CSS or (Coffee)Scripts, and compile them, and do any needed processing automatically

# Folder structure
>>>
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
