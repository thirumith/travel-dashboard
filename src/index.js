import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import travelDataReducer from './components/common/Reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const travelStore = createStore(travelDataReducer);

ReactDOM.render(<Provider store={travelStore}><App /></Provider>, document.querySelector('#root'));