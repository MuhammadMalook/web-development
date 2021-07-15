
// const a = require("./myModule")
// a.b("hello")

// const path = require("path")
// console.log(path.parse(__filename))



// const os = require("os")
// console.log(`Total memory : ${os.totalmem} and free memory : ${os.freemem}` )


// const file = require('fs')
// file.readdir('./',function(err,result) {
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })


// const EventEmiiter = require('events')
// const emitter = new EventEmiiter()

// //registering event
// emitter.on('myFunction',function(arg) {
//     console.log("event raised",arg)
// })
// //rasing event
// emitter.emit('myFunction', {id:1,url:"http://"}) //it will call the function myFunction

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.write("hello world")
//         res.end();
//     }
// })
// server.listen(3000)
// console.log("listening to server...")


// const http = require('http')
// const server = http.createServer(function(req,res){
//     if(req.url == '/home')
//     {
//         res.writeHead(400,{"Content-type": 'text/html'})
//         res.write('<h1>hello world</h1>')
        
//     }

//     if(req.url == '/getCustomers')
//     {
//         res.writeHead(200,{"Content-type": 'text/json'})
//         const obj = {name:"Malok",city:"khanpur Mahar"}
//         res.write(JSON.stringify(obj))
        
//     }
//     return res.end()
// })

// server.listen(3000,function() {
//     console.log('server is listening to 3000...')
// })

// const printDate =  require('http');
// console.log(printDate);


//const f = require('./myModule')
//console.log(f)

//built in modules
//os,fs,http,

// const os = require('os')
// console.log(os.freemem())

//fs module
// const file = require('fs')
// file.readFile('./NodeJs-practice/myfile.txt',function(err,data) {
//     if(err) throw err;
//     console.log(data.toString())
// })


//http module
// const http =require('http')

// const server = http.createServer(function(req,res){
//     if(req.url=='/randomuser.me/myapi')
//     {
//         res.write('hello cleint again and agian')
//         res.end()
//         return;
//     }
   

//     res.write('Not found')
//     res.end()
// })
// server.listen(3000,function(){
//     console.log("server is listening to 3000...")
// })




//mysql
// const http = require('http')
// const mysql = require('mysql')

// const url = require('url')


// const conString = {
//     hostname:'localhost',
//     user:'root',
//     password:'',
//     database:'hr'
// }

// const con = mysql.createConnection(conString)

// const server = http.createServer(function(req,res){
//     const parsedUrl = url.parse(req.url,true)
//     if(req.url=='/getEmployees')
//     {
//         con.query('SELECT * from employees LIMIT 10',function(err,rows,fields){
//             if(err) throw err;
//            res.write(JSON.stringify(rows))
//            res.end()
//         })
//         return;
//     }
//     else if(parsedUrl.pathname == '/getEmployeeById')
//     {
//         console.log(parsedUrl)
//         //getEmployeeById?empid=100
//         id = parsedUrl.query.empid
//         console.log(id)
//         con.query('SELECT * from employees WHERE employee_id='+id,function(err,row,field){
//             if(err) throw err;
//             res.write(JSON.stringify(row))
//             //console.log(field)
//             res.end()
//         })
//         return;
//     }
//     res.writeHead(404,{"Content-type":'text/html'})
//     res.write('Not Found!')
//     res.end()
// })
// server.listen(3000,function()
// {
//     console.log('server is listening to 3000...')

// })



//Express
const express = require('express');
const app = express()

const courses = [
    {id:1,course:'course1'},
    {id:2,course:'course2'},
    {id:3,course:'course3'}
]
app.get('/', (req,res)=>{
    res.send('hello')
})
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.listen(3000,()=>console.log('listening to port'))


