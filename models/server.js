/* Servidor de express */
const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const path=require('path'); /* moverse entre directorios */
const Sockets = require('./sockets');


/* creamos una clase Server */
class Server{
    constructor(){

        this.app=express();
        this.port= process.env.PORT;

        //Http Server
        this.server=http.createServer(this.app)


        //Configuraciones de Sockets
        this.io=socketio(this.server, {/* configuraciones */})
    }
    middlewares(){
        this.app.use(express.static( path.resolve(__dirname, '../public') ));
    }

    configurarSockets(){
        new Sockets(this.io);
    }


    /* Método para inicializar la aplicación */
    execute(){
        //Inicializar Middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar Server
        this.server.listen(this.port, ()=>{
            console.log(`Server corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports=Server; /* exportación por defecto */