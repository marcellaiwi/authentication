const express = require ("express");
const {createServer} = require ("http");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const routers = require ("./routers");

const app = express();
const PORT = process.env.PORT || 7130; // || merupakan hard code port karena saya masih menggunakan node v.18 yang harus menginstall package process-env di dotenv
const server = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(routers);

server.listen(PORT, () => console.log(`Server already running! at http://localhost:${PORT}`));