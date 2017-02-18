'use strict';

import React from 'react';
import HeadHom from './HeadHom';

const Head = React.createClass({
    render: function() {
        const node = this.props.node;
        const prevNode = this.props.prevNode;
        const hom = node.querySelector('h hom');
        if (!hom && prevNode && this.keyEqual(node, prevNode)) {
            return null;
        }

        const KeyComponent = this.props.keyComponent;
        return <h2 className="result-head">
             <HeadHom node={hom}/>
             <KeyComponent node={node.querySelector('h key2')}
                      transFrom={this.props.transFrom}
                      transTo={this.props.transTo}
             />
        </h2>
    },

    keyEqual: function(nodeA, nodeB) {
        return nodeA.querySelector('h key2').isEqualNode(
            nodeB.querySelector('h key2')
        );
    }
});
export default Head;
