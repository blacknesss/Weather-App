import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));


const initialState = [
    {
        data: [],
    },
    {
        city: '',
    }
]

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'data/item':
            return {
                data: action.payload
            }
        case 'city':
            return {
                city: action.payload
            }
        case 'city/obj':
            return {
                city: action.payload
            }
        case 'null':
            return {
                city: action.payload
            }

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))



root.render(
    <Provider store={store}>
        <App />
    </Provider>
);