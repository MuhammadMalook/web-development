import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'


// function App() {
//   const [value,setValue] = useState('')

//   const handleSubmit=(event)=>
//   {
//       alert("You entered "+value)
//       event.preventDefault();
//   }
//   const handleChange = (event)=>{
//     setValue((value)=> value = event.target.value)
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={value} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }


// class App extends React.Component{
//   //let name = "malook" -> not allowed here inside the class
//   name="Malook" //this is correct,since now its instance of class
//   render()
//   {
//     let age = 20;
//    // return <h1>{name}</h1> //cant be access, we have to use this keyword because its instance of class
//     //return <h1>{this.name} {age} </h1>
//    //let elem = <h1 className="myclass" >hello world!</h1>
//    //let elem = React.createElement('h1',{className:"myClass"},'hello world')
//     //return <h1 className="myClass" style={{color:"tomato", backgroundColor:"black"}}>Hello world</h1>
//     //or
//     const myStyle = {color:"tomato", backgroundColor:"black"}
//     return <h1 className="myClass" style={myStyle}>Hello world</h1>
//   }
// }

// class Child extends React.Component{
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//     return <h1>hello {this.props.name}, {this.props.age}</h1>
//   }
// }

// class App extends React.Component{
 
//   render()
//   {  
//     return <Child name="Malook" age="21" />
//   }
// }

// import propTypes from 'prop-types'
// function Child (props){

//     return <h1>hello {props.name}, {props.age}</h1>
// }
// Child.propTypes= {
//   name:propTypes.string
// }
// Child.defaultProps ={
//   name:"No value recieved"
// }
// function App (){ 
//     //let name  //this will let the Child component to use default value.
//     let name="malook"
//     return <Child name={name} age="21" />
// }

// class Clock extends React.Component{
//   constructor(props)
//   {
//       super(props)
//   }
//   render()
//   {
//     return <h1>{this.props.date}</h1>
//   }
// }

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {date:new Date()}
//     this.tick = this.tick.bind(this)
//   }

//   tick()
//   {
//     this.setState({date:new Date()})
//   }
//   componentDidMount()
//   {
//     setInterval(this.tick,1000)
//   }
//   render()
//   {
//     return <Clock date={this.state.date.toLocaleTimeString()}/>
//   }
// }

// class App extends React.Component{
//   id;
//   constructor(props)
//   {
//     super(props)
//     this.state = {date:new Date(), count:1}
//     this.tick = this.tick.bind(this)
//   }

//   tick()
//   {
//     //this.setState((prev)=>{ return {date:new Date(),count: prev.count+1}})
//     //this.setState((prev)=>{ return {date:new Date(),count:this.state.count+1}})
//   }
//   componentDidMount()
//   {
//     this.id = setInterval(this.tick,1000)
//   }
//   componentWillUnmount()
//   {
//       clearInterval(this.id)
//   }
//   render()
//   {
//     return <h1>{this.state.date.toLocaleTimeString()}, {this.state.count}</h1>
//   }
// }

// class Child extends React.Component{
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//       return <h1>{this.props.obj.Name}, {this.props.obj.age}</h1>
//   }
// }



// class App extends React.Component{
//   render()
//   {
//     //let name="Malook"
//     let obj = {Name:"Malook",age:21}
//     return <Child obj={obj}/>
//   }
// }

// function Child(props)
// {
//   return (
//   <div>
//     <h1>{props.obj.Name}</h1> <h2>{props.obj.age}</h2>
//     </div>
//   )
// }
// function App()
// {
//   let obj = {Name:"Malook",age:21}
//   return <Child obj={obj}/>
// }


//Error in this code while setState inside the render()
// class Clock extends React.Component{
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//     return <h1>{this.props.date}</h1>
//   }
// }

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {date:new Date()}
//   }


//   render()
//   {
//     this.setState({date:new Date()}) 
//     return <Clock ddate={this.state.date.toLocaleTimeString()}/>
//   }
// }

// class Clock extends React.Component{
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//     return <h1>{this.props.date}, {this.props.count}</h1>
//   }
// }

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {date:new Date(),count:1}
//     this.tick = this.tick.bind(this)
//   }

