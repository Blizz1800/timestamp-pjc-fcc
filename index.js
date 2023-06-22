let express = require('express'); // Importo Express para el servidor HTTP
let app = express(); // Hago una instancia de este para servir al cliente
let dotenv = require('dotenv'); // Importo dotenv para mantener privada las configuraciones del servidor
let path = require('path'); // Importo path para usarlo en la carga de archivos 

dotenv.config(); // Cargo las configuraciones explicitas en el archivo .env en las variables de entorno (process.env)

let cors = require('cors'); // Permitir el acceso de origen cruzado

let views = path.join(__dirname, '/views/') // Directorio de las views o paginas del servidor

app.use(cors({optionsSuccessStatus: 200})); // Hago uso del middleware cors y establezco su opcion 'optionsSuccessStatus' en 200 para compatibilidad en los naveres
app.use(express.static(path.join(__dirname,'/public'))) // Definir la ruta de archivos estaticos publicos del servidor
app.use('/bootstrap/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/'))); // Cargar los componentes de bootstrap (CSS)
app.use('/bootstrap/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js/'))); // Cargar los componentes de bootstrap (JavaScript)

app.get('/', (req, res) => {    // Sirviendo el root con el archivo index.html
        res.sendFile(views + 'index.html'); // Enviar el archivo index.html al cliente 
    });

app.get('/api/:query', (req, res) => {
    let query = req.params.query
    if (/^\d+$/.test(query)) // Verificar si query esta compuesto solo por numeros
        query = parseInt(query)
    let utc = new Date(query).toUTCString(); // Almacenamos el objeto de fecha en una variable con formato UTC
    let unix = new Date(query).getTime(); // Almacenamos el objeto de fecha en una variable con formato unix

    res.send({unix: unix, utc: utc});
});

app.listen(process.env.PUERTO, () => { // Pone al servidor en escucha en el puerto especificado
    console.log('listening on port ' + process.env.PUERTO); // Hace un log al completar la escucha
});