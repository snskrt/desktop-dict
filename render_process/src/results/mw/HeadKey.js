'use strict';

import React from 'react';
import Iterator from '../parts/Iterator';
import Sanskrit from '../parts/Sanskrit';
import Root from '../parts/Root';
import HeadText from './HeadText';
import SingleReplacementSandhi from '../parts/SingleReplacementSandhi';
import PartialWord from '../parts/PartialWord';
import TextSplitter from '../parts/TextSplitter';
import ChandraBindu from '../parts/ChandraBindu';

const HeadKey = React.createClass({
    render: function() {
        const _this = this;
        const iterator = new Iterator({
            'key2': function(node, children) {
                return <HeadText><Sanskrit
                    transFrom={_this.props.transFrom}
                    transTo={_this.props.transTo}>
                    {children()}
                </Sanskrit></HeadText>;
            },
            'root': function(node, children, index) {
                return <Root key={'root_' + index}>{children()}</Root>;
            },
            'srs': function(node, children, index) {
                return <SingleReplacementSandhi key={'srs_' + index}>{children()}</SingleReplacementSandhi>;
            },
            'srs1': function(node, children, index) {
                return this['srs'](node, children, index);
            },
            'sr': function(node, children, index) {
                return <PartialWord key={'sr_' + index}>{children()}</PartialWord>;
            },
            'sr1': function(node, children, index) {
                return this['sr'](node, children, index);
            },
            '#text': function(node, children, index) {
                const splitters = [{
                    expr: '~', elm: <ChandraBindu key={'bnd_' + index} />
                }];
                return <TextSplitter
                    key={'ts_' + index}
                    reactKey={'ts_' + index}
                    txt={node.textContent}
                    splitters={splitters}
                />
            }
        });
        return <span>{iterator.render(this.props.node)}</span>;
    }
});
export default HeadKey;