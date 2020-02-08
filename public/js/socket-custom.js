var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdida conexion con el servidor');
})

// Envio informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego Jesus',
    mensaje: 'Pruebaaaaaa dfhdsge'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})