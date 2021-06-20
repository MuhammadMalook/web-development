import React from 'react'

const { useState, useEffect } = require("react")

class Parent extends React.Component{
   constructor(props)
   {
        super(props)
        //this.state = {res:this.props.res}
      //  console.log(props.res)
   }
  
    render()
    {

        //console.log(this.props.res);   
        return(
            
            <div>   
           {this.props.res? <table>
               <thead>Gender</thead>
                 {this.props.res.map((itm)=>{
                    return <tr> <td>{itm.gender}</td> </tr>
                })}
            </table>:<h1>Loading...</h1>}
            </div>
        ) 
    }
}
class Child extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {data:[]}
    }
componentDidMount(){
    return new Promise((resolve,reject)=>{
        fetch('https://randomuser.me/api/?results=5').then(response=>response.json()).then(result=> this.setState({data:result.results}))
    })

    //console.log(this.state.data[0])
}
    render()
    {
        return  this.state.data? <div> <Parent res={this.state.data}/></div>: <div> <h1>Loading...</h1></div>
    }
}
export default Child


//component based
// function Child(props)
// {
//  console.log(props.data)   
//     return(
//         <div>
//             {props.data?<table>
//                 <tr>
//                     <td>
//                     {}
//                     </td>
//                 </tr>
//             </table>:<h1>No data</h1>}
//         </div>
//     )
// }
// function Parent ()
// {
//     const [data,setData] = useState([])
//     useEffect(()=>{
//         fetch("https://randomuser.me/api/?results=5").then(response => response.json()).then(result=>setData(result.results))
//     },[])
//     return(
        
//          {data} ? <Child data = {data}/>:<h1>No Data</h1>
//     )
// }
// export default Parent