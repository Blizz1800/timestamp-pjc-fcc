let express = require('express'); // Importo Express para el servidor HTTP
let app = express(); // Hago una instancia de este para servir al cliente
let dotenv = require('dotenv'); // Importo dotenv para mantener privada las configuraciones del servidor

dotenv.config(); // Cargo las configuraciones explicitas en el archivo .env en las variables de entorno (process.env)

let cors = require('cors'); // Permitir el acceso de origen cruzado

let views = __dirname + '/views/' // Directorio de las views o paginas del servidor

app.use(cors({optionsSuccessStatus: 200})); // Hago uso del middleware cors y establezco su opcion 'optionsSuccessStatus' en 200 para compatibilidad en los naveres
app.use(express.static(__dirname + '/public/')) // Definir la ruta de archivos estaticos publicos del servidor


app.get('/', (req, res) => {    // Sirviendo el root con el archivo index.html
        res.sendFile(views + 'index.html'); // Enviar el archivo index.html al cliente 
    });

app.listen(process.env.PUERTO, () => { // Pone al servidor en escucha en el puerto especificado
    console.log('listening on port ' + process.env.PUERTO); // Hace un log al completar la escucha
});