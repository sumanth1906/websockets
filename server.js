var express= require('express');
var socket=require('socket.io');
//app server
var app=express();
var sever=app.listen(3000,function(){
    console.log('listening to the request at port 3000');
});
//static files:

app.use(express.static('public'));

//socket setup
var io=socket(sever);
io.on('connection',function(socket){
console.log('made socket connection');
socket.on('chat',function(data){

    io.sockets.emit('chat',data);
});
});
