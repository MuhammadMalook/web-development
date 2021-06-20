import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
      marginLeft:theme.spacing(20)
    },
  },
}));

function App() {
  const classes = useStyles();
  const [list,setList] = useState([])
  const [text,setText] = useState('')


  const add = ()=>{
    setList((prev)=>[document.getElementById("outlined-basic").value,...prev])
   
  }
  useEffect(()=>{
    console.log(list)
  },[list])

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Enter Item" variant="outlined" />
    <Button variant="contained" color="primary" onClick={add}>
        ADD
      </Button>
  </form>
  
  );
}

export default App;
