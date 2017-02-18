'use strict';

import React from 'react';

const TextProcessor = React.createClass({
    render: function() {
        return <span>{this.renderChildren(this, this.props.textProcessors)}</span>;
    },

    renderChildren: function(element, processors) {
        const _this = this;
        return React.Children.map(element.props.children, function(child) {
            return _this.renderElement(child, processors);
        });
    },

    renderElement: function(element, processors) {
        if (!element.props) {
            return element;
        }

        let elmProcessors = element.props.textProcessors || [];
        elmProcessors = elmProcessors.concat(processors);

        const cloneChildren = this.renderChildren(element, processors);
        return React.cloneElement(element, {textProcessors: elmProcessors}, cloneChildren);
    },
});

export default TextProcessor;