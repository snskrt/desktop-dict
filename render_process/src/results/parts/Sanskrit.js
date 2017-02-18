'use strict';

import React from 'react';
import TextProcessor from './TextProcessor';
import Transcoder from '../../../../common/Transcoder';

const Sanskrit = React.createClass({
    render: function () {
        const _this = this;
        const process = (text) => {
            text = text.replace(/[\/\^\\]/g, ''); // accent characters
            return Transcoder.process(text, _this.props.transFrom, _this.props.transTo)
        };
        return <span className="snskrt">
            <TextProcessor textProcessors={[process]}>{this.props.children}</TextProcessor>
        </span>
    }
});

export default Sanskrit;