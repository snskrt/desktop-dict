'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
import {cyan100} from 'material-ui/styles/colors';

const SearchField = React.createClass({
    getInitialState: function() {
        return { query: ''}
    },

    handleChange: function(e) {
        const queryText = e.target.value;

        this.setState({ query: queryText });
        this.props.onChange(queryText);
    },

    handleKeyDown: function (e) {
        if (e.keyCode == 13) { // Enter key
            this.props.onQuery(this.state.query);
        }
    },

    render: function() {
        const styles = {
            input: { color: white },
            hintStyle: { color: cyan100 },
            underlineStyle: { borderColor: cyan100 },
        };

        return <TextField
            value={this.state.query}
            fullWidth={true}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            inputStyle={styles.input}
            hintStyle={styles.hintStyle}
            id="search"
            underlineShow={this.state.query == ''}
            underlineStyle={styles.underlineStyle}
        />
    }
});

export default SearchField;
