const express = require('express');
const app = express();

const PORT = 8080;

const fs = require('fs');

let rawdata = fs.readFileSync('skins.json');
let skins = JSON.parse(rawdata);

var cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
    res.send('🍞!')
})
app.get('/skins', (req, res) => {
    res.status(200).send(skins);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})