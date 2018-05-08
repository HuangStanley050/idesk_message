import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/reducer.js";

import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

const Store = createStore(Reducer);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
