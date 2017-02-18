'use strict';

import React from 'react';
import Text from './Text';

const TextSplitter = React.createClass({
    render: function() {
        const splitters = this.props.splitters;

        let parts = [ this.props.txt ];
        splitters.forEach((splitter) => {
            parts = this.split(parts, splitter.expr, splitter.elm);
        });

        const _this = this;
        const result = parts.map((part, index) => {
            return (typeof part === 'string') ?
                <Text
                    key={'txt_' + index}
                    txt={part}
                    textProcessors={_this.props.textProcessors}
                />
                : part;
        });

        return <span>{result}</span>;
    },

    split: function(parts, expr, element) {
        const result = [];
        parts.forEach((part) => {
            if (typeof part != 'string') {
                result.push(part);
                return;
            }

            const split = part.split(expr);
            split.forEach(function(str, index) {
                if (index != 0) {
                    result.push(element);
                }
                if (str) {
                    result.push(str);
                }
            });
        });

        return result;
    }
});

export default TextSplitter;
