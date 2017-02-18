'use strict';

import React from 'react';
import TextProcessor from '../parts/TextProcessor';

const HeadText = React.createClass({
    render: function() {
        const processor = function (text) {
            return text
                .replace(/_/g, ' ')
                .replace(/---/g, ' – ')
                .replace(/--/g, ' – ')
                .replace(/-/g, ' – ')
            ;
        };
        return <TextProcessor textProcessors={[processor]}>{this.props.children}</TextProcessor>;
    }
});

export default HeadText;
