'use strict';

import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import Output from './menu/Output';
import Input from './menu/Input';
import About from './menu/About';

const Menu = React.createClass({
    getInitialState: function() {
        return { open: false };
    },

    render: function () {
        return <span>
            <IconButton onTouchTap={this.open}><MenuIcon color={white}/></IconButton>
            <Drawer
                open={this.state.open}
                docked={false}
                width={300}
                onRequestChange={(open) => this.setState({open})}
                openSecondary={true}
            >
                <div className="menu">
                    <Input settings={this.props.settings} onChange={this.props.onSettingsChange}/>
                    <Output settings={this.props.settings} onChange={this.props.onSettingsChange}/>
                    <About/>
                </div>
            </Drawer>
        </span>
    },

    open: function() {
        this.setState({ open: true })
    }
});

export default Menu;
