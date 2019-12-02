import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import { longStackSupport } from 'q';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  var increment_by = 0;
  var decrement_by = 0;

  var increment_by_input = React.createRef();
  var decrement_by_input = React.createRef();

  function showLog() {
    console.log(`increment by: ${increment_by}, decrement by: ${decrement_by}`);
  }


  function getIncrementBy() {
    return increment_by;
  }

  function getDecrementBy() {
    return decrement_by;
  }

  function onIncrementChange() {
  
    var val = increment_by_input.current.value;
    increment_by = val;
    increment_by_input.current.value.value = val;
    showLog();
  }

  function onDecrementChange() {
    var val = decrement_by_input.current.value;
    decrement_by = val;
    decrement_by_input.current.value.value = val;
    showLog();
  }

  function increase() {
    if (!isNaN(increment_by) && increment_by > 0) {
      dispatch(increment(increment_by));
    }
  }

  function decrease() {
    if (!isNaN(decrement_by) && decrement_by > 0) {
      dispatch(decrement(decrement_by));
    }
  }
  return (
    <div className="App">
      <h1>Counter:{counter} </h1>
      <button onClick={increase}>+</button>
      <input id="increment_by" type="number" ref={increment_by_input}  onChange={onIncrementChange} title="Increment by"></input>
      <button onClick={decrease}>-</button>
      <input id="decrement_by" type="number" ref={decrement_by_input}  onChange={onDecrementChange} title="Increment by"></input>
      {isLogged ? <h3>Only be seen by the logged in users</h3> : <h5>Not Logged in</h5>}

    </div>
  );
}

export default App;
