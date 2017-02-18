'use strict';

import React from 'react';

const Bracket = React.createClass({
    render: function () {
        return <span>[{this.props.children}]</span>
    }
});

export default Bracket;
