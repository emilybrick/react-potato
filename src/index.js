// initial file, imports components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //main page
import registerServiceWorker from './registerServiceWorker';

// renders main app
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
