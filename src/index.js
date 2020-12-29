import React from 'react';
import './main.css'
import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';



const history = createBrowserHistory()
const middwares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middwares))
)





document.write('Hello React/Redux!')

