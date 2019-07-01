import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import peopleReducer from './store/reducers/people';

import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;
const rootReducers = combineReducers({
    people: peopleReducer
});

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
