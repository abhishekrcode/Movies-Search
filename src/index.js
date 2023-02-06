import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {createStore} from "redux";

import movies from "./reducer"


const store = createStore(movies);
console.log(store);
// console.log("Before dispatch",store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'Super Man'}]
//   });

//   console.log("Ater dispatch",store.getState());

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      store = {store}
     />
  </React.StrictMode>
);




