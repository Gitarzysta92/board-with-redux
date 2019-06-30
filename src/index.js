import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/'
import App from './containers/appContainer';
import socketClient from './lib/socketClient';

import 'bootstrap/dist/css/bootstrap-reboot.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';

const store = createStore(reducer);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
	<Provider store={store}>
		<App socket={socketClient}/>
	</Provider>,
	rootEl
);

render();

