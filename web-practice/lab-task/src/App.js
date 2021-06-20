import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import { func } from 'prop-types';
//import Form from './Form'

//login page : 2 fields (user ,pass) , 2 compomenets , 
function App() {

    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const password = "1234"
    const [status,setStatus] = useState(false)
  function  handlechange({target}) {
    
      setName(target.value)
    }
    function handlepass({target})
    {
        setPass(target.value)
    }
    function login()
    {
      console.log("hello"+pass)

        if(pass === password)
        {
          setStatus(true)
          return <div><h1>Status {status}</h1></div>
        }
    }
    function logout()
    {
      setStatus(false)
    }
    function myF()
    {
      if(!status)
      {
        return <div>
              <input type="text" id="txt" value={name} onChange={handlechange}/>
              <input type="pass" id = "p" value={pass} onChange ={handlepass}/>
              <input type="button" id="btn" value="Login" onClick= {login}></input>
          </div>
      }
      else
      return <div><h1>Status Loged in {name}</h1> <input type="button" value="Logout" onClick={logout}/></div>
    }
    return(
        // !status?
        // <div>
        //     <input type="text" id="txt" value={name} onChange={handlechange}/>
        //     <input type="pass" id = "p" value={pass} onChange ={handlepass}/>
        //     <input type="button" id="btn" value="Login" onClick= {login}></input>
        // </div> :<div><h1>Status Loged in {name}</h1> <input type="button" value="Logout" onClick={logout}/></div>
        myF()
  );
}

export default App;
