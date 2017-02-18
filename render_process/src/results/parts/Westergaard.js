'use strict';

import React from 'react';

const Westergaard = React.createClass({
    render: function() {
        const links = this.props.links.map(this.buildLink);
        return <div>Westergaard Dhatupatha: {this.joinLinks(links)}</div>
    },

    joinLinks: function(links) {
        return links.reduce((acc, link) => {
            return acc === null ? [link] : [...acc, ', ', link];
        }, null)
    },

    buildLink: function (link, index) {
        const matches = link.data.match(/(\d+)\.\d+/); // Strings like "20.25" mean section "20" and root "25"
        if (!matches) {
            return null;
        }

        const section = matches[1];
        const label = matches[0];
        const baseUrl = 'http://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/Westergaard/disp/index.php';
        const href = `${baseUrl}?section=${section}`;
        return <a key={'a_' + index} href={href} target="_blank">{label}</a>
    }
});

export default Westergaard;
