'use strict';

import React from 'react';
import TextProcessor from '../parts/TextProcessor';

const BodyText = React.createClass({
    render: function() {
        const processor = function (text) {
            return text
                .replace(/[_~]/g, ' ') // space characters
                .replace(/\s+,\s+/g, ', ') // spaces around the comma
                ;
        };
        return <TextProcessor textProcessors={[processor]}>{this.props.children}</TextProcessor>;
    }
});

export default BodyText;
