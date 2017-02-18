'use strict';

import React from 'react';

const Text = React.createClass({
    render: function() {
        const processors = this.props.textProcessors || [];
        let result = this.props.txt || '';

        processors.forEach((processor) => {
            result = processor(result);
        });

        return <span>{result}</span>;
    }
});

export default Text;