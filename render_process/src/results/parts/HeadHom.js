'use strict';

import React from 'react';

const HeadHom = React.createClass({
    render: function() {
        const node = this.props.node;
        if (node) {
            return <span className="hom">{node.textContent}.&nbsp;</span>
        }
        return null;
    }
});
export default HeadHom;
