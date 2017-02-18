'use strict';

import React from 'react';
import Api from '../../../../main_process/dicts/apte/Api';
import RowBody from './RowBody';

const Alternate = React.createClass({
    render: function () {
        const node = this.props.node;
        if (!node.hasAttribute('ref')) {
            return null;
        }

        const altNode = this.getAlternateNode(node);
        if (!altNode) {
            return null;
        }

        const origBody = React.createElement(RowBody, this.props.origProps);
        return React.cloneElement(origBody, {node: altNode});
    },

    getAlternateNode: function(node) {
        const row = this.props.api.call(Api.FIND_BY_LNUM, node.getAttribute('ref'));
        if (!row) {
            return null;
        }

        const xml = (new DOMParser()).parseFromString(row.data, 'text/xml');
        return xml.querySelector('body');
    }
});

export default Alternate;
