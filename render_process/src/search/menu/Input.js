'use strict';

import React from 'react';
import SelectField from  'material-ui/SelectField'
import MenuItem from  'material-ui/MenuItem'
import Transcoder from  '../../../../common/Transcoder'

const Input = React.createClass({
    getInitialState: function() {
        return { value: this.props.settings.inputEncoding }
    },

    render: function() {
        return <SelectField
            floatingLabelText="Input"
            value={ this.state.value }
            onChange={this.handleChange}
        >
            <MenuItem value={Transcoder.HK} primaryText="Harvard-Kyoto"/>
            <MenuItem value={Transcoder.SLP1} primaryText="SLP1"/>
            <MenuItem value={Transcoder.ITRANS} primaryText="ITRANS"/>
        </SelectField>
    },

    handleChange: function(event, index, value) {
        this.setState({value});

        const settings = this.props.settings;
        settings.inputEncoding = value;
        this.props.onChange(settings);
    }
});

export default Input;
