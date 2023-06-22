let express = require('express');
let app = express();
let dotenv = require('dotenv');

let config = dotenv.config();


let cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));

views = __dirname + '/views/'

app.get('/', (req, res) => {
        res.sendFile(views + 'index.html');
    });

app.listen(process.env.PUERTO, () => {
    console.log('listening on port ' + process.env.PUERTO);
});