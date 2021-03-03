import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const POKEMON = [
  { id: 58, name: 'Growlithe', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png' },
  { id: 59, name: 'Arcanine', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png' }
];

ReactDOM.render(
  <React.StrictMode>
    <App pokemon={POKEMON}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
