'use strict';

import React from 'react';
import TextProcessor from './TextProcessor';
import Transcoder from '../../../../common/Transcoder';

const LexicalInfo = React.createClass({
    render: function () {
        const process = (text) => {
            return text.replace(/A1\./, Transcoder.process('A1.', Transcoder.AS, Transcoder.AS_ROMAN));
        };

        if(React.Children.count(this.props.children)) {
            return <TextProcessor textProcessors={[process]}>
                <span className="lex">{this.props.children}</span>
            </TextProcessor>
        }
        return null;
    }
});
export default LexicalInfo;
