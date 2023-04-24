const express = require('express');
const app = express();

const PORT = 8080;

skins = [{
    image: "https://steamuserimages-a.akamaihd.net/ugc/2028351156741267123/3C460F21A163BDF9EB77228967B7A88ADC0C4687/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name: 'MP5 Playground'
},
{
    image: "https://steamuserimages-a.akamaihd.net/ugc/2027224692882596413/AF55AB937B32E8F9A38C5B4A735E99C1B49CD4B9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name: 'Avocado Rock'
},
]

var cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/skins', (req, res) => {
    res.status(200).send(skins);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})