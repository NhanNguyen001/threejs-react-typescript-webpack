import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const render = (): void => {
    ReactDOM.render(
        <App />,
        document.getElementById('react-root'),
    );
};

render();
