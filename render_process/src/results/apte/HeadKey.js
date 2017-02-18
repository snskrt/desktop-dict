'use strict';

import React from 'react';
import Sanskrit from '../parts/Sanskrit';
import Text from '../parts/Text';
import HeadText from './BodyText';

const HeadKey = React.createClass({
    render: function() {
        return <HeadText><Sanskrit
            transFrom={this.props.transFrom}
            transTo={this.props.transTo}>
            <Text txt={this.props.node.textContent}/>
        </Sanskrit></HeadText>
    }
});
export default HeadKey;