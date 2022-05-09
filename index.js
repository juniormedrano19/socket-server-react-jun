
/* SOCKET DEL LADO DE SERVIDOR */
const Server = require("./models/server");
require('dotenv').config();
const server=new Server();
server.execute();