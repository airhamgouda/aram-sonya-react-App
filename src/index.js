import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import parks from './parks.json'

// console.log("This file is " + __filename);
// console.log("It's located in " + __dirname);

ReactDOM.render(<App parks={parks} />, document.getElementById('root'));
registerServiceWorker();


