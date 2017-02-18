'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from './MainLayout';
import Api from './Api';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <MainLayout api={Api}/>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
