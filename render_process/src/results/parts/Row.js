'use strict';

import React from 'react';

const Row = React.createClass({
    render: function() {
        const node = this.props.node;
        const BodyComponent = this.props.bodyComponent;
        return <div className="result-line">
            <BodyComponent
                node={node.querySelector('body')}
                row={this.props.row}
                transFrom={this.props.transFrom}
                transTo={this.props.transTo}
                api={this.props.api}
            />
        </div>
    }
});
export default Row;
