'use strict';

import React from 'react';

const See = React.createClass({
    render: function() {
        return <span>see&nbsp;{this.props.children}</span>
    }
});
export default See;
