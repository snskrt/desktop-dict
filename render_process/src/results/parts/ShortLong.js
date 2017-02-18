'use strict';

import React from 'react';

const ShortLong = React.createClass({
    render: function () {
        // Half-circle above the vowel meaning
        // it could be short or long
        return <span className="superscript-container">
            <span className="superscript">&#x25E1;</span>
        </span>
    }
});

export default ShortLong;
