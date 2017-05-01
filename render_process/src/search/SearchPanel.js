'use strict';

import React from 'react';
import SearchField from './SearchField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Menu from './Menu';

const SearchPanel = React.createClass({
    render: function () {
        const menu = <Menu
            onSettingsChange={this.props.onSettingsChange}
            settings={this.props.settings}
            version={this.props.version}
        />;

        return (
            <AppBar
                zDepth={1}
                title={<SearchField onQuery={this.props.onQuery} onChange={this.searchChange}/>}
                iconElementLeft={<IconButton onTouchTap={this.search}><SearchIcon/></IconButton>}
                iconElementRight={menu}
            >
            </AppBar>
        )
    },

    searchChange: function(query) {
        this.setState({'query': query});
    },

    search: function() {
        this.props.onQuery(this.state.query);
    }
});

export default SearchPanel;
