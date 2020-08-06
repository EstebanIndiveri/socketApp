//conex

var socket=io();

let  searchParams= new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')){
    window.location='index.html';
    throw new Error('El escritorio es necesario');
};
var escritorio=searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);
let label=$('small');
$('button').on('click',()=>{
    socket.emit('atenderTicket',{escritorio:escritorio},(res)=>{
        console.log(res);
        if(res=='No hay tickets'){
        label.text(res);
            alert(res);
            return
        }
        label.text('Ticket ' +res.numero)
    })
})