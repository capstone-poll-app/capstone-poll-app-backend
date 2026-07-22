const express = require('express')
const pollRouter = require('./routes/poll')
const { db, Poll, Option, Vote } = require("./database_scripts/index");
const cors = require('cors')


const app = express()
const PORT = 3000

//middle-ware
app.use(express.json());
app.use(cors())

app.use('/', pollRouter)




db.authenticate()
    .then(() => console.log('Connection established.'))
    .catch(err => console.error('Unable to connect:', err));

db.sync();
app.listen(PORT, () => {
    console.log(`Server actively running at http://localhost:${PORT}`);
});
