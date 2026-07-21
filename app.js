const { db } = require("./database_scripts/db");

db.authenticate()
    .then(() => console.log('Connection established.'))
    .catch(err => console.error('Unable to connect:', err));

db.sync({force: true});