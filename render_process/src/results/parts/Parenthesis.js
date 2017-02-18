'use strict';

import React from 'react';

const Parenthesis = React.createClass({
    render: function () {
        return <span>({this.props.children})</span>
    }
});

export default Parenthesis;
