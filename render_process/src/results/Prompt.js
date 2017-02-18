'use strict';

import React from 'react';

const Prompt = React.createClass({
    render: function() {
        const styles = {
            'text-align': 'center',
            'margin-top': '30px'
        };
        return <p style={styles}>Please enter the word in the field above</p>
    }
});
export default Prompt;

