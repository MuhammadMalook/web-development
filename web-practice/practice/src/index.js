import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Child from './lab_tast'

// class App extends React.Component{
  
//   render()
//   {
//     return <h1>{new Date().toLocaleTimeString()}</h1>
//   }
// }
// setInterval(function()
// {
//   ReactDOM.render(
//       <App />, document.getElementById('root')
//   );
// },1000)


ReactDOM.render(
         <App />, document.getElementById('root')
     );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
