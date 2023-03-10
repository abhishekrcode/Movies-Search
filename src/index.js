import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware} from "redux";

// import {movies} from "./reducer"
import rootReducer from './reducer';


// const logger = function ({dispatch,getState}){
//   return function(next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_tYPE',action.type);
//       next(action);
//     }
//   }
// }


const logger = ({dispatch,getState}) => (next) => (action) => {
  //logger code
  // if(typeof action !== 'function')
  // {console.log('ACTION_tYPE',action.type);}
  next(action);
}

const thunk = ({dispatch,getState}) => (next) => (action) => {
  if(typeof action === 'function'){
    action(dispatch);
    return;
  }
  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log(store);

export const ContextStore = createContext();
console.log('ContextStore',ContextStore);

class Provider extends React.Component {
  render(){
    const {store} = this.props;
    return (
      <ContextStore.Provider value ={store}>
        {this.props.children}
      </ContextStore.Provider>
    )
  }
}
// console.log("Before dispatch",store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'Super Man'}]
//   });

//   console.log("Ater dispatch",store.getState());

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
  </Provider>
  </React.StrictMode>
);




