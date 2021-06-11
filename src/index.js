import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Takes the App componet and uses ReactDOM to render it into the div from the HTML file (index.html) located in the public folder
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
