'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from './MainLayout';
import Api from './Api';
import Analytics from './Analytics';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const analytics = new Analytics(Api.call('version'));
const App = () => (
    <MuiThemeProvider>
        <MainLayout api={Api} analytics={analytics}/>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
