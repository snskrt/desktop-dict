'use strict';

import React from 'react';
import Transcoder from '../../../../common/Transcoder';

const WhitneyRoots = React.createClass({
    render: function() {
        const links = this.props.links.map(this.buildLink);
        return <div>Whitney Roots: {this.joinLinks(links)}</div>
    },

    joinLinks: function(links) {
        return links.reduce((acc, link) => {
            return acc === null ? [link] : [...acc, ', ', link];
        }, null)
    },

    buildLink: function (link, index) {
        const matches = link.data.match(/(\S+)\s+(\d+)/); // Strings like "as1 5" mean key "as1" and page "5"
        if (!matches) {
            return null;
        }

        const page = matches[2];
        const href = `http://www.sanskrit-lexicon.uni-koeln.de/scans/KALEScan/WRScan/disp2/index.php?page=${page}`;
        const label = Transcoder.process(matches[1], this.props.transFrom, this.props.transTo);

        return <a key={'a_' + index} href={href} target="_blank">{label}</a>
    }
});

export default WhitneyRoots;
