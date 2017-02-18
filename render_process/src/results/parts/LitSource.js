'use strict';

import React from 'react';
import Transcoder from '../../../../common/Transcoder';
import Abbreviation from './abbreviation/Container';
import TextProcessor from './TextProcessor';
import Api from '../../../../main_process/dicts/mw/Api';
import Iterator from './Iterator';

const LitSource = React.createClass({
    render: function () {
        const abbr = Transcoder.process(this.getAbbrKey(), Transcoder.AS, Transcoder.AS_ROMAN);
        return <span className="lit-source"><Abbreviation
            abbr={abbr}
            definitionCallback={this.getDefinition}
            title="Source Authority">
            <TextProcessor textProcessors={[this.transcodeAbbreviation]}>
                {this.props.children}
            </TextProcessor>
        </Abbreviation></span>
    },

    getAbbrKey: function() {
        const match = this.props.abbr.trim().match(/^[A-Za-z0-9]*\./);
        if (!match) {
            return '';
        }

        return match[0];
    },

    transcodeAbbreviation: function(text) {
        return text
            .trim()
            // Only part before the dot is transcoded, ex. "Mn.", "L.", "MBh."
            // The remaining part might mean page numbers, ex. "Pāṇ.  4-2, 1"
            .replace(/^[A-Za-z0-9]*\./, function(match) {
                return Transcoder.process(match, Transcoder.AS, Transcoder.AS_ROMAN);
            });
    },

    getDefinition: function() {
        let xml = this.props.api.call(Api.FIND_AUTHORITY, this.getAbbrKey());
        if (!xml) {
            return null;
        }

        const domParser = new DOMParser();
        const definition = domParser.parseFromString(`<body>${xml}</body>`, 'text/xml')
            .documentElement
            .querySelector('expandMW');

        const iterator = new Iterator({
            'slp': function (node) {
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

export default LitSource;
