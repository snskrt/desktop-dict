'use strict';

import React from 'react';
import Iterator from '../parts/Iterator';
import Alternate from './Alternate';
import Text from '../parts/Text';
import BodyText from './BodyText';
import Sanskrit from '../parts/Sanskrit';

const RowBody = React.createClass({
    render: function() {
        const _this = this;
        const iterator = new Iterator({
            'body': function (node, children) {
                return <BodyText>
                    <Alternate
                        origProps={_this.props}
                        api={_this.props.api}
                        node={node}
                    />
                    {children()}
                </BodyText>;
            },
            's': function(node, children, index) {
                return <Sanskrit
                    key={'snskrt_' + index}
                    transFrom={_this.props.transFrom}
                    transTo={_this.props.transTo}>
                    {children()}
                </Sanskrit>;
            },
            'b': function(node, children, index) {
                return <strong key={'b_' + index}>{children()}</strong>;
            },
            'i': function(node, children, index) {
                return <i key={'i_' + index}>{children()}</i>;
            },
            '#text': function (node, children, index) {
                return <Text txt={node.textContent} key={'txt_' + index}/>
            }
        });
        return <span>{iterator.render(this.props.node)}</span>;
    }
});

export default RowBody;
