// var http = require('http'),  
//     io = require('socket.io');  
  
// //在8080端口启动服务器  
// var server = http.createServer(function(req,res){  
//     res.writeHead(200,{  
//         'Content-Type' : 'text/html'  
//     });  
//     res.end('<h1>Hello World!</h1>');  
// })  
// server.listen(3300);  
  
// //创建一个Socket.IO实例，把它传递给服务器  
// var socket = io.listen(server);  
  
// //添加一个连接监听器  
// socket.on('connection',function(client){  
//     //现在开始监听接收到的消息  
//     client.on('message',function(event){  
//         console.log(123);  
//     })  
//     client.on('disconnect',function(){  
//         clearInterval(interval);  
//         console.log(456);  
//     })  
//     //每五秒发送消息到客户端  
//     var interval = setInterval(function(){  
//         client.send('This is message from the server!' + new Date().getTime());  
//     },5000)  
// }); 


var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var game1 = null,game2 = null , game1Ready = false , game2Ready = false,i=0;
var server = ws.createServer(function(conn){
    conn.on("binary", function (inStream) {
        console.log("收到的信息为:"+inStream + i ++)
        // if(str==="game1"){
        //     game1 = conn;
        //     game1Ready = true;
        //     conn.sendText("success");
        // }
        // if(str==="game2"){
        //     game2 = conn;
        //     game2Ready = true;
        // }

        // if(game1Ready&&game2Ready){
        //     game2.sendText(str);
        // }
  //       var newData;
		// inStream.on("readable", function () {
  //           newData = inStream.read()

  //       })
  //       inStream.on("end", function () {
  //           console.log("Received " + newData.length + " bytes of binary data")
  //           //process_my_data(data)
  //       })


        //conn.sendBinary(inStream)
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕")