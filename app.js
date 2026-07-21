const {db, Poll, Option, Vote} = require("./database_scripts/index");

db.authenticate()
    .then(() => console.log('Connection established.'))
    .catch(err => console.error('Unable to connect:', err));

db.sync({force: true});