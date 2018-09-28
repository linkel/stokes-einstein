import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Vertical from './VerticalSlider';
import registerServiceWorker from './registerServiceWorker';
import "typeface-raleway";
require('typeface-raleway');

ReactDOM.render(<Vertical />, document.getElementById('root'));

registerServiceWorker();

