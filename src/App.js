import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector ,useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const increment_by = 0;
  const decrement_by = 0;

  onIncrementChange = (e) => {
    var val = e.targetvalue;
    if(!isNaN(val) ){
      increment_by = val;
    }
  }

  onDecrementChange = (e) => {
    var val = e.targetvalue;
    if(!isNaN(val) ){
      decrement_by = val;
    }
  }

  increase = () => {
    if(increment_by > 0){
      dispatch(increment(increment_by));
    }  
  }

  decrease = () => {
    if(increment_by > 0){
      dispatch(decrement(decrement_by));
    }  
  }
  return (
    <div className="App">
      <h1>Counter:{counter} </h1>
      <button onClick={()=>this.increase()}>+</button>
      <input id="increment_by" type="number" value={increment_by} onChange={this.onIncrementChange(e)} title="Increment by"></input>
      <button onClick={()=>this.decrease()}>-</button>
      <input id="decrement_by" type="number" value={increment_by}  onChange={this.onDecrementChange(e)} title="Increment by"></input>
      {isLogged ? <h3>Only be seen by the logged in users</h3> : <h5>Not Logged in</h5>}
        
    </div>
  );
}

export default App;
