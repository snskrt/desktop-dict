'use strict';

import React from 'react';
import TextProcessor from '../parts/TextProcessor';

const BodyText = React.createClass({
    render: function() {
        const processor = function (text) {
            return text
                .replace(/--/g, ' – ')
                .replace(/-\s?$/, '')
                .replace(/\[Page\d{4}-\w+\+\s\d+]/g, '') // Replace page references: [Page0001-b+ 45]
                ;
        };
        return <TextProcessor textProcessors={[processor]}>{this.props.children}</TextProcessor>;
    }
});

export default BodyText;
