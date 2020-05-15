import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//Additional imports needed
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

//Create redux store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// console.log(`OUR REDUX STORE -->`, store);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById("root"));
