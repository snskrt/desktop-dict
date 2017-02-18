'use strict';

import React from 'react';

class Iterator {
    constructor(renderers) {
        this.renderers = renderers;
    }

    render(node, index) {
        if (this.renderers.hasOwnProperty(node.nodeName)) {
            return this.renderers[node.nodeName](node, this.renderChildren.bind(this, node), index || 0);
        }
        if (this.renderers.hasOwnProperty('#default')) {
            return this.renderers['#default'](node, this.renderChildren.bind(this, node), index || 0);
        }
        return <span key={'skip_' + index}/>;
    }

    renderChildren(node) {
        let result = [];
        const childNodes = node.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            result.push(this.render(childNodes[i], i));
        }

        return result;
    }
}
export default Iterator;