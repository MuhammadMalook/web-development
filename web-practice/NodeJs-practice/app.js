
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
//backend web application development framework
//used to build apis
//no need to make if else condtions for each request.

const { query } = require('express');
const express = require('express');
const app = express()
app.use(express.json()) //express.json() is the piece of middleware
                        //app.use() is to use that middleware to work with request processing pipeline 

const courses = [
    {id:1,course:'course1'},
    {id:2,course:'course2'},
    {id:3,course:'course3'}
]

app.get('/', (req,res)=>{ //this / represents localhost:3000 url (typing into browser) 
    res.send('hello')
})
app.get('/api/courses',(req,res)=>{  // localhost:3000/api/courses in browser.
    res.send(courses)
})
app.get('/api/numbers',(req,res)=>{
    res.send([1,2,3,4])
})

//Route parameters and query parameters.
//Router parameters :  to provide essential or required values
// query parameters: after ? (question mark) to provide addtional data to backend services (optional)
app.get('/api/posts/:year/:month', (req,res)=>{ //year and month are route parameters
    //http://localhost:3000/api/posts/2019/5 in browser
    //Route parameters /2019/5


    res.send(req.params) //Output : {"year":"2019","month":"5"}
    //http://localhost:3000/api/posts/2019/5?sortBy=month
    //query paramters (sortBy=month)
   // res.send(req.query) //{"sortBy":"month"}
})

//getting a single record based on parameter
app.get('/api/courses/:id',(req,res)=>{
   
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(course)
    {
        res.status(200).send(course)
    }
    else
    {
       return res.status(404).send(`The coures With id ${req.params.id} is not found!`)
    }
})

//http post request 
app.post('/api/courses',(req,res)=>{
    const course = {
        id:courses.length+1,
        course:req.body.name+(courses.length+1) //for this line to work we have to use middleware(parsing of json object in body of request) like app.use(express.json()) // to convert body of the request into json format
                                //by default express does not provide this parsing
    }
    courses.push(course);
    res.send(course)
})

//updating record using PUT method

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course)
    {
       return res.status(404).send('The given id does not exist!')
    }
    else
    {
        //updating if id exist
        course.course = req.body.name
        res.send(course)
    }

})

//deleting record using DELETE() method
app.delete('/api/course/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if(!course)
        return res.status(400).send('Given ID does not exist');
    else
        {
            const index = courses.indexOf(course);
            courses.splice(index,1)
            res.send(course)
        }
})

app.listen(3000,()=>console.log('listening to port'))


