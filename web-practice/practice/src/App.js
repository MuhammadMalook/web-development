import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


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


class App extends React.Component{
  //let name = "malook" -> not allowed here inside the class
  name="Malook" //this is correct,since now its instance of class
  render()
  {
    let age = 20;
   // return <h1>{name}</h1> //cant be access, we have to use this keyword because its instance of class
   return <h1>{this.name} {age} </h1>
  }
}

export default App;
