const express = require('express')
const {db, Poll, Option, Vote} = require("./database_scripts/index");
const cors = require('cors')


const app = express()
const PORT = 3000

app.use(express.json());
app.use(cors())
app.get('/', async (req, res)=>{
    try{
        const data = await Poll.findAll()
        res.json(data);
    }catch(err){
        console.error('Error fetching polls:', err);
        res.status(500).json({error: 'Failed to fetch polls'})
    } 
})


db.authenticate()
    .then(() => console.log('Connection established.'))
    .catch(err => console.error('Unable to connect:', err));

db.sync();
app.listen(PORT, () => {
    console.log(`Server actively running at http://localhost:${PORT}`);
});
