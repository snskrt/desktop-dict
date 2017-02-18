'use strict';

import React from 'react';

const Root = React.createClass({
    render: function() {
        return <span className="root">&#x221a;{this.props.children}</span>
    }
});
export default Root;