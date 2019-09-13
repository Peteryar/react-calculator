import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './App'
import css from './App.css';


let App = (props)=>{
    return <Calculator />
}

ReactDOM.render(<App />, document.getElementById('root'));