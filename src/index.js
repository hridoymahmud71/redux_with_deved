import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
ReactDOM.render(<App />, document.getElementById('root'));

//STORE -> Globalized State
//ACTION -> Increment
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
//REDUCER -> is gonna check what to do
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state -1;
    }
}

let store = createStore(counter);

store.subscribe(()=>console.log(store.getState())); 

//DISPATCIHNG
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