//   componentDidMount()
//   {
//     setInterval(this.tick, 1000);
//   }
//   render()
//   {
//     return <Clock date={this.state.date.toLocaleTimeString()} count={this.state.count}/>
//   }
//   tick()
//   {
//     //console.log("hello")
//     this.setState({date:new Date(),count:this.state.count+1}) 
//   }
// }

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {count:1,text:''}
//     this.increament = this.increament.bind(this)
//     this.decreament = this.decreament.bind(this)
//     this.handleChnage = this.handleChnage.bind(this)
//   }
// increament()
// {

  
//   //this.setState({count:this.state.count+1})
//   //OR
//   this.setState((prev)=> {
//     console.log(prev.text) 
//     return {count:prev.count+1}})
//   //or
// //   this.setState((prev)=> {
// //     console.log(prev.text)
// //     return {count:prev.count+1}
// // })
// }
// decreament()
// {
//   this.setState({count:this.state.count-1})
// }
// handleChnage({target})
// {

//   this.setState((prevState)=>{
  
//   console.log(prevState)
//     return  {text:target.value}
  
//   }
//     )
    
// }
//  render()
//  {
//    return <div>
//    <input type="button" value="increament" onClick={this.increament}></input>
//    <input type="button" value="decreament" onClick={this.decreament}></input>
//    <input type="text" value={this.state.text} onChange={this.handleChnage}></input>
//    <h1>Counter : {this.state.count}</h1>
//    </div>
//  }
// }



//State Hook
//function based component with useState.
// function App()
// {
//   const [obj,setCount] = useState({count:1,products:[1]})
//  function increament()
//   {
    
//     setCount((prev)=>{
//       console.log(prev)
//        return{count:prev.count+1,products:[...prev.products,prev.count+1]}
        
//       })
    
//   }
//   return <div>
//      <input type="button" value="increament" onClick={increament}></input>
//       <input type="button" value="decreament"></input>
//       <h1>{obj.count}</h1>
//   </div>

// }



//useEffect Hook
//used as the alternative of life cycle methods in class based
// function App()
// {
//   const [count,setCount] = useState(10)
//  function increament()
//   {
//     setCount(count+1)
    
//   }
//   useEffect(()=>{
//     console.log("okk...")
   
//     //return function(){console.log("Returned")}
//   },[])
//   return(
//     <div>
//          <input type="button" value="increament" onClick={increament}></input>
//        <input type="button" value="decreament"></input>
//        <h1>{count}</h1>
//     </div>
//   )
// }



//fetching data using API
// function App (){
//   const [data,setData] = useState([])
//   useEffect(()=>
//   {
//       fetch('https://randomuser.me/api?results=5').then(res=>res.json()).then(res=>setData(res.results))
//   },[data]
//   )
//   let list = data.map(itm=><li>{itm.gender}</li>)
//   return(
//     <div>
//       {list}
//     </div>
//   )
// }



//changing state of parent in child component.

// class Child extends React.Component{
//   constructor(props)
//   {
//     super(props)
//   }
//   render()
//   {
//       return <button onClick={()=>this.props.handleTochange("hello from child")}>Change ME</button>
//   }
// }

// class App extends React.Component{
//   constructor(props)
//   {
//     super(props)
//     this.state = {msg:'hello'}
//     this.handlechange = this.handlechange.bind(this)
//   }

//   handlechange(message)
//   {
//     this.setState({msg:message})
//   }
//   render()
//   {
//     return <div>
//       <h1>{this.state.msg}</h1>
//     <Child handleTochange={this.handlechange}/>
//     </div>

//   }
// }

//Routing in react.

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App()
{
 return(
   <div>
 <Router>
    <ul>
      <li><Link to="/">Customers</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
    <Switch>
        <Route exact path="/">
          <Customers/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
    </Switch>
  </Router>
  </div>)
}

function Customers()
{
  return <h1>Customers componet</h1>
}

function Products()
{
  return <h1>Products componet</h1>
}

export default App;

