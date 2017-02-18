'use strict';

import React from 'react';
import Container from './abbreviation/Container';
import Api from '../../../../main_process/dicts/mw/Api';
import Transcoder from '../../../../common/Transcoder';
import Iterator from './Iterator';

const Abbreviation = React.createClass({
    render: function () {
        return <Container
            abbr={this.props.abbr} definitionCallback={this.getDefinition}
            title="Abbreviation"
        >
            {this.props.children}
        </Container>
    },

    getDefinition: function() {
        let xml = this.props.api.call(Api.FIND_ABBREVIATION, this.props.abbr);
        if (!xml) {
            return null;
        }

        const domParser = new DOMParser();
        const definition = domParser.parseFromString(`<body>${xml}</body>`, 'text/xml')
            .documentElement
            .querySelector('disp');

        const iterator = new Iterator({
            's': function (node) {
                return Transcoder.process(node.textContent, Transcoder.SLP1, Transcoder.IAST)
            },
            '#text': function(node) {
                return node.textContent;
            },
            '#default': function(node, children) {
                return children();
            }
        });
        return iterator.render(definition);
    },
});

export default Abbreviation;
