//conex

var socket=io();

var label=$('#lblNuevoTicket')

socket.on('connect',()=>{
    console.log('conectado');
});

socket.on('disconnecto',()=>{
    console.log('desconectado');
});

socket.on('estadoActual',(res)=>{
    label.text(res.actual);
})

$('button').on('click',function(){
    socket.emit('siguienteTicket',null,(siguienteTicket)=>{
        label.text(siguienteTicket);
    });
});