'use strict';

import React from 'react';
import TextProcessor from './TextProcessor';

const Quote = React.createClass({
    render: function() {
        const trim = (text) => { return text.trim(); };
        return <TextProcessor textProcessors={[trim]}>
            <span>&laquo;{this.props.children}&raquo;</span>
        </TextProcessor>
    }
});
export default Quote;
